// {Name: Calculator}
// {Description: Provides responses for basic math queries.}


title('Calculator');

function plus(v1, v2) {
    return v1 + v2;
}

function minus(v1, v2) {
    return v1 - v2;
}

function mult(v1, v2) {
    return v1 * v2;
}

function divide(v1, v2) {
    if (v2 === 0) {
        return 'infinity';
    }
    return v1 / v2;
}

function squareRoot(v1) {
    if (v1 < 0) {
        return 'you can\'t take a square root of a negative number';
    }
    return Math.sqrt(v1);
}

function cubicRoot(v1) {
    if (v1 < 0) {
        return 'you can\'t take a cubic root of a negative number';
    }
    return Math.cbrt(v1);
}

function roundToLimit(num) {
    if(Math.abs(num) >= 1e19 || !num.toString().includes('e')) {
        return num;
    }
    const digitsCount = 15 - numDigits(num);
    return +(Math.round(num + 'e+' + digitsCount) + 'e-' + digitsCount);
}

function numDigits(x) {
    return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
}

function power(x, n) {
    return Math.pow(x, n);
}

function cube(x) {
    return power(x,3);
}

function square(x) {
    return power(x,2);
}

const operatorMap = {
    'plus': plus,
    'add': plus,
    '+': plus,
    'minus': minus,
    'subtract': minus,
    'take away': minus,
    '-': minus,
    'times': mult,
    'multiply': mult,
    '*': mult,
    'cubed': cube,
    'squared': square,
    'to the power': power,
    'power': power,
    'divide': divide,
    'divided': divide,
    'over': divide,
    '/': divide,
    'cubic root': cubicRoot,
    'square root': squareRoot,
    'root': squareRoot,
};

onCreateContext(p => {
    p.state.result = 0;
});

intent(
    '(what is|how much is|calculate|compute|) $(NUMBER) $(OPERATOR *|+|-|/|plus|minus|over|divided|divide|times|to the power) (of|) $(NUMBER)',
    '(what is|how much is|calculate|compute|) $(OPERATOR multiply|divide) $(NUMBER) (by|on|) $(NUMBER)',
    '(what is|how much is|calculate|compute|) $(OPERATOR cubic root|square root|root) of $(NUMBER)',
    '(what is|how much is|calculate|compute|) $(NUMBER) $(OPERATOR cubed|squared)',
    '(what is|how much is|calculate|compute|) $(NUMBER) to the $(ORDINAL) $(OPERATOR power)',
    p => {
        const operator = operatorMap[p.OPERATOR.value];

        if (!operator) {
            p.play(`(Sorry|) I can't do ${p.OPERATOR} (yet|)`);
            return;
        }

        if (!p.NUMBER_.length) {
            p.play('I need at least one argument');
            return;
        }

        if (p.NUMBER_.length === 1) {
            if(p.ORDINAL) {
                p.state.result = operator(p.NUMBER.number, p.ORDINAL.number);
                p.state.result = roundToLimit(p.state.result);
                p.play(
                    `${p.NUMBER.number} to the ${p.ORDINAL.number} power (is|equals to) ${p.state.result}`,
                    `(it's|) ${p.state.result}`,
                );
            } else {
                if ((p.OPERATOR.value === 'square root' || p.OPERATOR.value ==='root') && (p.NUMBER.number < 0)) {
                    p.play(`I can't take a square root of a negative number ${p.NUMBER.number}`);
                    return;
                }

                if ((p.OPERATOR.value === 'cubic root') && (p.NUMBER.number < 0)) {
                    p.play(`I can't take a cubic root of a negative number ${p.NUMBER.number}`);
                    return;
                }

                p.state.result = operator(p.NUMBER.number);
                p.state.result = roundToLimit(p.state.result);
                p.play(
                    `${p.OPERATOR} (of) ${p.NUMBER_[0]} (is|equals to) ${p.state.result}`,
                    `(it's|) ${p.state.result}`,
                );
            }
        }

        if (p.NUMBER_.length === 2) {
            if ((p.OPERATOR.value === 'divide' || p.OPERATOR.value === '/') && (p.NUMBER_[1].number === 0)) {
                p.play(`I can't divide ${p.NUMBER_[0]} by zero`)
            } else {
                p.state.result = operator(p.NUMBER_[0].number, p.NUMBER_[1].number);
                p.state.result = roundToLimit(p.state.result);
                p.play(
                    `${p.NUMBER_[0]} ${p.OPERATOR} ${p.NUMBER_[1]} (is|equals to) ${p.state.result}`,
                    `(it's|) ${p.state.result}`,
                );
            }
        }
    },
);

follow('$(OPERATOR *|+|-|/|plus|minus|over|divided|divide|times) $(NUMBER)', p => {
    const operator = operatorMap[p.OPERATOR.value];
    if (!operator) {
        p.play(`(Sorry|) I can't do ${p.OPERATOR} (yet|)`);
        return;
    }
    const prevState = p.state.result;
    p.state.result = roundToLimit(operator(prevState, p.NUMBER.number));
    p.play(
        `${prevState} ${p.OPERATOR} ${p.NUMBER} (is|equals to) ${p.state.result}`,
        `(it's|) ${p.state.result}`,
    );
});


// Q/A for Alan Playground
intent(
    'What does this app do?',
    'How does this work?',
    'What can I do here?',
    reply('This is a calculator project, and you can do simple math operations here Just ask me any mathematical calculation, and I will try to answer it'),
);
