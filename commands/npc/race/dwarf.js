exports.run = async (character) => {
	const types = ["hill", "mountain"];
	const subrace = types.random();

	const file = require(`./dwarf-${subrace}.js`);
	const npc = file.run(character);
	return npc;
};

exports.stats = async (character) => {
	const reggie = /^\w+/g;
	const str = character.race.name.toLowerCase();
	const subrace = reggie.exec(str)[0];

	const file = require(`./dwarf-${subrace}.js`);
	const npc = file.stats(character);
	return npc;
};

exports.info = {
	name: "dwarf",
	aliases: [],
};
