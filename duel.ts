class Hero {
	name: string;
	sprite: string;
	hp: number;
	fullhp: number;
	moves: Array<[string, number?]>;

	constructor(name: string, sprite: string, hp: number, moves: Array<[string, number?]>) {
		this.name = name;
		this.sprite = sprite;
		this.hp = hp;
		this.fullhp = hp;
		this.moves = moves;
	}
}

let heroes: Hero[] = [
	[
		"Goku",
		"assets/dragonBalls/goku.png",
		100,
		[
			["Attack", 10],
			["Heal", 10]
		],
	],
	[
		"Gohan",
		"assets/dragonBalls/gohan.png",
		100,
		[
			["Attack", 10],
			["Heal", 10]
		],
	],
	[
		"Trunks",
		"assets/dragonBalls/trunks.png",
		100,
		[
			["Attack", 10],
			["Heal", 10]
		],
	],
].map(([name, sprite, hp]) => new Mememon(name, sprite, hp, moves));

let typeMatch: { [key: string]: string[][] } = {
	DaWae: [["cringe"], ["deepfried", "rock"], ["dank", "wholesome", "classic"]],
	BigChungus: [[""], ["wholesome"], ["dank", "deepfried"]],
	Spongeken: [
		["poison"],
		["dank", "rage", "dark", "classic"],
		["wholesome", "deepfried"],
	],
};

function spawn(bool: boolean): Mememon {
	let p = mememons[Math.floor(Math.random() * mememons.length)];
	let mmm = new Mememon(p.name, p.sprite, p.hp, p.moves);

	if (bool) {
		for (let i = 0; i < 4; i++) {
			let move = mmm.moves[i];
			document.getElementById("m" + i).value = move[0];
		}
	}
	return mmm;
}

let mm1 = spawn(true);
let s1 = document.createElement("img");
s1.src = mm1.sprite;
document.getElementById("mm1").appendChild(s1);
document.getElementById("hp1").innerHTML = `<h1>Player</h1><br><p>HP: ${mm1.hp}/${mm1.fullhp}</p>`;

let mm2 = spawn(false);
let s2 = document.createElement("img");
s2.src = mm2.sprite;
document.getElementById("mm2").appendChild(s2);
document.getElementById("hp2
