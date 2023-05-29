/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./game-logics.ts":
/*!************************!*\
  !*** ./game-logics.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Game = void 0;\nclass CharacterPicker {\n    constructor() {\n        this.characterSelectionDiv = document.getElementById('character-selection');\n        this.attachCharacterSelectionEvents();\n    }\n    attachCharacterSelectionEvents() {\n        const characterSelectionLinks = this.characterSelectionDiv.getElementsByTagName('a');\n        for (let i = 0; i < characterSelectionLinks.length; i++) {\n            characterSelectionLinks[i].addEventListener('click', this.handleCharacterSelection.bind(this));\n        }\n    }\n    handleCharacterSelection(event) {\n        const target = event.target;\n        const characterName = target.parentElement.id;\n        const gameDiv = document.createElement('div');\n        gameDiv.id = 'game';\n        const characterImg = document.createElement('img');\n        characterImg.src = target.src;\n        characterImg.classList.add('character');\n        characterImg.id = 'character';\n        gameDiv.appendChild(characterImg);\n        document.body.innerHTML = '';\n        document.body.appendChild(gameDiv);\n        const game = new Game(characterName);\n    }\n}\nclass Game {\n    constructor(characterName) {\n        this.characterName = characterName;\n        this.charDiv = document.getElementById('character');\n        this.charLeftAdd = 0;\n        this.charTopAdd = 0;\n        this.isCharFlipped = false;\n        document.addEventListener('keydown', this.handleKeys.bind(this));\n        document.addEventListener('keydown', this.randomEnemy.bind(this));\n    }\n    static getCharacterImageSrc() {\n        const charDiv = document.getElementById('character');\n        return charDiv.src;\n    }\n    handleKeys(arrow) {\n        const keyPress = arrow.code;\n        if (keyPress === 'ArrowRight') {\n            this.charLeftAdd += 10;\n            if (this.charLeftAdd >= 860) {\n                this.charLeftAdd -= 10;\n            }\n            if (this.isCharFlipped) {\n                this.charDiv.style.transform = 'scaleX(1)';\n                this.isCharFlipped = false;\n            }\n        }\n        if (keyPress === 'ArrowLeft') {\n            this.charLeftAdd -= 10;\n            if (this.charLeftAdd <= 1) {\n                this.charLeftAdd += 10;\n            }\n            this.charDiv.style.transform = 'scaleX(-1)';\n            this.isCharFlipped = true;\n        }\n        if (keyPress === 'ArrowUp') {\n            this.charTopAdd -= 10;\n            if (this.charTopAdd <= 1) {\n                this.charTopAdd = 0;\n            }\n        }\n        if (keyPress === 'ArrowDown') {\n            this.charTopAdd += 10;\n            if (this.charTopAdd >= 420) {\n                this.charTopAdd = 430;\n            }\n        }\n        this.charDiv.style.left = this.charLeftAdd + 'px';\n        this.charDiv.style.top = this.charTopAdd + 'px';\n    }\n    randomEnemy() {\n        const probability = Math.floor(Math.random() * 100);\n        const randomProbability = Math.floor(Math.random() * 20);\n        if (probability === randomProbability) {\n            window.location.href = 'duel.html';\n            return;\n        }\n    }\n}\nexports.Game = Game;\nwindow.onload = function () {\n    const characterPicker = new CharacterPicker();\n};\n\n\n//# sourceURL=webpack:///./game-logics.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./game-logics.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;