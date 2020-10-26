// {Name: Bitcoin}
// {Description: Gives Bitcoin price information, including visual charts of Bitcoin prices over the past week, month, and year.}

title('Bitcoin');

const DATE_FORMAT = 'YYYY-MM-DD';

intent(
    '(what was|what were|tell me|how much was|do you know|) (the|) Bitcoin (price_) (in the|over the|) past $(PERIOD week|month|year)',
    '(what is|what was|what were|do you know) the past $(PERIOD week|month|year) Bitcoin (price_)',
    'what (was|were) the Bitcoin (price_)',
    async p =>  {
        const period = p.PERIOD ? p.PERIOD.value : 'week';
        const start = getStartDate(period, p.timeZone);
        const end = api.moment().format(DATE_FORMAT);

        const url = `https://api.coindesk.com/v1/bpi/historical/close.json?currency=USD&start=${start}&end=${end}`;
        const data = await getData(url);

        if (!data) {
            return sendErrorMessage(p);
        }

        const values = [];
        const dates = [];

        Object.keys(data.bpi).forEach(date => {
            const value = Math.trunc(data.bpi[date]);
            dates.push(date);
            values.push(value);
        });

        const max = Math.max(...values);
        const min = Math.min(...values);

        p.play({
            embeddedPage: true,
            page: 'bitcoin_example.html',
            command: 'newChart',
            values,
            dates,
        });
        p.play(
            `(For|Over) the past ${period} the lowest Bitcoin price was ${min} dollars and the highest Bitcoin price was ${max} dollars`,
            `The past ${period}'s lowest Bitcoin price was ${min} dollars and the highest Bitcoin price was ${max} dollars`,
        );
    }
);

intent(
    'how much is Bitcoin',
    '(what is|tell me|find|do you know|) (the|) (price of Bitcoin|Bitcoin price) (in|) $(CURRENCY dollar|dollars|pound|pounds|euro|euros|ruble|rubles|)',
    'how much is Bitcoin in $(CURRENCY dollar|dollars|pound|pounds|euro|euros|ruble|rubles)',
    'how many $(CURRENCY dollar|dollars|pound|pounds|euro|euros|ruble|rubles) (do I need|does it cost|are needed) to buy Bitcoin',
    async p => {
        const currencyCode = p.CURRENCY && p.CURRENCY.value ? getCurrencyCode(p.CURRENCY.value) : 'USD';

        const url = `https://api.coindesk.com/v1/bpi/currentprice/${currencyCode}.json`;
        const data = await getData(url);

        if (!data) {
            return sendErrorMessage(p);
        }

        const price = Math.trunc(data.bpi[currencyCode].rate_float);
        const currencyName = getCurrencyString(currencyCode);

        p.play(`The (current|) (Bitcoin price|price of Bitcoin) is ${price} ${currencyName}`);
    }
);

function getCurrencyString(currencyCode) {
    const values = {
        EUR: 'euros',
        RUB: 'rubles',
        GBP: 'pounds',
        USD: 'dollars',
    };
    return values[currencyCode];
}

function getCurrencyCode(currencyString) {
    const values = {
        euro: 'EUR',
        euros: 'EUR',
        pound: 'GBP',
        pounds: 'GBP',
        ruble: 'RUB',
        rubles: 'RUB',
        dollar: 'USD',
        dollars: 'USD',
    };
    return values[currencyString.toLowerCase()];
}

function getStartDate(period, timeZone) {
    return api.moment().tz(timeZone).subtract(1,   `${period}s`).format(DATE_FORMAT);
}

function sendErrorMessage(p) {
    p.play(
        `(Something went wrong.|) I (wasn't able to|couldn't) get the Bitcoin prices. (Please try again|Please try again later|)`,
        `I'm unable to get Bitcoin prices now. (Please try again|Please try again later|)`,
    );
}

async function getData(url) {
    const response = await api.axios.get(url);
    return response.data;
}
