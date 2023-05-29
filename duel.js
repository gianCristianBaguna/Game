var canvas = document.getElementById('battleCanvas');
var ctx = canvas.getContext('2d');
var character = {
    name: '',
    health: 100,
    damage: 20,
    image: 'assets/dragonBalls/goku.png'
};
var enemies = [
    {
        name: 'Goku',
        health: 100,
        damage: 20,
        image: 'assets/dragonBalls/goku.png'
    },
    {
        name: 'Gohan',
        health: 100,
        damage: 15,
        image: 'assets/dragonBalls/gohan.png'
    },
    {
        name: 'Trunks',
        health: 100,
        damage: 15,
        image: 'assets/dragonBalls/trunks.png'
    },
    {
        name: 'Android 18',
        health: 100,
        damage: 15,
        image: 'assets/dragonBalls/android18.png'
    },
    {
        name: 'Krilin',
        health: 100,
        damage: 15,
        image: 'assets/dragonBalls/krilin.png'
    },
    {
        name: 'Captain America',
        health: 100,
        damage: 15,
        image: 'assets/marvel/captainAmerica.png'
    },
    {
        name: 'Iron Man',
        health: 100,
        damage: 15,
        image: 'assets/marvel/ironman.png'
    },
    {
        name: 'Thor',
        health: 100,
        damage: 15,
        image: 'assets/marvel/thor.png'
    },
    {
        name: 'Hulk',
        health: 100,
        damage: 15,
        image: 'assets/marvel/hulk.png'
    },
    {
        name: 'Spiderman',
        health: 100,
        damage: 15,
        image: 'assets/marvel/spiderman.png'
    },
];
var randomEnemy = getRandomEnemy();
var characterImage = new Image();
characterImage.src = character.image;
var enemyImage = new Image();
enemyImage.src = randomEnemy.image;
var enemyFlip = true;
if (enemyFlip) {
    enemyImage.onload = function () {
        drawBattle(ctx, characterImage, enemyImage);
    };
}
else {
    enemyImage.onload = function () {
        enemyImage.style.transform = 'scaleX(-1)';
        drawBattle(ctx, characterImage, enemyImage);
    };
}
function drawBattle(ctx, characterImage, enemyImage) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(characterImage, 50, 200);
    ctx.scale(-1, 1);
    ctx.drawImage(enemyImage, -550, 200);
    ctx.fillStyle = 'green';
    ctx.fillRect(50, 180, character.health, 10);
    ctx.fillStyle = 'green';
    ctx.fillRect(550, 180, randomEnemy.health, 10);
}
/// Perform an attack
function attack() {
    var characterDamage = Math.floor(Math.random() * character.damage);
    var enemyDamage = Math.floor(Math.random() * randomEnemy.damage);
    // Update character and enemy health
    character.health -= enemyDamage;
    randomEnemy.health -= characterDamage;
    // Redraw the battle
    drawBattle(ctx, characterImage, enemyImage);
    // Display attack result on the canvas
    ctx.font = '16px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText("".concat(character.name, " attacks for ").concat(characterDamage, " damage!"), 50, 250);
    ctx.fillText("".concat(randomEnemy.name, " attacks for ").concat(enemyDamage, " damage!"), 550, 250);
    // Check if the battle is over
    if (character.health <= 0 || randomEnemy.health <= 0) {
        var winner = void 0;
        if (character.health <= 0 && randomEnemy.health <= 0) {
            winner = "It's a tie!";
        }
        else if (character.health <= 0) {
            winner = randomEnemy.name;
        }
        else {
            winner = character.name;
        }
        ctx.fillText("The battle is over! ".concat(winner, " wins!"), canvas.width / 2, 300);
        var continueBattle = confirm("The battle is over! Do you want to continue?");
        if (continueBattle) {
            resetGame();
        }
        else {
            redirectToCharacterSelection();
        }
    }
}
// Reset the game with a new random enemy
function resetGame() {
    character.health = 100;
    enemies.forEach(function (enemy) {
        enemy.health = 100;
    });
    randomEnemy = getRandomEnemy();
    enemyImage.src = randomEnemy.image;
    drawBattle(ctx, characterImage, enemyImage);
}
// Redirect to character selection HTML
function redirectToCharacterSelection() {
    window.location.href = 'index.html';
}
// Randomly select an enemy from the array
function getRandomEnemy() {
    return enemies[Math.floor(Math.random() * enemies.length)];
}
// Initialize the battle
function initializeBattle() {
    // Draw the initial battle state
    drawBattle(ctx, characterImage, enemyImage);
    // Add event listener to the attack button
    var attackButton = document.getElementById('attack');
    if (attackButton) {
        attackButton.addEventListener('click', attack);
    }
}
// Call the initializeBattle function to start the battle
initializeBattle();
