const inventory = require("../items/inventory.js");
const wTags = {
	"names": ["Dagger", "Dart", "Sling", "Quarterstaff", "Light Crossbow"],
	"simple": false,
	"martial": false,
};
const aTags = {
	"types": [],
	"metal": true,
	"shield": false,
};
const skills = {
	mainStat: "charisma",
	secondStat: false,
	saveThrow: "constitution",
	miscStats: ["strength", "dexterity", "intelligence", "wisdom"],
};
exports.run = async (character) => {

	character.class = "Sorcerer";
	const npc = statGen(character, skills);

	const gear = inventory(npc, wTags, aTags);
	npc.inventory.weapon = gear.weapon.name;
	return npc;
};

exports.info = {
	name: "sorcerer",
	aliases: ["sorc", "mage"],
};
