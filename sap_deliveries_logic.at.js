// {Name: SAP_Deliveries_Logic}
// {Description: SAP deliveries application, Logic}

projectAPI.updateProductEntities = (p, params, cb) => {
    project.prods = JSON.parse(params.json);
    cb();
};

const screenAliases = {
    "suppliers": "Supplier",
    "product categories": "ProductCategory",
    "product texts": "ProductText",
    "purchase order items": "PurchaseOrderItems",
    "purchase order headers": "PurchaseOrderHeaders",
    "stock": "Stock",
    "sales order items": "Sales",
    "customers": "Customer",
    "sales order headers": "SalesOrder",
    "products": "Product",
    "menu" : "Main",
    "main" : "Main",
};

const categoryAliases = {
    "projectors": "Projectors",
    "portable players": "Portable Players",
    "players": "Portable Players",
    "software": "Software",
    "notebooks": "Notebooks",
    "laptops": "Notebooks",
    "smartphones": "PDAs & Organizers",
    "phones": "PDAs & Organizers",
    "pdas and organizers": "PDAs & Organizers",
    "flat screen monitors": "Flat Screen Monitors",
    "monitors": "Flat Screen Monitors",
    "displays": "Flat Screen Monitors",
};

const comparators = {
    ">": (a, b) => a > b,
    "<": (a, b) => a < b
};

const compAliases = {
    expensive: comparators[">"],
    cheaper: comparators["<"],
    more: comparators[">"],
    less: comparators["<"],
    under: comparators["<"],
    above: comparators[">"],
    below: comparators["<"],
};

const supById   = _.reduce(project.sups, (a, p)  => { a[p.SupplierId] = p; return a}, {});
const categories = _.uniq(project.prods.map(p => p.CategoryName));

// Visual filters for screens
const vMain = visual(v => v.screen === "Main");
const vProducts = visual(v => v.screen === 'Product');

// navigate to screen command from Main screen
intent(`(go to|open|show) $(SCREEN ${Object.keys(screenAliases).join(`|`)}) (screen|)`, p => {
    p.play({command: 'navigate', screen: 'Main'});
    p.play(`(Opening ${p.SCREEN}|) `);
    let screen = screenAliases[p.SCREEN.toLowerCase()];
    if (screen && screen !== "Main") {
        p.play({command: 'navigate', screen: screenAliases[p.SCREEN.toLowerCase()]});
    }

});

intent(`(go|) back`, p => {
    if (p.visual.screen === "Main") {
        p.play("You are on the main screen already");
    } else {
        p.play({command: "goBack"});
        p.play(`(going back|)`);
    }
});

// List available products
intent("(What|Which) (are the|) products (are|) (available|there|do you have)", p => {
    if (!_.isEmpty(project.prods)) {
        p.play({command: 'navigate', screen: 'Product'});
        p.play(`There are (several|${_.size(project.prods)}) different products, including:`);
        playList(p, project.prods, "highlightProductId", a => a.Name, a => a.ProductId, true);
    } else {
        p.play(`No products for ${p.SUP}`);
    }
});

intent(`(show|open) (the|) $(P ${project.prods.map(s => s.Name).join(`|`)}) (card|details|screen|)`, p=> {
    let product = findProductByName(p.P.value);
    if (product) {
        p.play({command: "showProductCard", value: product.ProductId});
        p.play(`Openning ${p.P}`);
    } else {
        p.play(`${p.P} not found in our product list`);
    }
});

// Find product by its name
function findProductByName(name) {
    return _.first(project.prods.filter(pr => pr.Name && pr.Name.toLowerCase() === name.toLowerCase()));
}

// Request product price
intent(`How much (is|does) the $(P ${project.prods.map(s => s.Name).join(`|`)}) (cost|)`,
    `What is the (cost|price) of the $(P ${project.prods.map(s => s.Name).join(`|`)})`, p => {
        let product = findProductByName(p.P.value);
        if (!product) {
            p.play(`${p.P} not found in our product list`);
        } else {
            p.play(`The ${p.P} is ${product.Price} ${product.CurrencyCode}`);
        }
    });

// Find product supplier
intent(`Who (supplies|provides|has) the $(P ${project.prods.map(s => s.Name).join(`|`)})`,
    `Who is the $(P ${project.prods.map(s => s.Name).join(`|`)}) (supplier|provider)`, p => {
        let product = findProductByName(p.P.value);
        if (!product) {
            p.play(`${p.P} not found in our product list`);
        } else {
            let sup = supById[product.SupplierId].SupplierName;
            if (!sup) {
                p.play(`We could not find supplier for ${p.P}`);
            } else {
                p.play(`The ${p.P} is supplied by ${supById[product.SupplierId].SupplierName}`,
                    `${supById[product.SupplierId].SupplierName} supplies the ${p.P}`);
            }
        }
    });

// List product categories
intent("(What|Which) (are the|) (product|) categories (are|) (available|there|do you have)", p => {
    p.play(`There are ${_.size(categories)} categories, (including|)`);
    playList(p, categories, "highlightCategoryName", a => a, a => a, true);
});

const findProductsInCategoryByPrice = [
    `(show|find) $(CAT ${Object.keys(categoryAliases).join(`|`)}) (that cost|with a price of|) $(COMP ${Object.keys(compAliases).join(`|`)}) than $(NUMBER) $(CUR dollar|euro|dollars|euros)`,
    `(what|how many) $(CAT ${Object.keys(categoryAliases).join(`|`)}) do you have (that cost|with a price of|) $(COMP ${Object.keys(compAliases).join(`|`)}) than $(NUMBER) $(CUR dollar|euro|dollars|euros)`,
    `(what|how many) $(CAT ${Object.keys(categoryAliases).join(`|`)}) (that cost|with a price of|) $(COMP ${Object.keys(compAliases).join(`|`)}) than $(NUMBER) $(CUR dollar|euro|dollars|euros) do you have`,
    `do you have $(CAT ${Object.keys(categoryAliases).join(`|`)}) (that cost|with a price of|) $(COMP ${Object.keys(compAliases).join(`|`)}) than $(NUMBER) $(CUR dollar|euro|dollars|euros)`
];

// Find products in category by price condition
intent(vProducts, findProductsInCategoryByPrice, p => {
    conditionIntent(p,
        (len, condStr) => `(Yes,|) (We have|There are|Found) ${len} ${condStr}`,
        condStr => `(No. We don't have|There are no|Can't find) ${condStr}`);
});

// // Find number of products by price condition
// intent(vProducts, `(show|find|what|how many|do we have|do you have) $(CAT ${Object.keys(categoryAliases).join(`|`)}) $(COMP ${Object.keys(compAliases).join(`|`)}) than $(NUMBER) $(CUR dollar_|euro_|)`, p => {
//     conditionIntent(p,
//         (len, condStr) => `(Yes,|) (We have|There are|Found) ${len} ${condStr}`,
//         condStr => `(No. We don't have|There are no|Can't find) ${condStr}`);
// });

// Show categories from products screen
intent(`(show|find) $(CAT ${Object.keys(categoryAliases).join(`|`)})`, p => {
    categoryIntent(p, (len, cat) => `Found ${len} ${cat}`, cat => `Can't find ${cat}`);
});

intent(`do you have $(CAT ${Object.keys(categoryAliases).join(`|`)})`, p => {
    categoryIntent(p, (len, cat) => `Yes. There are ${len} ${cat}`, cat => `No. There are no ${cat}`);
});

intent(`how many $(CAT ${Object.keys(categoryAliases).join(`|`)}) (do you have|)`, p => {
    categoryIntent(p, (len, cat) => `We have ${len} ${cat}`, cat => `We don't have ${cat}`);
});

// Reset filters
intent(`show all`, `reset filters`, p => {
    p.play({command: 'navigate', screen: 'Product'});
    p.play('');
    p.play({
        command: 'showProductCategory',
        value: 'All'
    });
    p.play('');
});

//
intent("What can (I|you) do", "What's this (SAP|) (app|application)", p => {
    p.play("(This is the SAP Delivery Demo App. With a visual voice experience powered by Alan AI|) " +
        "You can use commands like What products do you have?, Who are the suppliers?, and How much was the last purchase?");

});

intent("What is Alan (AI|)?", p => {
    p.play("Alan AI is a Voice AI platform that lets you add a (complete|) visual voice experience to any application. " +
        "(The voice in this application is powered by Alan AI|)");
});

intent("What (screen|) is this?", "Where am I", "What commands can I use here", "What can I do here", p => {
    if (!p.visual.screen) {
        p.play("(This is the SAP Delivery Demo App. With a visual voice experience powered by Alan AI|) " +
            "You can use commands like What products do you have?, Who are the suppliers?, and How much was the last purchase?");
        return;
    }
    switch (p.visual.screen) {
        case "Main":
            p.play("This is the Collections screen. Here, you can use commands like What products do you have?, " +
                "Who are the suppliers? and How much was the last purchase?",
                "This is the Collections screen. Here, you can ask about Suppliers, Products, Purchase Orders, and Product Categories");
            break;
        case "Supplier":
            p.play("This is the Suppliers screen. Here, you can (use commands|ask questions) like Who are the suppliers? " +
                "and What products does Becker Berlin offer?");
            break;

        case "SupplierDetails":
            p.play("This is the supplier details screen. (Here,|) you can (use commands|ask questions) like " +
                "Where are they located?, What was the last order?, and What products do they offer?");
            break;

        case "ProductCategory":
            p.play("This is the Product Category screen. (Here,|) you can (use the command|ask the question) What are the categories?");
            break;

        case "PurchaseOrderHeaders":
            p.play("This is the Purchase Order Header screen. (Here,|) you can (use commands|ask questions) like " +
                "Show the second purchase order, How much was the last purchase order?, What was the highest order?, and What was the lowest order?");
            break;

        case "Product":
            p.play("This is the Products screen. (Here,|) you can (use commands|ask questions) like What products are available? " +
                `How much is the ${rand(project.prods.map(p=>p.Name))}?, and What ${rand(project.cats.map(p=>p.CategoryName))} are available?`);
            break;

        case "ProductDetails":
            p.play("This is the product details screen. (Here,|) you can (use commands|ask questions) like How much is it? " +
                "Whos the supplier?, and What kind of product is this?");
            break;
    }
});

// Util functions

// find products by parameters
function findProductsByIntentParams(categoryP, comparatorP, field, valueP) {
    const category = categoryAliases[categoryP.toLowerCase()];
    const comparator = compAliases[comparatorP.toLowerCase()];
    const value = valueP.number ? valueP.number : valueP;
    return project.prods
        .filter(p => p.Category === category && comparator(parseInt(p[field]), value));
}

// Apply price filter for products in category
function conditionIntent(p, foundAnswer, notFoundAnwer) {
    const products = findProductsByIntentParams(p.CAT, p.COMP, "Price", p.NUMBER);
    const productIds = products.map(pr => pr.ProductId);
    p.play({command: 'showProductIds', value: productIds});
    const conditionStr = `${p.CAT} ${p.COMPs.join(' ')} than ${p.NUMBER} ${p.CUR || ""}`;
    p.play(products.length ?
        foundAnswer(products.length, conditionStr) :
        notFoundAnwer(conditionStr));
    playList(p, products, "highlightProductId", p => p.Name, p => p.ProductId);
}

// Find products in category
function categoryIntent(p, foundAnswer, notFoundAnswer) {
    const category = categoryAliases[p.CAT.toLowerCase()];
    const products = project.prods.filter(pr => pr.Category === category);
    p.play({command: 'navigate', screen: 'Product'});
    p.play(products.length ?
        foundAnswer(products.length, p.CAT) :
        notFoundAnswer(p.CAT));
    p.play({
        command: 'showProductCategory',
        value: categoryAliases[p.CAT.toLowerCase()]
    });
    playList(p, products, "highlightProductId", pr => pr.Name, pr => pr.ProductId, true);
}

// Play list of items
function playList(p, a, command, name, id, readMore = false) {
    let nPlay = a.length <= 4 ? a.length : 3;
    for (let i = 0; i < nPlay; i++) {
        p.play({
            command: command,
            value: id(a[i])
        });
        p.play(name(a[i]));
    }
    p.play({command: command, value: null});
    let others = a.length - nPlay;
    if (others > 0) {
        p.play(`and ${others} others`);
        if (readMore) {
            p.play('Do you want to hear more?');
            let state = {items: a, from: 3, step: 3, name: name, command: command, id: id};
            p.then(repeatListItems, {state});
        }
    }
}

// Context for iteration over list of items
const repeatListItems = context(() => {
    title("repeat items");

    follow("(yes|sure|ok|next|show more)", p => {
        let {state} = p;
        if (!state.items) {
            p.play("There are no items");
            console.log("There are no items");
            return;
        }
        if (state.from + state.step > state.items.length) {
            state.step = state.from + state.step - state.items.length + 1;
        }
        let to = Math.min(state.from + state.step, state.items.length);
        let showItems = state.items.slice(state.from, to);
        if (_.isEmpty(showItems)) {
            p.play(`There are no more items`);
            p.resolve(null);
            return;
        } else {
            showItems.forEach(item => {
                p.play({
                    command: state.command,
                    value: state.id(item)
                });
                p.play(state.name(item));

            });
            p.play({command: state.command, value: null});
            if (to < state.items.length) {
                p.play(`Do you want to hear more?`);
            }
        }
        p.state.from = to;
    });

    follow("(repeat|repeat please|say again)", p => {
        let {state} = p;
        if (!state.items) {
            p.play("There are no items");
            console.log("There are no items");
            return;
        }
        let showItems = state.items.slice(state.from - state.step, state.from);
        showItems.forEach(item => {
            p.play(state.name(item));
            p.play({
                command: state.command,
                value: state.id(item)
            });
        });
        p.play({command: state.command, value: null});
        if (state.from < state.items.length) {
            p.play(`Do you want to hear more?`);
        }
    });

    follow("(no|next time|not now|later|nope|stop)", p => {
        if (!p.state.items) {
            p.play("No items");
            return;
        }
        p.play("OK");
        p.resolve(null);
    });
});

function rand(list, number = 1) {
    return _.shuffle(list).slice(0, Math.min(number, list.length));
}
