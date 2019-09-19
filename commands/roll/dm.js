// DM = Dice, Modifier (Amount was not specified)
const Discord = require('discord.js');
module.exports = (client, message, args) => {

	const die = args[0].toLowerCase();
	const modifier = args[1];

	const diceType = ["d4", "d6", "d8", "d10", "d12", "d100", "d20", "percentile", "percent", "p"];

	if(!diceType.includes(die)) return message.channel.send("Usage: [roll](<..dice> <..modifier>)", { code: "markdown" });

	const embed = new Discord.RichEmbed()
		.setAuthor(message.member.displayName, message.author.displayAvatarURL)
		.setDescription("The dice has been cast...")
		.setFooter(client.user.username, client.user.displayAvatarURL)
		.setTimestamp();

	// D4 Dice (1 - 4)
	if(die === "d4"){
		embed.addField(`Result 🎲`, `${d4()}`, true);
	}
	// D6 Dice (1 - 6)
	if(die === "d6"){
		embed.addField(`Result 🎲`, `${d6()}`, true);
	}
	// D8 Dice (1 - 8)
	if(die === "d8"){
		embed.addField(`Result 🎲`, `${d8()}`, true);
	}
	// D10 Dice (1 - 10)
	if(die === "d10"){
		embed.addField(`Result 🎲`, `${d10()}`, true);
	}
	// D12 Dice (1 - 12)
	if(die === "d12"){
		embed.addField(`Result 🎲`, `${d12()}`, true);

	}
	if(die === "d100"){
		embed.addField(`Result 🎲`, `${d100()}`, true);
	}
	// D20 Dice (1 - 20)
	if(die === "d20"){
		let	mod = parseInt(modifier);
		if(!mod || isNaN(mod)) mod = false;
		if(mod === 0) mod = false;
		const icon = (mod > 0 && mod !== 0) ? "+" : "-";

		const roll = d20();
		if(!mod){ embed.addField(`Result 🎲`, roll, true); return message.channel.send({ embed }); }

		let totalRoll = roll + mod;

		let str = "";
		if(roll === 1 || totalRoll <= 0){
			totalRoll = 0;
			if(roll + mod > 0)	totalRoll = 1;
		}
		str = `${totalRoll} (${roll} ${icon} ${Math.abs(mod)})`;
		embed.addField(`Result 🎲`, str, true);
		return message.channel.send({ embed });
	}
	// Percentile Dice (00 - 90) [00 technically means 100]
	if(die === "percentile" || die === "percent" || die === "p"){
		let num = percentile();
		if(num === 0) num = "00";
		embed.addField(`Result 🎲`, `${num}`, true);
	}
	return message.channel.send({ embed });
};
