const inventory = require("../items/inventory.js");
const wTags = {
	"names": ["Hand Crossbow", "Longsword", "Rapier", "Shortsword"],
	"simple": true,
	"martial": false,
};
const aTags = {
	"types": ["light"],
	"metal": true,
	"shield": false,
};
const musical = require("../items/musicalInstruments.json");
exports.run = async (character) => {

	character.class = "Bard";

	let items = "";
	for(let i = 0; i < 3; i++){
		const instrument = randomNumber(musical.length);
		items += `Instrument: ${musical[instrument]}\n`;
		musical.splice(instrument, 1);
	}
	character.inventory.tools = items;

	for(const [key] of Object.entries(character.stats)){
		character.stats[key] += 2;
	}

	const gear = inventory(character, wTags, aTags);
	character.inventory.armor = gear.armor.name;
	character.inventory.weapon = gear.weapon.name;
	return character;
};

exports.info = {
	name: "bard",
	aliases: ["musician", "cunt", "worst", "horrible", "shit", "trash", "annoying", "garbage"],
};
