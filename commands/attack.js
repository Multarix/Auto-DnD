const Discord = require("discord.js");
const weaponArray = require("./attack/weapons.json");
const versatile = require("./attack/versatile.js");
const nonVersatile = require("./attack/nonVersatile.js");
exports.run = async (client, message, args) => {

	if(!args[0] || !args[1]) return message.channel.send("Usage: [attack](<..weapon> <..strength/dexterity>)", { code: "markdown" });

	const weaponName = args[0].toLowerCase();
	const modifier = parseInt(args[1]);
	if(isNaN(modifier)) return message.channel.send("Invalid Number\nUsage: [attack](<..weapon> <..strength/dexterity>)", { code: "markdown" });

	const weapon =	weaponArray.find(w => {
		const bool = (weaponName === w.name.toLowerCase() || w.aliases.includes(weaponName)) ? true : false;
		return bool;
	});
	if(!weapon) return message.channel.send("Invalid Weapon\nUsage: [attack](<..weapon> <..strength/dexterity>)", { code: "markdown" });

	const embedObject = new Discord.MessageEmbed()
		.setAuthor(message.author.tag, message.author.displayAvatarURL())
		.setFooter(client.user.username, client.user.displayAvatarURL())
		.setTimestamp()
		.setTitle(weapon.name)
		.setURL(weapon.link);

	let embed = undefined;
	embed = (weapon.properties.includes("versatile")) ? await versatile(client, embedObject, weapon, modifier) : await nonVersatile(client, embedObject, weapon, modifier);
	if(!embed) return message.channel.send("Encountered an error, you should probably report this:\nhttps://github.com/Multarix/Auto-DnD/issues");

	return message.channel.send({ embed });
};

exports.conf = {
	enabled: true,
	allowDM: true,
	aliases: ["a"],
	permLevel: 0,
};

exports.help = {
	name: "attack",
	category: "Dungeons & Dragons",
	description: "Automagically calculates damage",
	usage: "weapon strength/dexterity",
};
