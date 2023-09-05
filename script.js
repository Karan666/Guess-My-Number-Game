'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displaymessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {

    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if(!guess) {
        displaymessage('No number. Please enter a number');
    
    // When the player wins
    } else if(guess === secretNumber) {
        displaymessage('correctNumber');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green'; 
        document.querySelector('.number').style.width = '30rem';
        while(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }    

    // When guess is wrong
    } else if(guess !== secretNumber) {
        if(score > 1) {
            displaymessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displaymessage('You lose');
            document.querySelector('body').style.backgroundColor = 'red'; 
            document.querySelector('.score').textContent = 0;
        }
    }

});

    document.querySelector('.again').addEventListener('click', function() {
    score = 20
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    displaymessage('Start guessing...');
    document.querySelector('.number').style.width = '15rem';
});