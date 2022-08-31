// {Name: Food_Ordering}
// {Description: Food Ordering demo app for delivering food}

/*
This is a script for Food Ordering demo app for delivering food
Now there are four categories for food: drinks, pizza, street food, desserts.
*/

project.menu = {
    "drink": [
        {id: "sod", title: "Cola", price: 2, type: "drink", alt: ["Coca-cola", "Soda", "Coca cola", "Coke", "Diet Coke"]},
        {id: "amr", title: "Americano", price: 1, type: "drink", alt: ["coffee"]},
        {id: "lat", title: "Latte", price: 3, type: "drink"},
        {id: "cap", title: "Cappuccino", price: 3, type: "drink"},
        {id: "orj", title: "Orange juice", price: 3, type: "drink"},
        {id: "tea", title: "Tea", price: 3, type: "drink"}
    ],
    "pizza": [
        {id: "prn", title: "Pepperoni", price: 14, type: "pizza", alt: ["Pepperoni pizza"]},
        {id: "mrg", title: "Margarita", price: 10, type: "pizza", alt: ["Margarita pizza"]},
        {id: "4ch", title: "Cheese", price: 10, type: "pizza", alt: ["Cheese pizza"]},
        {id: "haw", title: "Hawaiian", price: 10, type: "pizza", alt: ["Hawaiian pizza"]}
    ],
    "street food": [
        {id: "brt", title: "Burrito", price: 12, type: "street food"},
        {id: "brg", title: "Burger", price: 23, type: "street food"},
        {id: "tco", title: "Taco", price: 10, type: "street food"},
        {id: "snd", title: "Sandwich", price: 10, type: "street food"}
    ],
    "dessert": [
        {id: "apl", title: "Apple pie", price: 5, type: "dessert", alt: ["pie"]},
        {id: "chc", title: "Cheesecake", price: 15, type: "dessert"}
    ]
};

project.AVAILABLE_ITEMS_BY_ID = _.reduce(project.menu, (a, category) => {
    category.forEach(item => a[item.id] = item);
    return a;
}, {});

project.AVAILABLE_ITEMS = _.reduce(project.menu, (a, category) => {
    category.forEach(item => {
        if (!a[item.id]) {
            a[item.id] = [];
        }
        a[item.id].push(item.title.toLowerCase());
        if (item.alt) {
            item.alt.forEach(alt => a[item.id].push(alt.toLowerCase()))
        }
    });
    return a;
}, {});

project.AVAILABLE_ITEMS_INTENT = _.flatten(Object.keys(project.AVAILABLE_ITEMS).map(id => project.AVAILABLE_ITEMS[id].map(alt => alt + '_' + '~' + id))).join('|');

project.unavailableDishes = [
    "Spaghetti",
    "Bruschetta",
    "Chicken Parmigiana",
    "Panini",
    "Panna Cotta",
    "Tramezzino",
    "Tiramisu",
    "Tortellini",
    "Lasagna",
    "Buffalo Chicken Wings",
    "Tater Tots",
    "Hot Dogs",
    "Barbecue Ribs",
    "Biscuits and Gravy",
    "Meatloaf",
    "Grits",
    "Hamburger",
    "ice cream",
];

project.UNAVAILABLE_DISHES_INTENT = project.unavailableDishes.map(dish => dish.toLowerCase() + '_' + '~' + 'unavailable').join('|');

//TODO proper aliases
project.CATEGORY_ALIASES = _.reduce(Object.keys(project.menu), (a, p) => {
    const key = p.toLowerCase();
    a[key] = a[key + "s"] = a[key + "es"] = key;
    if (key === 'street food') {
        a['fast food'] = a['fast foods'] = 'street food'
    }
    return a;
}, {});

project.ID_TO_TYPES = _.reduce(project.menu, (a, p) => {
    p.forEach(i => a[i.id] = i.type);
    return a;
}, {});

project.ITEM_ALIASES = _.reduce(project.menu, (a, p) => {
    p.forEach(i => {
        let key = i.title.toLowerCase();
        a[key] = a[key + "s"] = a[key + "es"] = i;
        if (i.alt) {
            i.alt.forEach(s => a[s.toLowerCase()] = a[s.toLowerCase() + "s"] = a[s.toLowerCase() + "es"] = i)
        }
    });
    return a;
}, {});

// project.ITEMS_INTENT = Object.keys(project.ITEM_ALIASES).join('|');
project.ITEMS_INTENT = project.AVAILABLE_ITEMS_INTENT + '|' + project.UNAVAILABLE_DISHES_INTENT;
project.UNAVAILABLE_DISHES_INTENT = project.unavailableDishes.join('|');
project.CATEGORY_LIST = Object.keys(project.CATEGORY_ALIASES).join('|');