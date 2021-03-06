const money = require("./miscRolls/money.js");
const table = require("./miscRolls/lootPicker.js");
const vTrash = require("./miscRolls/miscItems.js");
module.exports = (roll, message, embed) => {
	// Gold Coins
	const gold = money(4, "d6");
	const gpFinal = gold.total * 100;
	// Platinum Coins
	const platinum = money(5, "d6");
	const ppFinal = platinum.total * 100;
	// Money
	const moneyStatement = `4×D6 ×100 - **Gold Pieces**\n5×D6 ×100 - **Platinum Pieces**`;
	const moneyRolls = `${gold.rolls} (${gold.total})\n${platinum.rolls} (${platinum.total})`;
	const moneyFinal = `${gpFinal} × **Gold Pieces**\n${ppFinal} × **Platinum Pieces**`;

	loot:{
		// 01-03
		if(roll <= 3){
			embed.addField("Loot Class:", `${moneyStatement}`, true)
				.addField("Item Rolls:", `${moneyRolls}`, true)
				.addField("Final Loot:", `${moneyFinal}`, false);
			break loot;
		}

		// 04-06
		if(roll <= 6){
			const miscItems = vTrash("art", "250", "d4", 2);

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}`, false);
			break loot;
		}

		// 07-10
		if(roll <= 10){
			const miscItems = vTrash("art", "750", "d4", 2);

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}`, false);
			break loot;
		}

		// 11-12
		if(roll <= 12){
			const miscItems = vTrash("gems", "500", "d6", 3);

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}`, false);
			break loot;
		}

		// 13-15
		if(roll <= 15){
			const miscItems = vTrash("gems", "1000", "d6", 3);

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}`, false);
			break loot;
		}

		// Item Table A & B
		// 16-19
		if(roll <= 19){
			const miscItems = vTrash("art", "250", "d4", 2);
			const tableLoot = table("a", "d4");
			const tableLootB = table("b", "d6");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table A**\n1 D6 Rolls - **Item Table B**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})\n${tableLootB.rollAmount} (${tableLootB.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}${tableLootB.items}`, false);
			break loot;
		}

		// 20-23
		if(roll <= 23){
			const miscItems = vTrash("art", "750", "d4", 2);
			const tableLoot = table("a", "d4");
			const tableLootB = table("b", "d6");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table A**\n1 D6 Rolls - **Item Table B**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})\n${tableLootB.rollAmount} (${tableLootB.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}${tableLootB.items}`, false);
			break loot;
		}

		// 24-26
		if(roll <= 26){
			const miscItems = vTrash("gems", "500", "d6", 3);
			const tableLoot = table("a", "d4");
			const tableLootB = table("b", "d6");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table A**\n1 D6 Rolls - **Item Table B**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})\n${tableLootB.rollAmount} (${tableLootB.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}${tableLootB.items}`, false);
			break loot;
		}

		// 27-29
		if(roll <= 29){
			const miscItems = vTrash("gems", "1000", "d6", 3);
			const tableLoot = table("a", "d4");
			const tableLootB = table("b", "d6");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table A**\n1 D6 Rolls - **Item Table B**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})\n${tableLootB.rollAmount} (${tableLootB.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}${tableLootB.items}`, false);
			break loot;
		}

		// Item Table C
		// 30-35
		if(roll <= 35){
			const miscItems = vTrash("art", "250", "d4", 2);
			const tableLoot = table("c", "d6");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table C**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 36-40
		if(roll <= 40){
			const miscItems = vTrash("art", "750", "d4", 2);
			const tableLoot = table("c", "d6");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table C**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 41-45
		if(roll <= 45){
			const miscItems = vTrash("gems", "500", "d6", 3);
			const tableLoot = table("c", "d6");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table C**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 46-50
		if(roll <= 50){
			const miscItems = vTrash("gems", "1000", "d6", 3);
			const tableLoot = table("c", "d6");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table C**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// Item Table D
		// 51-54
		if(roll <= 54){
			const miscItems = vTrash("art", "250", "d4", 2);
			const tableLoot = table("d", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table D**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 55-58
		if(roll <= 58){
			const miscItems = vTrash("art", "750", "d4", 2);
			const tableLoot = table("d", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table D**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 59-62
		if(roll <= 62){
			const miscItems = vTrash("gems", "500", "d6", 3);
			const tableLoot = table("d", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table D**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 63-66
		if(roll <= 66){
			const miscItems = vTrash("gems", "1000", "d6", 3);
			const tableLoot = table("d", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table D**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// Item Table E
		// 67-68
		if(roll <= 68){
			const miscItems = vTrash("art", "250", "d4", 2);
			const tableLoot = table("e");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 Roll - **Item Table E**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rolls}`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 69-70
		if(roll <= 70){
			const miscItems = vTrash("art", "750", "d4", 2);
			const tableLoot = table("e");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 Roll - **Item Table E**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rolls}`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 71-72
		if(roll <= 72){
			const miscItems = vTrash("gems", "500", "d6", 3);
			const tableLoot = table("e");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 Roll - **Item Table E**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rolls}`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 73-74
		if(roll <= 74){
			const miscItems = vTrash("gems", "1000", "d6", 3);
			const tableLoot = table("e");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 Roll - **Item Table E**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rolls}`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// Item Table F & G
		// 75-76
		if(roll <= 76){
			const miscItems = vTrash("art", "250", "d4", 2);
			const tableLoot = table("f");
			const tableLootB = table("g", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 Roll - **Item Table F**\n1 D4 - **Item Table G**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rolls}\n${tableLootB.rollAmount} (${tableLootB.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}${tableLootB.items}`, false);
			break loot;
		}

		// 77-78
		if(roll <= 78){
			const miscItems = vTrash("art", "750", "d4", 2);
			const tableLoot = table("f");
			const tableLootB = table("g", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 Roll - **Item Table F**\n1 D4 - **Item Table G**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rolls}\n${tableLootB.rollAmount} (${tableLootB.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}${tableLootB.items}`, false);
			break loot;
		}

		// 79-80
		if(roll <= 80){
			const miscItems = vTrash("gems", "500", "d6", 3);
			const tableLoot = table("f");
			const tableLootB = table("g", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 Roll - **Item Table F**\n1 D4 - **Item Table G**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rolls}\n${tableLootB.rollAmount} (${tableLootB.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}${tableLootB.items}`, false);
			break loot;
		}

		// 81-82
		if(roll <= 82){
			const miscItems = vTrash("gems", "1000", "d6", 3);
			const tableLoot = table("f");
			const tableLootB = table("g", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 Roll - **Item Table F**\n1 D4 - **Item Table G**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rolls}\n${tableLootB.rollAmount} (${tableLootB.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}${tableLootB.items}`, false);
			break loot;
		}

		// Item Table H
		// 83-85
		if(roll <= 85){
			const miscItems = vTrash("art", "250", "d4", 2);
			const tableLoot = table("h", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table H**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 86-88
		if(roll <= 88){
			const miscItems = vTrash("art", "750", "d4", 2);
			const tableLoot = table("h", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table H**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 89-90
		if(roll <= 90){
			const miscItems = vTrash("gems", "500", "d6", 3);
			const tableLoot = table("h", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table H**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 91-92
		if(roll <= 92){
			const miscItems = vTrash("gems", "1000", "d6", 3);
			const tableLoot = table("h", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table H**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// Item Table I
		// 93-94
		if(roll <= 94){
			const miscItems = vTrash("art", "250", "d4", 2);
			const tableLoot = table("i");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 Roll - **Item Table I**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rolls}`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 95-96
		if(roll <= 96){
			const miscItems = vTrash("gems", "500", "d6", 3);
			const tableLoot = table("i");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 Roll - **Item Table I**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rolls}`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 97-98
		if(roll <= 98){
			const miscItems = vTrash("gems", "1000", "d6", 3);
			const tableLoot = table("i");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 Roll - **Item Table I**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rolls}`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 99-100
		if(roll <= 100){
			const miscItems = vTrash("gems", "1000", "d6", 3);
			const tableLoot = table("i");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 Roll - **Item Table I**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rolls}`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}
	}
	return message.channel.send({ embed }).catch(e => errFunc(e));
};
