// {Name: Bitcoin_Questions}
// {Description: Supporting script for Bitcoin. Gives responses on general questions about Bitcoin.}

title('Bitcoin questions');

intent(
    'what does this (app|script|project) do',
    'what is this (app|script|)',
    'why do I need this',
    reply('This is a Bitcoint Example project. It will show you how to make an asynchronous HTTP request to provide the user with accurate and dynamic data. In this case, data about Bitcoin rates.'),
);

intent(
    'how does this work',
    'how to use this',
    'what can I do here',
    'what (should I|can I|to) say',
    'what commands are available',
    reply('Just ask me: (what is Bitcoin price|how much is Bitcoin in euro|what was the Bitcoin price over the past year)'),
);

intent(
    'what is Bitcoin',
    reply('Bitcoin is a type of popular digital currency, and this project can help you track bitcoin prices.')
);

intent(
    'why do I need Bitcoin',
    reply('Bitcoin offers an efficient means of transferring money over the internet and is controlled by a decentralized network with a transparent set of rules, thus presenting an alternative to central bank-controlled fiat money.'),
);

intent(
    'how to buy Bitcoin',
    reply('The first step is to setup a bitcoin wallet. Traditional payment methods such as a credit card, bank transfer, or debit cards will allow you to buy bitcoins on exchanges that you can then send to your wallet.'),
);

intent('where to buy Bitcoin',
    reply('As of now, best places to buy Bitcoin are: Coinbase, Robinhood, Square Cash, Binance. Search for them in your browser.'),
);

intent(
    'is Bitcoin legal',
    reply('As of now, Bitcoin is legal in the United States, Japan, the United Kingdom, Canada, and most other developed countries. In the emerging markets, the legal status of Bitcoin still varied dramatically.'),
);

intent(
    'how many Bitcoins are left',
    reply('There are 21 million Bitcoins total of which almost 17 million are in circulation. There are a little over 4 million bitcoins left that are not in circulation yet. The Bitcoin source code determines how many bitcoins are left.'),
);

intent(
    'who owns the most Bitcoin',
    reply('It\'s unknown person or group of people using the name Satoshi Nakamoto. The person or group who has invented Bitcoin.'),
);

intent(
    'how to (start mining|mine) (Bitcoin|)',
    reply('It\'s an advanced topic and it\'s too long to be explained during this conversation. Search over the internet, there are lots of different guides available.'),
);

intent(
    'Is it the good time to invest into Bitcoin',
    reply('You will need current Bitcoin price and Bitcoin price over the past year to compare. Ask me about this topics and decide by yourself!'),
);
