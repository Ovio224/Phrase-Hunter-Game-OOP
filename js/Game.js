class Game {
    constructor(missed) {
        this.missed = missed;
        this.phrases = ['Waddup bro', 'hows it goin', 'terminatu drc', 'one more']; // an array of phrases to use with the game (you'll use a method to create new instances of the Phrase class)
    }
    /**
     * this method randomly retrieves one of the phrases stored in the phrases array.
     */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }
    /**
     * this method checks to see if the button clicked 
     * by the player matches a letter in the phrase.
     */
    handleInteraction(event) {
        if (phrase.checkLetter(event.target.textContent) === false) {
            this.removeLife();
        } else if(phrase.checkLetter(event.target.textContent) === true){
            phrase.showMatchedLetter();

        }
    }
    /**
     * this method removes a life, removes a heart from the board, and, if 
     * the player is out of lives, ends the game.
     */
    removeLife() {
        let lifes = 5;
        const tries = document.querySelectorAll('.tries');
        for (let i = 0; i <= tries.length - 1; i++) {
            tries[i].style.display = 'none';
            break;
        }
        lifes -= 1;
        if (lifes === 0) {
            this.gameOver();
        }
    }
    /**
     * this method checks to see if the player has selected all of the letters.
     */
    checkForWin() {

    }
    /**
     * his method displays a message if the player wins or a different message if they lose.
     */
    gameOver() {

    }
    /**
     * calls the getRandomPhrase() method, and adds that phrase to the board by calling the Phrase class' addPhraseToDisplay() method.
     */
    startGame() {

    }
}