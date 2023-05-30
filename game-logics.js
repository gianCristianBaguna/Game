var CharacterPicker = /** @class */ (function () {
    function CharacterPicker() {
        this.characterSelectionDiv = document.getElementById("character-selection");
        this.attachCharacterSelectionEvents();
    }
    CharacterPicker.prototype.attachCharacterSelectionEvents = function () {
        var characterSelectionLinks = this.characterSelectionDiv.getElementsByTagName("a");
        for (var i = 0; i < characterSelectionLinks.length; i++) {
            characterSelectionLinks[i].addEventListener("click", this.handleCharacterSelection.bind(this));
        }
    };
    CharacterPicker.prototype.handleCharacterSelection = function (event) {
        var target = event.target;
        if (target.parentElement) {
            var characterName = target.parentElement.id;
            var gameDiv = document.createElement("div");
            gameDiv.id = "game";
            var characterImg = document.createElement("img");
            characterImg.src = target.src;
            characterImg.classList.add("character");
            characterImg.id = "character";
            gameDiv.appendChild(characterImg);
            document.body.innerHTML = "";
            document.body.appendChild(gameDiv);
            localStorage.setItem("img", characterImg.src);
            var game = new Game(characterName);
        }
    };
    return CharacterPicker;
}());
var Game = /** @class */ (function () {
    function Game(characterName) {
        this.characterName = characterName;
        this.charDiv = document.getElementById("character");
        this.charLeftAdd = 0;
        this.charTopAdd = 0;
        this.isCharFlipped = false;
        document.addEventListener("keydown", this.handleKeys.bind(this));
        document.addEventListener("keydown", this.randomEnemy.bind(this));
    }
    Game.getCharacterImageSrc = function () {
        var charDiv = document.getElementById("character");
        return charDiv.src;
    };
    Game.prototype.handleKeys = function (arrow) {
        var keyPress = arrow.code;
        if (keyPress === "ArrowRight") {
            this.charLeftAdd += 10;
            if (this.charLeftAdd >= 860) {
                this.charLeftAdd -= 10;
            }
            if (this.isCharFlipped) {
                this.charDiv.style.transform = "scaleX(1)";
                this.isCharFlipped = false;
            }
        }
        if (keyPress === "ArrowLeft") {
            this.charLeftAdd -= 10;
            if (this.charLeftAdd <= 1) {
                this.charLeftAdd += 10;
            }
            this.charDiv.style.transform = "scaleX(-1)";
            this.isCharFlipped = true;
        }
        if (keyPress === "ArrowUp") {
            this.charTopAdd -= 10;
            if (this.charTopAdd <= 1) {
                this.charTopAdd = 0;
            }
        }
        if (keyPress === "ArrowDown") {
            this.charTopAdd += 10;
            if (this.charTopAdd >= 420) {
                this.charTopAdd = 430;
            }
        }
        this.charDiv.style.left = this.charLeftAdd + "px";
        this.charDiv.style.top = this.charTopAdd + "px";
    };
    Game.prototype.randomEnemy = function () {
        var probability = Math.floor(Math.random() * 100);
        var randomProbability = Math.floor(Math.random() * 20);
        if (probability === randomProbability) {
            window.location.href = "duel.html";
            return;
        }
    };
    return Game;
}());
window.onload = function () {
    var characterPicker = new CharacterPicker();
};
