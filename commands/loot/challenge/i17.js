const money = require("./miscRolls/money.js");
module.exports = (roll, message, embed) => {
	// 1 - 15
	if(roll <= 15){
		const electrum = money(2, "d6");
		const epFinal = electrum.total * 1000;

		const gold = money(8, "d6");
		const gpFinal = gold.total * 100;

		embed.addField("Loot Class:", `2 D6 x1000 - **Electrum Pieces**\n8 D6 x100 - **Gold Pieces**`, true)
			.addField("Item Rolls:", `${electrum.rolls} (${electrum.total})\n${gold.rolls} (${gold.total})`, true)
			.addBlankField(true)
			.addField("Final Loot:", `${epFinal} **Electrum Pieces**\n${gpFinal} **Gold Pieces**`, false);
		return message.channel.send({ embed });
	}

	// 16 - 55
	if(roll <= 55){
		const gold = money(1, "d6");
		const gpFinal = gold.total * 1000;

		const platinum = money(1, "d6");
		const ppFinal = platinum.total * 100;

		embed.addField("Loot Class:", `1 D6 x100 - **Gold Pieces**\n1 D6 x100 - **Platinum Pieces**`, true)
			.addField("Item Rolls:", `${gold.rolls} (${gold.total})\n${platinum.rolls} (${platinum.total})`, true)
			.addBlankField(true)
			.addField("Final Loot:", `${gpFinal} **Gold Pieces**\n${ppFinal} **Platinum Pieces**`, false);
		return message.channel.send({ embed });
	}

	// 56 - 100
	if(roll <= 100){
		const gold = money(1, "d6");
		const gpFinal = gold.total * 1000;

		const platinum = money(2, "d6");
		const ppFinal = platinum.total * 100;

		embed.addField("Loot Class:", `1 D6 x100 - **Gold Pieces**\n2 D6 x100 - **Platinum Pieces**`, true)
			.addField("Item Rolls:", `${gold.rolls} (${gold.total})\n${platinum.rolls} (${platinum.total})`, true)
			.addBlankField(true)
			.addField("Final Loot:", `${gpFinal} **Gold Pieces**\n${ppFinal} **Platinum Pieces**`, false);
		return message.channel.send({ embed });
	}
};
