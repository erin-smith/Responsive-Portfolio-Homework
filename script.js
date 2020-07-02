$(document).ready(function(){
   function makeCard(title, description, image, link1, link2, bgcolor) {
      var cardLineA = $("<div>").addClass("flip-card");
      var cardLineB = $("<div>").addClass("flip-card-inner");
      var cardLineC = $("<div>").addClass("flip-card-front").html( '<img src="' + image + '" alt="' + title + '" style="width:300px;height:300px;">');
      var cardLineD = $("<div>").addClass("flip-card-back").css("background-color", bgcolor).html( '<h1>'+ title +'</h1>' + 
      '<p>' + description + '</p><button><a href="' + link1 + '">Repo</a></button><a href="' + link2 + '"><button>Site</a></button>');
      
      $("#test").append(cardLineA.append(cardLineB.append(cardLineC,cardLineD)));
  }

  makeCard("Burger", 
  "A MVC structured app where you can create and devour burgers (MySQL, Node, Express, Handlebars, ORM )!",
  'pics/burgerShot.png', "https://github.com/erin-smith/burger", "https://frozen-harbor-42097.herokuapp.com/", "lightseagreen");
  makeCard("Scheduler", 
  "This schedule-planner displays a daily 8am-6pm calendar and allows the user to plan appointments for each hour of the day. You can generate a new quote of the day as a daily heading for fun or inspiration.", 
    'pics/scheduler.png', "https://github.com/erin-smith/schedule-planner", "https://erin-smith.github.io/schedule-planner", "lightgreen");
  makeCard("Purple Pages", 
  "Group API Project:  A vital web application for finding which streaming service offers the TV show, sports program or film that you want to watch right NOW!", 
  'pics/purplepages.png', "https://github.com/erin-smith/Purple-Pages", "https://erin-smith.github.io/Purple-Pages/", "mediumpurple");
  makeCard("JavaScript Quiz", 
  "This a timed, multiple-choice JavaScript quiz that utilizes event clicks, elements that disappear and reappear, hover, and overlay.", 
  'pics/quiz.png', "https://github.com/erin-smith/Quiz", "https://erin-smith.github.io/Quiz/", "indianred");
  makeCard("Team Generator", 
  "A Node CLI app that generates a webpage of ID cards displaying your Software Team. Cards have user input and define a clear summary of info fro each member.", 
  'pics/team.png', 'https://github.com/erin-smith/team-generator', "https://www.youtube.com/watch?v=px2xPOccoKU", "cadetblue");
  makeCard("Resume Tile", 
  "This is an update of my First Webpage, Resume, Bio, and Current Contact Info.", 
  'pics/myfirstpage.png', "https://github.com/erin-smith/resume", "https://erin-smith.github.io/resume/", "burlywood");
  makeCard("Kill the Virus!", 
  "Inspired by COVID-19 back in March 20', This is my first ever videogame made in Scratch!", 
  'pics/game.png', "https://scratch.mit.edu/projects/378910339/", "https://scratch.mit.edu/projects/378910339/", "greenyellow");
  makeCard("Password Generator", 
  "A random password generator that populates a password based on user prompts and input!",
  'pics/passwordgen.png', "https://github.com/erin-smith/password-gen-homework", "https://erin-smith.github.io/password-gen-homework/", "lightpurple");
});
