const Discord = require('discord.js');
exports.run = (client, message, args) => {

	const dice = ["d4", "d6", "d8", "d10", "d12", "d20", "percentile", "percent", "p"];
	if(!dice.includes(args[0])) return message.channel.send("Usage: [roll](<..dice>)", { code: "markdown" });

	const die = args[0];
	let amount = 1;
	if(parseInt(args[1])) amount = parseInt(args[1]);
	if(amount >= 21) amount = 21;

	const embed = new Discord.RichEmbed()
		.setAuthor(message.member.displayName, message.author.displayAvatarURL)
		.setDescription("The dice has been cast...")
		.setFooter(client.user.username, client.user.displayAvatarURL)
		.setTimestamp();

	// D4 Dice (1 - 4)
	if(die === "d4"){
		for(let i = 0; amount > i; i++){
			embed.addField(`Dice #${i + 1} 🎲`, `${d4()}`, true);
		}
	}
	// D6 Dice (1 - 6)
	if(die === "d6"){
		for(let i = 0; amount > i; i++){
			embed.addField(`Dice #${i + 1} 🎲`, `${d6()}`, true);
		}
	}
	// D8 Dice (1 - 8)
	if(die === "d8"){
		for(let i = 0; amount > i; i++){
			embed.addField(`Dice #${i + 1} 🎲`, `${d8()}`, true);
		}
	}
	// D10 Dice (1 - 10)
	if(die === "d10"){
		for(let i = 0; amount > i; i++){
			embed.addField(`Dice #${i + 1} 🎲`, `${d10()}`, true);
		}
	}
	// D12 Dice (1 - 12)
	if(die === "d12"){
		for(let i = 0; amount > i; i++){
			embed.addField(`Dice #${i + 1} 🎲`, `${d12()}`, true);
		}
	}
	// D20 Dice (1 - 20)
	if(die === "d20"){
		for(let i = 0; amount > i; i++){
			embed.addField(`Dice #${i + 1} 🎲`, `${d20()}`, true);
		}
	}
	// Percentile Dice (00 - 90) [00 technically means 100]
	if(die === "percentile" || die === "percent" || die === "p"){
		for(let i = 0; amount > i; i++){
			let num = percentile();
			if(num === 0) num = "00";
			embed.addField(`Dice #${i + 1} 🎲`, `${percentile()}`, true);
		}
	}
	message.channel.send({ embed });
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ["dice"],
	permLevel: 0,
};

exports.help = {
	name: "roll",
	category: "Misc",
	description: "Rolls some dice.",
	usage: "d4/d6/d8/d10/d20 amount",
};
