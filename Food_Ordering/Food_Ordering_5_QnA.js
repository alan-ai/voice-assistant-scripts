// {Name: Food_Ordering}
// {Description: Food Ordering demo app for delivering food}

/*
This is a script for Food Ordering demo app for delivering food
Now there are four categories for food: drinks, pizza, street food, desserts.
*/

// corpus(
//     {url: "https://en.wikipedia.org/wiki/Fast_food", depth: 1},
//     {url: "https://resources.workable.com/waiter-or-waitress-job-description", depth: 1},
// );

projectAPI.greet = (p, param, callback) => {
    p.play("Welcome to the food ordering demo app! (How can I help you|What can I get for you|May I take your order|What would you like to order)?");
};

intent("What is (it|the app|application)", p => {
    p.play("This is an example application to (order food|order pizza and street food) and get a delivery");
});

intent(
    "What (kind|types) of food do you have (to order|)",
    "What do you have (to order|)",
    "What (food|) is available",
    "What can I (order|have|get)",
    "(What is|What's) on the menu",
    p => {
        p.play({command: 'navigation', route: '/menu'});
        p.play("We (have several|offer) pizzas, street foods, desserts, and drinks available. (What would you like to order?|To place an order, choose a food category and add items from the menu to the cart.)");
    }
);

intent(
    "What can I eat",
    "I would like something to eat",
    p => {
        p.play("We (have|offer) street food and pizzas, what would you like (to eat|)?");
    }
);

intent(
    "What (can|should|must) I (do|say|pronounce) (here|)",
    "Help (me|)",
    "Where am I",
    "What to do (here|)",
    p => {
        let route = p.visual.route ? p.visual.route.toLowerCase() : null;
        switch (route) {
            case "/menu/pizza":
            case "/menu/street food":
            case "/menu/dessert":
            case "/menu/drink":
                p.play("Here you can navigate through the menu and add or remove food from your order. To open a menu category, say '(Open|go to|show me) (drinks|pizza|street food|desserts)'. To add an item to your cart, say 'add taco' or 'add (2|3) (burgers|margaritas|latte)'. To remove an item from your cart, say 'remove taco' or 'remove (2|3) (burgers|margritas)'. To finish order and checkout, say 'that is all' or 'checkout'.");
                break;
            case "/cart":
                p.play("You are in your cart. Here you will answer a few questions to provide the delivery details. To change the address, say: 'set address'. To update the delivery time, say: 'set time'");
                break;
                //TODO: Not returned in VS route
            case "time":
                p.play("Please provide the delivery time. You can type or say it.");
                break;
                //TODO: Not returned in VS route
            case "address":
                p.play("Please provide the delivery address. You can type or say it.");
                break;
            case "/finish-order":
                p.play("Your order is complete. To place another order, say 'go back' or 'open menu' and add items to the cart");
                break;
            case "/cleared-order":
                p.play("(Your order is canceled|Your cart is empty now). To place another order, say 'go back' or 'open menu' and add items to the cart.");
                break;
            default:
                p.play(
                    "We have several pizzas, street foods, desserts, and drinks available.",
                    "We offer pizzas, street foods, desserts, and drinks. What would you like to order?"
                );
        }
    }
);

intent(
    "(Can you|Please|) (give me|provide) (an|) (order|) example",
    "How (to|do I) (start|begin) (the|) (dialog|conversation|)",
    "How (should I|can I|do I|to) (place an order|make an order|order) (food|something|)",
    p => {
        p.play("Choose a food category and (add|select) items from the menu. For example, you can say: (select pizza, add 3 pepperoni, checkout|open street food, add 5 burgers. to remove some items, say remove: one burger. To check your order, say: what is in the cart? Once ready, say: checkout|open drinks, add one latte, add one cappuccino, that is all)");
    }
);