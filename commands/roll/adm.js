// ADM = Amount, Dice, Modifier (Amount was specified)
const Discord = require('discord.js');
module.exports = (client, message, args) => {

	const amount = args[0];
	const modifier = args[2];
	let die = args[1];
	if(die) die = args[1].toLowerCase();

	const diceType = ["d4", "d6", "d8", "d10", "d12", "d20", "percentile", "percent", "p"];

	if(!diceType.includes(die)) return message.channel.send("Usage: [roll](<..amount> <..dice> <..modifier>)", { code: "markdown" });

	let a = parseInt(amount);
	if(isNaN(a)) a = 1;
	if(a >= 24) a = 24;

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
		let	mod = parseInt(modifier);
		if(!mod || isNaN(mod)) mod = false;
		if(mod === 0) mod = false;
		const icon = (mod > 0 && mod !== 0) ? "+" : "-";

		for(let i = 0; amount > i; i++){
			const roll = d20();
			if(!mod){ embed.addField(`Result 🎲`, roll, true); continue; }

			let totalRoll = roll + mod;

			let str = "";
			if(roll === 1 || totalRoll <= 0){
				totalRoll = 0;
				if(roll + mod > 0)	totalRoll = 1;
			}
			str = `${totalRoll} (${roll} ${icon} ${Math.abs(mod)})`;
			embed.addField(`Result 🎲`, str, true);
		}
		return message.channel.send({ embed });
	}
	// Percentile Dice (00 - 90) [00 technically means 100]
	if(die === "percentile" || die === "percent" || die === "p"){
		for(let i = 0; amount > i; i++){
			let num = percentile();
			if(num === 0) num = "00";
			embed.addField(`Dice #${i + 1} 🎲`, `${num}`, true);
		}
	}
	return message.channel.send({ embed });
};
