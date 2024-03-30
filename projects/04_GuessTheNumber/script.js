let randomNumber=parseInt(Math.random()*100 +1);

const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining =document.querySelector('.lastResult');
const lowOrHigh=document.querySelector('.lowOrHi');

const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');

let prevGuess=[];
let numGuess=1;

let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);
    });
}


function validateGuess(guess){
    // guess validation hoga ispe
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess<1){
        alert('Please enter a number more than 1');

    }
    else if(guess>100) {
        alert('Please enter a number less than 100');
    }
    else{
        prevGuess.push(guess);
        if(numGuess===11){
            displayGuess(guess);
            displayMessage(`Game Over .Random number was ${randomNumber}`);
            endGame();

        }

        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
//jo guess kiya h vo check hoga ki guesss equal h ya chota ya bda
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
    }
    else if (guess < randomNumber) {
        displayMessage(`Number is TOOO low`);
    } 
    else if (guess > randomNumber) {
        displayMessage(`Number is TOOO High`);
    }


}

function displayGuess(guess){
    //guess ko screen m display krwana h,  aur guess slot bdana h aur numGuess (remaining guess ) ko kamm krna h
    userInput.value='';
    guessSlot.innerHTML += `${guess},`;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;


}



function displayMessage(message){
    //message display hoga

    lowOrHigh.innerHTML=`<h2>${message}</h2>`;
}

function endGame(){
    //game khatam newGame call hoga sb value reset hongi
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id ="newGame">Start new Game </h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();

}

function newGame(){
    //new game chalu hoga sbhi value reset hogi
    const newGameButton=document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
    
        playGame = true;
    });
}



