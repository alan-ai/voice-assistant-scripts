// {Name: Food_Ordering}
// {Description: Food Ordering demo app for delivering food}

/*
This is a script for Food Ordering demo app for delivering food
Now there are four categories for food: drinks, pizza, street food, desserts.
*/

//////////////////////
// +add items to order
//////////////////////
const ADD_ITEMS_SENTENCE_START_ARRAY = [
    "Add",
    "I want",
    "I want to have",
    "Get me",
    "Order",
    "I'll take",
    "I will take",
    "I'd like",
    "I would like",
    "I'll get",
    "I will get",
    "I'll have",
    "I will have",
    "Let me have",
    "Let me get",
];

const ADD_ITEMS_SENTENCE_START_INTENT = ADD_ITEMS_SENTENCE_START_ARRAY.join('|') + '|' + 'and|';

intent(
    "Do you have (a|the|) $(DISH p:UNAVAILABLE_DISHES_INTENT)",
    `(${ADD_ITEMS_SENTENCE_START_INTENT}) (a|the|) $(DISH p:UNAVAILABLE_DISHES_INTENT)`,
    p => {

        p.play(
            `Sorry, ${p.DISH} is not on the menu.`,
            `Sorry, we don't have it`,
            `Sorry, we don't have ${p.DISH}`
        );
    }
);

intent(
    `(${ADD_ITEMS_SENTENCE_START_INTENT}) (a|the|) $(NUMBER) $(ITEM p:ITEMS_INTENT)`,
    `(${ADD_ITEMS_SENTENCE_START_INTENT}) (a|the|) $(NUMBER) $(ITEM p:ITEMS_INTENT) (and|) (a|the|) $(NUMBER) $(ITEM p:ITEMS_INTENT)`,
    `(${ADD_ITEMS_SENTENCE_START_INTENT}) (a|the|) $(NUMBER) $(ITEM p:ITEMS_INTENT) (and|) (a|the|) $(ITEM p:ITEMS_INTENT)`,
    `(${ADD_ITEMS_SENTENCE_START_INTENT}) (a|the|) $(ITEM p:ITEMS_INTENT) (and|) (a|the|) $(ITEM p:ITEMS_INTENT|)`,
    p => {
        addItems(p, p.ITEM_, 0);
    }
);

intent(
    `(${ADD_ITEMS_SENTENCE_START_INTENT}) (a|the|) $(ITEM p:ITEMS_INTENT) (and|) (a|the|) $(NUMBER) $(ITEM p:ITEMS_INTENT)`,
    p => addItems(p, p.ITEM_, 1)
);

intent(
    `(${ADD_ITEMS_SENTENCE_START_INTENT}) (another|) $(NUMBER) more`,
    `(${ADD_ITEMS_SENTENCE_START_INTENT}) another (one|)`,
    p => {
        if (p.state.lastId && p.state.lastName) {
            let number = p.NUMBER && p.NUMBER.number > 0 ? Math.ceil(p.NUMBER.number) : 1;
            if (number > 99) {
                number = 1;
                p.play({command: 'addToCart', item: p.state.lastId, quantity: number});
                p.play(`(Sorry,|) we don't have that many ${p.state.lastName}. (So I've added|Will add) ${number} more.`);
            } else {
                p.play({command: 'addToCart', item: p.state.lastId, quantity: number});
                p.play(
                    `Added another ${number} ${p.state.lastName}`,
                    `Added ${number} more ${p.state.lastName}`
                );
            }
        } else {
            p.play("(Sorry,|) You should order something first.");
        }
    }
);

function addItems(p, items, shift) {
    let answer = "";
    let lastId, lastName;
    for (let i = 0; i < items.length; i++) {
        let id, name;
        if (items[i].value) {
            id = project.ITEM_ALIASES[items[i].value.toLowerCase()].id;
            name = items[i].value.toLowerCase();
            if (!id) {
                if (!_.isEmpty(answer)) {
                    p.play(answer);
                }
                p.play(`(Sorry,|) (I can't find|we don't have) ${items[i].value} in the menu.`);
                return;
            } else {
                let number = p.NUMBER_ && p.NUMBER_[i - shift] ? Math.ceil(p.NUMBER_[i - shift].number) : 1;
                if (number > 99) {
                    number = 1;
                    p.play(`(Sorry,|) we don't have that many ${items[i].value}. (So I've added|Will add) ${number} instead.`);
                }
                p.play({command: 'addToCart', item: id, quantity: number});
                answer += i > 0 ? " and " : "Added ";
                answer += `${number} ${items[i].value} `;
                if (project.ID_TO_TYPES[id] === "pizza" && !name.includes("pizza")) {
                    answer += number > 1 ? "pizzas " : "pizza ";
                }
                lastId = id;
                lastName = name;
            }
        }
    }
    answer += "to your order.";
    p.state.lastId = lastId;
    p.state.lastName = lastName;
    p.play({command: 'navigation', route: '/cart'});
    p.play(answer);
}
//////////////////////
// -add items to order
//////////////////////

////////////////
// +add category
////////////////
let getProduct = context(() => {
    intent("(Add|I want|order|get me|and|) $(ITEM p:ITEMS_INTENT)", p => {
        return p.resolve(p.ITEM.value);
    });
});

intent(
    "What (kind of|) $(CAT p:CATEGORY_LIST) do you have",
    "What (kind|kinds) of $(CAT p:CATEGORY_LIST)",
    "(Order|get me|add|) $(NUMBER) $(CAT p:CATEGORY_LIST)",
    async p => {
        let key = project.CATEGORY_ALIASES[p.CAT.value.toLowerCase()];
        let value = p.CAT.endsWith('s') ? p.CAT.value : p.CAT.value + "s";
        p.play({command: 'navigation', route: `/menu/${key}`});
        p.play(
            `We have (a few|several) ${value} available:`,
            `You can choose from a few different ${value}:`,
            `(There are|We have) a few types of ${value} (on the menu|available):`
        );
        for (let i = 0; i < project.menu[key].length; i++) {
            p.play({command: 'highlight', id: project.menu[key][i].id});
            p.play((i === project.menu[key].length - 1 ? "and " : "") + project.menu[key][i].title);
        }
        p.play(`Which ${value} would you like?`);
        p.play({command: 'highlight', id: ''});
        if (p.NUMBER) {
            let product = await p.then(getProduct);
            let items = [{value: product}];
            addItems(p, items, 0);
        }
    }
);
////////////////
// -add category
////////////////

/////////////////
// +replace items
/////////////////
intent("(Change|Replace) (one of|) (the|) $(ITEM p:ITEMS_INTENT) (to|by|with) (a|) $(ITEM p:ITEMS_INTENT)", p => {
    if (p.ITEM_ && p.ITEM_.length !== 2) {
        p.play("(Sorry,|) you should provide two exact item names in your request");
        return;
    }
    let delId = project.ITEM_ALIASES[p.ITEM_[0].value.toLowerCase()].id;
    if (!delId) {
        p.play(`(Sorry,|) (I can't find|we don't have) ${p.ITEM_[0]} in the menu.`);
    } else {
        let addId = project.ITEM_ALIASES[p.ITEM_[1].value.toLowerCase()].id;
        let delName = p.ITEM_[0].value.toLowerCase();
        let addName = p.ITEM_[1].value.toLowerCase();
        if (!addId) {
            p.play(`(Sorry,|) (I can't find|we don't have) ${p.ITEM_[1]} in the menu.`);
        } else {
            p.state.lastId = addId;
            p.state.lastName = addName;
            let delNumber = p.NUMBER_ && p.NUMBER_[0] ? p.NUMBER_[0].number : 1;
            let number_add = p.NUMBER_ && p.NUMBER_[1] ? p.NUMBER_[1].number : 1;
            let postfix_add = "";
            let postfix_del = "";
            if (project.ID_TO_TYPES[addId] === "pizza" && !addName.includes("pizza")) {
                postfix_add = number_add > 1 ? "pizzas" : "pizza";
            }
            if (project.ID_TO_TYPES[delId] === "pizza" && !delName.includes("pizza")) {
                postfix_del = delNumber > 1 ? "pizzas" : "pizza";
            }
            let ans = '';
            let order = p.visual.order || {};
            if (!order[delId]) {
                ans = `${p.ITEM_[0]} has not been ordered yet, `;
            } else {
                p.play({command: 'removeFromCart', item: delId, quantity: delNumber});
                ans = `Removed ${delNumber} ${p.ITEM_[0]} ${postfix_del} and `;
            }
            p.play({command: 'addToCart', item: addId, quantity: number_add});
            p.play(ans + ` added ${number_add} ${p.ITEM_[1]} ${postfix_add}.`);
        }
    }
    p.play({command: 'navigation', route: '/cart'});
});
/////////////////
// -replace items
/////////////////

/////////////////
// +remove items
/////////////////
intent(
    "(Remove|delete|exclude) $(ITEM p:ITEMS_INTENT) (from my order|from the order|from the list|)",
    "(Remove|delete|exclude) $(NUMBER) $(ITEM p:ITEMS_INTENT) (from my order|from the order|from the list|)",
    p => {
        let order = p.visual.order || {};
        let id = project.ITEM_ALIASES[p.ITEM.value.toLowerCase()].id;
        if (!order[id]) {
            p.play(`${p.ITEM} has not been ordered yet`);
        } else {
            let quantity = order[id] ? order[id].quantity : 0;
            let deteleQnty = p.NUMBER ? p.NUMBER.number : quantity;
            if (quantity - deteleQnty <= 0) {
                p.play('Removed all ' + p.ITEM.value);
            } else {
                p.play(`Updated ${p.ITEM} quantity to ${quantity - deteleQnty}`);
            }
            p.play({command: 'removeFromCart', item: id, quantity: deteleQnty});
            p.play({command: 'navigation', route: '/cart'});
        }
    }
);

intent(
    "(clear|remove|empty|cancel) (everything|all items|) (from|) (the|my|) (order|cart)",
    "(remove|delete|undo) (everything|all items|my order)",
    p => {
        p.play({command: 'clearOrder', route: 'cleared-order'});
        p.play("Your order has been canceled");
    }
);
/////////////////
// -remove items
/////////////////

/////////////////
// +order details
/////////////////
intent(
    "What (is|are|do I have) (in|) (the cart|my order|order details|details)",
    "What (have|did) I (order|add|ordered|added|put) (to the cart|)?",
    p => {
        let order = p.visual.order;
        if (_.isEmpty(order)) {
            p.play(
                "You have not ordered anything yet.",
                "Your cart is empty."
            );
            return;
        }
        p.play("You have ordered:");
        for (let product in order) {
            if (order.hasOwnProperty(product)) {
                p.play(" " + order[product].quantity + " " + order[product].title);
            }
        }
    });

intent(
    "What is the total (price|amount|) (of the order|for my order|)",
    "How much (is my order|do I owe|should I pay)",
    p => {
        if (p.visual.total && p.visual.total > 0) {
            p.play("The total amount for your order is:");
            if (p.visual.route === '/cart') {
                p.play({command: 'highlight', id: 'total'});
            }
            p.play(`${p.visual.total} dollars`);
        } else {
            p.play("Your cart is empty, please make an order first.")
        }
    }
);

intent(
    "(How much|What) does (the|) $(ITEM p:ITEMS_INTENT) cost",
    "(How much is|What is the price of) $(ITEM p:ITEMS_INTENT)",
    p => {
        let order = p.visual.order || {};
        let price = project.ITEM_ALIASES[p.ITEM.value.toLowerCase()].price;
        let s = price !== 1 ? "s" : "";
        p.play(`${p.ITEM} (costs|is) ${price} dollar${s}`);
    }
);
/////////////////
// -order details
/////////////////