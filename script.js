
// challenge 1: age in days

function ageInDays() { 
    var birthYear = prompt("What year were you born?");
    var daysOld = (2021 - birthYear) * 365; 
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + daysOld + ' days old.')
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
  }
  
  function reset() {
      document.getElementById('ageInDays').remove();
  }
  
  // add actual dates to get more specific
  
  // challenge 2: cat generator
  
  function generateCat() {
      var image = document.createElement('img');
      var div = document.getElementById('flex-cat-gen');
      image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
      div.appendChild(image);
  }

  // challenge 3: rock, paper, scissors

  function rpsGame(yourChoice) {
      var humanChoice, botChoice;
      humanChoice = yourChoice.id;
      botChoice = numberToChoice(randToRpsInt());
      console.log('Computer choice:', botChoice);
      results = decideWinner(humanChoice, botChoice); // [1,0] [0.5,0.5] [0,1]
      message = finalMessage(results); // You Won!, You Tied.., You Lost :(
      console.log(message)
      rpsFrontEnd(yourChoice.id, botChoice, message);
  }

  function randToRpsInt() {
      return Math.floor(Math.random() * 3);
  }

  function numberToChoice(number) {
      return ['rock','paper','scissors'][number];
  }

  function decideWinner(yourChoice, computerChoice) {
      var rpsDatabase = {
          'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
          'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
          'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
      }

      var yourScore = rpsDatabase[yourChoice][computerChoice];
      var computerScore = rpsDatabase[computerChoice][yourChoice];

      return[yourScore, computerScore];
  }

  function finalMessage(yourScore) {
      if(yourScore === 0) {
          return{'message': 'You Lost :(', 'color': 'red'};
      } else if (yourScore === 0.5) {
          return{'message': 'You tied..', 'color': 'yellow'};
      } else {
          return{'message': 'You won!', 'color': 'green'};
      }
  }

  function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
      var imagesDatabase = {
          'rock': document.getElementById('rock').src,
          'paper': document.getElementById('paper').src,
          'scissors': document.getElementById('scissors').src
      }

     // removing images
      document.getElementById('rock').remove();
      document.getElementById('paper').remove();
      document.getElementById('scissors').remove();

      var humanDiv = document.createElement('div');
      var botDiv = document.createElement('div');
      var messageDiv = document.createElement('div');


      // replacing images with those selected
      humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=100 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>"
      messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding:30px; '>" + finalMessage['message'] + "</h1>"
      botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=100 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)'>"

      document.getElementById('flex-box-rps-div').appendChild(humanDiv);
      document.getElementById('flex-box-rps-div').appendChild(messageDiv);
      document.getElementById('flex-box-rps-div').appendChild(botDiv);
  }

  //challenge 4: changing colors of buttons

  var all_buttons = document.getElementsByTagName('button');

  var copyAllButtons = [];
  for(let i=0; i < all_buttons.length; i++) {
      copyAllButtons.push(all_buttons[i].classList[1]);
  }

  function buttonColorChange(buttonThingy) {
      if (buttonThingy.value === 'red') {
          buttonsRed();
      } else if(buttonThingy.value === 'green') {
          buttonsGreen();
      } else if(buttonThingy.value === 'reset') {
          buttonsColorReset();
        } else if(buttonThingy.value === 'yellow') {
            buttonsYellow();
      } else if(buttonThingy.value === 'random') {
          randomColors();
      }
  }

  function buttonsRed() {
      for(let i=0; i < all_buttons.length; i++) {
          all_buttons[i].classList.remove(all_buttons[i].classList[1]);
          all_buttons[i].classList.add('btn-danger');
      }
  }

  function buttonsGreen() {
    for(let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonsYellow() {
    for(let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-warning');
    }
}

function buttonsColorReset() {
    for(let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors() {
    var choices = ['btn-danger', 'btn-success', 'btn-warning', 'btn-primary']
    for(let i=0; i < all_buttons.length; i++) {
    var randomNumber = Math.floor(Math.random() * 4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
    }
}


