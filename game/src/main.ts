import './style.css'
import Game from './game'
import CharacterPicker from './game-logics'
import gameLogics from './game-logics'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<body>
<h1>Dragon Balls vs Marvels</h1>
<h2 class="jump2">Character Selection</h2>
<div id="character-selection">
    <table>
        <tr>
            <td><a id="goku"><img class="jump" id="characterSelection" src="../src/assets/dragonBalls/goku.png"><b>Goku</b></a></td>
            <td><a id="gohan"><img class="jump" id="characterSelection" src="../src/assets/dragonBalls/gohan.png"><b>Gohan</b></a></td>
            <td><a id="trunks"><img class="jump" id="characterSelection" src="../src/assets/dragonBalls/trunks.png"><b>Trunks</b></a></td>
            <td><a id="android18"><img class="jump" id="characterSelection" src="../src/assets/dragonBalls/android18.png"><b>Android 18</b></a></td>
            <td><a id="krilin"><img class="jump" id="characterSelection" src="../src/assets/dragonBalls/krilin.png"><b>Krilin</b></a></td>
        </tr>
        <tr>
            <td><a id="captainAmerica"><img class="jump" id="characterSelection" src="./src/assets/marvel/captainAmerica.png"><b>Capt. America</b></a></td>
            <td><a id="ironman"><img class="jump" id="characterSelection" src="./src/assets/marvel/ironman.png"><b>Iron Man</b></a></td>
            <td><a id="thor"><img class="jump" id="characterSelection" src="./src/assets/marvel/thor.png"><b>Thor</b></a></td>
            <td><a id="hulk"><img class="jump" id="characterSelection" src="./src/assets/marvel/hulk.png"><b>Hulk</b></a></td>
            <td><a id="spiderman"><img class="jump" id="characterSelection" src="./src/assets/marvel/spiderman.png"><b>Spiderman</b></a></td>
        </tr>
    </table>
</div>

<script src="game-logics.ts"></script>
</body>
`

