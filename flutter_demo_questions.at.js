// {Name: Flutter_Shrine_Questions}
// {Description: Flutter Shrine application script (Questions)}

const CATEGORIES = Object.values(project.categoryAliases)
    .map(value => value.join('|')).join('|');

const ALL_PRODUCTS = project.products.map(product => product.name.toLowerCase()).join('|');

const CLOTHING_PRODUCTS = project.products
    .filter(product => product.category === 'clothing')
    .map(product => product.name.toLowerCase()).join('|');

const ACCESSORIES_PRODUCTS = project.products
    .filter(product => product.category === 'accessories')
    .map(product => product.name.toLowerCase()).join('|');

const HOME_PRODUCTS = project.products
    .filter(product => product.category === 'home')
    .map(product => product.name.toLowerCase()).join('|');

question(
    'What can (you|I) do',
    'What is this (app|application)',
    'What is (shrine|flutter shrine)',
    p => {
        p.play('This is the Flutter Shrine demo app. (With a visual voice experience powered by Alan Platform.|)');
        p.play('You can use commands like:');
        p.play(`order (a|the|) (${ALL_PRODUCTS}).`);
        p.play('What products do you have?');
        p.play(`And show (${CATEGORIES})`);
    },
);

question(
    'What is Alan (AI|Platform|)',
    p => {
        p.play('Alan AI is a Voice AI platform that lets you add a (complete|) visual voice experience to any application. (The voice in this application is powered by Alan AI.|)');
    },
);

question(
    'Do you have $(R* .+)',
    'I want $(R* .+)',
    p => {
        p.play(`No, we don't have ${p.R.value}`);
    },
);

question(
    'What (kind|types) (of|) (items|products|goods) do you have (to order|)',
    'What do you have (to order|)',
    'What is available',
    'What can I (order|have|get|buy)',
    p => {
        p.play(
            'We have several types of clothes, accessories, and home (items|goods) available. (What would you like to order?|)',
            'We offer clothes, accessories, and home (items|goods). (What would you like to order?|)'
        );
    },
);

//Visual state related questions
question(
    'What (screen|) is this',
    'Where am I',
    'What commands can I use here',
    p => {
        if (!p.visual.screen) {
            p.play('This is a sample Flutter app powered by Alan Platform. Unfortunately, I am not able to say what screen you are on');
            return;
        }
        switch (p.visual.screen) {
            case 'all':
                p.play('This is the main screen showing all available products.');
                p.play('Here you can (use commands|ask questions) like:');
                p.play(`Order (a|the|) (${ALL_PRODUCTS}).`);
                p.play('What products do you have?');
                p.play(`And show (${CATEGORIES}).`);
                break;

            case 'clothing':
                p.play('These are all of the available clothing.');
                p.play('Here you can (use commands|ask questions) like:');
                p.play(`Order (a|the|) (${CLOTHING_PRODUCTS}).`);
                p.play('And what types of clothing do you have?');
                break;

            case 'accessories':
                p.play('These are all of the available accessories.');
                p.play('Here you can (use commands|ask questions) like:');
                p.play(`Order (a|the|) (${ACCESSORIES_PRODUCTS}).`);
                p.play('And what types of accessories do you have?');
                break;

            case 'home':
                p.play('These are all of the available home (goods|items).');
                p.play('Here you can (use commands|ask questions) like:');
                p.play(`Order (a|the|) (${HOME_PRODUCTS}).`);
                p.play('And what types of home (goods|items) do you have?');
                break;

            case 'cart':
                p.play('This is your cart. Here you can ask questions about your order, change it or checkout');
                break;
        }
    },
);
