const Discord = require("discord.js");
const nameGenerator = require("./npc/name/nameGen.js");
exports.run = async (client, message, args) => {

	if(!args[0] || !args[1]) return message.channel.send("Usage: [npc](<..race> <..job/class>)", { code: "markdown" });

	let character = {
		race: {
			name: "\u200b",
			link: "https://www.dndbeyond.com/races/",
			small: false,
			speed: 0,
		},
		class: "\u200b",
		gender: "\u200b",
		name: "\u200b",
		stats: {
			strength: 8,
			dexterity: 8,
			constitution: 8,
			intelligence: 8,
			wisdom: 8,
			charisma: 8,
		},
		inventory: {
			armor: "None",
			weapon: "None",
			tools: "None",
		},
	};

	const randArry = ["random", "rand", "r"];

	const raceCheck = args.shift().toLowerCase();
	let chosenRace = client.raceType.get(raceCheck) || client.raceType.get(client.raceAlias.get(raceCheck));
	if(!chosenRace && randArry.includes(raceCheck)) chosenRace = client.raceType.random();
	if(!chosenRace) return message.channel.send("No Race/ Inavlid Race specified\nUsage: [npc](<..race> <..job/class>)", { code: "markdown" });

	const classCheck = args.shift().toLowerCase();
	let chosenClass = client.classType.get(classCheck) || client.classType.get(client.classAlias.get(classCheck));
	if(!chosenClass && randArry.includes(classCheck)) chosenClass = client.classType.random();
	if(!chosenClass) return message.channel.send("No Class/ Invalid Class specified\nUsage: [npc](<..race> <..job/class>)", { code: "markdown" });

	character = await chosenRace.run(character);
	character = await chosenClass.run(character);
	character = await chosenRace.stats(character);
	character = await nameGenerator(character);

	let str = "";
	for(const [key, value] of Object.entries(character.stats)){
		str += `**${key.toProperCase()}** :: ${value}\n`;
	}

	const charInfo = `**Race/ Subrace:**
	[${character.race.name}](${character.race.link})
	**Class:**
	[${character.class}](https://www.dndbeyond.com/classes/${character.class})
	**Gender:**
	${character.gender}
	**Speed:**
	${character.race.speed}
	\u200b
	**Weapon:**
	${character.inventory.weapon}
	**Armor:**
	${character.inventory.armor}
	**Tools:**
	${character.inventory.tools}`;

	const embed = new Discord.MessageEmbed()
		.setAuthor(character.name)
		.setFooter(client.user.username, client.user.displayAvatarURL())
		.setTimestamp()
		.addField("Misc Information", charInfo.replace(/\t/g, ""), true)
		.addField("**Stats**", `${str}`, true);

	return message.channel.send({ embed }).catch(e => errFunc(e));
};

exports.conf = {
	enabled: true,
	allowDM: true,
	aliases: ["n"],
	permLevel: 0,
};

exports.help = {
	name: "npc",
	category: "Dungeons & Dragons",
	description: "Creates a semi-random NPC",
	usage: "race job/class",
};
