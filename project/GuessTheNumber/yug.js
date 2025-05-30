const randomNumber = parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let preyGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', (e) =>{
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a number')
    }else if(guess>100 && guess<1){
        alert('Please enter a number between 1 and 100')
    }else{
        preyGuess.push(guess)
        if(numGuess == 11){
            displayGuess(guess)
            displayMessage(`Game Over, Random Number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess == randomNumber){
        displayMessage(`You won! The number was ${randomNumber}`)
        endGame()
    }else if(guess< randomNumber){
        displayMessage('Too low')
    }else if(guess > randomNumber){
        displayMessage('Too high')
    }
}

function displayGuess(guess){
    userInput.value = ` `
    guessSlot.innerHTML += `${guess},`
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

function endGame(){
    userInput.value = " "
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'>Start new Game"</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}