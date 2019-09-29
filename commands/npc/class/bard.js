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
const skills = {
	mainStat: "charisma",
	secondStat: false,
	saveThrow: "dexterity",
	miscStats: ["strength", "constitution", "intelligence", "wisdom"],
};
exports.run = async (character) => {
	const musical = require("../items/musicalInstruments.json");

	character.class = "Bard";

	const items = [];
	for(let i = 0; i < 3; i++){
		const instrument = musical.random();
		items.push(`[${instrument.name}](${instrument.link})`);
		musical.splice(musical.indexOf(instrument), 1);
	}
	delete require.cache[require.resolve(`../items/musicalInstruments.json`)];
	character.inventory.tools = items.join(", ");

	const npc = statGen(character, skills);

	const gear = inventory(npc, wTags, aTags);
	npc.inventory.armor = gear.armor.name;
	npc.inventory.weapon = gear.weapon.name;
	return npc;
};

exports.info = {
	name: "bard",
	aliases: ["musician", "cunt", "worst", "horrible", "shit", "trash", "annoying", "garbage"],
};
