// {Name: News}
// {Description: Gives the latest headlines on topics like health, science, entertainment, sports, business, and technology. Each news headline has a corresponding image. }

title("News")

const page = 5;
const key = "7bdfb1b10aca41c6becea47611b7c35a";

let TOPICS = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
let TOPICS_INTENT = [];
for (let i = 0; i < TOPICS.length; i++ ) {
    TOPICS_INTENT.push(TOPICS[i] + "~" + TOPICS[i]);
}
TOPICS_INTENT = TOPICS_INTENT.join('|') + '|';

intent(`(show|what is|tell me|what's|what are|what're|read) (the|) (recent|latest|) $(N news|headlines) (in|about|on|) $(T~ ${TOPICS_INTENT})`,
       `(read|show|get|bring me) (the|) (recent|latest|) $(T~ ${TOPICS_INTENT}) $(N news|headlines)`,
    p => {
        let headlinesUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=7bdfb1b10aca41c6becea47611b7c35a";
        if (p.T.label) {
            headlinesUrl = headlinesUrl + "&category=" + p.T.label;
        }
        api.request(headlinesUrl, function (error, response, body) {
            if (error || response && response.statusCode !== 200) {
                print('failed to get news' + error);
                p.play(`(Sorry,|) (Something went wrong.|There was an error.|) (I'm unable to get the news at this time.|I wasn't able to get the news.) (Please try again.|)`);
            } else {
                let headlines = [];
                let images = [];
                let res = JSON.parse(body);
                let articles = res.articles;
                let max = Math.min(page, articles.length);
                for (let i = 0; i < max; i++ ) {
                    let article = articles[i];
                    let name = article.source.name;
                    let author = article.author;
                    let title = article.title;
                    let description = article.description;
                    let image = article.urlToImage;
                    if (title) {
                        headlines.push(title);
                        images.push(image);
                    }
                }
                p.play({embeddedPage:true, page: "news.html", command: "newHeadlines", headlines: headlines, images: images});
                if (p.T && p.T.label) {
                    p.play(`Here are the (latest|recent) $(N headlines) on ${p.T.label}.`,
                    `Here's the (recent|latest) $(N news) on ${p.T.label}.`,
                    `Here are the (latest|recent) ${p.T.label} $(N headlines).`,
                    `Here's the (recent|latest) ${p.T.label} $(N news)`);
                } else {
                    p.play(`Here are the (latest|recent) $(N headlines).`,
                    `Here's the (latest|recent) $(N news).`);
                }
                for (let y = 0; y < headlines.length; y++ ) {
                    p.play({embeddedPage:true, command: "highlight", page: "news.html", head: headlines[y], image: images[y]});
                    p.play(`${headlines[y]}`);
                }
                p.play({embeddedPage:true, command: "unSelect"});
            }
        })
    })

intent(`What does this app do?`, `How does this work?`, `What can I do here?`, `How should I use this?`,
    reply(`This is a news project, and you can provide the most recent headlines in mainstream media` +
        ` Just ask me anything about the news, and I will try to answer it`));

intent(`(types|categories|topics) (of|in) the news (now|)`, `What (types|categories|topics) of news do you have?`,
    reply(`We provide news on ` + TOPICS.join(", ")));
