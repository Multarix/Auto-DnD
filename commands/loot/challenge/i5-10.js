const money = require("./miscRolls/money.js");
module.exports = (roll, message, embed) => {
	// 1 - 30
	if(roll <= 30){
		const copper = money(4, "d6");
		const cpFinal = copper.total * 100;

		const electrum = money(1, "d6");
		const epFinal = electrum.total * 10;

		embed.addField("Loot Class:", `4 D6 x100 - **Copper Pieces**\n1 D6 x10 - **Electrum Pieces**`, true)
			.addField("Item Rolls:", `${copper.rolls} (${copper.total})\n${electrum.rolls} (${electrum.total})`, true)
			.addField("Final Loot:", `${cpFinal} × **Copper Pieces**\n${epFinal} × **Electrum Pieces**`, false);
		return message.channel.send({ embed });
	}

	// 31 - 60
	if(roll <= 60){
		const silver = money(6, "d6");
		const spFinal = silver.total * 10;

		const gold = money(2, "d6");
		const gpFinal = gold.total * 10;

		embed.addField("Loot Class:", `6 D6 x10 - **Silver Pieces**\n2 D6 x10 - **Gold Pieces**`, true)
			.addField("Item Rolls:", `${silver.rolls} (${silver.total})\n${gold.rolls} (${gold.total})`, true)
			.addField("Final Loot:", `${spFinal} × **Silver Pieces**\n${gpFinal} × **Gold Pieces**`, false);
		return message.channel.send({ embed });
	}

	// 61 - 70
	if(roll <= 70){
		const electrum = money(1, "d6");
		const epFinal = electrum.total * 100;

		const gold = money(2, "d6");
		const gpFinal = gold.total * 10;

		embed.addField("Loot Class:", `1 D6 x100 - **Electrum Pieces**\n2 D6 x10 - **Gold Pieces**`, true)
			.addField("Item Rolls:", `${electrum.rolls} (${electrum.total})\n${gold.rolls} (${gold.total})`, true)
			.addField("Final Loot:", `${epFinal} × **Electrum Pieces**\n${gpFinal} × **Gold Pieces**`, false);
		return message.channel.send({ embed });
	}

	// 71 - 95
	if(roll <= 95){
		const gold = money(4, "d6");
		const gpFinal = gold.total * 10;

		embed.addField("Loot Class:", `4 D6 x10 - **Gold Pieces**`, true)
			.addField("Item Rolls:", `${gold.rolls} (${gold.total})`, true)
			.addField("Final Loot:", `${gpFinal} × **Gold Pieces**`, false);
		return message.channel.send({ embed });
	}

	// 96 - 100
	if(roll <= 100){
		const gold = money(2, "d6");
		const gpFinal = gold.total * 10;

		const platinum = money(1, "d6");

		embed.addField("Loot Class:", `2 D6 x10 - **Gold Pieces**\n3 D6 - **Platinum Pieces**`, true)
			.addField("Item Rolls:", `${gold.rolls} (${gold.total})\n${platinum.rolls} (${platinum.total})`, true)
			.addField("Final Loot:", `${gpFinal} × **Gold Pieces**\n${platinum.total} × **Platinum Pieces**`, false);
		return message.channel.send({ embed });
	}
};
