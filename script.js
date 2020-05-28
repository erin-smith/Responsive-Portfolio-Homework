$(document).ready(function(){
   function makeCard(title, description, image, link1, link2, bgcolor) {
      var cardLineA = $("<div>").addClass("flip-card");
      var cardLineB = $("<div>").addClass("flip-card-inner");
      var cardLineC = $("<div>").addClass("flip-card-front").html( '<img src="' + image + '" alt="' + title + '" style="width:300px;height:300px;">');
      var cardLineD = $("<div>").addClass("flip-card-back").css("background-color", bgcolor).html( '<h1>'+ title +'</h1>' + 
      '<p>' + description + '</p><button><a href="' + link1 + '">Repo</a></button><a href="' + link2 + '"><button>Site</a></button>');
      
      $("#test").append(cardLineA.append(cardLineB.append(cardLineC,cardLineD)));
  }
  
  makeCard("Scheduler", 
    "This schedule-planner displays a daily 8am-6pm calendar and allows the user to plan appointments for each hour of the day. You can generate a new quote of the day as a daily heading for fun or inspiration.", 
    'pics/scheduler.png', "https://github.com/erin-smith/schedule-planner", "https://erin-smith.github.io/schedule-planner", "grey");
  makeCard("Purple Pages", 
  "A vital web application for finding which streaming service offers the TV/sports program or film that you want to watch right NOW!", 
  'pics/purplepages.png', "https://github.com/erin-smith/Purple-Pages", "https://erin-smith.github.io/Purple-Pages/", "mediumpurple");
  makeCard("Password Generator", 
  "This is a password generator that creates a dynamic random password by taking user inputs into account.", 
  'pics/passwordgen.png', 'https://github.com/erin-smith/password-gen-homework', "https://erin-smith.github.io/password-gen-homework/", "indianred");
  makeCard("JavaScript Quiz", 
  "This a timed, multiple-choice JavaScript quiz that utilizes event clicks, elements that disappear and reappear, hover, and overlay.", 
  'pics/quiz.png', "https://github.com/erin-smith/Quiz", "https://erin-smith.github.io/Quiz/", "cadetblue");
  makeCard("My First Webpage", 
  "Resume, Bio, Contacts", 
  'pics/myfirstpage.png', "https://github.com/erin-smith/resume", "https://erin-smith.github.io/resume/", "burlywood");
  makeCard("Kill the Virus!", 
  "My first videogame made in Scratch!", 
  'pics/game.png', "https://scratch.mit.edu/projects/378910339/", "https://scratch.mit.edu/projects/378910339/", "greenyellow");
  
});
