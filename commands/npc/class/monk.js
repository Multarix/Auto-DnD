const inventory = require("../items/inventory.js");
const wTags = {
	"names": ["Shortsword"],
	"simple": true,
	"martial": false,
};
const aTags = {
	"types": [],
	"metal": true,
	"shield": false,
};
const musical = require("../items/musicalInstruments.json");
const artisan = require("../items/artisanTools.json");
exports.run = async (character) => {

	character.class = "Monk";

	const tool = randomNumber(artisan.length);
	const instrument = randomNumber(musical.length);
	const item = (Math.random() > 0.5) ? `Instrument: ${musical[instrument]}` : artisan[tool];
	character.inventory.tools = item;

	for(const [key] of Object.entries(character.stats)){
		character.stats[key] += 2;
	}

	const gear = inventory(character, wTags, aTags);
	character.inventory.weapon = gear.weapon.name;
	return character;
};

exports.info = {
	name: "monk",
	aliases: [],
};
