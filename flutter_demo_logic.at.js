// {Name: Flutter_Shrine_Logic}
// {Description: Flutter Shrine application script (Logic)}

// Flutter Shrine app enhanced to support Alan Platform voice commands can be found here: https://github.com/alan-ai/alan-sdk-flutter/tree/master/examples/ShrineApp

const LIST_STEP = 3;

const productsMap = project.products.reduce((productsMap, product) => {
    productsMap[product.id] = product;
    return productsMap;
}, {});

onCreateProject(() => {
    project.itemsIntent = project.products.map(p => `${p.name}_~${p.id}`).join('|');

    project.categoryTypes = project.products.reduce((typesMap, product) => {
        if (!typesMap[product.category]) {
            typesMap[product.category] = new Set();
        }
        if (product.type) {
            typesMap[product.category].add(product.type);
        }
        return typesMap;
    }, {});

    const categoryIntents = [];

    project.categoryTypeIntents = {};

    Object.keys(project.categoryTypes).forEach(categoryName => {
        const category = project.categoryTypes[categoryName];
        const categoryIntent = [...category].map(type => `${type}_~${type}`).join('|');
        categoryIntents.push(categoryIntent);
        project.categoryTypeIntents[categoryName] = categoryIntent;
    });

    project.typeIntents = Object.keys(
        project.products.reduce((typesMap, product) => {
            const type = `${product.type}_~${product.type}`;
            if (product.type) {
                typesMap[type] = type;
            }
            return typesMap;
        }, {}),
    ).join('|');

    project.categoryIntents = Object.keys(project.categoryAliases).reduce((intent, categoryId) => {
        const categoryNames = project.categoryAliases[categoryId].map(_ => `${_}_~${categoryId}`).join('|');
        intent.push(categoryNames);
        return intent;
    }, []).join('|');
});

const isCartScreen = visual(state => ['cart', 'menu'].includes(state.screen));

intent(isCartScreen, '(back|close)', p => {
    p.play({
        command: 'navigation',
        route: 'back',
    });
});

intent('(Show all|Open home page)', p => {
    p.play({
        command: 'navigation',
        route: '/all',
    });
    p.play(
        'Showing all available items.',
        '(OK.|Done.|OK. Done.|)',
    );
});

intent(
    '(Show me|show|open|go to) (menu|main menu)',
    'main menu',
    p => {
        p.play({
            command: 'navigation',
            route: '/menu',
        });
        p.play('Showing main menu');
    },
);

intent(
    '(add|I want|order|get me) $(NUMBER) $(CATEGORY p:categoryIntents)',
    '(Do you have|add|I want|order|get me|What about|How about) $(CATEGORY p:categoryIntents)',
    'Do you have $(CATEGORY p:categoryIntents)',
    'What (types of|kinds of|) $(CATEGORY p:categoryIntents) (do you have|are available)',
    '(Show|Open) $(CATEGORY p:categoryIntents) (menu|)',
    p => {
        const category = p.CATEGORY.label;
        if (p.NUMBER) {
            p.state.quantity = p.NUMBER.number;
        }
        playCategoryList(p, category);
    },
);

intent(
    '(add|I want|order|get me) $(NUMBER) $(ITEM p:itemsIntent)',
    '(add|I want|order|get me) $(NUMBER) $(ITEM p:itemsIntent) and $(NUMBER) $(ITEM p:itemsIntent)',
    '(add|I want|order|get me) $(ITEM p:itemsIntent) and $(NUMBER) $(ITEM p:itemsIntent)',
    '(add|I want|order|get me) $(NUMBER) $(ITEM p:itemsIntent) and $(ITEM p:itemsIntent)',
    '(add|I want|order|get me) $(ITEM p:itemsIntent) and $(ITEM p:itemsIntent)',
    '(add|I want|order|get me) (the|a|) $(ITEM p:itemsIntent)',
    p => {
        const selectedProducts = p.ITEM_ ? p.ITEM_.map(i => i.label) : [];
        const quantity = p.NUMBER_ ? p.NUMBER_.map(i => i.number) : [];
        addItems(p, selectedProducts, quantity, 0);
    },
);

intent(
    'How (much is|much for|much does) $(ITEM p:itemsIntent) (cost|)',
    '(What is|Tell me|I want to know|) (the|) price for $(ITEM p:itemsIntent)',
    p => {
        const product = productsMap[p.ITEM.label];
        p.play(`The price for ${product.name} is ${product.price}$`);
        p.play('Do you need anything else?');
    },
);

intent('(add|I want|order|get me) (few|some) $(ITEM p:itemsIntent)', async p => {
    p.play(`OK, how many ${p.ITEM} would you like (to add|)`);
    let quantity = await p.then(howMany);

    if (quantity) {
        addItems(p, [p.ITEM_[0].label], [quantity], 0);
    } else {
        p.play('(OK|I see|No problem)');
    }
});

intent('change (one of|) (the|) $(ITEM p:itemsIntent) to (a|) $(ITEM p:itemsIntent)', p => {
    if (p.ITEM_ && p.ITEM_.length !== 2) {
        p.play('Sorry, you should provide exactly two items in this request');
        return;
    }

    const idForRemoval = p.ITEM_[0].label;
    const idForAdding = p.ITEM_[1].label;

    if (!idForRemoval || !idForAdding) {
        const unexcitingItem = idForRemoval ? p.ITEM_[1] : p.ITEM_[0];
        p.play(`Can't find ${unexcitingItem} in menu`);
    } else {
        const addName = productsMap[idForAdding].name;
        const removeQuantity = p.NUMBER_ && p.NUMBER_[0] ? p.NUMBER_[0].number : 1;
        const addQuantity = p.NUMBER_ && p.NUMBER_[1] ? p.NUMBER_[1].number : 1;

        p.state.lastId = idForAdding;
        p.state.lastName = addName;

        p.play({
            command: 'removeFromCart',
            item: parseInt(idForRemoval),
            quantity: removeQuantity,
        });
        p.play({
            command: 'addToCart',
            item: parseInt(idForAdding),
            quantity: addQuantity,
        });
        p.play(`Removed ${removeQuantity} ${p.ITEM_[0]} and added ${addQuantity} ${p.ITEM_[1]}`);
    }
    p.play({
        command: 'navigation',
        route: '/cart',
    });
});

intent(
    'add (another|) $(NUMBER) (more|)',
    'add another',
    p => {
        const number = p.NUMBER && p.NUMBER.number > 0 ? p.NUMBER.number : 1;

        if (!p.state.lastId) {
            p.play('Sorry, You should order something first');
            return;
        }

        if (number > 99) {
            p.play('Sorry, number is too high.');
            return;
        }

        p.play({
            command: 'addToCart',
            item: parseInt(p.state.lastId),
            quantity: number,
        });
        p.play(`Added another ${number} ${p.state.lastName}`);
    },
);

intent(
    '(remove|delete|exclude) $(ITEM p:itemsIntent)',
    '(remove|delete|exclude) $(NUMBER) $(ITEM p:itemsIntent)',
    p => {
        const order = p.visual.order || [];
        const id = p.ITEM.label;
        const orderItem = order.find(orderItem => orderItem.id == id);
        if (!orderItem) {
            p.play(`${p.ITEM} has not been ordered yet`);
            return;
        }

        const quantity = orderItem.qty;
        const removeQuantity = p.NUMBER ? p.NUMBER.number : quantity;

        p.play({
            command: 'removeFromCart',
            item: parseInt(id),
            quantity: removeQuantity,
        });

        p.play({
            command: 'navigation',
            route: '/cart',
        });

        if (quantity - removeQuantity <= 0) {
            p.play('Removed all ' + p.ITEM);
        } else {
            p.play(`Updated ${p.ITEM} quantity to ${quantity - removeQuantity}`);
        }
    },
);

intent('(my order|my cart|open cart|show cart|show my cart|order details|order info)', p => {
    const order = p.visual.order;
    if (_.isEmpty(order)) {
        p.play(
            'You have not ordered anything.',
            'Your cart is empty',
        );
        return;
    }
    p.play({
        command: 'navigation',
        route: '/cart',
    });
    p.play('You currently have');
    order.forEach(orderItem => {
        const productId = orderItem.id;
        const quantity = orderItem.qty;
        const product = project.products.find(i => i.id === productId);
        p.play({
            command: 'highlightProducts',
            value: productId,
        });
        p.play(quantity + ' ' + product.name);
    });
    p.play({
        command: 'highlightProducts',
        value: null,
    });
    p.play('in your cart.');
    p.play('The total amount for your order is: ');
    p.play({
        command: 'highlight',
        value: 'total',
    });
    p.play(`${p.visual.total} dollars`);
    p.play({
        command: 'highlight',
        value: null,
    });
    p.play('Do you want to confirm your order?');
    p.then(confirm);
});

intent(
    '(Show|I want) $(TYPE p:typeIntents)',
    '(What|Do you have) $(TYPE p:typeIntents) (are|) (available|do you have|you got|) (for sale|)',
    'How (much is|much for|much does) $(TYPE p:typeIntents) (cost|)',
    '(What is|Tell me|I want to know|) (the|) price for $(TYPE p:typeIntents)',
    p => {
        const type = p.TYPE.label;
        const filteredProducts = project.products.filter(i => i.type === type);
        if (_.isEmpty(filteredProducts)) {
            p.play(`Sorry, we could not find ${type}`);
            return;
        }
        p.play({
            command: 'navigation',
            route: '/' + filteredProducts[0].category,
        });
        p.play({
            command: 'show_products',
            items: filteredProducts.map(i => i.id),
        });
        p.play(
            `From ${type} we offer: `,
        );

        p.state.type = type;
        p.state.items = filteredProducts;
        highlightProductList(p, filteredProducts, true);
    },
);

intent(
    'Show $(TYPE p:typeIntents) (under|cheaper than|for less than) $(NUMBER) (dollars|)',
    'What $(TYPE p:typeIntents) (are|do you have|you got) (under|cheaper than|for less than) $(NUMBER) (dollars|)',
    p => {
        const type = p.TYPE.label;
        const filteredProducts = project.products.filter(i => i.type === type && i.price <= p.NUMBER.number);
        if (_.isEmpty(filteredProducts)) {
            p.play(`We could not find ${type} cheaper than ${p.NUMBER.number} dollars`);
            return;
        }
        p.play({
            command: 'navigation',
            route: '/clothing',
        });
        p.play({
            command: 'show_products',
            items: filteredProducts.map(i => i.id),
        });
        p.play(`We (offer|have) several ${type} (under|cheaper than|for less than) ${p.NUMBER.number} dollars:`);

        p.state.type = type;
        highlightProductList(p, filteredProducts, true);
    },
);

intent(
    'What is (my|the) total cost (for my order|of my order|)',
    'how much should I pay',
    p => {
        if (_.isEmpty(p.visual.order) || !p.visual.total) {
            p.play(`Your cart is empty`);
            return;
        }
        if (p.visual.screen === 'cart') {
            p.play({
                command: 'highlight',
                value: 'total',
            });
            p.play(`The total amount for your order is: ${p.visual.total} dollars`);
            p.play({
                command: 'highlight',
                value: null,
            });
        } else {
            p.play(`The total amount for your order is: ${p.visual.total} dollars`);
        }
    },
);

intent(
    'that\'s (all|it)',
    'I\'m done',
    '(ready to|I want to|please|) checkout',
    p => {
        if (_.isEmpty(p.visual.order) || !p.visual.total) {
            p.play('Your cart is empty, please make an order first');
            return;
        }
        p.play({
            command: 'navigation',
            route: '/cart',
        });
        p.play('The total amount for your order is: ');
        p.play({
            command: 'highlight',
            value: 'total',
        });
        p.play(`${p.visual.total} dollars`);
        p.play({
            command: 'highlight',
            value: null,
        });
        p.play('Do you want to confirm your order?');
        p.then(confirm);
    },
);

intent('(finish|confirm) (my|) (order|)', p => {
    if (_.isEmpty(p.visual.order)) {
        p.play('Please, add something to your order first');
    } else {
        p.play({ command: 'finishOrder' });
        p.play('Your order has been confirmed, thank you!');
    }
});

intent(
    'I want (different|other|more) (colours|colour)',
    'Do you have (different|other|more) (colours|colour)',
    'What (other|) colours (Do you have|you got|)',
    p => {
        p.play('We don\'t have other colours');
    },
);

intent('Add more (items|)', p => {
    p.play('What would you like to add?');

    p.then(whatItems);
});

intent(
    '(Clear|Cancel) (my|) order',
    '(Clear|flush|empty) (my|) cart',
    p => {
        p.play({
            command: 'clearOrder',
            route: 'cleared-order',
        });
        p.play('Your order has been canceled');
    },
);

const confirmQuality = context(() => {
    follow('(Yes|Sure|Correct)', p => {
        p.resolve(p.state.quantity);
    });

    follow('(No|Wrong|Change)', async p => {
        p.play('How many do you want?');
        p.resolve(await p.then(howMany, {state: p.state}));
    });
});


const whatItems = context(() => {
    follow(
        '(I would like|I want|add|) $(NUMBER) $(ITEM p:itemsIntent)',
        '$(ITEM p:itemsIntent)',
        '$(TYPE p:typeIntents)',
        '$(CATEGORY p:categoryIntents)',
        async p => {
            p.resolve(null);
            if (p.ITEM) {
                if (!p.NUMBER) {
                    p.play('How many would you like to add?');
                }
                const quantity = p.NUMBER ? p.NUMBER.number : await p.then(howMany);
                addItems(p, [p.ITEM.label], [quantity], 0);
            } else if (p.TYPE) {
                const filteredProducts = project.products.filter(i => i.type === p.TYPE.label && i.category === p.state.category);
                highlightProductList(p, filteredProducts, true);
            } else if (p.CATEGORY) {
                playCategoryList(p, p.CATEGORY.label);
            }
        }
    );
});

const categoryTypeContext = context(() => {
    follow(
        'Show (me|) (all|everything)',
        '(I want|I would like|) (to see|) (all|everything)',
        p => {
            const filteredProducts = project.products.filter(i => i.category === p.state.category);

            p.resolve(null);
            highlightProductList(p, filteredProducts,true);
        },
    );

    follow(
        'Show (me|) $(TYPE p:typeIntents)',
        '(I want|I would like|) (to see|) $(TYPE p:typeIntents)',
        p => {
            const type = p.TYPE.label;

            const filteredProducts = project.products.filter(i => i.type === type);

            if (_.isEmpty(filteredProducts)) {
                p.play(`Sorry, we could not find ${type}`);
                return;
            }

            p.play({
                command: 'navigation',
                route: '/' + p.state.category,
            });
            p.play({
                command: 'show_products',
                items: filteredProducts.map(i => i.id),
            });

            p.play(
                `From ${type} we offer: `,
                `We offer several ${type}:`,
            );

            p.resolve(null);
            p.state.type = type;
            highlightProductList(p, filteredProducts,true);
        }
    );

    follow('(No|Nothing|Thanks|Thank you|Nope)', p => {
        p.play('OK');
        p.resolve(null);
    });
});

const confirm = context(() => {
    follow(
        '(I want to|I wish to|) (proceed|confirm|go on) (my|with my|) (order|)',
        '(yes|ok|correct|sure)',
        p => {
            p.play({ command: 'finishOrder' });
            p.play('Your order has been confirmed, thank you!');
            p.resolve(null);
        },
    );

    follow('(no|change|invalid|nope|not correct|stop|back)', p => {
        p.play({
            command: 'navigation',
            route: '/cart',
        });
        p.play('OK, please (make necessary corrections|update an order|fix what you want)');
        p.resolve(null);
    });
});

const howMany = context(() => {
    follow('$(NUMBER) $(W* .*)', p => p.resolve(p.NUMBER.number));

    follow('(Cancel|abort|that is not what I wanted|no|zero|none|go back|back)', p => {
        p.resolve(null);
    });
});

const repeatListItems = context(() => {
    title('repeat items');

    follow('(yes|sure|ok|next|show more)', p => {
        const { state } = p;

        const showItems = state.items.slice(state.offset);

        if (_.isEmpty(showItems)) {
            const itemKeyword = state.type || 'items';
            p.play(`There are no more ${itemKeyword}`);
            p.resolve(null);
            return;
        }

        highlightProductList(p, showItems, false);
    });

    follow('(could you|) (please|) (repeat|say again)', p => {
        const { state } = p;
        if (!state.items) {
            p.play('There are no items');
            console.log('There are no items');
            return;
        }

        highlightProductList(p, state.items, false);
    });

    follow('(no|next time|not now|later|nope|stop)', p => {
        if (!p.state.items) {
            p.play('No items');
            return;
        }
        p.play('OK');
        p.resolve(null);
    });
});

function playCategoryList(p, category) {
    p.play({
        command: 'navigation',
        route: '/' + category,
    });
    p.play(`Which ${p.CATEGORY} would you like? We have several types available:`);

    p.state.category = category;
    p.state.type = null;

    const typeList = [...project.categoryTypes[category]];

    if (category === 'clothing' && typeList.length > 1) {
        playTypeList(p, typeList);
    } else {
        const filteredProducts = project.products.filter(i => i.category === category);
        highlightProductList(p, filteredProducts,true);
    }
}

function playTypeList(p, typeList) {
    typeList.forEach((type, index) => {
        if (index + 1 === typeList.length && typeList.length > 1) {
            p.play('and');
        }
        p.play(type);
    });

    p.play('What would you like?');

    p.then(categoryTypeContext, {state: p.state});
}

function highlightProductList(p, productList, isFirstPage) {
    const { state } = p;
    const itemsLength = productList.length;
    const limit = itemsLength <= LIST_STEP + 1 ? itemsLength : LIST_STEP;
    const othersCount = itemsLength - limit;
    const hasMore = othersCount > 0;
    state.offset = limit;
    state.items = productList;

    for (let i = 0; i < limit; i++) {
        const item = productList[i];
        p.play({
            command: 'highlightProducts',
            value: item.id,
        });
        p.play(item.name);
    }

    p.play({
        command: 'highlightProducts',
        value: null,
    });

    if (isFirstPage && hasMore) {
        p.play(`and ${othersCount} others`);
    }

    if (hasMore) {
        p.play('Do you want to hear more?');
    }

    if (isFirstPage) {
        p.then(repeatListItems, {state});
    }
}

async function addItems(p, productList, productQuantities, offset) {
    const answer = [];

    if (!productList.length) {
        p.play('Nothing to add');
        return;
    }

    if (
        p.state.quantity &&
        productList.length === 1 &&
        !productQuantities.length &&
        productsMap[productList[0]].category === p.state.category
    ) {
        p.play(`You requested ${p.state.quantity} ${productsMap[productList[0]].name}. Is this correct?`);
        const confirmedQuality = await p.then(confirmQuality, {state: p.state});
        if (!confirmedQuality) {
            return;
        }
        productQuantities = [confirmedQuality];
    }

    for (let index = 0, l = productList.length; index < l; index++) {
        const id = productList[index];
        if (!id) {
            if (!_.isEmpty(answer)) {
                p.play(answer);
            }
            p.play(`Can't find ${id} in menu`);
            return;
        }

        const quantity = productQuantities && productQuantities[index - offset] ? productQuantities[index - offset] : 1;
        const name = productsMap[id].name;

        if (quantity > 99) {
            p.play(`Sorry, quantity of ${name} is too high.`);
            continue;
        }

        p.state.lastId = id;
        p.state.lastName = name;

        p.play({
            command: 'addToCart',
            item: parseInt(id),
            quantity,
        });

        answer.push(index > 0 ? 'and' : 'Added');
        answer.push(`${quantity} ${name}`);
    }

    answer.push('(to your order|).');

    if (!p.state.isFullResponseReceived) {
        answer.push('Would you like to add more items or checkout?');
        p.state.isFullResponseReceived = true;
    } else {
        answer.push('(Something else?|What else can I do for you?|Do you want to checkout?|Do you need anything else?|)');
    }
    p.play(answer.join(' '));
    p.state.quantity = null;
}
