const money = require("./miscRolls/money.js");
const table = require("./miscRolls/lootPicker.js");
const vTrash = require("./miscRolls/miscItems.js");
module.exports = (roll, message, embed) => {
	// Copper Coins
	const copper = money(6, "d6");
	const cpFinal = copper.total * 100;
	// Silver Coins
	const silver = money(3, "d6");
	const spFinal = silver.total * 100;
	// Gold Coins
	const gold = money(2, "d6");
	const gpFinal = gold.total * 10;
	// Money
	const moneyStatement = `6 D6 x100 - **Copper Pieces**\n3 D6 x100 - **Silver Pieces**\n2 D6 x10 - **Gold Pieces**`;
	const moneyRolls = `${copper.rolls} (${copper.total})\n${silver.rolls} (${silver.total})\n${gold.rolls} (${gold.total})`;
	const moneyFinal = `${cpFinal} **Copper Pieces**\n${spFinal} **Silver Pieces**\n${gpFinal} **Gold Pieces**`;

	// 0-6
	if(roll <= 6){
		embed.addField("Loot Class:", `${moneyStatement}`, true)
			.addField("Item Rolls:", `${moneyRolls}`, true)
			.addField("Final Loot:", `${moneyFinal}`, false);
		return message.channel.send({ embed });
	}

	// 7-16
	if(roll <= 16){
		const miscItems = vTrash("gems", "10", "d6", 2);

		embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}`, true)
			.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})`, true)
			.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}`, false);
		return message.channel.send({ embed });
	}

	// 17-26
	if(roll <= 26){
		const miscItems = vTrash("art", "25", "d4", 2);

		embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}`, true)
			.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})`, true)
			.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}`, false);
		return message.channel.send({ embed });
	}

	// 27-36
	if(roll <= 36){
		const miscItems = vTrash("gems", "50", "d6", 2);

		embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}`, true)
			.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})`, true)
			.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}`, false);
		return message.channel.send({ embed });
	}

	// Magic Item Table A
	// 37-44
	if(roll <= 44){
		const miscItems = vTrash("gems", "10", "d6", 2);
		const tableLoot = table("a", "d6");

		embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table A**`, true)
			.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
			.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
		return message.channel.send({ embed });
	}

	// 45-52
	if(roll <= 52){
		const miscItems = vTrash("art", "25", "d4", 2);
		const tableLoot = table("a", "d6");

		embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table A**`, true)
			.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
			.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
		return message.channel.send({ embed });
	}

	// 53-60
	if(roll <= 60){
		const miscItems = vTrash("gems", "50", "d6", 2);
		const tableLoot = table("a", "d6");

		embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table A**`, true)
			.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
			.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
		return message.channel.send({ embed });
	}

	// Magic Item Table B
	// 61-65
	if(roll <= 65){
		const miscItems = vTrash("gems", "10", "d6", 2);
		const tableLoot = table("b", "d6");

		embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table B**`, true)
			.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
			.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
		return message.channel.send({ embed });
	}

	// 66-70
	if(roll <= 70){
		const miscItems = vTrash("art", "25", "d4", 2);
		const tableLoot = table("b", "d6");

		embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table B**`, true)
			.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
			.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
		return message.channel.send({ embed });
	}

	// 71-75
	if(roll <= 75){
		const miscItems = vTrash("gems", "50", "d6", 2);
		const tableLoot = table("b", "d6");

		embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table B**`, true)
			.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
			.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
		return message.channel.send({ embed });
	}

	// Magic Item Table C
	// 76-78
	if(roll <= 78){
		const miscItems = vTrash("gems", "10", "d6", 2);
		const tableLoot = table("c", "d6");

		embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table C**`, true)
			.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
			.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
		return message.channel.send({ embed });
	}

	// 79-80
	if(roll <= 80){
		const miscItems = vTrash("art", "25", "d4", 2);
		const tableLoot = table("c", "d6");

		embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table C**`, true)
			.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
			.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
		return message.channel.send({ embed });
	}

	// 81-85
	if(roll <= 85){
		const miscItems = vTrash("gems", "50", "d6", 2);
		const tableLoot = table("c", "d6");

		embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table C**`, true)
			.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
			.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
		return message.channel.send({ embed });
	}

	// Magic Item Table F
	// 86-92
	if(roll <= 92){
		const miscItems = vTrash("art", "25", "d4", 2);
		const tableLoot = table("f", "d6");

		embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table F**`, true)
			.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
			.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
		return message.channel.send({ embed });
	}

	// 93-97
	if(roll <= 97){
		const miscItems = vTrash("gems", "50", "d6", 2);
		const tableLoot = table("f", "d6");

		embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table F**`, true)
			.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
			.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
		return message.channel.send({ embed });
	}

	// Magic Item Table G
	// 98-99
	if(roll <= 99){
		const miscItems = vTrash("art", "25", "d4", 2);
		const tableLoot = table("g", "d6");

		embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table G**`, true)
			.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
			.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
		return message.channel.send({ embed });
	}

	// 100
	if(roll === 100){
		const miscItems = vTrash("gems", "50", "d6", 2);
		const tableLoot = table("g", "d6");

		embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table G**`, true)
			.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
			.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
		return message.channel.send({ embed });
	}
};
