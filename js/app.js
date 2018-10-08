// displays the game area and starts a new game
function resetDisplay() {
    game = new Game();
    game.startGame();
    document.querySelector('#overlay').style.display = 'none';
}
// function for clicking a key on the on-screen keyboard
function markButton(event) {
    event.target.setAttribute('disabled', 'true');
    game.handleInteraction(event);
}
// whatever key is pressed, the button on the on-screen keyboard will be triggered
function markButton1(event) {
    for (let i = 0; i <= document.querySelectorAll('.key').length - 1; i++) {
        if (event.key === document.querySelectorAll('.key')[i].textContent) {
            document.querySelectorAll('.key')[i].click();
        }
    }
    game.handleInteractionKeypress(event);
}
// Event listener for the start-game button
document.querySelector('#btn__reset').addEventListener('click', resetDisplay);
// event listener for the on-screen keyboard
document.querySelectorAll('.key').forEach(button => button.addEventListener('click', markButton));
// event listener for the any keypress
document.addEventListener('keypress', markButton1);
// event listener for the reset game button
document.querySelector('.btn').addEventListener('click', function () {
    game = new Game();
    game.resetGame();
    game.startGame();
    document.querySelector('#overlay').style.display = 'none';
});