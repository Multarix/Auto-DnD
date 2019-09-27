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
