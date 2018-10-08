class Game {
    constructor() {
        this.missed = 5;
        this.phrases = ['hey come here', 'the quick brown fox', 'jumped the', 'animal kingdom', 'what is up', 'hello there', 'general kenobi']; // an array of phrases to use with the game (you'll use a method to create new instances of the Phrase class)
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
     * @param {Object} event - the event object
     */
    handleInteraction(event) {
        if (!phrase.checkLetter(event.target.textContent)) {
            this.removeLife();
            event.target.className = 'lose';
        } else {
            phrase.showMatchedLetter();
            this.checkForWin();
            event.target.className = 'win';

        }
    }
    /**
     * checks if the pressed key belongs to any of the letters
     * inside the phrase and calls the checkforwin if so
     * @param {Object} event - the event object 
     */
    handleInteractionKeypress(event) {
        if (!phrase.checkLetter(event.key)) {} else {
            phrase.showMatchedLetter();
            this.checkForWin();
        }
    }
    /**
     * this method removes a life, removes a heart from the board, and, if 
     * the player is out of lives, ends the game.
     */
    removeLife() {
        const tries = document.querySelectorAll('.tries');
        this.missed--;
        tries[this.missed].style.display = 'none';

        if (this.missed === 0) {
            this.gameOver();
        }
    }
    /**
     * this method checks to see if the player has selected all of the letters.
     */
    checkForWin() {
        if (document.querySelectorAll('.letter').length < 1) {
            this.gameOver();
        }
    }
    /**
     * this method displays a message if the player wins or a different message if they lose.
     */
    gameOver() {
        const reset = document.querySelector('.btn');
        document.querySelector('#btn__reset').style.display = 'none';
        const h2 = document.querySelector('#game-over-message');
        if (document.querySelectorAll('.letter').length < 1) {
            reset.style.display = 'block';
            document.querySelector('#overlay').style.display = '';
            h2.textContent = 'Woah, you won!';
        } else {
            reset.style.display = 'block';
            document.querySelector('#overlay').style.display = '';
            h2.textContent = `Sorry, but you've lost this time :(`;
        }
    }
    /**
     * button to reset the game and play again
     */
    resetGame() {
        const hide = document.querySelectorAll('.hide');
        const show = document.querySelectorAll('.show');
        const ul = document.querySelector('ul');
        const keyboard = document.querySelectorAll('#qwerty button');
        if (show.length > 0 || hide.length > 0) {
            document.querySelector('#phrase').removeChild(ul);
        }
        for (let i = 0; i <= keyboard.length - 1; i++) {
            if (keyboard[i].className !== 'key') {
                keyboard[i].className = 'key';
                keyboard[i].disabled = false;
            }
        }
        const tries = document.querySelectorAll('.tries');
        tries.forEach(x => x.style.display = '');
    }
    /**
     * calls the getRandomPhrase() method, and adds that phrase to the board by calling the Phrase class' addPhraseToDisplay() method.
     */
    startGame() {
        window.phrase = new Phrase(game.getRandomPhrase());
    }
}