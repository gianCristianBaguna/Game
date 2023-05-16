var Sprites = /** @class */ (function () {
    function Sprites(name, hp) {
        this.name = name;
        this.hp = hp;
    }
    Sprites.prototype.attack = function (target) {
        var criticalDamage = this.attackDamage * 2;
        var firstNumber = Math.floor(Math.random() * 10);
        var secondNumber = Math.floor(Math.random() * 10);
        if (firstNumber === secondNumber) {
            target.hp -= criticalDamage;
            if (target.hp < 0) {
                target.hp = 0;
                alert('You Win!');
            }
            if (this.hp < 0) {
                this.hp = 0;
                alert('You Lose!');
            }
        }
        else {
            target.hp -= this.attackDamage;
        }
    };
    return Sprites;
}());
var krilin = new Sprites('Krilin', 120);
var venom = new Sprites('Venom', 120);
var button = document.getElementById('attack');
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
    krilin.attack(venom);
});
console.log("".concat(button));
