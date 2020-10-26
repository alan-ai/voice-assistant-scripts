// {Name: Translator}
// {Description: Translate phrases from one language to another}

const allLang = {
    "Russian": "ru",
    "German": "de",
    "Spanish": "es",
    "French": "fr",
    "English": "en",
    "Afrikaans": "af",
    "Albanian": "sq",
    "Arabic": "ar",
    "Armenian": "hy",
    "Bulgarian": "bg",
    "Chinese": "zh",
    "Croatian": "hr",
    "Czech": "cs",
    "Danish": "da",
    "Dutch": "nl",
    "Estonian": "et",
    "Georgian": "ka",
    "Greek": "el",
    "Hebrew": "he",
    "Hindi": "hi",
    "Hungarian": "hu",
    "Indonesian": "id",
    "Italian": "it",
    "Japanese": "ja",
    "Kashmiri": "ks",
    "Korean": "ko",
    "Malay": "ms",
    "Mongolian": "mn",
    "Nepali": "ne",
    "Norwegian": "nb",
    "Polish": "pl",
    "Portuguese": "pt",
    "Serbian": "sr",
    "Sanskrit": "sa",
    "Slovak": "sk",
    "Slovenian": "sl",
    "Turkish": "tr",
    "Ukrainian": "uk",
    "Vietnamese": "vi",
    "Yiddish": "yi"
}

const languages = {
    "russian": "ru",
    "german": "de",
    "spanish": "es",
    "french": "fr",
    "english": "en"
}

const LANGS_INTENT = Object.keys(allLang).join('|');

const whatLanguage = context(() => {
    follow(`(translate to|use|) $(L ${LANGS_INTENT})`, p => {
        let lang = languages[p.L.toLowerCase()];
        if (!lang) {
            p.play(`I can not translate this to ${p.L}. Please choose another language`);
        } else {
            p.resolve(lang);
        }
    })

    follow(`(What|Which) languages (are available|can I use)`, p => {
        p.play(`(You can translate|The available languages are) ${joinAnd(Object.keys(languages))}`);
    })


    follow('(cancel|stop|break|exit) (translation|it|)', p => {
        p.play("Okey");
        p.resolve(null);
    })

    fallback("Please, say, what is destination langauge?", "To what langauge?", "Specify the language for translation");
})

const whatPhrase = context(() => {
    follow("$(P* .+)", p => p.resolve(p.P.value))
})

intent("Translate", async p => {
    p.play("OK, what would you like me to translate?");
    let text = await p.then(whatPhrase);
    p.play("Ok, In which language?", "Ok, To what language?");
    let lang = await p.then(whatLanguage);
    translate(p, text, lang);
})

intent(`Can (you|I) translate to $(L ${LANGS_INTENT})`,
    `(Can you|Do you) (understand|speak|translate to) $(L ${LANGS_INTENT})`, async p => {
        let lang = languages[p.L.toLowerCase()];
        if (lang) {
            p.play("Yes, sure. What phrase do you want to translate?");
            let text = await p.then(whatPhrase);
            translate(p, text, lang);
        } else {
            p.play(`No, sorry, I can only translate ${joinAnd(Object.keys(languages))}`)
        }
    })

intent(`Translate $(W* .+) (in|)to $(L ${LANGS_INTENT})`,
    `(How|) (do you|would you|to|) say $(W* .+) (in|on) $(L ${LANGS_INTENT})`,
    `What is $(W* .+) in $(L ${LANGS_INTENT})`, p => {
        let lang = languages[p.L.toLowerCase()];
        if (!lang) {
            p.play(`I can't translate this to ${p.L}. Please choose another language`,
                `Sorry, I can only translate ${joinAnd(Object.keys(languages))}`);
        } else {
            translate(p, p.W.value, lang);
        }
    })

intent(`(How|) (do you|would you|to|) say $(W* .+)`, `translate $(W* .+)`, `$(W* .+)`,
    `What is $(W* .+)`, async p => {
        p.play("In which language?", "To what language?");
        let lang = await p.then(whatLanguage);
        translate(p, p.W.value, lang);
    })

intent(`(What|Which) languages (are available|can I use)`, p => {
    p.play(`You can translate English to ${joinAnd(Object.keys(languages).map(capitalize))}`);
})

intent("Help (me|)", "What (to|can I) do (here|)", p => {
    p.play(`I can translate ${joinAnd(Object.keys(languages))}. For example, you can ask me how to translate (Hello|Artificial Intelligence|Good day) to (${Object.keys(languages).join(`|`)})`);
})

function translate(p, text, lang) {
    if (!lang) {
        return;
    }
    if (lang === 'en') {
        p.play({command: 'showTranslation', srcLang: 'English', dstLang: 'English',
            srcText: text, dstText: text, embeddedPage: true, page: "translation.html"});
        p.play(text);
        return;
    }

    apiCall(p, 'translate', {text: text, srcLang: 'en', dstLang: lang}, response => {
        if (!response.error) {
            p.play({command: 'showTranslation', srcLang: 'English', dstLang: (_.invert(allLang))[lang],
                srcText: text, dstText: response.translated, embeddedPage: true, page: "translation.html"});
            p.play(voice(lang), response.translated);
        } else {
            console.log(response.error);
        }
    });
}

function apiCall(p, command, param, callback) {
    let jsp = {
        url: "https://studio.alan.app/api_playground/" + command,
        strictSSL: false,
        method: 'POST',
        json: param,
        timeout: 3000,
    };
    api.request(jsp, (err, res, body) => {
        if (err || res.statusCode !== 200) {
            p.play('(Sorry|) something went wrong (with the server|)');
        } else if (body.error) {
            p.play(body.error);
        } else {
            callback(body);
        }
    });
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function joinAnd(list) {
    let head = list.slice(0, -1);
    return _.isEmpty(head) ? list[0] : head.join(", ") + ", and " + list.slice(-1);
}

