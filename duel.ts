class Hero{
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

let mememons: Mememon[] = [
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

