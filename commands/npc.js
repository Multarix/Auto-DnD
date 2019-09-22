const chosenRace = require("./npc/race/halfelf.js");
exports.run = async (client, message, args) => {

	if(!args[0]) return message.channel.send("Usage: [npc](<..race> <..job/class>)", { code: "markdown" });

	let character = {
		"race": "\u200b",
		"class": "\u200b",
		"gender": "\u200b",
		"name": "\u200b",
		"job": "\u200b",
		"speed": "\u200b",
		"strength": 8,
		"dexterity": 8,
		"constitution": 8,
		"intelligence": 8,
		"wisdom": 8,
		"charisma": 8,
	};

	character = chosenRace(character);
	return console.log(character);
};

// /create human str-fighter ?
// /create human dex-fighter ?
// /create human int-fighter ?

exports.conf = {
	enabled: true,
	allowDM: true,
	aliases: ["n"],
	permLevel: 10,
};

exports.help = {
	name: "npc",
	category: "Misc",
	description: "Creates a semi-random NPC",
	usage: "race job/class",
};
