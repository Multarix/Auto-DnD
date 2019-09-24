const inventory = require("../items/inventory.js");
const wTags = {
	"names": ["Dagger", "Dart", "Sling", "Quarterstaff", "Light Crossbow"],
	"simple": true,
	"martial": true,
};
const aTags = {
	"types": [],
	"metal": true,
	"shield": false,
};
exports.run = async (character) => {

	character.class = "Wizard";

	for(const [key] of Object.entries(character.stats)){
		character.stats[key] += 2;
	}

	const gear = inventory(character, wTags, aTags);
	character.inventory.weapon = gear.weapon.name;
	return character;
};

exports.info = {
	name: "wizard",
	aliases: ["wiztard"],
};
