class Sprites{
  name: string;
  hp: number;
  attackDamage: 10;

  constructor(name: string, hp: number){
    this.name = name
    this.hp = hp
  }

  attack(target: Sprites){
    let criticalDamage = this.attackDamage * 2
    let firstNumber: number = Math.floor(Math.random() * 10)
    let secondNumber: number = Math.floor(Math.random() * 10)
    if(firstNumber === secondNumber) {
      target.hp -= criticalDamage

      if(target.hp < 0){
        target.hp = 0
        alert('You Win!')
      }
      if(this.hp < 0){
        this.hp = 0
        alert('You Lose!')
      }
    }
    else{
      target.hp -= this.attackDamage
    }
  }
}


let krilin = new Sprites('Krilin', 120)
let venom = new Sprites('Venom', 120)
let button = document.getElementById('attack')
button?.addEventListener('click', () => {
  krilin.attack(venom)
})

console.log(`${button}`)

