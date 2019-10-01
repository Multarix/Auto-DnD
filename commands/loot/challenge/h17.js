const money = require("./miscRolls/money.js");
const table = require("./miscRolls/lootPicker.js");
const vTrash = require("./miscRolls/miscItems.js");
module.exports = (roll, message, embed) => {
	// Gold Coins
	const gold = money(12, "d6");
	const gpFinal = gold.total * 1000;
	// Platinum Coins
	const platinum = money(8, "d6");
	const ppFinal = platinum.total * 1000;
	// Money
	const moneyStatement = `12 D6 ×1000 - **Gold Pieces**\n8 D6 ×1000 - **Platinum Pieces**`;
	const moneyRolls = `${gold.rolls} (${gold.total})\n${platinum.rolls} (${platinum.total})`;
	const moneyFinal = `${gpFinal} × **Gold Pieces**\n${ppFinal} × **Platinum Pieces**`;

	loot:{
		// 0-2
		if(roll <= 2){
			embed.addField("Loot Class:", `${moneyStatement}`, true)
				.addField("Item Rolls:", `${moneyRolls}`, true)
				.addBlankField(true)
				.addField("Final Loot:", `${moneyFinal}`, false);
			break loot;
		}

		// Magic Item Table C
		// 3-5
		if(roll <= 5){
			const miscItems = vTrash("gems", "1000", "d6", 3);
			const tableLoot = table("c", "d8");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D8 Rolls - **Item Table C**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 6-8
		if(roll <= 8){
			const miscItems = vTrash("art", "2500", "d10", 1);
			const tableLoot = table("c", "d8");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D8 Rolls - **Item Table C**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 9-11
		if(roll <= 11){
			const miscItems = vTrash("art", "7500", "d4", 1);
			const tableLoot = table("c", "d8");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D8 Rolls - **Item Table C**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 12=14
		if(roll <= 14){
			const miscItems = vTrash("gems", "5000", "d8", 1);
			const tableLoot = table("c", "d8");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D8 Rolls - **Item Table C**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// Magic Item Table D
		// 15-22
		if(roll <= 22){
			const miscItems = vTrash("gems", "1000", "d6", 3);
			const tableLoot = table("d", "d6");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table D**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 23-30
		if(roll <= 30){
			const miscItems = vTrash("art", "2500", "d10", 1);
			const tableLoot = table("d", "d6");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table D**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 31-38
		if(roll <= 38){
			const miscItems = vTrash("art", "7500", "d4", 1);
			const tableLoot = table("d", "d6");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table D**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 39-46
		if(roll <= 46){
			const miscItems = vTrash("gems", "5000", "d8", 1);
			const tableLoot = table("d", "d6");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table D**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// Magic Item Table E
		// 47-52
		if(roll <= 52){
			const miscItems = vTrash("gems", "1000", "d6", 3);
			const tableLoot = table("e", "d6");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table E**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 53-58
		if(roll <= 58){
			const miscItems = vTrash("art", "2500", "d10", 1);
			const tableLoot = table("e", "d6");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table E**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 59-63
		if(roll <= 63){
			const miscItems = vTrash("art", "7500", "d4", 1);
			const tableLoot = table("e", "d6");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table E**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 64-68
		if(roll <= 68){
			const miscItems = vTrash("gems", "5000", "d8", 1);
			const tableLoot = table("e", "d6");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table E**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// Magic Item Table G
		// 69
		if(roll === 69){
			const miscItems = vTrash("gems", "1000", "d6", 3);
			const tableLoot = table("g", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table G**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 70
		if(roll === 70){
			const miscItems = vTrash("art", "2500", "d10", 1);
			const tableLoot = table("g", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table G**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 71
		if(roll === 71){
			const miscItems = vTrash("art", "7500", "d4", 1);
			const tableLoot = table("g", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table G**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 72
		if(roll === 72){
			const miscItems = vTrash("gems", "5000", "d8", 1);
			const tableLoot = table("g", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table G**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// Magic Item Table H
		// 73-74
		if(roll <= 74){
			const miscItems = vTrash("gems", "1000", "d6", 3);
			const tableLoot = table("h", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table H**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 75-76
		if(roll <= 76){
			const miscItems = vTrash("art", "2500", "d10", 1);
			const tableLoot = table("h", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table H**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 77-78
		if(roll <= 78){
			const miscItems = vTrash("art", "7500", "d4", 1);
			const tableLoot = table("h", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table H**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 79-80
		if(roll <= 80){
			const miscItems = vTrash("gems", "5000", "d8", 1);
			const tableLoot = table("h", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table H**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// Magic Item Table I
		// 81-85
		if(roll <= 85){
			const miscItems = vTrash("gems", "1000", "d6", 3);
			const tableLoot = table("i", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table I**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 86-90
		if(roll <= 90){
			const miscItems = vTrash("art", "2500", "d10", 1);
			const tableLoot = table("i", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table I**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 91-95
		if(roll <= 95){
			const miscItems = vTrash("art", "7500", "d4", 1);
			const tableLoot = table("i", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table I**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 96-100
		if(roll <= 100){
			const miscItems = vTrash("gems", "5000", "d8", 1);
			const tableLoot = table("i", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table I**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}
	}
	return message.channel.send({ embed }).catch(e => errFunc(e));
};
