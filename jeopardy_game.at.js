// {Name: Jeopardy_Game_Logic}
// {Description: Jeopardy game}

onCreate((p) => {
    p.userData.answer = '';
    p.userData.categoryIntent = '';
    p.userData.categoryPrices = '';
});

project.globalPrices = Object.keys(project.data.reduce((map, question) => {
    if (question.value && isQuestionNew(question)) {
        map[parsePrice(question.value)] = true;
    }
    return map;
}, {})).join('|');

function isQuestionNew(question) {
    return parseInt(question.show_number) >= 4085;
}

function initRandomCategories() {
    const categories = [];
    let i = _.random(0, project.data.length - 1);
    while (categories.length < 4) {
        if (project.data[i]) {
            const quesiton = project.data[i];
            const category = quesiton.category.toLowerCase()
            if (quesiton.round === 'Jeopardy!' && !categories.includes(category) && isQuestionNew(quesiton)) {
                categories.push(category);
            }
            i = _.random(0, project.data.length - 1);
        }
    }
    return categories;
}

function getQuestionTree(initedCategories) {
    return project.data.reduce((tree, question) => {

        if (question.value && isQuestionNew(question)) {
            const categoryName = question.category.toLowerCase();
            let category = tree[categoryName];

            if (initedCategories.includes(categoryName) && question.round === 'Jeopardy!') {
                const price = parsePrice(question.value);

                if (!category) {
                    category = {};
                    tree[categoryName] = category;
                }

                let priceCategory = category[price];

                if (!priceCategory) {
                    priceCategory = [];
                    category[price] = priceCategory;
                }

                priceCategory.push(question);
            }
        }

        return tree;
    }, {})
}

function getCategoryIntent(questionTree) {
    return Object.keys(questionTree)
        .map(categoryKey => {
            const intents = project.subjects[categoryKey];

            return intents ?
                intents.map(categoryIntent => {
                    return `${categoryIntent}~${categoryKey}`;
                }).join('|') :
                `${categoryKey}~${categoryKey}`;
        })
        .join('|');
}

function getPriceCategoryIntent(category) {
    return Object.keys(category).join('|');
}

async function startRound(p) {
    p.play({
        command: 'gameData',
        data: p.userData.questionTree,
        embeddedPage: true,
        page: 'jeopardy.html',
    });
    p.play('Please select a category and value of a question');

    const { price, category } = await p.then(categoryContext);
    const questions = p.userData.questionTree[category][price];

    if (!questions) {
        p.play(`No question for ${price} dollars in the ${category} category`);
    } else {
        const question = questions[Math.round(Math.random() * Math.floor(questions.length - 1))];
        const questionText = question.question.replace(/<(.|\n)*?>/g, '');
        p.play({
            command: 'showQuestion',
            question: questionText,
            value: question.value,
            total: p.userData.score,
            embeddedPage: true,
            page: 'jeopardy.html',
        });
        p.userData.answer = question.answer.replace(/<(.|\n)*?>/g, '');
        p.play(questionText);

        return p.then(roundContext, { price, category, question });
    }
}

async function endRound(p, isCorrect) {
    const category = p.userData.questionTree[p.category];
    const questions = category[p.price];
    const question = p.question;
    const answer = p.ANSWER.value.toLowerCase();

    p.play({
        command: 'answer',
        result: isCorrect,
        answer: question.answer,
        total: p.userData.score,
        value: parsePrice(question.value),
        player: answer,
        delay: 0,
        embeddedPage: true,
        page: 'jeopardy.html',
    });

    if (isCorrect) {
        p.play('Congratulations! This is the correct answer!');
        const prize = parsePrice(p.question.value);
        p.userData.score += prize;

        p.play(`You win ${prize}$`);

        if (p.userData.score > prize) {
            p.play(`Your total score is ${p.userData.score}$`);
        }
    } else {
        p.play('Sorry. This is wrong. The correct answer is:');
        p.play(p.question.answer);
    }

    p.play(`Would you like to play the next round or you'll get your money?`);

    const playNext = await p.then(roundEndContext);

    if (playNext) {
        if (questions.length > 1) {
            questions.splice(questions.indexOf(p.question), 1);
            category[p.price] = questions;
        } else {
            delete category[p.price];

            if (!Object.keys(category).length) {
                delete p.userData.questionTree[p.category];
                p.category = null;
            }

            p.userData.categoryIntent = getCategoryIntent(p.userData.questionTree);
        }

        p.userData.categoryIntent = getCategoryIntent(p.userData.questionTree);
        await startRound(p);
    } else {
        p.play({
            command: 'gameOver',
            total: p.userData.score,
            embeddedPage: true,
            page: 'jeopardy.html',
        });

        p.play(`You've done a great job! Your total score is ${p.userData.score}$`);
    }
    p.resolve();
}

intent(
    `(Let's|I want to) play (Jeopardy|)`,
    `(start|play|) (a|) (new|) game`,
    `reset`,
    async p => {
        p.play({
            command: 'reset',
            embeddedPage: true,
            page: 'jeopardy.html',
        });
        p.userData.questionTree = getQuestionTree(initRandomCategories());
        p.userData.categoryIntent = getCategoryIntent(p.userData.questionTree);
        p.userData.score = 0;
        p.play(`Welcome to Jeopardy! Let's begin.`);
        startRound(p);
    },
);

const roundEndContext = context(() => {
    follow('(yes|continue|next|let\'s go|go) (the|) (round|game|)', p => {
        p.resolve(true);
    });

    follow('(no|stop|finish|money|end)', p => {
        p.resolve(false);
    });

    fallback('Do you want to play the next round?');
});

const roundContext = context(() => {

    follow('(what is|what are|who is|who are|) (the|) $(ANSWER~ u:answer)', p => {
        endRound(p, true);
    });

    follow('(what is|what are|who is|who are|) (the|) $(ANSWER* .+)', p => {
        endRound(p, false);
    });

    follow('repeat (the|) (question|please|)', p => {
        p.play({
            command: 'showQuestion',
            question: p.question,
            value: p.question.value,
            total: p.userData.score,
            embeddedPage: true,
            page: 'jeopardy.html',
        });
        p.play(p.question.question);
    });
});


const categoryContext = context(() => {

    follow('$(CATEGORY~ u:categoryIntent) (for|) $(PRICE p:globalPrices)', async p => {

        const price = parseInt(p.PRICE.value);
        const category = p.CATEGORY.label.toLowerCase();

        console.log({price, category});

        const categoryPrices = p.userData.questionTree[category];

        if (categoryPrices[price]) {
            p.resolve({price, category});
        } else {
            p.play(`There is no question for ${price}$ in the ${category} category`);
        }
    });

    follow('$(CATEGORY~ u:categoryIntent)', async p => {
        const category = p.CATEGORY.label;
        p.userData.category = category;
        p.userData.categoryPrices = getPriceCategoryIntent(p.userData.questionTree[category]);
        p.play('Please select the value of a question');
        const price = await p.then(priceContext);

        p.resolve({price, category});
    });
});

const priceContext = context(() => {
    follow('$(PRICE u:categoryPrices)', p => {
        p.resolve(parseInt(p.PRICE.value));
    });

    fallback('Please select the value of a question');
});

function parsePrice(price) {
    return parseInt(price.replace('$', '').replace(',', ''));
}
