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
const tools = "1 Artisan Tool or Musical Instrument";
exports.run = async (character) => {

	character.class = "Monk";
	character.inventory.tools = tools;

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
