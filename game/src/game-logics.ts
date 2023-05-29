export const charDiv = document.getElementById('character') as HTMLImageElement;
import Game from "./game";

export default class CharacterPicker {
    private characterSelectionDiv: HTMLDivElement;
  
    constructor() {
      this.characterSelectionDiv = document.getElementById('character-selection') as HTMLDivElement;
      this.attachCharacterSelectionEvents();
    }
  
    private attachCharacterSelectionEvents(): void {
      const characterSelectionLinks = this.characterSelectionDiv.getElementsByTagName('a');
      for (let i = 0; i < characterSelectionLinks.length; i++) {
        characterSelectionLinks[i].addEventListener('click', this.handleCharacterSelection.bind(this));
      }
    }
  
    private handleCharacterSelection(event: MouseEvent): void {
      const target = event.target as HTMLImageElement;
      if (target.parentElement){
      const characterName = target.parentElement.id;
  
      const gameDiv = document.createElement('div');
      gameDiv.id = 'game';
  
      const characterImg = document.createElement('img');
      characterImg.src = target.src;
      characterImg.classList.add('character');
      characterImg.id = 'character';
  
      gameDiv.appendChild(characterImg);
      document.body.innerHTML = '';
      document.body.appendChild(gameDiv);
  
      const game = new Game(characterName);
      }
    }
  }
  
  