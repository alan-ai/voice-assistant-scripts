// {Name: Hello_World}
// {Description: Hello World example of the Alan Platform functionality: intent() / play() / user- and pre-defined slots / contexts}

// Welcome to the Alan Platform.
// This example will introduce you to the main principles of Alan scripts and teach you how to create basic voice commands for your application.
// Other examples will cover more advanced commands and script logic.
//
// Let's start with a simple command.
// To define a voice command, we will use the 'intent()' function (https://alan.app/docs/server-api/commands-and-responses#intent).
// Responses can be played back to the user with the 'play()' function (https://alan.app/docs/server-api/commands-and-responses#play).

intent('Hello world', p => {
    p.play('Hi there');
});

// Try activating the button in the bottom right corner and saying "Hello world".
// You will hear "Hi there" as a response. Exactly as we defined previously.
// This was a voice interaction. You can also use the Debugging Chat, try typing in the same command - the result should be the same.

// You can use multiple patterns (https://alan.app/docs/server-api/patterns) in a single intent.
// This will allow you to have the same response played or action taken for different user inputs.

intent(
    'Who\'s there',
    'What\'s your name',
    p => {
        p.play(
            'My name is Alan.',
            'It\'s Alan.',
        );
    },
);

// Try: "Who's there" or "What's your name".
// Notice that the matched intent is different this time (the input bubble has a link to line number 23).

// You can also pass a list of patterns to the intent function.
const intentPatterns = [
    'What is your favorite food',
    'What food do you like',
];

intent(intentPatterns, p => {
    p.play('CPU time, yammy!');
});

// Try: "What is your favorite food" or "What food do you like".

// Notice that the patterns that we are using are quite similar sometimes.
// In this case, alternatives might be used in them (https://alan.app/docs/server-api/patterns#patterns-with-alternatives).
// Alternative sets are defined as (alt_1|alt_2|alt_n).

intent('(I will have|Get me) a coffee, please', p => {
    p.play('Sorry, I don\'t have hands to brew it.');
});

// Try: "I will have a coffee, please" or "Get me a coffee, please".

// You can define the alternative set to be optional (https://alan.app/docs/server-api/patterns#optional-alternatives).

intent('(Start|begin|take|) survey', p => {
    p.play('(Sure.|OK.|) Starting a customer survey.');
});

// Try: "Survey" and "Start survey".
// Notice that alternatives might also be used in responses.
// Response alternatives will take one of each set at random.
// In this example, possible responses are:
// - "Sure. Starting a customer survey."
// - "OK. Starting a customer survey."
// - "Starting a customer survey."

// Sometimes it is impossible to create a single pattern that will cover all possible variations and will not be overfit with meaningless combinations.
// Try to avoid this by using all that is described above. You can have multiple patterns with multiple alternative sets (strict or optional).

intent(
    '(How is|what is) the (weather|temperature) (today|)',
    'Today\'s forecast',
    p => {
        p.play(
            '(It is|Feels|) (great|awesome)!',
            'Rainy, windy, and cold. (A total mess!|)',
        );
    },
);

// Try: "How is the weather today", "Today's forecast", "What is the temperature".

// You can also use more than one 'play()'.
// In this case, responses will be played one after another.

intent('Let\'s play hide and seek', p => {
    p.play('Sure.');
    p.play('I\'ll count.');
    p.play('One');
    p.play('Two');
    p.play('Three');
    p.play('Found you!');
});

// Try: "Let's play hide and seek".

// Parts of the user input might be captured using slots (https://alan.app/docs/server-api/slots).
// Later, such slots and their values can be used to differ the logic or give meaningful responses to the user.
// Slots are defined as $(SLOT_NAME alt1|alt2|alt_n).

intent('(I want|get me|add) a $(ITEM notebook|cellphone)', p => {
    p.play('Your order is: $(ITEM). It will be delivered within the next 30 minutes.');
});

// Try: "I want a notebook" or "Add a cellphone".

// Every slot is an object and has the '.value' field. This field contains the user input exactly as the user said it.
// You can access slot fields with 'p.SLOT_NAME'.
// To use them in a string, you should define a string using the ` symbol and pass a desired slot field in ${}.

intent('I want my walls to be $(COLOR green|blue|orange|yellow|white)', p => {
    p.play(`Mmm, ${p.COLOR.value}. Nice, love it!`);
});

// Try: "I want my walls to be green" or "I want my walls to be orange".

// There are many predefined slots powered by our Named Entity Recognition (NER) system.
// For them, you don't need to define alternatives and instead you just define the type of the NER slot.
// Available types are DATE, TIME, NUMBER, ORDINAL, LOC, NAME.
//
// Some of them will have their own special fields to support logic applicable to this slot type.
// Such fields are:
// DATE - .date, .luxon, .moment
// NUMBER - .number
// TIME - .time
// ORDINAL - .number
//
// Learn more about predefined slots here: (https://alan.app/docs/server-api/slots#predefined-slots).
//
// Let's take the DATE predefined slot as an example.

intent('What is $(DATE)', p => {
    const formattedDate = p.DATE.moment.format('dddd, MMMM Do YYYY');

    p.play(`${p.DATE.value} is a date`);
    p.play(`It is ${formattedDate}`);
});

// Try: "What is today", "What is tomorrow" and "What is next Friday".
// The '.value' field of this slot contains the user input, and the '.moment' field contains the moment.js object.

// But what to do if you need to have more than one predefined slot of the same type in the pattern?
// We have a solution for this case!
// When you use more than one slot of the same type, we automatically create an array containing the slot objects.
// This array will be named as the predefined slot appended by the '_' symbol.
// The same logic applies to user-defined slots.
// In patterns, the '_' symbol might be used as a pluralizer if added after a word. It means that this word might be used in both singular and plural forms.

intent('Add $(NUMBER) $(INSTRUMENT trumpet_|guitar_|violin_) and $(NUMBER) $(INSTRUMENT trumpet_|guitar_|violin_)', p => {
    console.log('Numbers array:', p.NUMBER_);
    console.log('Instruments array:', p.INSTRUMENT_);
    p.play(`The first position of your order is: ${p.NUMBER_[0].number} ${p.INSTRUMENT_[0].value}`);
    p.play(`The second position of your order is: ${p.NUMBER_[1].number} ${p.INSTRUMENT_[1].value}`);
});

// Try: "Add two guitars and one violin" or "Add five trumpets and three guitars".
// In this intent, we also use the 'console.log()' function. The output of this function will be printed into the Info logs.

// Just like in real world conversations, in voice scripts some user commands may have meaning only within a context.
// On the Alan Platform you can define such contexts (https://alan.app/docs/server-api/contexts#defining-contexts).
// After that you will add to them follows (https://alan.app/docs/server-api/contexts#follows), special commands available only when the context is active.

// There are two ways how a context can be activated.
// The first approach is to have an intent defined in the context.

const openContext = context(() => {
    intent('Activate the context', p => {
        p.play('The context is now active');
    });

    follow('Is the context active', p => {
        p.play('Yes. (It is active.|)');
    });
});

// Try: "Is the context active" -> "Activate the context" -> "Is the context active"
// Notice that the first time you will ask about the context being active Alan can't match your command.
// You can debug which commands are available by using the flowchart (press the expand button on the "map" widget in the bottom right corner).
// Active commands will have the white background, inactive - grey.

// Another way how you can activate a context is by using the then() function (https://alan.app/docs/server-api/contexts#activating-the-context-manually).

let chooseDrink = context(() => {
    follow('(I want|get me) a $(DRINK tea|cup of tea|soda)', p => {
        p.play(`You have ordered a ${p.DRINK.value}.`);
    })
});

intent('Can I have something to drink', p => {
    p.play('(Sure|Yes), we have tea and soda.');
    p.play('Which would you like?');
    p.then(chooseDrink);
});

// Try: "I want a cup of tea" -> "Can I have something to drink" -> "Get me a soda".
// Notice: the first command wasn't matched again. This is because the context with this command wasn't active.

// Contexts are very powerful tools at your disposal.
// You can even create a conversational chain of any depth you like.

let confirmOrder = context(() => {
    follow('Yes', p => {
        p.play('Your order is confirmed');
    });
    
    follow('No', p => {
        p.play('Your order is cancelled');
    });
});

let chooseDish = context(() => {
    follow('Get me a $(DISH pizza|burger)', p => {
        p.play(`You have ordered a ${p.DISH.value}. Do you confirm?`);
        p.then(confirmOrder);
    })
});

intent('What is on the menu', p => {
    p.play('We have pizza and burgers');
    p.then(chooseDish);
});

// Before trying the next set of commands make sure that the flowchart is expanded.
// Notice how different contexts are being activated one after another.
// Try: "Yes" or "Get me a pizza".
// Notice that they are unavailable.
// Try: "What is on the menu" -> "Get me a pizza" -> "Yes" or "No".

// Questions to help with script/app usage
question(
    'What does this (app|script|project) do',
    'What is this (app|script|project|)',
    'Why do I need this',
    reply('This is a Hello World Example project. Its main purpose is to get you introduced to basics of the Alan Platform!'),
);

question(
    'How does this work',
    'How to use this',
    'What can I do here',
    'What (should I|can I|to) say',
    'What commands are available',
    reply('Just say: (hello world|what is the weather today|what is tomorrow|Add two guitars and one violin).'),
);