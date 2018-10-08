class Phrase {
    constructor(phrase) {
        this.phrase = this.addPhraseToDisplay(phrase);
    }
    /**
     * Renders the phrases to html
     */
    addPhraseToDisplay(phrase) {
        for (let i = 0; i <= phrase.length; i++) {
            window.splitphrase = phrase.split("");
        }
        for (let i = 0; i <= splitphrase.length - 1; i++) {
            const char = document.createElement('li');
            char.textContent = splitphrase[i];
            if (splitphrase[i] === ' ') {
                char.className = 'hide space';
                document.querySelector('ul').appendChild(char);
            } else {
                char.className = `hide letter ${splitphrase[i]}`;
                document.querySelector('#phrase ul').appendChild(char);
            }
        }
    }
    /**
     * checks to see if the letter selected by the player matches a letter in the phrase.
     * @param {Object} e - event object
     */
    checkLetter(letter) {
        for (let i = 0; i <= splitphrase.length; i++) {
            if (letter === letter[i]) {
                window.aux = letter[i];
                return true;
            } else {
                return false;
            }
        }
    }
    /**
     * reveals the letter(s) on the board that matches player's selection.
     */
    showMatchedLetter() {
        const auxiliar = document.querySelectorAll(`.${aux}`);
        if (auxiliar.length > 1) {
            for (let i = 0; i <= auxiliar.length - 1; i++) {
                auxiliar[i].className = 'show';
            }
        } else if (auxiliar.length === 1) {
            document.querySelector(`.${aux}`).className = 'show';
        }
    }
}