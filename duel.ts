class Enemy {
    name: string;
    image : HTMLImageElement
    hp: number;
    attack: number;
    defense: number;
  
    constructor(name: string, image: string, hp: number, attack: number, defense: number) {
      this.name = name;
      this.image = new Image();
      this.image.src = image;
      this.hp = hp;
      this.attack = attack;
      this.defense = defense;
    }
  
    attackOther(icons: Enemy) {
      const damage = this.attack - icons.defense;
      if (damage > 0) {
        icons.hp -= damage;
        console.log(`${this.name} attacked ${icons.name} for ${damage} damage!`);
      } else {
        console.log(`${this.name}'s attack was blocked by ${icons.name}'s defense!`);
      }
    }
  
    blockAttack() {
      console.log(`${this.name} is blocking the next attack!`);
      return true;
    }
  }
  
  const ultron = new Enemy("Ultron", "assets/ultron.png", 50, 20 , 10);
  const krilin = new Enemy("Krilin","assets/krilin.png", 50, 20, 10);
  const venom = new Enemy("Venom","assets/venom.png" ,50, 15, 15);
  
  let attacker = krilin;
  let defender = venom;
  
  console.log(`A battle has started between ${krilin.name} and ${venom.name}!`);
  
  function duel(action: "attack" | "block") {
    if (action === "attack") {
      attacker.attackOther(defender);
    } else if (action === "block") {
      attacker.blockAttack();
    }
  }
  
  const attackBtn = document.getElementById('attack');
  const blockBtn = document.getElementById('block');
  const resultDiv = document.getElementById('result');
  
  function duels(attack: boolean): void {
    const probability: number = Math.floor(Math.random() * 100);
    const successful: boolean = probability >= 30; // 70% chance of success
    const action: string = attack ? 'attacks' : 'blocks';
  
    if (successful) {
      resultDiv.innerHTML = `The Pokemon ${action} successfully!`;
    } else {
      resultDiv.innerHTML = `The Pokemon ${action} but failed!`;
    }
  }
  
  attackBtn.addEventListener('click', () => duels(true));
  blockBtn.addEventListener('click', () => duels(false));