const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard", requestCallback);

function requestCallback (err, res, html){
     const $ = cheerio.load(html);

      const teamsObject = $("a.name-link .name");
      const teamsScoreObject = $( ".match-info.match-info-MATCH.match-info-MATCH-half-width .score");  //$(".match-info.match-info-MATCH.match-info-MATCH-full-width .score"); used half instead of full to get accurate result

      const loosingTeam = $(".team-gray .name-link .name").text();

      const winningTeam = $(teamsObject[0]).text() == loosingTeam ? $(teamsObject[1]).text() : $(teamsObject[0]).text();

      const scoreOfWinners = $(teamsObject[0]).text() == loosingTeam ? $(teamsScoreObject[0]).text() : $(teamsScoreObject[0]).text();

      console.log("Winning Team is ",winningTeam);
      console.log("Winnnig Team Score is",scoreOfWinners);
      console.log($(" div>div>div.status-text").text());
}