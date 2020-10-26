// {Name: Yoda}
// {Description: Convert user text into the way how Yoda would say it}

project.statements = [
    "Train yourself to let go of everything you fear to lose",
    "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.",
    "Death is a natural part of life. Rejoice for those around you who transform into the Force. Mourn them do not. Miss them do not. Attachment leads to jealousy. The shadow of greed, that is.",
    "Always pass on what you have learned.",
    "Once you start down the dark path, forever will it dominate your destiny, consume you it will.",
    "In a dark place we find ourselves, and a little more knowledge lights our way.",
    "When you look at the dark side, careful you must be. For the dark side looks back.",
    "Many of the truths that we cling to depend on our point of view.",
    "Do or do not. There is no try.",
    "You will find only what you bring in.",
    "Always two there are, no more, no less. A master and an apprentice.",
    "The dark side clouds everything. Impossible to see the future is.",
    "You must unlearn what you have learned.",
    "Named must be your fear before banish it you can.",
    "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.",
    "The greatest teacher, failure is.",
    "Difficult to see. Always in motion is the future.",   
]

const yodaVoice = voice('de');

const whatPhrase = context(()=> {
    follow(`(How|) (do|would) (you|) (say|translate) $(I* (.+))`, p=> {
        p.resolve(p.I.value);
    });
    follow(`Stop this madness`, p => {
        p.play('ok sir!!')
    });
});
intent("(Give me some|) (inspiration|wisdom|)", "What would Yoda (say|tell me|believe|)?",
    "(Yoda|) (Enlighten|Inspire|) (me|)", p => {
       var temp = Math.floor(Math.random(10) * project.statements.length)
       p.play(project.statements[temp])  
});
intent("testing the widget", p =>{
    p.play({embeddedPage:true, page: "yoda.html"})
})
intent(`(Show me|) what can I do here?`, `How does this app work?`, p => {
    p.play(`In this application, you can ask Yoda for some wisdom or to translate text.`);
});
function apiCall(p, command, param, callback) {
    let jsp = {
        url: "https://studio.alan.app/api_playground/" + command,
        strictSSL: false,
        method: 'POST',
        json: param,
        timeout: 3000,
    };
    api.request(jsp, (err, res, body)=> {
        if (err || res.statusCode !== 200) {
            p.play('(Sorry|) something went wrong (on the server|)');
        } else if (body.error) {
            p.play(body.error);
        } else {
            callback(body);
        }
    });
}
intent(`(How|) (do|would) (you|) (say|translate) $(I* (.*))`, async p => {
	let phrase = p.I.value;
	if (!phrase.length) {
		p.play('should I say what?');
		phrase = await p.then(whatPhrase);
	}
	apiCall(p, 'askYoda', {query: phrase}, response => {
		if(!response.error) {
			p.play(yodaVoice, response.translated);
		} else {
			console.log(response.error);
		}
	});
});
