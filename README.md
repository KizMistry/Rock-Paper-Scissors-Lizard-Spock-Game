# Rock-Paper-Scissor-Lizard-Spock
 
Rock-Paper-Scissor-Lizard-Spock is an interactive game website that hopes to provide a fun experience. The website's goal is to give visitors a game of chance.

The game is completely user friendly and very intuitive which gives the user confidence with their interactions.
The site is also vibrant to give the game and the user a classic gaming feel.

![Rock-Paper-Scissor-Lizard-Spock](/assets/readme-media/rock-paper-scissors-full.png)

## Features 

### Existing Features

- __Heading__

  - A simple, clear heading that lets the user know instantly what the site is about 

![Heading](/assets/readme-media/heading.png)

- __The Game Area__

  - The game area is the main section of the page where the user will focus. 
  - This section is designed to fit the screen of all devices so the user can interact with the area without having the scroll.

![Game Area](/assets/readme-media/game-area.png)

- __Welcome and Results Area__

  - The Welcome area doubles up as a results message area. When the game is played, a message describing the outcome of the round will replace the welcome message.
  - The 'How To Play' button is an interactive button which opens a modal displaying the game rules.
  - The 'Reset' button will let the user reset their score.

![Welcome Area](/assets/readme-media/welcome.png)

- __How To Play__
 
  - The rules inform the user what the possible outcomes are for each hand.
  - This section includes an image that provides a visual aid to the written rules.

![How To Play](/assets/readme-media/how-to-play-info.png)

- __User Selection__

  - This section shows the user the available options they can select to play the game with.
  - The options respond to the users click, with the border turning green when selected, indicating the user they have successfully chosen their hand.

![User Selection](/assets/readme-media/user-selection.png)

- __Game Selections__

  - This area is the main focus of the game, where the users hand and the computers hand is displayed when played.
  - As a visual aid to the outcome, the border of each circle display will change color to green, red or gray depending on the winner/loser or draw.

![Game Selections](/assets/readme-media/main-picks.png)

- __Play__

  - Play button used to run the game once the user has selected their hand. 

![Play Button](/assets/readme-media/play-button.png)

- __Score Area__

  - This section is where the user can track how many rounds they have won, lost or drawn.
  - The scores are automatically calculated after each round is played. 

![Score Area](/assets/readme-media/score-area.png)

### Future Feature Ideas

- __Score Limit__

  - A 'best of' mode where you only have a certain amount of rounds (3, 5, 7, etc) to beat the computer.
  - This will provide the user with more game type options and a different challenge.

- __Pattern Recognition__

  - Implement a function to see if the user has picked the same hand 3 times in a row; if so, pick the opposite hand.
  - This will force the user to switch up their choice more frequently.  

## Testing 

The Rock-Paper-Scissors_Lizard-Rock site and game all work as intended.
All sections were tested; Some of the main testing points included:

| Test       | Expected           | Passed  |
| :------------- |:-------------:| :-----:|
| User clicks 'How To Play' button      | Modal opens | ??? |
| User clicks 'x' button in the modal      | Modal closes | ??? |
| User clicks outside modal area (while modal is open)| Modal closes | ??? |
| User clicks 'Play' button before selecting hand     | An alert appears telling the user to select a hand      |   ??? |
| User clicks any of the hand buttons | Border turns green and their hand displays in the users pick area       | ??? |
| User clicks 'Play' button after selecting hand | Game runs, random hand generated and displayed,<br> correct results message displays and scores updated | ???  |
| User clicks 'Reset' button | An alert appears and the scores, user pick, computer pick,<br> results message, and hand selections are reset to defualt | ???  |
| Responsiveness of each screen size  | Each section and button adjusted size to fit all device displays |  ??? |




The website was shared with family and friends to test the websites usage and no problems/issues were mentioned in their feedback.


### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fkizmistry.github.io%2FRock-Paper-Scissors-Lizard-Spock-Game%2F)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](http://jigsaw.w3.org/css-validator/validator?lang=en&profile=css3svg&uri=https%3A%2F%2Fkizmistry.github.io%2FRock-Paper-Scissors-Lizard-Spock-Game%2F&usermedium=all&vextwarning=&warning=1)
- JS
  - No errors were found when passing script.js through JSHint


### Unfixed Bugs

There are no known bugs.

## Deployment

The process of deploying Yoga Utopia to GitHub is detailed below: 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - Navigate to the 'Build and Deployment' section
  - In the Source drop-down menu, select Deploy from a branch
  - In the Branch drop-down menu, select 'main' branch and '/(root)' folder and click the save button
  - Once saved, refresh the page. The page will reload with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://kizmistry.github.io/Rock-Paper-Scissors-Lizard-Spock-Game/


## Credits 

### Media

- The rock hand icon used: [Share Icon](https://www.shareicon.net/o-hand-rock-851912)
- The paper hand icon used: [Online Web Fonts](https://www.onlinewebfonts.com/icon/294420)
- The scissors hand icon used: [Share Icon](https://www.shareicon.net/o-scissors-hand-851911)
- The lizard hand icon used: [Wikimedia](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_regular_hand-lizard.svg)
- The spock hand icon used: [Share Icon](https://www.shareicon.net/o-hand-spock-851910)