// Global variables

let rockHand = document.getElementById('rock');
let paperHand = document.getElementById('paper');
let scissorHand = document.getElementById('scissors');
let lizardHand = document.getElementById('lizard');
let spockHand = document.getElementById('spock');
let usersPick = document.getElementById('users-pick');
let randomsPick = document.getElementById('random-pick');

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
    rockHand.style.borderColor= "green";
    paperHand.style.borderColor= "lightgrey";
    scissorHand.style.borderColor= "lightgrey";
    lizardHand.style.borderColor= "lightgrey";
    spockHand.style.borderColor= "lightgrey";
    usersPick.style.borderColor= "beige";
    randomsPick.style.borderColor= "beige";
}

function paper() {
    usersPick.innerHTML = `<img data-type="paper" src="assets/images/paper-hand-icon.png" alt="paper hand icon">`;
    randomsPick.innerHTML = "";
    paperHand.style.borderColor= "green";
    rockHand.style.borderColor= "lightgrey";
    scissorHand.style.borderColor= "lightgrey";
    lizardHand.style.borderColor= "lightgrey";
    spockHand.style.borderColor= "lightgrey";
    usersPick.style.borderColor= "beige";
    randomsPick.style.borderColor= "beige";
}

function scissors() {
    usersPick.innerHTML = `<img data-type="scissors" src="assets/images/scissors-hand-icon.png" alt="scissors hand icon">`;
    randomsPick.innerHTML = "";
    scissorHand.style.borderColor= "green";
    rockHand.style.borderColor= "lightgrey";
    paperHand.style.borderColor= "lightgrey";
    lizardHand.style.borderColor= "lightgrey";
    spockHand.style.borderColor= "lightgrey";
    usersPick.style.borderColor= "beige";
    randomsPick.style.borderColor= "beige";
}

function lizard() {
    usersPick.innerHTML = `<img data-type="lizard" src="assets/images/lizard-hand-icon.png" alt="lizard hand icon">`;
    randomsPick.innerHTML = "";
    lizardHand.style.borderColor= "green";
    rockHand.style.borderColor= "lightgrey";
    scissorHand.style.borderColor= "lightgrey";
    paperHand.style.borderColor= "lightgrey";
    spockHand.style.borderColor= "lightgrey";
    usersPick.style.borderColor= "beige";
    randomsPick.style.borderColor= "beige";
}

function spock() {
    usersPick.innerHTML = `<img data-type="spock" src="assets/images/spock-hand-icon.png" alt="spock hand icon">`;
    randomsPick.innerHTML = "";
    spockHand.style.borderColor= "green";
    rockHand.style.borderColor= "lightgrey";
    scissorHand.style.borderColor= "lightgrey";
    lizardHand.style.borderColor= "lightgrey";
    paperHand.style.borderColor= "lightgrey";
    usersPick.style.borderColor= "beige";
    randomsPick.style.borderColor= "beige";
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

function checkResult() {

    let userPick = document.getElementById("users-pick").children[0];
    let usersHand = userPick.getAttribute("data-type");
    let randomPick = document.getElementById("random-pick").children[0];
    let randomsHand = randomPick.getAttribute("data-type");
    let message = document.getElementById("win-lose-message");

    if (usersHand === randomsHand) {
        incrementDrawn();
        message.innerHTML= "Stalemate... You picked the same hands!";
    } else if (usersHand === "rock") {
        if (randomsHand === "paper") {
            incrementLost();
            message.innerHTML= "You Lose... Paper covers Rock!";
        } else if (randomsHand === "spock") {
            incrementLost();
            message.innerHTML= "You Lose... Spock vaporizes Rock!";
        } else if (randomsHand === "scissors") {
            incrementWin();
            message.innerHTML= "You Win... Rock smashes Scissors!";
        } else if (randomsHand === "lizard") {
            incrementWin();
            message.innerHTML= "You Win... Rock crushes Lizard!";
        }
    } else if (usersHand === "paper") {
        if (randomsHand === "lizard") {
            incrementLost();
            message.innerHTML= "You Lose... Lizard eats Paper!";
        } else if (randomsHand === "scissors") {
            incrementLost();
            message.innerHTML= "You Lose... scissors cuts Paper!";
        } else if (randomsHand === "rock") {
            incrementWin();
            message.innerHTML= "You Win... Paper covers Rock!";
        } else if (randomsHand === "spock") {
            incrementWin();
            message.innerHTML= "You Win... Paper disproves Spock!";
        }
    } else if (usersHand === "scissors") {
        if (randomsHand === "rock") {
            incrementLost();
            message.innerHTML= "You Lose... Rock crushes Scissors!";
        } else if (randomsHand === "spock") {
            incrementLost();
            message.innerHTML= "You Lose... Spock smashes Scissors!";
        } else if (randomsHand === "paper") {
            incrementWin();
            message.innerHTML= "You Win... Scissors cuts Paper!";
        } else if (randomsHand === "lizard") {
            incrementWin();
            message.innerHTML= "You Win... Scissors decapitates Lizard!";
        }
     } else if (usersHand === "lizard") {
        if (randomsHand === "rock") {
            incrementLost();
            message.innerHTML= "You Lose... Rock crushes Lizard!";
        } else if (randomsHand === "scissors") {
            incrementLost();
            message.innerHTML= "You Lose... Scissors decapitates Lizard!";
        } else if (randomsHand === "paper") {
            incrementWin();
            message.innerHTML= "You Win... Lizard eats Paper!";
        } else if (randomsHand === "spock") {
            incrementWin();
            message.innerHTML= "You Win... Lizard poisons Spock!";
        }
     } else if (usersHand === "spock") {
        if (randomsHand === "lizard") {
            incrementLost();
            message.innerHTML= "You Lose... Lizard poisons Spock!";
        } else if (randomsHand === "paper") {
            incrementLost();
            message.innerHTML= "You Lose... Paper disproves Spock!";
        } else if (randomsHand === "rock") {
            incrementWin();
            message.innerHTML= "You Win... Spock vaporizes Rock!";
        } else if (randomsHand === "scissors") {
            incrementWin();
            message.innerHTML= "You Win... Spock smashes Scissors!";
        }
    }

    console.log(usersHand);
    console.log(randomsHand);
}

/**
 * Gets the current rounds won from the DOM and increments it by 1
 */
function incrementWin() {

    let oldScore = parseInt(document.getElementById("won").innerText);
    document.getElementById("won").innerText = ++oldScore;
    usersPick.style.borderColor= "green";
    randomsPick.style.borderColor= "red";

}

/**
 * Gets the current rounds drawn from the DOM and increments it by 1
 */
 function incrementDrawn() {

    let oldScore = parseInt(document.getElementById("drawn").innerText);
    document.getElementById("drawn").innerText = ++oldScore;
    usersPick.style.borderColor= "grey";
    randomsPick.style.borderColor= "grey";

}

/**
 * Gets the current rounds lost from the DOM and increments it by 1
 */
function incrementLost() {

    let oldScore = parseInt(document.getElementById("lost").innerText);
    document.getElementById("lost").innerText = ++oldScore;
    usersPick.style.borderColor= "red";
    randomsPick.style.borderColor= "green";

}

// Function to reset the game and scores
function reset() {
    let hands = document.getElementsByClassName('hands');

    for (var i = 0; i < hands.length; i++) {
        hands[i].style.borderColor= "lightgrey";
     }
    usersPick.style.borderColor= "beige";
    randomsPick.style.borderColor= "beige";
    document.getElementById("won").innerText = "0";
    document.getElementById("drawn").innerText = "0";
    document.getElementById("lost").innerText = "0";
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("rules-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}