// Initiate number of rounds for the game
// const roundsToPlay = 5;

// Set up possible options to choose in the game
const gameOptions = ['rock', 'paper', 'scissors'];

// Initiate scores for the players
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button'); // Select all buttons on the page
const results = document.querySelector('div.results'); // Select the text class

// Upon clicking the respective button, assign the textContent to the playerSelection case-insensitive, assign computerChoice, play a round.
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // Assign player selection → create p element → append to text
        const playerSelection = button.textContent.toLowerCase();
        playerChoice = document.createElement('p');
        playerChoice.textContent = `The player's choice is: ${playerSelection}`;
        results.appendChild(playerChoice);


        const computerChoice = getComputerChoice();
        
        // Get the round outcome, create a new p element, append to div text.
        outcomeText = playRound(playerSelection, computerChoice);
        const outcome = document.createElement('p');
        outcome.textContent = outcomeText;
        results.appendChild(outcome);
    })
})


// playGame();


// ------------------------------------ Functions --------------------------------------
function getComputerChoice() {
    // Randomize the integer value from 0-3 which indexes the rock paper scissors options array, which depicts the computer's choice.
    // This is done by multiplying the random number (0-1) by 3, which gets us a random number from 0-3 instead. CODE: (Math.random() * 3)
    // Then we round the random number by the nearest LOWER integer. Example, 2.9 rounds to 2. CODE: (Math.floor())
    let computerInteger = Math.floor(Math.random() * 3);

    // Extract the computer's choice by indexing.
    let computerChoice = gameOptions[computerInteger];

    // Append the computer's choice text to div text.
    choiceText = `The computer's choice is: ${computerChoice}`;
    const choice = document.createElement('p');
        choice.textContent = choiceText;
        results.appendChild(choice);

    // Return the computer's choice.
    return computerChoice;

}

function playRound(playerSelection, computerSelection) {
    // Create logic to choose who wins the rock paper scissors game.
    // For each victory, add the points to the respective player.
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return "It's a tie! Both players chose Rock!";
        } else if (computerSelection === 'scissors') {
            playerScore++;
            return "Player win! Rock beats Scissors!";
        } else if (computerSelection === 'paper') {
            computerScore++;
            return "Player lose... Paper beats Rock!";
        }
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++;
            return "Player lose... Rock beats Scissors!";
        } else if (computerSelection === 'scissors') {
            return "It's a tie! Both players chose Scissors!";
        } else if (computerSelection === 'paper') {
            playerScore++;
            return "Player win! Scissors beat Paper!";
        }
    }
    
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            return "Player win! Paper beats Rock!";
        } else if (computerSelection === 'scissors') {
            return "Player lose... Scissors beat Paper!";
        } else if (computerSelection === 'paper') {
            computerScore++;
            return "It's a tie! Both players chose Paper!";
        }
    }
}

// Function that simulate a game of a specified number of rounds.
function playGame() {
    // Loop through the specified number of rounds.
    for (let i=0; i<roundsToPlay; i++) {
        // Declare player selection variable
        let playerSelection;

        // do-while loop to capture player's selection and rectify any invalid inputs.
        do {
            // Get player's selection and make it case insensitive.
            playerSelection = prompt('What is your choice? (rock, paper or scissors only)', 'rock');
            playerSelection = playerSelection.toLowerCase();
            // Ensure proper input by the player. If the playerSelection is NOT IN the gameOptions, initiate the while loop.
        } while (!gameOptions.includes(playerSelection))

        // Print out player's choice.
        console.log(`The player's choice is ${playerSelection}`)
        // Get computer's selection and also print out their choice (part of the function)
        const computerSelection = getComputerChoice();
        // Simulate a round.
        console.log(playRound(playerSelection, computerSelection));
        // Report the scores for each player.
        console.log(`The player's score is ${playerScore}`);
        console.log(`The computer's score is ${computerScore}`);
        // To add an empty line to see things clearer in console.
        console.log('');
    }
    // At the end of the rounds simulation, report the winner.
    if (playerScore > computerScore){
        console.log('Congratulations! The player is the winner!');
    } else {
        console.log('Oh no... the computer is the winner!');
    }
}