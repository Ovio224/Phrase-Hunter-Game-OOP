const game = new Game();

document.querySelector('#overlay button').addEventListener('click', function(){


    document.querySelector('#overlay').style.display = 'none';
});

document.querySelector('#qwerty').addEventListener('click', function(event){
    game.handleInteraction(event);
});