import CharacterPicker from "./game-logics";

export default class Game {
    private characterName: string;
    private charDiv: HTMLImageElement;
    private charLeftAdd: number;
    private charTopAdd: number;
    private isCharFlipped: boolean;
  
    constructor(characterName: string) {
      this.characterName = characterName;
      this.charDiv = document.getElementById('character') as HTMLImageElement;
      this.charLeftAdd = 0;
      this.charTopAdd = 0;
      this.isCharFlipped = false;
  
      document.addEventListener('keydown', this.handleKeys.bind(this));
      document.addEventListener('keydown', this.randomEnemy.bind(this));
    }

    static getCharacterImageSrc(): string {
        const charDiv = document.getElementById('character') as HTMLImageElement;
        return charDiv.src;
      }
  
    private handleKeys(arrow: KeyboardEvent): void {
      const keyPress: string = arrow.code;
  
      if (keyPress === 'ArrowRight') {
        this.charLeftAdd += 10;
        if (this.charLeftAdd >= 860) {
          this.charLeftAdd -= 10;
        }
        if (this.isCharFlipped) {
          this.charDiv.style.transform = 'scaleX(1)';
          this.isCharFlipped = false;
        }
      }
  
      if (keyPress === 'ArrowLeft') {
        this.charLeftAdd -= 10;
        if (this.charLeftAdd <= 1) {
          this.charLeftAdd += 10;
        }
        this.charDiv.style.transform = 'scaleX(-1)';
        this.isCharFlipped = true;
      }
  
      if (keyPress === 'ArrowUp') {
        this.charTopAdd -= 10;
        if (this.charTopAdd <= 1) {
          this.charTopAdd = 0;
        }
      }
  
      if (keyPress === 'ArrowDown') {
        this.charTopAdd += 10;
        if (this.charTopAdd >= 420) {
          this.charTopAdd = 430;
        }
      }
  
      this.charDiv.style.left = this.charLeftAdd + 'px';
      this.charDiv.style.top = this.charTopAdd + 'px';
    }
  
    private randomEnemy(): void {
      const probability: number = Math.floor(Math.random() * 100);
      const randomProbability: number = Math.floor(Math.random() * 20);
      if (probability === randomProbability) {
        window.location.href = 'duel.html';
        return;
      }
    }
  }
  
  window.onload = function () {
    const characterPicker = new CharacterPicker();
  };
