var game = {
        level: 0,
        health: 100,       
        getName: 'What is your name?',
        getQuest: `What is your quest?`,
        getAnswer: `What is your favorite color?`,
        init: function () {
          var name, quest;
          name = prompt(this.getName);
          quest = prompt(this.getQuest);
          var initQ = confirm(`Ok, ${name}, who's quest is ${quest.toLowerCase()}... in order to pass this bridge you must answer a series of a simple question.  Fail to answer correctly and you will slowly begin to die.  Are you prepared?`);
          if (initQ) {
            while (this.health > 0) {
              var answer = prompt(this.getAnswer);
              if (answer.toLowerCase() != 'blue') {
                this.health -= 25;
                alert(`You fool!  The correct answer is blue.  Your health is now at ${this.health}%.  Try again.`);
              } else {
                alert(`You are correct.... let's try again`);
              };
            };
            if (this.health === 0) {
              alert('Just kidding.  You are dead.  Well done, you bafoon.')
            };
          } else {
            alert('Then you shall not pass.  Refresh if you change your mind.');
          }
        }
      }
game.init();



