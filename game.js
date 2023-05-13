var gameDiv = document.getElementById('game');
var charDiv = document.getElementById('character');
var charLeftAdd = 0;
var charTopAdd = 0;
var isCharFlipped = false; // added variable to track if image is flipped
function handlKeys(arrow) {
    var keyPress = arrow.code;
    if (keyPress === 'ArrowRight') {
        charLeftAdd += 10;
        if (charLeftAdd >= 860) {
            charLeftAdd -= 10;
        }
        // if character was previously flipped, flip back
        if (isCharFlipped) {
            charDiv.style.transform = 'scaleX(1)';
            isCharFlipped = false;
        }
    }
    if (keyPress === 'ArrowLeft') {
        charLeftAdd -= 10;
        if (charLeftAdd <= 1) {
            charLeftAdd += 10;
        }
        // flip character image horizontally
        charDiv.style.transform = 'scaleX(-1)';
        isCharFlipped = true;
    }
    if (keyPress === 'ArrowUp') {
        charTopAdd -= 10;
        if (charTopAdd <= 1) {
            charTopAdd = 0;
        }
    }
    if (keyPress === 'ArrowDown') {
        charTopAdd += 10;
        if (charTopAdd >= 420) {
            charTopAdd = 430;
        }
    }
    charDiv.style.left = charLeftAdd + 'px';
    charDiv.style.top = charTopAdd + 'px';
}
document.addEventListener('keydown', handlKeys);
document.addEventListener('keydown', randomEnemy);
function randomEnemy() {
    var probability = Math.floor(Math.random() * 100);
    var randomProbability = Math.floor(Math.random() * 20);
    if (probability === randomProbability) {
        window.location.href = "duel.html";
        return;
    }
}
