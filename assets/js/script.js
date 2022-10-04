/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

// Event listeners for game buttons to run each function

document.getElementById('rock').addEventListener('click', rock);
document.getElementById('paper').addEventListener('click', paper);
document.getElementById('scissors').addEventListener('click', scissors);
document.getElementById('lizard').addEventListener('click', lizard);
document.getElementById('spock').addEventListener('click', spock);
document.getElementById('play').addEventListener('click', play);
document.getElementById('reset-button').addEventListener('click', reset);

// Functions to populate the users selection and clear random selection

function rock() {
    document.getElementById('users-pick').innerHTML = `<img data-type="rock" src="assets/images/rock-hand-icon.png" alt="rock hand icon">`;
    document.getElementById('random-pick').innerHTML = "";
    document.getElementById('rock').style.borderColor= "green";
    document.getElementById('paper').style.borderColor= "lightgrey";
    document.getElementById('scissors').style.borderColor= "lightgrey";
    document.getElementById('lizard').style.borderColor= "lightgrey";
    document.getElementById('spock').style.borderColor= "lightgrey";
    document.getElementById('users-pick').style.borderColor= "beige";
    document.getElementById('random-pick').style.borderColor= "beige";
}

function paper() {
    document.getElementById('users-pick').innerHTML = `<img data-type="paper" src="assets/images/paper-hand-icon.png" alt="paper hand icon">`;
    document.getElementById('random-pick').innerHTML = "";
    document.getElementById('paper').style.borderColor= "green";
    document.getElementById('rock').style.borderColor= "lightgrey";
    document.getElementById('scissors').style.borderColor= "lightgrey";
    document.getElementById('lizard').style.borderColor= "lightgrey";
    document.getElementById('spock').style.borderColor= "lightgrey";
    document.getElementById('users-pick').style.borderColor= "beige";
    document.getElementById('random-pick').style.borderColor= "beige";
}

function scissors() {
    document.getElementById('users-pick').innerHTML = `<img data-type="scissors" src="assets/images/scissors-hand-icon.png" alt="scissors hand icon">`;
    document.getElementById('random-pick').innerHTML = "";
    document.getElementById('scissors').style.borderColor= "green";
    document.getElementById('rock').style.borderColor= "lightgrey";
    document.getElementById('paper').style.borderColor= "lightgrey";
    document.getElementById('lizard').style.borderColor= "lightgrey";
    document.getElementById('spock').style.borderColor= "lightgrey";
    document.getElementById('users-pick').style.borderColor= "beige";
    document.getElementById('random-pick').style.borderColor= "beige";
}

function lizard() {
    document.getElementById('users-pick').innerHTML = `<img data-type="lizard" src="assets/images/lizard-hand-icon.png" alt="lizard hand icon">`;
    document.getElementById('random-pick').innerHTML = "";
    document.getElementById('lizard').style.borderColor= "green";
    document.getElementById('rock').style.borderColor= "lightgrey";
    document.getElementById('scissors').style.borderColor= "lightgrey";
    document.getElementById('paper').style.borderColor= "lightgrey";
    document.getElementById('spock').style.borderColor= "lightgrey";
    document.getElementById('users-pick').style.borderColor= "beige";
    document.getElementById('random-pick').style.borderColor= "beige";
}

function spock() {
    document.getElementById('users-pick').innerHTML = `<img data-type="spock" src="assets/images/spock-hand-icon.png" alt="spock hand icon">`;
    document.getElementById('random-pick').innerHTML = "";
    document.getElementById('spock').style.borderColor= "green";
    document.getElementById('rock').style.borderColor= "lightgrey";
    document.getElementById('scissors').style.borderColor= "lightgrey";
    document.getElementById('lizard').style.borderColor= "lightgrey";
    document.getElementById('paper').style.borderColor= "lightgrey";
    document.getElementById('users-pick').style.borderColor= "beige";
    document.getElementById('random-pick').style.borderColor= "beige";
}

// Function to generate a random hand when play button is clicked

function play() {

    let userPick = document.getElementById('users-pick');
    let hands = document.getElementsByClassName('hands-img');

    // random number between 1 and 5
    let randomHand = Math.floor(Math.random() * 5);

    if (userPick.innerHTML !== "") {
        document.getElementById('random-pick').innerHTML = hands[randomHand].innerHTML;
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

    if (usersHand === randomsHand) {
        incrementDrawn();
        document.getElementById("win-lose-message").innerHTML= "Stalemate... You picked the same hands!";
    } else if (usersHand === "rock") {
        if (randomsHand === "paper") {
            incrementLost();
            document.getElementById("win-lose-message").innerHTML= "You Lose... Paper covers Rock!";
        } else if (randomsHand === "spock") {
            incrementLost();
            document.getElementById("win-lose-message").innerHTML= "You Lose... Spock vaporizes Rock!";
        } else if (randomsHand === "scissors") {
            incrementWin();
            document.getElementById("win-lose-message").innerHTML= "You Win... Rock smashes Scissors!";
        } else if (randomsHand === "lizard") {
            incrementWin();
            document.getElementById("win-lose-message").innerHTML= "You Win... Rock crushes Lizard!";
        }
    } else if (usersHand === "paper") {
        if (randomsHand === "lizard") {
            incrementLost();
            document.getElementById("win-lose-message").innerHTML= "You Lose... Lizard eats Paper!";
        } else if (randomsHand === "scissors") {
            incrementLost();
            document.getElementById("win-lose-message").innerHTML= "You Lose... scissors cuts Paper!";
        } else if (randomsHand === "rock") {
            incrementWin();
            document.getElementById("win-lose-message").innerHTML= "You Win... Paper covers Rock!";
        } else if (randomsHand === "spock") {
            incrementWin();
            document.getElementById("win-lose-message").innerHTML= "You Win... Paper disproves Spock!";
        }
    } else if (usersHand === "scissors") {
        if (randomsHand === "rock") {
            incrementLost();
            document.getElementById("win-lose-message").innerHTML= "You Lose... Rock crushes Scissors!";
        } else if (randomsHand === "spock") {
            incrementLost();
            document.getElementById("win-lose-message").innerHTML= "You Lose... Spock smashes Scissors!";
        } else if (randomsHand === "paper") {
            incrementWin();
            document.getElementById("win-lose-message").innerHTML= "You Win... Scissors cuts Paper!";
        } else if (randomsHand === "lizard") {
            incrementWin();
            document.getElementById("win-lose-message").innerHTML= "You Win... Scissors decapitates Lizard!";
        }
     } else if (usersHand === "lizard") {
        if (randomsHand === "rock") {
            incrementLost();
            document.getElementById("win-lose-message").innerHTML= "You Lose... Rock crushes Lizard!";
        } else if (randomsHand === "scissors") {
            incrementLost();
            document.getElementById("win-lose-message").innerHTML= "You Lose... Scissors decapitates Lizard!";
        } else if (randomsHand === "paper") {
            incrementWin();
            document.getElementById("win-lose-message").innerHTML= "You Win... Lizard eats Paper!";
        } else if (randomsHand === "spock") {
            incrementWin();
            document.getElementById("win-lose-message").innerHTML= "You Win... Lizard poisons Spock!";
        }
     } else if (usersHand === "spock") {
        if (randomsHand === "lizard") {
            incrementLost();
            document.getElementById("win-lose-message").innerHTML= "You Lose... Lizard poisons Spock!";
        } else if (randomsHand === "paper") {
            incrementLost();
            document.getElementById("win-lose-message").innerHTML= "You Lose... Paper disproves Spock!";
        } else if (randomsHand === "rock") {
            incrementWin();
            document.getElementById("win-lose-message").innerHTML= "You Win... Spock vaporizes Rock!";
        } else if (randomsHand === "scissors") {
            incrementWin();
            document.getElementById("win-lose-message").innerHTML= "You Win... Spock smashes Scissors!";
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
    document.getElementById('users-pick').style.borderColor= "green";
    document.getElementById('random-pick').style.borderColor= "red";

}

/**
 * Gets the current rounds drawn from the DOM and increments it by 1
 */
 function incrementDrawn() {

    let oldScore = parseInt(document.getElementById("drawn").innerText);
    document.getElementById("drawn").innerText = ++oldScore;
    document.getElementById('users-pick').style.borderColor= "grey";
    document.getElementById('random-pick').style.borderColor= "grey";

}

/**
 * Gets the current rounds lost from the DOM and increments it by 1
 */
function incrementLost() {

    let oldScore = parseInt(document.getElementById("lost").innerText);
    document.getElementById("lost").innerText = ++oldScore;
    document.getElementById('users-pick').style.borderColor= "red";
    document.getElementById('random-pick').style.borderColor= "green";

}

// Function to reset the game and scores
function reset() {
    let hands = document.getElementsByClassName('hands');

    for (var i = 0; i < hands.length; i++) {
        hands[i].style.borderColor= "lightgrey";
     }
    document.getElementById('users-pick').style.borderColor= "beige";
    document.getElementById('random-pick').style.borderColor= "beige";
    document.getElementById("won").innerText = "0";
    document.getElementById("drawn").innerText = "0";
    document.getElementById("lost").innerText = "0";
}