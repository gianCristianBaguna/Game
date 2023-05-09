let gameDiv = document.getElementById('game');
let charDiv = document.getElementById('character');

document.addEventListener('keydown', handlKeys);
charLeftAdd = 0;
charTopAdd = 0;
function handlKeys(arrow) {
    let keyPress = arrow.code;
    if (keyPress === 'ArrowRight') {
        charLeftAdd += 10;
        charDiv.style.left = charLeftAdd + 'px';
        if (charLeftAdd >= 940) {
            charLeftAdd -= 10
        }
    }

    if (keyPress === 'ArrowLeft') {
        charLeftAdd -= 10;
        charDiv.style.left = charLeftAdd + 'px'
        if (charLeftAdd <= 1) {
            charLeftAdd += 10
        }
    }

    if (keyPress === 'ArrowUp') {
        charTopAdd -= 10;
        charDiv.style.top = charTopAdd + 'px'
        if (charTopAdd <= 1) {
            charTopAdd = 0
        }
    }
    if (keyPress === 'ArrowDown') {
        charTopAdd += 10;
        charDiv.style.top = charTopAdd + 'px'
        if (charTopAdd >= 500) {
            charTopAdd = 440
        }
    }

}

 
document.addEventListener('keydown', randomEnemy);

function randomEnemy() {
    let probability = Math.floor(Math.random() * 100)
    let randomProbability = Math.floor(Math.random() * 20)
    if (probability === randomProbability) {
        window.location.href = "duel.html"
        return
    }
}
//wwewewewwweew

