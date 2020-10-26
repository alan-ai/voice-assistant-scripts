// {Name: Weather}
// {Description: Provides weather conditions and details like temperature, humidity, and pressure. Shows a widget with weather information.}

const WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=4acdb6432d18884ebc890c13a9c3cc85';
const FORECAST_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=4acdb6432d18884ebc890c13a9c3cc85';
const DATE_FORMAT = 'dddd, MMMM Do YYYY';
const PREFIX_TODAY = [
    'It\'s currently',
    'There\'s',
    'There are',
];
const PREFIX_FORECAST = [
    'It will be',
    'There will be',
    'There will be',
];
const DESCRIPTION = {
    200: ['thunderstorms with light rain', 2],
    201: ['thunderstorms with rain', 2],
    202: ['thunderstorms with heavy rain', 2],
    210: ['light thunderstorms', 2],
    211: ['thunderstorms', 2],
    212: ['heavy thunderstorms', 2],
    221: ['on and off thunderstorms', 2],
    230: ['thunderstorms with light drizzle', 2],
    231: ['thunderstorms with drizzle', 2],
    232: ['thunderstorms with heavy drizzle', 2],
    300: ['light drizzle', 1],
    301: ['drizzling', 0],
    302: ['heavy drizzle', 1],
    310: ['light rain', 1],
    311: ['raining', 0],
    312: ['heavy rain', 1],
    313: ['rain showers', 2],
    314: ['heavy rain showers', 2],
    321: ['drizzling', 0],
    500: ['light rain', 1],
    501: ['moderate rain', 1],
    502: ['heavy rain', 1],
    503: ['very heavy rain', 1],
    504: ['very heavy rain', 1],
    511: ['freezing rain', 1],
    520: ['light rain, change', 1],
    521: ['rain showers', 2],
    522: ['heavy rain showers', 2],
    531: ['on and off rain showers', 2],
    600: ['light snow', 1],
    601: ['snowing', 0],
    602: ['heavy snow', 1],
    611: ['sleet', 1],
    612: ['sleet showers', 2],
    615: ['snowing with light rain', 0],
    616: ['snowing with rain', 0],
    620: ['light snow showers', 2],
    621: ['snow showers', 2],
    622: ['heavy snow showers', 2],
    701: ['misty', 0],
    711: ['smoky', 0],
    721: ['hazy', 0],
    731: ['dust swirls', 2],
    741: ['foggy', 0],
    751: ['sandy', 0],
    761: ['dusty', 0],
    762: ['volcanic ash', 1],
    771: ['squalls', 2],
    781: ['tornados', 2],
    800: ['clear skies', 2],
    801: ['partly cloudy', 0],
    802: ['scattered clouds', 2],
    803: ['broken clouds', 2],
    804: ['overcast', 0]
};

title('Weather');

intent(
    '(what) (is|) (the|) $(QUERY weather|temperature|humidity|pressure) (like|)',
    '(what) (is|) (the|) $(QUERY weather|temperature|humidity|pressure) (like|) in $(LOC)',
    '(what) (is|) (the|) $(QUERY weather|temperature|humidity|pressure) (like|) (will be|was|) (on|) $(DATE)',
    '(what) (is|) (the|) $(QUERY weather|temperature|humidity|pressure) (like|) in $(LOC) (will be|was|) (on|) $(DATE)',
    '(is it|will it|is it going to) $(QUERY raining|rain|hot|warm|cold|chilly|cool)',
    '(is it|will it|is it going to) $(QUERY raining|rain|hot|warm|cold|chilly|cool) in $(LOC)',
    '(is it|will it|is it going to) $(QUERY raining|rain|hot|warm|cold|chilly|cool) (on|) $(DATE)',
    '(is it|will it|is it going to) $(QUERY raining|rain|hot|warm|cold|chilly|cool) in $(LOC) (will be|was|) (on|) $(DATE)',
    p => {
        p.state.query = p.QUERY.value;
        if (p.LOC) {
            p.state.location = p.LOC.value;
        }
        if (p.DATE) {
            p.state.date = p.DATE;
        }
        playWeather(p);
    },
);

follow(
    '(What is|is it|) (the|) $(QUERY weather|temperature|humidity|pressure|raining)',
    p => {
        p.state.query = p.QUERY.value;
        playWeather(p);
    },
);

follow('(And|) (what about|on|) $(DATE)', p => {
    p.state.date = p.DATE;
    playWeather(p);
});

follow('(What|and|) (is|) (in|at|about|) $(LOC)', p => {
    p.state.location = p.LOC.value;
    playWeather(p);
});

follow('(units|) (to|) (in|) $(UNITS metric|standard|imperial|celsius|fahrenheit)', p => {
    const units = p.UNITS.value.toLowerCase();
    p.state.units = getUnits(units);
    playWeather(p);
});

follow('(Where|What place)', p => {
    p.play(p.state.location? `(in|) ${p.state.location}` : 'Sorry, I don\'t know');
});

follow('(When|What time)', p => {
    p.play(p.state.date? `${p.state.date}` : 'Now');
});

follow('Thank you', p => {
    p.play('You are welcome!');
});

intent(
    'What does this app do?',
    'How does this work?',
    'What can I do here?',
    reply('This is a weather application. You can ask me anything about the weather, and I will try to answer it'),
);

const getLocationCtx = context(() => {
    follow('(it\'s|for|in|at|on|) $(LOC)', p => {
        p.resolve(p.LOC.value);
    });
    follow(
        '(I|) don\'t know',
        '(what) (can|should|must|) (I|we|) (to|) (say|point|tell)',
        p => {
            p.play('The weather in what place are you interested in?');
        },
    );
    fallback('(Please,|) (provide a|in what|point the) location');
});

async function playWeather(p) {
    const now = api.moment().tz(p.timeZone);
    const date = p.state.date? api.moment(p.state.date.date, p.timeZone) : now;
    const isToday = isDateToday(date, p.timeZone);
    const units = p.state.units || 'imperial';

    if (!p.state.location) {
        p.state.location = await getLocation(p);
    }

    const weatherUrl = `${isToday ? WEATHER_URL : FORECAST_URL}&units=${units}&q=${p.state.location}`;

    if (!isToday) {
        if (date.isBefore(api.moment(now).hours(0).minutes(0))) {
            p.play('Sorry, I do not know what was the weather in the past.');
            return;
        } else if (date.isAfter(api.moment(now).add(5 ,'days'))) {
            p.play('Sorry, I can guess weather within 5 days only.');
            return;
        }
    }

    let response;

    try {
        response = await api.axios.get(weatherUrl);
    } catch (error) {
        const code = error.response.status;

        p.play(`Could not get weather information for ${p.state.location}`)

        if (code === 404) {
            p.state.location = null;
        } else {
            console.log(`failed to get weather: ${error}, code: ${code}`);
        }
        return;
    }

    if (isToday) {
        playToday(p, response.data);
    } else {
        playForecast(p, response.data);
    }
}

function playForecast(p, data) {
    let tempMin;
    let tempMax;
    let wind;
    let pressure;
    let humidity;
    let rain = false;
    const desc = {};
    const icon = {};
    const dt = api.moment(p.state.date.date).format('YYYY-MM-DD');

    const query  = p.state.query || 'weather';
    const units = p.state.units || 'imperial';

    data.list.forEach((item) => {
        if (item.dt_txt.includes(dt)) {
            return;
        }

        tempMin = Math.min(isFinite(tempMin) ? tempMin : item.main.temp, item.main.temp);
        tempMax = Math.max(isFinite(tempMax) ? tempMax : item.main.temp, item.main.temp);
        wind = Math.max(isFinite(wind) ? wind : item.wind.speed, item.wind.speed);
        pressure = Math.max(isFinite(pressure) ? pressure : item.main.pressure, item.main.pressure);
        humidity = Math.max(isFinite(humidity) ? humidity : item.main.humidity, item.main.humidity);

        const {
            id,
            description,
        } = item.weather[0];

        if (description.includes('rain')) {
            rain = true;
        }

        desc[id] = desc.hasOwnProperty(id) ? desc[id] + 1 : 1;
        icon[id] = item.weather[0].icon;
    });

    let max = 0;

    let frequentWeatherId;

    Object.keys(desc).forEach(id => {
        const count = desc[id];
        if (max < count) {
            max = count;
            frequentWeatherId = id;
        }
    });

    showWeatherReport(p, units, {
        name: data.city.name,
        icon: icon[frequentWeatherId],
        desc: DESCRIPTION[frequentWeatherId][0],
        wind_speed: wind,
        temp: tempMax,
        humidity,
        pressure,
    });

    switch (query) {
        case 'rain':
        case 'raining':
            if (rain) {
                p.play(
                    `Yes, ${p.state.date} in ${p.state.location} we are expecting a rain`,
                    'Yes, don\'t forget to take an umbrella!',
                );
            } else {
                const on = p.state.date.indexOf(' ') === -1? '': 'on';
                p.play(`(No,| as I know) it will not be raining in ${p.state.location} ${on} ${p.state.date}`);
            }
            break;
        case 'temperature':
            p.play(`The temperature will be from ${Math.floor(tempMin)} to ${Math.floor(tempMax)} ${getDegrees(units)} degrees`);
            break;
        case 'humidity':
            p.play(`The humidity in ${p.state.location} will be ${humidity} %`);
            break;
        case 'pressure':
            p.play(`The pressure in ${p.state.location} will be ${pressure} hPa`);
            break;
        case 'weather':
            p.play(description(frequentWeatherId, tempMin, tempMax, p.state.location, units, false));
            break;
    }
}

function playToday(p, data) {
    const weatherDescription = data.weather[0].description;
    const query  = p.state.query || 'weather';
    const units = p.state.units || 'imperial';

    showWeatherReport(p, units, {
        name: data.name,
        icon: data.weather[0].icon,
        desc: weatherDescription,
        wind_speed: data.wind.speed,
        humidity: data.main.humidity,
        temp: data.main.temp,
        pressure: data.main.pressure,
    });

    switch (query) {
        case 'rain':
        case 'raining':
            if (weatherDescription.includes('rain')) {
                p.play('Yes, it\'s raining now. Don\'t forget to take an umbrella!');
            } else {
                p.play('(No|You are lucky), it\'s not raining now');
            }
            break;
        case 'temperature':
            p.play(`The temperature is ${Math.floor(data.main.temp)} ${getDegrees(units)} degrees in ${data.name}`);
            break;
        case 'humidity':
            p.play(`The humidity is ${data.main.humidity}% in ${data.name}`);
            break;
        case 'pressure':
            p.play(`The pressure is ${data.main.pressure} hPa in ${data.name}`);
            break;
        case 'weather':
            p.play(description(data.weather[0].id, data.main.temp, data.main.temp, p.state.location, units, true));
            break;
    }
}

function showWeatherReport(p, units, weatherData) {
    p.play({
        embeddedPage: true,
        page: 'weather.html',
        command: 'showWeather',
        weatherData,
        units,
    });
}

function description(id, temperatureMin, temperatureMax, location, units, isToday) {
    const description = DESCRIPTION[id][0];
    const prefixIndex = DESCRIPTION[id][1];

    const temperature = isToday ?
        Math.floor(temperatureMin) :
        (temperatureMin === temperatureMax ? Math.floor(temperatureMin) : ('from ' + Math.floor(temperatureMin)));

    const prefix = isToday ?
        PREFIX_TODAY[prefixIndex] :
        PREFIX_FORECAST[prefixIndex];

    const degreePrefix = prefixIndex > 0 ? 'it\'s' : '';

    return `${prefix} ${description} and ${degreePrefix} ${temperature} degrees ${getDegrees(units)} in ${location}`;
}

function getDegrees(units) {
    const unitsValue = units.toLowerCase();
    switch (unitsValue) {
        case 'metric':
            return 'Celsius';
        case 'imperial':
            return 'Fahrenheit';
        default:
            return 'Kelvin';
    }
}

function getUnits(units) {
    const unitsValue = units.toLowerCase();
    switch (unitsValue) {
        case 'celsius':
            return 'metric';
        case 'fahrenheit':
            return 'imperial';
        default:
            return unitsValue;
    }
}

function isDateToday(date, timeZone) {
    return !date || api.moment().tz(timeZone).format(DATE_FORMAT) === api.moment(date, timeZone).format(DATE_FORMAT);
}

function getLocation(p) {
    if (p.state.location) {
        return Promise.resolve(p.state.location);
    }
    p.play(
        'Where?',
        'I need you location',
    );
    return p.then(getLocationCtx);
}
