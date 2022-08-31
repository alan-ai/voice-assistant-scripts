// {Name: Food_Ordering}
// {Description: Food Ordering demo app for delivering food}

/*
This is a script for Food Ordering demo app for delivering food
Now there are four categories for food: drinks, pizza, street food, desserts.
*/

corpus(
    {url: "https://en.wikipedia.org/wiki/Fast_food", depth: 1},
    {url: "https://resources.workable.com/waiter-or-waitress-job-description", depth: 1},
);

projectAPI.greet = (p, param, callback) => {
    p.play("Welcome to the Food Ordering demo app for food delivery. (How can I help you|What can I get for you|May I take your order|What would you like to order)?");
};

intent(
    "What is (it|the app|application)",
    "Where am I",
    p => {
        p.play("(This is|It's) (just|simple) Food Ordering example application for (food delivery service|pizza ordering).");
    }
);

intent(
    "What (kind|types) of food do you have (to order|)",
    "What do you have (to order|)",
    "What (food|) is available",
    "What can I (order|have|get)",
    p => {
        p.play(
            "We have several pizzas, street foods, desserts, and drinks available. (What would you like to order?|)",
            "We offer pizzas, street foods, desserts, and drinks. (What would you like to order?|)"
        );
    }
);

intent(
    "What (can|should|must) I (do|say|pronounce)",
    "Help (me|)",
    "What to do (here|)",
    "How to start",
    p => {
        let route = p.visual.route ? p.visual.route.toLowerCase() : null;
        switch (route) {
            case "/menu/pizza":
            case "/menu/street food":
            case "/menu/dessert":
            case "/menu/drink":
                p.play("Here you can navigate through the menu and add and remove food to your order. To open menu category say (Open|go to) (drinks|pizza|street food|desserts). To add an item to your cart say 'add taco or add (2|3) (burgers|margaritas|latte)'. To remove an item from your cart say 'remove taco or remove (2|3) (burgers|margritas)'. To finish order and checkout say that is all or checkout.");
                break;
            case "/cart":
                p.play("You are in your cart. You should answer questions about delivery address and time. You can change the address by saying 'set address' and you can change delivery time when you say 'set time'.");
                break;
                //TODO: Not returned in VS route
            case "time":
                p.play("Enter or say what time we should deliver an order to you.");
                break;
                //TODO: Not returned in VS route
            case "address":
                p.play(
                    "Here you can point the address for delivering your order.",
                    "Please, enter or say what is the delivery address?"
                );
                break;
            case "/finish-order":
                p.play("You finished your order, if you want to make another order say 'go back' or 'open menu' and add new items to your order.");
                break;
            case "/cleared-order":
                p.play("You have (cleared|canceled) your order, if you want to make another order say 'go back' or 'open menu' and add new items to your order.");
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
    "How to (make an|) order",
    "Give me an (order|) example",
    p => {
        p.play("Choose food category and add items from menu to order. For example, you can say: (select pizza, add 3 pepperoni, checkout|open street food, add 5 burgers, if you wish to remove some items say remove one burger, what is my order? checkout|open drinks, add one latte, add one cappuccino, that is all)");
    }
);