class Enemy {
    name = string
    hp = 100
    skills = []

    constructor(name, hp, skills, image) {
        this.name = name
        this.hp = hp
        this.skills = skills
        this.image = image
    }

    spawn(){

    }

    attack(target = Character) {
        target.hp - 10
        this.attack.push(this.skills)
    }
    block() {
        if (this.attack) {
         return this.hp
        }
        this.block.push(this.skills)
    }
}


class enemy1 extends Enemy {
    constructor(){
        super('Ultron', 100, [this.attack, this.block], 'assets/ultron.png')
    }
}

class enemy2 extends Enemy {
    constructor(){
        super('Krilin', 100, [this.attack, this.block])
    }
}
let randomPNG = document.getElementById('randomPNG')

randomPNG.onload = function (){
    let image = new Array();
    image[0] = new Image();
    image[0].src = 'assets/krilin.png'
    
    image[1] = new Image()
    image[1].src = 'assets/ultron.png'

    let random = image[Math.floor(Math.random() * Array.length)]

    return document.getElementById('randomPNG').innerHTML = random
    
}
document.getElementById('enemyID').innerHTML = `<h3>HP: ${enemy1.hp}</h3>`
