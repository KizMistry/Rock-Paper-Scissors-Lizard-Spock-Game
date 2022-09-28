
            /**
             * The main game "loop", called when the script is first loaded
             * and after the user's answer has been processed
             */
        document.getElementById('rock').addEventListener('click', rock)
        document.getElementById('paper').addEventListener('click', paper)
        document.getElementById('scissors').addEventListener('click', scissors)
        document.getElementById('lizard').addEventListener('click', lizard)
        document.getElementById('spock').addEventListener('click', spock)
        document.getElementById('play').addEventListener('click', play)

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

            /** needs changing back to users-pick */
            function spock() {
                document.getElementById('random-pick').innerHTML= `<img src="assets/images/spock-hand-icon.png" alt="spock hand icon">`
            }

            /** need event listener for play button click and run next function.
             * need function to create random hand and change inner html of random-pick div.
             * 
             */

             function play() {
                
                let userPick = document.getElementById('users-pick')
                let hands = document.getElementsByClassName('hands-img')

                // random number between 1 and 5
                let randomHand = Math.floor(Math.random() * 5)

                if (userPick.innerHTML !== "") {
                    document.getElementById('random-pick').innerHTML= hands[randomHand].innerHTML
                } else {
                    alert('Please select a hand')
                }
                
                
            }

            /** need a function to check the winner and create a 'you win/lose/draw' message.
             * need a function to then increment the relevant score.
             */