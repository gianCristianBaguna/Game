let canvas = document.getElementById('battleCanvas') as HTMLCanvasElement;
let ctx = canvas.getContext('2d');

const character = {
  name: '',
  health: 100,
  damage: 20,
  image: 'assets/dragonBalls/goku.png',
};

const enemies = [
  {
    name: 'Goku',
    health: 100,
    damage: 20,
    image: 'assets/dragonBalls/goku.png',
  },
  {
    name: 'Gohan',
    health: 100,
    damage: 15,
    image: 'assets/dragonBalls/gohan.png',
  },
  {
    name: 'Trunks',
    health: 100,
    damage: 15,
    image: 'assets/dragonBalls/trunks.png',
  },
  {
    name: 'Android 18',
    health: 100,
    damage: 15,
    image: 'assets/dragonBalls/android18.png',
  },
  {
    name: 'Krilin',
    health: 100,
    damage: 15,
    image: 'assets/dragonBalls/krilin.png',
  },
  {
    name: 'Captain America',
    health: 100,
    damage: 15,
    image: 'assets/marvel/captainAmerica.png',
  },
  {
    name: 'Iron Man',
    health: 100,
    damage: 15,
    image: 'assets/marvel/ironman.png',
  },
  {
    name: 'Thor',
    health: 100,
    damage: 15,
    image: 'assets/marvel/thor.png',
  },
  {
    name: 'Hulk',
    health: 100,
    damage: 15,
    image: 'assets/marvel/hulk.png',
  },
  {
    name: 'Spiderman',
    health: 100,
    damage: 15,
    image: 'assets/marvel/spiderman.png',
  },
];

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
    enemyImage.style.transform = 'scaleX(-1)';
    drawBattle(ctx, characterImage, enemyImage);
  };
}

function drawBattle(ctx: CanvasRenderingContext2D, characterImage: HTMLImageElement, enemyImage: HTMLImageElement) {
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
	const characterDamage = Math.floor(Math.random() * character.damage);
	const enemyDamage = Math.floor(Math.random() * randomEnemy.damage);
  
	// Update character and enemy health
	character.health -= enemyDamage;
	randomEnemy.health -= characterDamage;
  
	// Redraw the battle
	drawBattle(ctx, characterImage, enemyImage);
  
	// Display attack result on the canvas
	ctx.font = '16px Arial';
	ctx.fillStyle = 'white';
	ctx.fillText(`${character.name} attacks for ${characterDamage} damage!`, 50, 250);
	ctx.fillText(`${randomEnemy.name} attacks for ${enemyDamage} damage!`, 550, 250);
  
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
  
	  ctx.fillText(`The battle is over! ${winner} wins!`, canvas.width / 2, 300);
  
	  const continueBattle = confirm(`The battle is over! Do you want to continue?`);
	  if (continueBattle) {
		resetGame();
	  } else {
		redirectToCharacterSelection();
	  }
	}
  }
  

// Reset the game with a new random enemy
function resetGame() {
  character.health = 100;
  enemies.forEach((enemy) => {
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
  const attackButton = document.getElementById('attack');
  if (attackButton) {
    attackButton.addEventListener('click', attack);
  }
}

// Call the initializeBattle function to start the battle
initializeBattle();
