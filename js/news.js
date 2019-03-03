const https = require("https");
const API_KEY = "";

var url = 'https://newsapi.org/v2/everything?' +
'q=Samsung&' +
'from=2019-02-03&' +
'sortBy=popularity&' +
'apiKey=' + API_KEY;

function getNews(url){

    https.get(url, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            let objValues = JSON.parse(data);
            console.log(objValues.articles[0].title);
            console.log(objValues.articles[0].author);
            console.log(objValues.articles[0].description);
        });
    })
    .on("error", (err) => {
        console.log("Error: " + err.message);
    });
}

getNews(url);