const inventory = require("../items/inventory.js");
const wTags = {
	"names": [],
	"simple": true,
	"martial": true,
};
const aTags = {
	"types": ["light", "medium", "heavy"],
	"metal": true,
	"shield": true,
};
const skills = {
	mainStat: "strength",
	secondStat: "charisma",
	saveThrow: "wisdom",
	miscStats: ["dexterity", "constitution", "intelligence"],
};
exports.run = async (character) => {

	character.class = "Paladin";
	const npc = statGen(character, skills);

	const gear = inventory(npc, wTags, aTags);
	npc.inventory.armor = gear.armor.name;
	npc.inventory.weapon = gear.weapon.name;
	return npc;
};

exports.info = {
	name: "paladin",
	aliases: [],
};
