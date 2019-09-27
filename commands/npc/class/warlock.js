const inventory = require("../items/inventory.js");
const wTags = {
	"names": [],
	"simple": true,
	"martial": false,
};
const aTags = {
	"types": ["light"],
	"metal": true,
	"shield": false,
};
const skills = {
	mainStat: "charisma",
	secondStat: false,
	saveThrow: "wisdom",
	miscStats: ["strength", "dexterity", "constitution", "intelligence"],
};
exports.run = async (character) => {

	character.class = "Warlock";
	const npc = statGen(character, skills);

	const gear = inventory(npc, wTags, aTags);
	npc.inventory.armor = gear.armor.name;
	npc.inventory.weapon = gear.weapon.name;
	return npc;
};

exports.info = {
	name: "warlock",
	aliases: [],
};
