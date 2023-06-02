class CharacterPicker {
  private characterSelectionDiv: HTMLDivElement;

  constructor() {
    this.characterSelectionDiv = document.getElementById(
      "character-selection"
    ) as HTMLDivElement;
    this.attachCharacterSelectionEvents();
  }

  private attachCharacterSelectionEvents(): void {
    const characterSelectionLinks =
      this.characterSelectionDiv.getElementsByTagName("a");
    for (let i = 0; i < characterSelectionLinks.length; i++) {
      characterSelectionLinks[i].addEventListener(
        "click",
        this.handleCharacterSelection.bind(this)
      );
    }
  }

  private handleCharacterSelection(event: MouseEvent): void {
    const target = event.target as HTMLImageElement;
    if (target.parentElement) {
      const characterName = target.parentElement.id;

      localStorage.setItem("img", target.src);

      window.location.href = "duel.html";
    }
  }
}

window.onload = function () {
  const characterPicker = new CharacterPicker();
};
