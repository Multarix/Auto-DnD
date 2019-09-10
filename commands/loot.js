const Discord = require('discord.js');

exports.run = (client, message, args) => {

	const tens = percentile();
	const ones = d10();
	const roll = tens + ones;

	const embed = new Discord.RichEmbed()
		.setAuthor(message.member.displayName, message.author.displayAvatarURL)
		.setDescription("The dice has been cast...")
		.setFooter(client.user.username, client.user.displayAvatarURL)
		.setTimestamp()
		.addField("Percentile:", tens, true)
		.addField("D10:", ones, true)
		.addField("Combined Roll:", roll, true);

	if(!args[0]) return message.channel.send("Please specify the type of loot");
	if(!args[1]) return message.channel.send("Please specify the challenge level");

	const type = args[0].toLowerCase();
	const challenge = parseInt(args[1]);
	if(isNaN(challenge)) return message.channel.send("Please specify the challenge level");

	let typeArray = [];

	// Individual Treasure
	typeArray = ["individual", "indi", "ind", "i", "it", "personal", "p", "self", "s"];
	if(typeArray.includes(type)){
		const individual = require("./loot/individual.js");
		return individual(challenge, roll, message, embed);
	}
	// Treasure Hoard
	typeArray = ["treasure", "hoard", "tres", "tr", "th", "t", "h"];
	if(typeArray.includes(type)){
		const hoard = require("./loot/hoard.js");
		return hoard(challenge, roll, message, embed);
	}
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0,
};

exports.help = {
	name: "loot",
	category: "Misc",
	description: "Automagically rolls for loot",
	usage: "individual/hoard challenge-level",
};
