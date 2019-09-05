
const Discord = require('discord.js');
exports.run = (client, message, args, level) => {

	const dice = ["d4", "d6", "d8", "d10", "d12", "d20"];
	if(!dice.includes(args[0])) return;

	const die = args[0];
	let amount = 1;
	if(parseInt(args[1])) amount = parseInt(args[1]);
	if(amount >= 20) amount = 20;

	const embed = new Discord.RichEmbed()
		.setAuthor(message.member.displayName, message.author.displayAvatarURL)
		.setTitle("The dice has been cast...")
		.setFooter(client.user.username, client.user.displayAvatarURL)
		.setTimestamp()

	if(die === "d4"){
		for(i=0; amount>i;  i++){
			const d4 = require("../modules/dice/d4.js");
			embed.addField(`Dice #${i + 1} 🎲`, `${d4()}`, true);
		}
	}

	if(die === "d6"){
		for(i=0; amount>i;  i++){
			const d6 = require("../modules/dice/d6.js");
			embed.addField(`Dice #${i + 1} 🎲`, `${d6()}`, true);
		}
	}

	if(die === "d8"){
		for(i=0; amount>i;  i++){
			const d8 = require("../modules/dice/d8.js");
			embed.addField(`Dice #${i + 1} 🎲`, `${d8()}`, true)
		}
	}

	if(die === "d12"){
		for(i=0; amount>i;  i++){
			const d20 = require("../modules/dice/d12.js");
			embed.addField(`Dice #${i + 1} 🎲`, `${d12()}`, true)
		}
	}

	if(die === "d10"){
		for(i=0; amount>i;  i++){
			const d10 = require("../modules/dice/d10.js");
			embed.addField(`Dice #${i + 1} 🎲`, `${d10()}`, true)
		}
	}

	if(die === "d20"){
		for(i=0; amount>i;  i++){
			const d20 = require("../modules/dice/d20.js");
			embed.addField(`Dice #${i + 1} 🎲`, `${d20()}`, true)
		}
	}
	message.channel.send({ embed });
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ["dice"],
	permLevel: 10,
};

exports.help = {
	name: "roll",
	category: "Misc",
	description: "Rolls some dice.",
	usage: "d4/d6/d8/d10/d20 amount",
};
