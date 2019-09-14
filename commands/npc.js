/*
Strength
Dexterity
Constitution
Intelligence
Wisdom
Charisma
*/

exports.run = async (client, message, args) => {
	/*
		eg; "/npc" to generate an npc with a random class and race
		eg; "/npc guard" to generate a guard with a random race & a few pre-selected classes
		eg; "/npc guard rogue" to generate a rogue class guard & random race
		eg; "/npc guard rogue human" to generate a rogue class, human guard (need a way to switch class & race without making a mess)

		Maybe split command into several commands? eg:
		job: "/job guard rogue human"
		npc: "/npc human rogue"
		etc.
	*/
};

exports.conf = {
	enabled: false,
	allowDM: true,
	aliases: ["create"],
	permLevel: 0,
};

exports.help = {
	name: "npc",
	category: "Misc",
	description: "Generates a semi-random npc",
	usage: "..job-name ..class ..race",
};
