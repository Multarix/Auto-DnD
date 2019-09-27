const inventory = require("../items/inventory.js");
const wTags = {
	"names": [],
	"simple": true,
	"martial": false,
};
const aTags = {
	"types": ["light", "medium"],
	"metal": true,
	"shield": true,
};
const skills = {
	mainStat: "wisdom",
	secondStat: false,
	saveThrow: "charisma",
	miscStats: ["strength", "dexterity", "constitution", "intelligence"],
};
exports.run = async (character) => {

	character.class = "Cleric";
	const npc = statGen(character, skills);

	const gear = inventory(npc, wTags, aTags);
	npc.inventory.armor = gear.armor.name;
	npc.inventory.weapon = gear.weapon.name;
	return npc;
};

exports.info = {
	name: "cleric",
	aliases: ["healer", "priest"],
};
