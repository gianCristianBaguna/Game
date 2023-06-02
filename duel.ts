let canvas = document.getElementById("battleCanvas") as HTMLCanvasElement;
let ctx = canvas.getContext("2d");

const character = {
  name: "",
  health: 200,
  damage: 20,
  image: localStorage.getItem("img") ?? "",
  stars: 3
};

const enemies = [
  {
    name: "Goku",
    health: 150,
    damage: 20,
    image: "assets/dragonBalls/goku.png",
  },
  {
    name: "Gohan",
    health: 150,
    damage: 20,
    image: "assets/dragonBalls/gohan.png",
  },
  {
    name: "Trunks",
    health: 150,
    damage: 20,
    image: "assets/dragonBalls/trunks.png",
  },
  {
    name: "Android 18",
    health: 150,
    damage: 20,
    image: "assets/dragonBalls/android18.png",
  },
  {
    name: "Krilin",
    health: 150,
    damage: 20,
    image: "assets/dragonBalls/krilin.png",
  },
  {
    name: "Captain America",
    health: 150,
    damage: 20,
    image: "assets/marvel/captainAmerica.png",
  },
  {
    name: "Iron Man",
    health: 150,
    damage: 20,
    image: "assets/marvel/ironman.png",
  },
  {
    name: "Thor",
    health: 150,
    damage: 20,
    image: "assets/marvel/thor.png",
  },
  {
    name: "Hulk",
    health: 150,
    damage: 20,
    image: "assets/marvel/hulk.png",
  },
  {
    name: "Spiderman",
    health: 150,
    damage: 20,
    image: "assets/marvel/spiderman.png",
  },
];

let defeatedEnemies: { name: string; health: number; damage: number; image: string; statisticalPoints: number; }[] = [];

console.log(defeatedEnemies)

let randomEnemy = getRandomEnemy();

const characterImage = new Image();
characterImage.src = character.image;

const enemyImage = new Image();
enemyImage.src = randomEnemy.image;
let enemyFlip = true;

if (enemyFlip) {
  enemyImage.onload = () => {
    drawBattle(ctx, characterImage, enemyImage);
  };
} else {
  enemyImage.onload = () => {
    enemyImage.style.transform = "scaleX(-1)";
    drawBattle(ctx, characterImage, enemyImage);
  };
}

const specialGauge = {
  value: 0,
  maxValue: 100
};


function drawBattle(
  ctx: CanvasRenderingContext2D,
  characterImage: HTMLImageElement,
  enemyImage: HTMLImageElement
) {
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
  const starsText = "Stars: " + "*".repeat(character.stars);
  ctx.fillText(starsText, 50, 150);
  const specialButton: any = document.getElementById("special");
  if (specialGauge.value >= specialGauge.maxValue) {
    specialButton.disabled = false;
  } else {
    specialButton.disabled = true;
  }
}

/// Perform an attack
function attack() {
  const characterDamage = Math.floor(Math.random() * character.damage);
  const enemyDamage = Math.floor(Math.random() * randomEnemy.damage);
  const randomGauge = Math.floor(Math.random() * 10);

  // Update character and enemy health
  character.health -= enemyDamage;
  randomEnemy.health -= characterDamage;
  if(character.health <= 0){
    character.stars -= 1
  }
  specialGauge.value += randomGauge;

  // Redraw the battle
  drawBattle(ctx, characterImage, enemyImage);

  // Display attack result on the canvas
  ctx.font = "16px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(
    `${character.name} attacks for ${characterDamage} damage!`,
    50,
    250
  );
  ctx.fillText(
    `${randomEnemy.name} attacks for ${enemyDamage} damage!`,
    550,
    250
  );

  // Check if the battle is over
  if (character.health <= 0 || randomEnemy.health <= 0) {
    let winner;
    if (character.health <= 0 && randomEnemy.health <= 0) {
      winner = "It's a tie!";
    } else if (character.health <= 0) {
      winner = randomEnemy.name;
    } else {
      winner = character.name;
    }
    const specialButton: any = document.getElementById("special");
    
    if (specialGauge.value >= specialGauge.maxValue) {
    specialButton.disabled = false;
    }
    

    ctx.fillText(`The battle is over! ${winner} wins!`, canvas.width / 2, 10000);

    const continueBattle = confirm(
      `The battle is over! Do you want to continue?`
    );
    if (continueBattle) {
      resetGame();
      console.log(specialGauge.value)
    } 
    else {
      if (defeatedEnemies.length === enemies.length) {
        alert("All enemies are defeated! Resetting the game...");
        resetGame();
      } else {
        redirectToCharacterSelection();
      }
    }
    if(character.stars <= 0){
      let starReader = confirm(`You have run out of stars. Proceed to Character Selection`)
      if(starReader){
        redirectToCharacterSelection()
        console.log(character.stars)
      }
    }
  }
}

function poke() {
  const characterDamage = Math.floor(Math.random() * character.damage);
  const enemyDamage = Math.floor(Math.random() * randomEnemy.damage);
  const randomGauge = Math.floor(Math.random() * 10);

  // Update character and enemy health
  character.health -= enemyDamage * 1.5;
  randomEnemy.health -= characterDamage * 1.5;
  if(character.health <= 0){
    character.stars -= 1
  }
  specialGauge.value += randomGauge;

  // Redraw the battle
  drawBattle(ctx, characterImage, enemyImage);

  // Display attack result on the canvas
  ctx.font = "16px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(
    `${character.name} attacks for ${characterDamage} damage!`,
    50,
    250
  );
  ctx.fillText(
    `${randomEnemy.name} attacks for ${enemyDamage} damage!`,
    550,
    250
  );

  // Check if the battle is over
  if (character.health <= 0 || randomEnemy.health <= 0) {
    let winner;
    character.stars -= 1
    if (character.health <= 0 && randomEnemy.health <= 0) {
      winner = "It's a tie!";
    } else if (character.health <= 0) {
      winner = randomEnemy.name;
    } else {
      winner = character.name;
    }
    const specialButton: any = document.getElementById("special");
    
    if (specialGauge.value >= specialGauge.maxValue) {
    specialButton.disabled = false;
    }
    

    ctx.fillText(`The battle is over! ${winner} wins!`, canvas.width / 2, 10000);

    const continueBattle = confirm(
      `The battle is over! Do you want to continue?`
    );
    if (continueBattle) {
      resetGame();
    } 
    else {
      if (defeatedEnemies.length === enemies.length) {
        alert("All enemies are defeated! Resetting the game...");
        resetGame();
      } else {
        redirectToCharacterSelection();
      }
    }
    if(character.stars <= 0){
      let starReader = confirm(`You have run out of stars. Proceed to Character Selection`)
      if(starReader){
        redirectToCharacterSelection()
        console.log(character.stars)
      }
    }
  }
}

function charge() {
  const characterDamage = Math.floor(Math.random() * character.damage);
  const enemyDamage = Math.floor(Math.random() * randomEnemy.damage);
  const randomGauge = Math.floor(Math.random() * 10);

  // Update character and enemy health
  character.health -= enemyDamage * 2;
  randomEnemy.health -= characterDamage * 2;
  if(character.health <= 0){
    character.stars -= 1
  }
  specialGauge.value += randomGauge;

  // Redraw the battle
  drawBattle(ctx, characterImage, enemyImage);

  // Display attack result on the canvas
  ctx.font = "16px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(
    `${character.name} attacks for ${characterDamage} damage!`,
    50,
    250
  );
  ctx.fillText(
    `${randomEnemy.name} attacks for ${enemyDamage} damage!`,
    550,
    250
  );

  // Check if the battle is over
  if (character.health <= 0 || randomEnemy.health <= 0) {
    let winner;
    character.stars -= 1
    if (character.health <= 0 && randomEnemy.health <= 0) {
      winner = "It's a tie!";
    } else if (character.health <= 0) {
      winner = randomEnemy.name;
    } else {
      winner = character.name;
    }
    const specialButton: any = document.getElementById("special");
    
    if (specialGauge.value >= specialGauge.maxValue) {
    specialButton.disabled = false;
    }
    

    ctx.fillText(`The battle is over! ${winner} wins!`, canvas.width / 2, 10000);

    const continueBattle = confirm(
      `The battle is over! Do you want to continue?`
    );
    if (continueBattle) {
      resetGame();
    } 
    else {
      if (defeatedEnemies.length === enemies.length) {
        alert("All enemies are defeated! Resetting the game...");
        resetGame();
      } else {
        redirectToCharacterSelection();
      }
    }
    if(character.stars <= 0){
      let starReader = confirm(`You have run out of stars. Proceed to Character Selection`)
      if(starReader){
        redirectToCharacterSelection()
        console.log(character.stars)
      }
    }
  }
}

function special() {
  const characterDamage = Math.floor(Math.random() * character.damage);
  const enemyDamage = Math.floor(Math.random() * randomEnemy.damage);

  // Update character and enemy health
  character.health -= enemyDamage * 3;
  randomEnemy.health -= characterDamage * 3;
  if(character.health <= 0){
    character.stars -= 1
  }
  

  // Redraw the battle
  drawBattle(ctx, characterImage, enemyImage);

  // Display attack result on the canvas
  ctx.font = "16px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(
    `${character.name} attacks for ${characterDamage} damage!`,
    50,
    250
  );
  ctx.fillText(
    `${randomEnemy.name} attacks for ${enemyDamage} damage!`,
    550,
    250
  );

  // Check if the battle is over
  if (character.health <= 0 || randomEnemy.health <= 0) {
    let winner;
    character.stars -= 1
    if (character.health <= 0 && randomEnemy.health <= 0) {
      winner = "It's a tie!";
    } else if (character.health <= 0) {
      winner = randomEnemy.name;
    } else {
      winner = character.name;
    }
    const specialButton: any = document.getElementById("special");
    
    specialButton.disabled = true
    specialGauge.value = 0
    

    ctx.fillText(`The battle is over! ${winner} wins!`, canvas.width / 2, 10000);

    const continueBattle = confirm(
      `The battle is over! Do you want to continue?`
    );
    if (continueBattle) {
      resetGame();
    } 
    else {
      if (defeatedEnemies.length === enemies.length) {
        alert("All enemies are defeated! Resetting the game...");
        resetGame();
      } else {
        redirectToCharacterSelection();
      }
    }
    if(character.stars <= 0){
      let starReader = confirm(`You have run out of stars. Proceed to Character Selection`)
      if(starReader){
        redirectToCharacterSelection()
        console.log(character.stars)
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

function getRandomEnemy(): any {
  const availableEnemies = enemies.filter(
    (enemy) => !defeatedEnemies.includes(enemy)
  );

  if (availableEnemies.length === 0) {
    const continueBattle = confirm(
      "Congratulations! You have defeated all enemies! Redirecting to Character Selection....."
    );
    if (continueBattle) {
      redirectToCharacterSelection()
    } 
  }

  return availableEnemies[Math.floor(Math.random() * availableEnemies.length)];
}

// Initialize the battle
function initializeBattle() {
  // Draw the initial battle state
  drawBattle(ctx, characterImage, enemyImage);

  // Add event listener to the attack button
  const attackButton = document.getElementById("attack");
  const pokeButton = document.getElementById("poke");
  const chargeButton = document.getElementById("charge");
  const specialButton: any = document.getElementById("special");
  specialButton.disabled = true
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

const attackButton = document.getElementById("attack");
const pokeButton = document.getElementById("poke");
const chargeButton = document.getElementById("charge");
const specialButton: any = document.getElementById("special");
specialButton.disabled = true;

function handleButtonClick(event: Event) {
  const clickedButton = event.target as HTMLButtonElement;

  if (clickedButton === attackButton) {
    attack();
  } else if (clickedButton === pokeButton) {
    poke();
  } else if (clickedButton === chargeButton) {
    charge();
  } else if (clickedButton === specialButton) {
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

