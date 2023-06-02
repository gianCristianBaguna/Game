var _a;
var canvas = document.getElementById("battleCanvas");
var ctx = canvas.getContext("2d");
var character = {
    name: "",
    health: 200,
    damage: 20,
    image: (_a = localStorage.getItem("img")) !== null && _a !== void 0 ? _a : "",
    stars: 3
};
var enemies = [
    {
        name: "Goku",
        health: 150,
        damage: 20,
        image: "assets/dragonBalls/goku.png"
    },
    {
        name: "Gohan",
        health: 150,
        damage: 20,
        image: "assets/dragonBalls/gohan.png"
    },
    {
        name: "Trunks",
        health: 150,
        damage: 20,
        image: "assets/dragonBalls/trunks.png"
    },
    {
        name: "Android 18",
        health: 150,
        damage: 20,
        image: "assets/dragonBalls/android18.png"
    },
    {
        name: "Krilin",
        health: 150,
        damage: 20,
        image: "assets/dragonBalls/krilin.png"
    },
    {
        name: "Captain America",
        health: 150,
        damage: 20,
        image: "assets/marvel/captainAmerica.png"
    },
    {
        name: "Iron Man",
        health: 150,
        damage: 20,
        image: "assets/marvel/ironman.png"
    },
    {
        name: "Thor",
        health: 150,
        damage: 20,
        image: "assets/marvel/thor.png"
    },
    {
        name: "Hulk",
        health: 150,
        damage: 20,
        image: "assets/marvel/hulk.png"
    },
    {
        name: "Spiderman",
        health: 150,
        damage: 20,
        image: "assets/marvel/spiderman.png"
    },
];
var defeatedEnemies = [];
console.log(defeatedEnemies);
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
        enemyImage.style.transform = "scaleX(-1)";
        drawBattle(ctx, characterImage, enemyImage);
    };
}
var specialGauge = {
    value: 0,
    maxValue: 100
};
function drawBattle(ctx, characterImage, enemyImage) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(characterImage, 50, 200);
    ctx.scale(-1, 1);
    ctx.drawImage(enemyImage, -550, 200);
    ctx.fillStyle = "green";
    ctx.fillRect(50, 180, character.health, 10);
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 100, (specialGauge.value / specialGauge.maxValue) * 100, 10);
    ctx.fillStyle = "green";
    ctx.fillRect(550, 180, randomEnemy.health, 10);
    ctx.font = "16px Arial";
    ctx.fillStyle = "yellow";
    var starsText = "Stars: " + "*".repeat(character.stars);
    ctx.fillText(starsText, 50, 150);
    var specialButton = document.getElementById("special");
    if (specialGauge.value >= specialGauge.maxValue) {
        specialButton.disabled = false;
    }
    else {
        specialButton.disabled = true;
    }
}
/// Perform an attack
function attack() {
    var characterDamage = Math.floor(Math.random() * character.damage);
    var enemyDamage = Math.floor(Math.random() * randomEnemy.damage);
    var randomGauge = Math.floor(Math.random() * 10);
    // Update character and enemy health
    character.health -= enemyDamage;
    randomEnemy.health -= characterDamage;
    if (character.health <= 0) {
        character.stars -= 1;
    }
    specialGauge.value += randomGauge;
    // Redraw the battle
    drawBattle(ctx, characterImage, enemyImage);
    // Display attack result on the canvas
    ctx.font = "16px Arial";
    ctx.fillStyle = "white";
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
        var specialButton_1 = document.getElementById("special");
        if (specialGauge.value >= specialGauge.maxValue) {
            specialButton_1.disabled = false;
        }
        ctx.fillText("The battle is over! ".concat(winner, " wins!"), canvas.width / 2, 10000);
        var continueBattle = confirm("The battle is over! Do you want to continue?");
        if (continueBattle) {
            resetGame();
            console.log(specialGauge.value);
        }
        else {
            if (defeatedEnemies.length === enemies.length) {
                alert("All enemies are defeated! Resetting the game...");
                resetGame();
            }
            else {
                redirectToCharacterSelection();
            }
        }
        if (character.stars <= 0) {
            var starReader = confirm("You have run out of stars. Proceed to Character Selection");
            if (starReader) {
                redirectToCharacterSelection();
                console.log(character.stars);
            }
        }
    }
}
function poke() {
    var characterDamage = Math.floor(Math.random() * character.damage);
    var enemyDamage = Math.floor(Math.random() * randomEnemy.damage);
    var randomGauge = Math.floor(Math.random() * 10);
    // Update character and enemy health
    character.health -= enemyDamage * 1.5;
    randomEnemy.health -= characterDamage * 1.5;
    if (character.health <= 0) {
        character.stars -= 1;
    }
    specialGauge.value += randomGauge;
    // Redraw the battle
    drawBattle(ctx, characterImage, enemyImage);
    // Display attack result on the canvas
    ctx.font = "16px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("".concat(character.name, " attacks for ").concat(characterDamage, " damage!"), 50, 250);
    ctx.fillText("".concat(randomEnemy.name, " attacks for ").concat(enemyDamage, " damage!"), 550, 250);
    // Check if the battle is over
    if (character.health <= 0 || randomEnemy.health <= 0) {
        var winner = void 0;
        character.stars -= 1;
        if (character.health <= 0 && randomEnemy.health <= 0) {
            winner = "It's a tie!";
        }
        else if (character.health <= 0) {
            winner = randomEnemy.name;
        }
        else {
            winner = character.name;
        }
        var specialButton_2 = document.getElementById("special");
        if (specialGauge.value >= specialGauge.maxValue) {
            specialButton_2.disabled = false;
        }
        ctx.fillText("The battle is over! ".concat(winner, " wins!"), canvas.width / 2, 10000);
        var continueBattle = confirm("The battle is over! Do you want to continue?");
        if (continueBattle) {
            resetGame();
        }
        else {
            if (defeatedEnemies.length === enemies.length) {
                alert("All enemies are defeated! Resetting the game...");
                resetGame();
            }
            else {
                redirectToCharacterSelection();
            }
        }
        if (character.stars <= 0) {
            var starReader = confirm("You have run out of stars. Proceed to Character Selection");
            if (starReader) {
                redirectToCharacterSelection();
                console.log(character.stars);
            }
        }
    }
}
function charge() {
    var characterDamage = Math.floor(Math.random() * character.damage);
    var enemyDamage = Math.floor(Math.random() * randomEnemy.damage);
    var randomGauge = Math.floor(Math.random() * 10);
    // Update character and enemy health
    character.health -= enemyDamage * 2;
    randomEnemy.health -= characterDamage * 2;
    if (character.health <= 0) {
        character.stars -= 1;
    }
    specialGauge.value += randomGauge;
    // Redraw the battle
    drawBattle(ctx, characterImage, enemyImage);
    // Display attack result on the canvas
    ctx.font = "16px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("".concat(character.name, " attacks for ").concat(characterDamage, " damage!"), 50, 250);
    ctx.fillText("".concat(randomEnemy.name, " attacks for ").concat(enemyDamage, " damage!"), 550, 250);
    // Check if the battle is over
    if (character.health <= 0 || randomEnemy.health <= 0) {
        var winner = void 0;
        character.stars -= 1;
        if (character.health <= 0 && randomEnemy.health <= 0) {
            winner = "It's a tie!";
        }
        else if (character.health <= 0) {
            winner = randomEnemy.name;
        }
        else {
            winner = character.name;
        }
        var specialButton_3 = document.getElementById("special");
        if (specialGauge.value >= specialGauge.maxValue) {
            specialButton_3.disabled = false;
        }
        ctx.fillText("The battle is over! ".concat(winner, " wins!"), canvas.width / 2, 10000);
        var continueBattle = confirm("The battle is over! Do you want to continue?");
        if (continueBattle) {
            resetGame();
        }
        else {
            if (defeatedEnemies.length === enemies.length) {
                alert("All enemies are defeated! Resetting the game...");
                resetGame();
            }
            else {
                redirectToCharacterSelection();
            }
        }
        if (character.stars <= 0) {
            var starReader = confirm("You have run out of stars. Proceed to Character Selection");
            if (starReader) {
                redirectToCharacterSelection();
                console.log(character.stars);
            }
        }
    }
}
function special() {
    var characterDamage = Math.floor(Math.random() * character.damage);
    var enemyDamage = Math.floor(Math.random() * randomEnemy.damage);
    // Update character and enemy health
    character.health -= enemyDamage * 3;
    randomEnemy.health -= characterDamage * 3;
    if (character.health <= 0) {
        character.stars -= 1;
    }
    // Redraw the battle
    drawBattle(ctx, characterImage, enemyImage);
    // Display attack result on the canvas
    ctx.font = "16px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("".concat(character.name, " attacks for ").concat(characterDamage, " damage!"), 50, 250);
    ctx.fillText("".concat(randomEnemy.name, " attacks for ").concat(enemyDamage, " damage!"), 550, 250);
    // Check if the battle is over
    if (character.health <= 0 || randomEnemy.health <= 0) {
        var winner = void 0;
        character.stars -= 1;
        if (character.health <= 0 && randomEnemy.health <= 0) {
            winner = "It's a tie!";
        }
        else if (character.health <= 0) {
            winner = randomEnemy.name;
        }
        else {
            winner = character.name;
        }
        var specialButton_4 = document.getElementById("special");
        specialButton_4.disabled = true;
        specialGauge.value = 0;
        ctx.fillText("The battle is over! ".concat(winner, " wins!"), canvas.width / 2, 10000);
        var continueBattle = confirm("The battle is over! Do you want to continue?");
        if (continueBattle) {
            resetGame();
        }
        else {
            if (defeatedEnemies.length === enemies.length) {
                alert("All enemies are defeated! Resetting the game...");
                resetGame();
            }
            else {
                redirectToCharacterSelection();
            }
        }
        if (character.stars <= 0) {
            var starReader = confirm("You have run out of stars. Proceed to Character Selection");
            if (starReader) {
                redirectToCharacterSelection();
                console.log(character.stars);
            }
        }
    }
}
// Reset the game with a new random enemy
function resetGame() {
    character.health = 200;
    defeatedEnemies.push(randomEnemy);
    randomEnemy = getRandomEnemy();
    enemyImage.src = randomEnemy.image;
    drawBattle(ctx, characterImage, enemyImage);
}
// Redirect to character selection HTML
function redirectToCharacterSelection() {
    window.location.href = "index.html";
}
function getRandomEnemy() {
    var availableEnemies = enemies.filter(function (enemy) { return !defeatedEnemies.includes(enemy); });
    if (availableEnemies.length === 0) {
        var continueBattle = confirm("Congratulations! You have defeated all enemies! Redirecting to Character Selection.....");
        if (continueBattle) {
            redirectToCharacterSelection();
        }
    }
    return availableEnemies[Math.floor(Math.random() * availableEnemies.length)];
}
// Initialize the battle
function initializeBattle() {
    // Draw the initial battle state
    drawBattle(ctx, characterImage, enemyImage);
    // Add event listener to the attack button
    var attackButton = document.getElementById("attack");
    var pokeButton = document.getElementById("poke");
    var chargeButton = document.getElementById("charge");
    var specialButton = document.getElementById("special");
    specialButton.disabled = true;
    if (attackButton) {
        attackButton.addEventListener("click", attack);
    }
    if (pokeButton) {
        pokeButton.addEventListener("click", poke);
    }
    if (chargeButton) {
        chargeButton.addEventListener("click", charge);
    }
    if (specialButton) {
        specialButton.addEventListener("click", special);
    }
}
// Call the initializeBattle function to start the battle
initializeBattle();
var attackButton = document.getElementById("attack");
var pokeButton = document.getElementById("poke");
var chargeButton = document.getElementById("charge");
var specialButton = document.getElementById("special");
specialButton.disabled = true;
function handleButtonClick(event) {
    var clickedButton = event.target;
    if (clickedButton === attackButton) {
        attack();
    }
    else if (clickedButton === pokeButton) {
        poke();
    }
    else if (clickedButton === chargeButton) {
        charge();
    }
    else if (clickedButton === specialButton) {
        special();
    }
}
if (attackButton) {
    attackButton.addEventListener("click", handleButtonClick);
}
if (pokeButton) {
    pokeButton.addEventListener("click", handleButtonClick);
}
if (chargeButton) {
    chargeButton.addEventListener("click", handleButtonClick);
}
if (specialButton) {
    specialButton.addEventListener("click", handleButtonClick);
}
