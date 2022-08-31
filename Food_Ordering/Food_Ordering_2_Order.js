// {Name: Food_Ordering}
// {Description: Food Ordering demo app for delivering food}

/*
This is a script for Food Ordering demo app for delivering food
Now there are four categories for food: drinks, pizza, street food, desserts.
*/

//////////////////////
// +add items to order
//////////////////////
intent("(Add|I want|do you have|order) $(F p:DISHES_INTENT)", p => {
    p.play(`Unfortunately you can't add ${p.F} to your order. But we can offer it in our restaurant.`);
});

intent(
    `(Add|I want|order|get|and|) $(NUMBER) $(ITEM p:ITEMS_INTENT)`,
    `(Add|I want|order|get me|) $(NUMBER) $(ITEM p:ITEMS_INTENT) (and|) $(NUMBER) $(ITEM p:ITEMS_INTENT) (and|) $(ITEM p:ITEMS_INTENT)`,
    `(Add|I want|order|get me|) $(NUMBER) $(ITEM p:ITEMS_INTENT) (and|) $(ITEM p:ITEMS_INTENT) (and|) $(ITEM p:ITEMS_INTENT)`,
    `(Add|I want|order|get me|) $(ITEM p:ITEMS_INTENT) (and|)  $(ITEM p:ITEMS_INTENT) (and|) $(ITEM p:ITEMS_INTENT)`,
    `(Add|I want|order|get me|) $(NUMBER) $(ITEM p:ITEMS_INTENT) (and|)  $(NUMBER) $(ITEM p:ITEMS_INTENT) (and|) $(ITEM p:ITEMS_INTENT)`,
    `(Add|I want|order|get me|) $(NUMBER) $(ITEM p:ITEMS_INTENT) (and|) $(NUMBER) $(ITEM p:ITEMS_INTENT)`,
    `(Add|I want|order|get me|) $(NUMBER) $(ITEM p:ITEMS_INTENT) (and|) $(ITEM p:ITEMS_INTENT)`,
    `(Add|I want|order|get me|) $(ITEM p:ITEMS_INTENT) (and|)  $(ITEM p:ITEMS_INTENT)`,
    `(Add|I want|order|get me|and|) $(ITEM p:ITEMS_INTENT)`,
    p => addItems(p, p.ITEM_, 0)
);

intent(
    `(Add|I want|order|get me|) $(ITEM p:ITEMS_INTENT) (and|) $(NUMBER) $(ITEM p:ITEMS_INTENT)`,
    `(Add|I want|order|get me|) $(ITEM p:ITEMS_INTENT) (and|) $(NUMBER) $(ITEM p:ITEMS_INTENT) (and|) $(NUMBER) $(ITEM p:ITEMS_INTENT)`,
    p => addItems(p, p.ITEM_, 1)
);

intent(
    `(Add|I want|order|get me|) $(ITEM p:ITEMS_INTENT) (and|) $(ITEM p:ITEMS_INTENT) (and|) $(NUMBER) $(ITEM p:ITEMS_INTENT)`,
    p => addItems(p, p.ITEM_, 2)
);

intent(
    `(Add|I want|order|get me|) $(NUMBER) $(ITEM p:ITEMS_INTENT) (and|) $(ITEM p:ITEMS_INTENT) (and|) $(NUMBER) $(ITEM p:ITEMS_INTENT)`,
    p => addItems(p, p.ITEM_, 0, [0, -1, 1])
);

intent(
    "Add (another|) $(NUMBER) more",
    "Add another (one|)",
    p => {
        if (p.state.lastId) {
            let number = p.NUMBER && p.NUMBER.number > 0 ? p.NUMBER.number : 1;
            if (number > 99) {
                p.play("(Sorry,|) the number is too high.");
                return;
            }
            p.play({command: 'addToCart', item: p.state.lastId, quantity: number});
            p.play(`Added another ${number} ${p.state.lastName}`);
        } else {
            p.play("Sorry, You should order something first.");
        }
    }
);

function addItems(p, items, shift, pos = []) {
    let answer = "";
    let id, name;
    for (let i = 0; i < items.length; i++) {
        id = project.ITEM_ALIASES[items[i].value.toLowerCase()].id;
        name = items[i].value.toLowerCase();
        if (!id) {
            if (!_.isEmpty(answer)) {
                p.play(answer);
            }
            p.play(`(Sorry,|) I can't find ${items[i].value} in the menu.`);
            return;
        } else {
            let number = p.NUMBERs && p.NUMBERs[i - shift] ? p.NUMBERs[i - shift].number : 1;
            if (!_.isEmpty(pos)) {
                number = i < pos.length && pos[i] > -1 ? p.NUMBERs[pos[i]] : 1;
            }
            if (number > 99) {
                p.play(`(Sorry,|) the quantity of ${items[i].value} is too high.`);
                return;
            }
            p.play({command: 'addToCart', item: id, quantity: number});
            answer += i > 0 ? " and " : "Added ";
            answer += `${number} ${items[i].value} `;
            if (project.ID_TO_TYPES[id] === "pizza" && !name.includes("pizza")) {
                answer += number > 1 ? "pizzas " : "pizza ";
            }
        }
    }
    answer += "to your order.";
    p.state.lastId = id;
    p.state.lastName = name;
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
    intent(`(Add|I want|order|get me|and|) $(ITEM p:ITEMS_INTENT)`, p => {
        return p.resolve(p.ITEM.value);
    });
});

intent(
    "What $(CAT p:CATEGORY_LIST) do you have",
    "(Order|get me|add|) $(NUMBER) $(CAT p:CATEGORY_LIST)",
    async p => {
        let key = project.CATEGORY_ALIASES[p.CAT.value.toLowerCase()];
        let value = p.CAT.endsWith('s') ? p.CAT.value : p.CAT.value + "s";
        p.play({command: 'navigation', route: `/menu/${key}`});
        p.play(
            `We have (a few|several) ${value} available:`,
            `You can choose from a few different ${value}:`,
            `There are a few types of ${value} (we have|available):`
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
intent(`Change (one of|) the $(ITEM p:ITEMS_INTENT) (to|by) (a|) $(ITEM p:ITEMS_INTENT)`, p => {
    if (p.ITEM_ && p.ITEM_.length !== 2) {
        p.play("Sorry, you should provide exactly two items in this request.");
        return;
    }
    let delId = project.ITEM_ALIASES[p.ITEM_[0].value.toLowerCase()].id;
    if (!delId) {
        p.play(`Can't find ${p.ITEM_[0]} in the menu`);
    } else {
        let addId = project.ITEM_ALIASES[p.ITEM_[1].value.toLowerCase()].id;
        let delName = p.ITEM_[0].value.toLowerCase();
        let addName = p.ITEM_[1].value.toLowerCase();
        if (!addId) {
            p.play(`Can't find ${p.ITEM_[1]} in the menu.`);
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
    `(Remove|delete|exclude) $(ITEM p:ITEMS_INTENT)`,
    `(Remove|delete|exclude) $(NUMBER) $(ITEM p:ITEMS_INTENT)`,
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

intent("(Clear|remove|empty|cancel) order", p => {
    p.play({command: 'clearOrder', route: 'cleared-order'});
    p.play("Your order has been canceled");
});
/////////////////
// -remove items
/////////////////

/////////////////
// +order details
/////////////////
intent("(My order|order details|details)", p => {
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
    "What is the total (price|amount) (of the order|for my order|)",
    "How much is my order",
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
    `(How much|what) does (the|) $(ITEM p:ITEMS_INTENT) cost`,
    `How much is $(ITEM p:ITEMS_INTENT)`,
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