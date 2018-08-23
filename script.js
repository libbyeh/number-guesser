var playerGuess = document.querySelector('.player-guess');
var guessBtn = document.querySelector('.guess-btn'); 
var clearBtn = document.querySelector('.clear-btn');
var yourLast = document.querySelector('.your-last');
var numberGuessed = document.querySelector('.number-guessed');
var generatedReply = document.querySelector('.generated-reply');
var resetBtn = document.querySelector('.reset-btn');
var playerMin = document.querySelector('#player-min');
var playerMax = document.querySelector('#player-max');
var maxValue = 100;     
var randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);
var playerWins = 0; 


playerGuess.addEventListener('keyup', enableButtons);
guessBtn.addEventListener('click', submitGuess);
clearBtn.addEventListener('click', clearResponse);
resetBtn.addEventListener('click', resetGame);
playerMin.addEventListener('click', pickNumber);
playerMax.addEventListener('click', pickNumber);

//if the player guess value is absolutely an empty string (=== '') then the guessBtn and clearBtn are disabled (= true). If a number is added to the player guess value, then they are enabled because we assigned to false.
function enableButtons() {
  event.preventDefault();
  if (playerGuess.value === '') {
    guessBtn.disabled = true;
    clearBtn.disabled = true;
    resetBtn.disabled = false;
  } else {
    guessBtn.disabled = false;
    clearBtn.disabled = false;
    resetBtn.disabled = true;
  } 
};

function slider(val) {
  document.getElementById('playerRange').innerHTML = val
};

function pickNumber() {
  randomNumber = Math.ceil(Math.random() * (parseInt(playerMax.value) - parseInt(playerMin.value) + 1)) + parseInt(playerMin.value) + 1;
    console.log(randomNumber, 'Random');
};

//event.preventDefault(); invokes the function to ensure the submitGuess variable does not then refresh the game after clicked.

//if (parseNum < randomNumber && parseNum > 0) {generatedReply.innerText = `That is too low`; - if the parseNum is less than the randomNumber AND greater than 0, the game will return the text 'That is too low'. This is because we invoked the variable generatedReply and assigned it to 'That is too high'.

//numberGuessed.innerText = parseNum; = variable numberGuessed is involked and assigned to the parseNum that the user guessed in the playerGuess form. (was a string, turned into a number with parseInt)
function submitGuess(event) {
  event.preventDefault();
  var parseNum = parseInt(playerGuess.value);
  if (parseNum < randomNumber && parseNum > 0) {
      generatedReply.innerText = `That is too low`;
  } else if (parseNum > randomNumber && parseNum < 101) {
      generatedReply.innerText = `That is too high`;
  } else if (parseNum === randomNumber) {
    playerWins += 1; 
    maxValue += 10; 
    generatedReply.innerText = `Boom! Player Score =  ${playerWins}`;
    console.log(playerMax.max)
    playerMax.setAttribute('max', maxValue);
  } else {
    generatedReply.innerText = `Error! Please pick a number between 1 and ${maxValue}`;
  }
  numberGuessed.innerText = parseNum;
  playerGuess.value = '';
  enableButtons();
};

//clearBtn is clicked, this function 'clearResponse' is called, the event.preventDefault(); prevents the game from resetting/refreshing and then returns playerGuess form to nothing ('') -playerGuess.value = ''; and then invokes enableButtons function.
function clearResponse(event) {
  event.preventDefault();
  playerGuess.value = '';
  enableButtons();
};

//resetBtn is clicked, this function is called and then invoking the numberGuessed variable to return to default ('') and then invoking the generatedReply to return to its default ('')
function resetGame(event) {
  numberGuessed.value = '';
  generatedReply.value = '';
};


