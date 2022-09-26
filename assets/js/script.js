document.addEventListener("DOMContentLoaded", function () {
            let hands = document.getElementsByClassName("hands");

            for (let hand of hands) {
                button.addEventListener("click", runGame() {
                    if (this.getAttribute("data-type") === "submit") {
                        play();
                    } else {
                        let gameType = this.getAttribute("data-type");
                        runGame(gameType);
                    }
                });
            }
        
            runGame(gameType);
        };


            /**
             * The main game "loop", called when the script is first loaded
             * and after the user's answer has been processed
             */
            function runGame(gameType) {

                if (gameType === "rock") {
                    rock();
                } else if (gameType === "paper") {
                    paper();
                } else if (gameType === "scissors") {
                    scissors();
                } else if (gameType === "lizard") {
                    lizard();
                }  else if (gameType === "spock") {
                    spock();
                }  else {
                    alert(`Unknown game type: ${gameType}`);
                    throw `Unknown game type: ${gameType}. Aborting!`;
                }

            }

            function rock() {
                document.getElementById('users-pick').innerHTML= `<img src="assets/images/rock-hand-icon.png" alt="rock hand icon">`
            }

            function paper() {
                document.getElementById('users-pick').innerHTML= `<img src="assets/images/paper-hand-icon.png" alt="paper hand icon">`
            }

            function scissors() {
                document.getElementById('users-pick').innerHTML= `<img src="assets/images/scissors-hand-icon.png" alt="scissors hand icon">`
            }

            function lizard() {
                document.getElementById('users-pick').innerHTML= `<img src="assets/images/lizard-hand-icon.png" alt="lizard hand icon">`
            }

            function spock() {
                document.getElementById('users-pick').innerHTML= `<img src="assets/images/spock-hand-icon.png" alt="spock hand icon">`
            }

            function play() {
                console.log("Hello")
            }