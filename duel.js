var Enemy = /** @class */ (function () {
    function Enemy(name, image, hp, attack, defense) {
        this.name = name;
        this.image = new Image();
        this.image.src = image;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
    }
    Enemy.prototype.attackOther = function (icons) {
        var damage = this.attack - icons.defense;
        if (damage > 0) {
            icons.hp -= damage;
            console.log("".concat(this.name, " attacked ").concat(icons.name, " for ").concat(damage, " damage!"));
        }
        else {
            console.log("".concat(this.name, "'s attack was blocked by ").concat(icons.name, "'s defense!"));
        }
    };
    Enemy.prototype.blockAttack = function () {
        console.log("".concat(this.name, " is blocking the next attack!"));
        return true;
    };
    return Enemy;
}());
var ultron = new Enemy("Ultron", "assets/ultron.png", 50, 20, 10);
var krilin = new Enemy("Krilin", "assets/krilin.png", 50, 20, 10);
var venom = new Enemy("Venom", "assets/venom.png", 50, 15, 15);
var attacker = krilin;
var defender = venom;
console.log("A battle has started between ".concat(krilin.name, " and ").concat(venom.name, "!"));
function duel(action) {
    if (action === "attack") {
        attacker.attackOther(defender);
    }
    else if (action === "block") {
        attacker.blockAttack();
    }
}
var attackBtn = document.getElementById('attack');
var blockBtn = document.getElementById('block');
var resultDiv = document.getElementById('result');
function duels(attack) {
    var probability = Math.floor(Math.random() * 100);
    var successful = probability >= 30; // 70% chance of success
    var action = attack ? 'attacks' : 'blocks';
    if (successful) {
        resultDiv.innerHTML = "The Pokemon ".concat(action, " successfully!");
    }
    else {
        resultDiv.innerHTML = "The Pokemon ".concat(action, " but failed!");
    }
}
attackBtn.addEventListener('click', function () { return duels(true); });
blockBtn.addEventListener('click', function () { return duels(false); });
