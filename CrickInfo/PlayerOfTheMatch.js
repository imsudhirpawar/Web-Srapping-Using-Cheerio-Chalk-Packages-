const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const { load } = require("cheerio");

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard",requestCallback);

function requestCallback(err, res, html){
    
   const $ = cheerio.load(html);
 
   console.log("Player of the Match is ",$($(".playerofthematch-name")[0]).text());
}