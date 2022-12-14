// Global variables

let rockHand = document.getElementById('rock');
let paperHand = document.getElementById('paper');
let scissorHand = document.getElementById('scissors');
let lizardHand = document.getElementById('lizard');
let spockHand = document.getElementById('spock');
let usersPick = document.getElementById('users-pick');
let randomsPick = document.getElementById('random-pick');
let rulesModal = document.getElementById("rulesModal");
let rulesButton = document.getElementById("rules-button");
let closeModal = document.querySelector('span');
let win = document.getElementById("won");
let draw = document.getElementById("drawn");
let lose = document.getElementById("lost");

// Event listeners for game buttons to run each function

rockHand.addEventListener('click', rock);
paperHand.addEventListener('click', paper);
scissorHand.addEventListener('click', scissors);
lizardHand.addEventListener('click', lizard);
spockHand.addEventListener('click', spock);
document.getElementById('play').addEventListener('click', play);
document.getElementById('reset-button').addEventListener('click', reset);

// Functions to populate the users selection and clear random selection

function rock() {
    usersPick.innerHTML = `<img data-type="rock" src="assets/images/rock-hand-icon.png" alt="rock hand icon">`;
    randomsPick.innerHTML = "";
    rockHand.style.borderColor = "green";
    paperHand.style.borderColor = "lightgrey";
    scissorHand.style.borderColor = "lightgrey";
    lizardHand.style.borderColor = "lightgrey";
    spockHand.style.borderColor = "lightgrey";
    usersPick.style.borderColor = "beige";
    randomsPick.style.borderColor = "beige";
}

function paper() {
    usersPick.innerHTML = `<img data-type="paper" src="assets/images/paper-hand-icon.png" alt="paper hand icon">`;
    randomsPick.innerHTML = "";
    paperHand.style.borderColor = "green";
    rockHand.style.borderColor = "lightgrey";
    scissorHand.style.borderColor = "lightgrey";
    lizardHand.style.borderColor = "lightgrey";
    spockHand.style.borderColor = "lightgrey";
    usersPick.style.borderColor = "beige";
    randomsPick.style.borderColor = "beige";
}

function scissors() {
    usersPick.innerHTML = `<img data-type="scissors" src="assets/images/scissors-hand-icon.png" alt="scissors hand icon">`;
    randomsPick.innerHTML = "";
    scissorHand.style.borderColor = "green";
    rockHand.style.borderColor = "lightgrey";
    paperHand.style.borderColor = "lightgrey";
    lizardHand.style.borderColor = "lightgrey";
    spockHand.style.borderColor = "lightgrey";
    usersPick.style.borderColor = "beige";
    randomsPick.style.borderColor = "beige";
}

function lizard() {
    usersPick.innerHTML = `<img data-type="lizard" src="assets/images/lizard-hand-icon.png" alt="lizard hand icon">`;
    randomsPick.innerHTML = "";
    lizardHand.style.borderColor = "green";
    rockHand.style.borderColor = "lightgrey";
    scissorHand.style.borderColor = "lightgrey";
    paperHand.style.borderColor = "lightgrey";
    spockHand.style.borderColor = "lightgrey";
    usersPick.style.borderColor = "beige";
    randomsPick.style.borderColor = "beige";
}

function spock() {
    usersPick.innerHTML = `<img data-type="spock" src="assets/images/spock-hand-icon.png" alt="spock hand icon">`;
    randomsPick.innerHTML = "";
    spockHand.style.borderColor = "green";
    rockHand.style.borderColor = "lightgrey";
    scissorHand.style.borderColor = "lightgrey";
    lizardHand.style.borderColor = "lightgrey";
    paperHand.style.borderColor = "lightgrey";
    usersPick.style.borderColor = "beige";
    randomsPick.style.borderColor = "beige";
}

// Function to generate a random hand when play button is clicked

function play() {

    let userPick = usersPick;
    let hands = document.getElementsByClassName('hands-img');

    // random number between 1 and 5
    let randomHand = Math.floor(Math.random() * 5);

    if (userPick.innerHTML !== "") {
        randomsPick.innerHTML = hands[randomHand].innerHTML;
        checkResult();
    } else {
        alert('Please select a hand');
    }

}

/** Function to check users pick against random pick and determine
 *  the outcome and return correct corresponding result
 */

function checkResult() {

    let userPick = document.getElementById("users-pick").children[0];
    let usersHand = userPick.getAttribute("data-type");
    let randomPick = document.getElementById("random-pick").children[0];
    let randomsHand = randomPick.getAttribute("data-type");
    let message = document.getElementById("win-lose-message");

    if (usersHand === randomsHand) {
        incrementDrawn();
        message.innerHTML = "Stalemate... You picked the same hands!";
    } else if (usersHand === "rock") {
        if (randomsHand === "paper") {
            incrementLost();
            message.innerHTML = "You Lose... Paper covers Rock!";
        } else if (randomsHand === "spock") {
            incrementLost();
            message.innerHTML = "You Lose... Spock vaporizes Rock!";
        } else if (randomsHand === "scissors") {
            incrementWin();
            message.innerHTML = "You Win... Rock smashes Scissors!";
        } else if (randomsHand === "lizard") {
            incrementWin();
            message.innerHTML = "You Win... Rock crushes Lizard!";
        }
    } else if (usersHand === "paper") {
        if (randomsHand === "lizard") {
            incrementLost();
            message.innerHTML = "You Lose... Lizard eats Paper!";
        } else if (randomsHand === "scissors") {
            incrementLost();
            message.innerHTML = "You Lose... scissors cuts Paper!";
        } else if (randomsHand === "rock") {
            incrementWin();
            message.innerHTML = "You Win... Paper covers Rock!";
        } else if (randomsHand === "spock") {
            incrementWin();
            message.innerHTML = "You Win... Paper disproves Spock!";
        }
    } else if (usersHand === "scissors") {
        if (randomsHand === "rock") {
            incrementLost();
            message.innerHTML = "You Lose... Rock crushes Scissors!";
        } else if (randomsHand === "spock") {
            incrementLost();
            message.innerHTML = "You Lose... Spock smashes Scissors!";
        } else if (randomsHand === "paper") {
            incrementWin();
            message.innerHTML = "You Win... Scissors cuts Paper!";
        } else if (randomsHand === "lizard") {
            incrementWin();
            message.innerHTML = "You Win... Scissors decapitates Lizard!";
        }
    } else if (usersHand === "lizard") {
        if (randomsHand === "rock") {
            incrementLost();
            message.innerHTML = "You Lose... Rock crushes Lizard!";
        } else if (randomsHand === "scissors") {
            incrementLost();
            message.innerHTML = "You Lose... Scissors decapitates Lizard!";
        } else if (randomsHand === "paper") {
            incrementWin();
            message.innerHTML = "You Win... Lizard eats Paper!";
        } else if (randomsHand === "spock") {
            incrementWin();
            message.innerHTML = "You Win... Lizard poisons Spock!";
        }
    } else if (usersHand === "spock") {
        if (randomsHand === "lizard") {
            incrementLost();
            message.innerHTML = "You Lose... Lizard poisons Spock!";
        } else if (randomsHand === "paper") {
            incrementLost();
            message.innerHTML = "You Lose... Paper disproves Spock!";
        } else if (randomsHand === "rock") {
            incrementWin();
            message.innerHTML = "You Win... Spock vaporizes Rock!";
        } else if (randomsHand === "scissors") {
            incrementWin();
            message.innerHTML = "You Win... Spock smashes Scissors!";
        }
    }
}

// Gets the current rounds won from the DOM and increments it by 1

function incrementWin() {

    let oldScore = parseInt(win.innerText);
    win.innerText = ++oldScore;
    usersPick.style.borderColor = "green";
    randomsPick.style.borderColor = "red";

}

// Gets the current rounds drawn from the DOM and increments it by 1

function incrementDrawn() {

    let oldScore = parseInt(draw.innerText);
    draw.innerText = ++oldScore;
    usersPick.style.borderColor = "grey";
    randomsPick.style.borderColor = "grey";

}

// Gets the current rounds lost from the DOM and increments it by 1

function incrementLost() {

    let oldScore = parseInt(lose.innerText);
    lose.innerText = ++oldScore;
    usersPick.style.borderColor = "red";
    randomsPick.style.borderColor = "green";

}

// Function to reset the game and scores

function reset() {
    let hands = document.getElementsByClassName('hands');

    for (var i = 0; i < hands.length; i++) {
        hands[i].style.borderColor = "lightgrey";
    }
    usersPick.style.borderColor = "beige";
    randomsPick.style.borderColor = "beige";
    win.innerText = "0";
    draw.innerText = "0";
    lose.innerText = "0";
    alert('Resetting Game...');
}

// Open the modal when how to play button clicked

rulesButton.onclick = function () {
    rulesModal.style.display = "block";
};

// Close the modal when 'x' button is clicked

closeModal.onclick = function () {
    rulesModal.style.display = "none";
};

// Modal closed when anywhere outside the modal is clicked

window.onclick = function (event) {
    if (event.target == rulesModal) {
        rulesModal.style.display = "none";
    }
};