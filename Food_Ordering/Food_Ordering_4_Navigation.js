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

intent(`(Open|choose|select|) $(ITEM ${project.CATEGORY_LIST})`, p => {
    p.play({command: 'navigation', route: `/menu/${project.CATEGORY_ALIASES[p.ITEM.toLowerCase()]}`});
    p.play(`Opening ${p.ITEM} menu`);
});

intent("Open cart", p => {
    p.play({command: 'navigation', route: '/cart'});
    p.play("Here is your cart");
});

intent("Open menu", p => {
    p.play({command: 'navigation', route: '/menu'});
    p.play("Look at our menu");
});

intent("Scroll down", p => {
    p.play({command: 'scroll', direction: 'down'});
});

intent("Scroll up", p => {
    p.play({command: 'scroll', direction: 'up'});
});