// {Name: Food_Ordering}
// {Description: Food Ordering demo app for delivering food}

/*
This is a script for Food Ordering demo app for delivering food
Now there are four categories for food: drinks, pizza, street food, desserts.
*/

intent(
    "(Back|go back)",
    p => {
        let route = p.visual.route ? p.visual.route.toLowerCase() : null;
        switch (route) {
            case "/finish-order":
            case "/cleared-order":
                p.play({command: 'navigation', route: '/menu'});
                break;
            default:
                p.play({command: 'navigation', action: 'back'});
        }
        p.play("OK");
    }
);

intent(`(open|what do you have in|choose|select|go to|navigate|show|show me|take me to|what is on the menu in|) (the|) $(ITEM p:CATEGORY_LIST) (menu|)`, p => {
    let category = p.CAT.label;
    p.play({command: 'navigation', route: `/menu/${category}`});
    p.play(`Opening the ${category} menu`);
});

intent("(open|go|navigate|show|take) (me|) (to|) (the|my|) (cart|order)", p => {
    p.play({command: 'navigation', route: '/cart'});
    p.play("Here is your (cart|order)");
});

intent("(open|go|navigate|show|take) (me|) (to|) (the|) (menu|items list)", p => {
    p.play({command: 'navigation', route: '/menu'});
    p.play(
        "(Take|Have) a look at our menu",
        "Here is our menu"
    );
});

intent("(Scroll|Go) down", p => {
    p.play({command: 'scroll', direction: 'down'});
});

intent("(Scroll|Go) up", p => {
    p.play({command: 'scroll', direction: 'up'});
});