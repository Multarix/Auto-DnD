const money = require("./miscRolls/money.js");
module.exports = (roll, message, embed) => {
	// 1 - 30
	if(roll <= 30){
		const copper = money(5, "d6");

		embed.addField("Loot Class:", `5 D6 - **Copper Pieces**`, true)
			.addField("Item Rolls:", `${copper.rolls} (${copper.total})`, true)
			.addField("Final Loot:", `${copper.total} **Copper Pieces**`, false);
		return message.channel.send({ embed });
	}
	// 31 - 60
	if(roll <= 60){
		const silver = money(4, "d6");

		embed.addField("Loot Class:", `4 D6 - **Silver Pieces**`, true)
			.addField("Item Rolls:", `${silver.rolls} (${silver.total})`, true)
			.addField("Final Loot:", `${silver.total} **Silver Pieces**`, false);
		return message.channel.send({ embed });
	}
	// 61 - 70
	if(roll <= 70){
		const electrum = money(3, "d6");

		embed.addField("Loot Class:", `3 D6 - **Electrum Pieces**`, true)
			.addField("Item Rolls:", `${electrum.rolls} (${electrum.total})`, true)
			.addField("Final Loot:", `${electrum.total} **Electrum Pieces**`, false);
		return message.channel.send({ embed });
	}
	// 71 - 95
	if(roll <= 95){
		const gold = money(3, "d6");

		embed.addField("Loot Class:", `3 D6 - **Gold Pieces**`, true)
			.addField("Item Rolls:", `${gold.rolls} (${gold.total})`, true)
			.addField("Final Loot:", `${gold.total} **Gold Pieces**`, false);
		return message.channel.send({ embed });
	}
	// 96 - 100
	if(roll <= 100){
		const platinum = money(1, "d6");

		embed.addField("Loot Class:", `1 D6 - **Platinum Pieces**`, true)
			.addField("Item Rolls:", `${platinum.rolls} (${platinum.total})`, true)
			.addField("Final Loot:", `${platinum.total} **Platinum Pieces**`, false);
		return message.channel.send({ embed });
	}
};
