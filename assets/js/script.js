
            /**
             * The main game "loop", called when the script is first loaded
             * and after the user's answer has been processed
             */
        document.getElementById('rock').addEventListener('click', rock)
        document.getElementById('paper').addEventListener('click', paper)
        document.getElementById('scissors').addEventListener('click', scissors)
        document.getElementById('lizard').addEventListener('click', lizard)
        document.getElementById('spock').addEventListener('click', spock)

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

            function play() {
                console.log("Hello")
            }

            /** need event listener for play button click and run next function.
             * need function to create random hand and change inner html of random-pick div.
             * 
             */