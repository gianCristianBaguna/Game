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
            localStorage.setItem("img", target.src);
            window.location.href = "duel.html";
        }
    };
    return CharacterPicker;
}());
window.onload = function () {
    var characterPicker = new CharacterPicker();
};
