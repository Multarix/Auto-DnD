const money = require("./miscRolls/money.js");
const table = require("./miscRolls/lootPicker.js");
const vTrash = require("./miscRolls/miscItems.js");
module.exports = (roll, message, embed) => {
	// Copper Coins
	const copper = money(2, "d6");
	const cpFinal = copper.total * 100;
	// Silver Coins
	const silver = money(2, "d6");
	const spFinal = silver.total * 1000;
	// Gold Coins
	const gold = money(6, "d6");
	const gpFinal = gold.total * 100;
	// Platinum Coins
	const platinum = money(3, "d6");
	const ppFinal = platinum.total * 10;
	// Money
	const moneyStatement = `2 D6 ×100 - **Copper Pieces**\n2 D6 ×1000 - **Silver Pieces**\n6 D6 ×100 - **Gold Pieces**\n3 D6 ×10 - **Platinum Pieces**`;
	const moneyRolls = `${copper.rolls} (${copper.total})\n${silver.rolls} (${silver.total})\n${gold.rolls} (${gold.total})\n${platinum.rolls} (${platinum.total})`;
	const moneyFinal = `${cpFinal} × **Copper Pieces**\n${spFinal} × **Silver Pieces**\n${gpFinal} × **Gold Pieces**\n${ppFinal} × **Platinum Pieces**`;

	loot:{
		// 0-6
		if(roll <= 4){
			embed.addField("Loot Class:", `${moneyStatement}`, true)
				.addField("Item Rolls:", `${moneyRolls}`, true)
				.addField("Final Loot:", `${moneyFinal}`, false);
			break loot;
		}

		// 5-10
		if(roll <= 10){
			const miscItems = vTrash("art", "25", "d4", 2);

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}`, false);
			break loot;
		}

		// 11–16
		if(roll <= 16){
			const miscItems = vTrash("gems", "50", "d6", 3);

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}`, false);
			break loot;
		}

		// 17–22
		if(roll <= 22){
			const miscItems = vTrash("gems", "100", "d6", 3);

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}`, false);
			break loot;
		}

		// 23–28
		if(roll <= 28){
			const miscItems = vTrash("art", "25", "d6", 2);

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}`, false);
			break loot;
		}

		// Magic Item Table A
		// 29–32
		if(roll <= 32){
			const miscItems = vTrash("art", "25", "d6", 2);
			const tableLoot = table("a", "d6");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table A**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 33–36
		if(roll <= 36){
			const miscItems = vTrash("gems", "50", "d6", 3);
			const tableLoot = table("a", "d6");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table A**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 37–40
		if(roll <= 40){
			const miscItems = vTrash("gems", "100", "d6", 3);
			const tableLoot = table("a", "d6");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table A**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 41–44
		if(roll <= 44){
			const miscItems = vTrash("art", "250", "d6", 2);
			const tableLoot = table("a", "d6");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table A**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// Magic Item Table B
		// 45–49
		if(roll <= 49){
			const miscItems = vTrash("art", "25", "d6", 2);
			const tableLoot = table("b", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table B**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 50–54
		if(roll <= 54){
			const miscItems = vTrash("gems", "50", "d6", 3);
			const tableLoot = table("b", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table B**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 55–59
		if(roll <= 59){
			const miscItems = vTrash("gems", "100", "d6", 3);
			const tableLoot = table("b", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table B**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 60–63
		if(roll <= 63){
			const miscItems = vTrash("art", "250", "d6", 2);
			const tableLoot = table("b", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table B**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// Magic Item Table C
		// 64–66
		if(roll <= 66){
			const miscItems = vTrash("art", "25", "d6", 2);
			const tableLoot = table("c", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table C**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 67–69
		if(roll <= 69){
			const miscItems = vTrash("gems", "50", "d6", 3);
			const tableLoot = table("c", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table C**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 70–72
		if(roll <= 72){
			const miscItems = vTrash("gems", "100", "d6", 3);
			const tableLoot = table("c", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table C**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 73–74
		if(roll <= 74){
			const miscItems = vTrash("art", "250", "d6", 2);
			const tableLoot = table("c", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table C**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// Magic Item Table D
		// 75–76
		if(roll <= 76){
			const miscItems = vTrash("art", "25", "d6", 2);

			const tableD = require("./itemTables/MagicItemTableD.js");
			const tableRoll = randomNumber(100, 1);
			const tableItem = tableD(tableRoll);

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 Roll - **Item Table D**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableRoll}`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableItem}`, false);
			break loot;
		}

		// 77–78
		if(roll <= 78){
			const miscItems = vTrash("gems", "50", "d6", 3);

			const tableD = require("./itemTables/MagicItemTableD.js");
			const tableRoll = randomNumber(100, 1);
			const tableItem = tableD(tableRoll);

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 Roll - **Item Table D**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableRoll}`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableItem}`, false);
			break loot;
		}

		// 79
		if(roll === 79){
			const miscItems = vTrash("gems", "100", "d6", 3);

			const tableD = require("./itemTables/MagicItemTableD.js");
			const tableRoll = randomNumber(100, 1);
			const tableItem = tableD(tableRoll);

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 Roll - **Item Table D**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableRoll}`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableItem}`, false);
			break loot;
		}

		// 80
		if(roll === 80){
			const miscItems = vTrash("art", "250", "d6", 2);

			const tableD = require("./itemTables/MagicItemTableD.js");
			const tableRoll = randomNumber(100, 1);
			const tableItem = tableD(tableRoll);

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 Roll - **Item Table D**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableRoll}`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableItem}`, false);
			break loot;
		}

		// Magic Item Table F
		// 81–84
		if(roll <= 84){
			const miscItems = vTrash("art", "25", "d6", 2);
			const tableLoot = table("f", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table F**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 85–88
		if(roll <= 88){
			const miscItems = vTrash("gems", "50", "d6", 3);
			const tableLoot = table("f", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table F**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 89–91
		if(roll <= 91){
			const miscItems = vTrash("gems", "100", "d6", 3);
			const tableLoot = table("f", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table F**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 92–94
		if(roll <= 94){
			const miscItems = vTrash("art", "250", "d6", 2);
			const tableLoot = table("f", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table F**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// Magic Item Table G
		//	95-96
		if(roll <= 96){
			const miscItems = vTrash("gems", "100", "d6", 3);
			const tableLoot = table("g", "d4");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D4 Rolls - **Item Table G**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// 97-98
		if(roll <= 98){
			const miscItems = vTrash("art", "250", "d6", 2);
			const tableLoot = table("g", "d6");

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 D6 Rolls - **Item Table G**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableLoot.rollAmount} (${tableLoot.rolls})`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableLoot.items}`, false);
			break loot;
		}

		// Magic Item Table F
		// 99
		if(roll === 99){
			const miscItems = vTrash("gems", "100", "d6", 3);

			const tableH = require("./itemTables/MagicItemTableH.js");
			const tableRoll = randomNumber(100, 1);
			const tableItem = tableH(tableRoll);

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 Roll - **Item Table H**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableRoll}`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableItem}`, false);
			break loot;
		}

		// 100
		if(roll === 100){
			const miscItems = vTrash("art", "250", "d6", 2);

			const tableH = require("./itemTables/MagicItemTableH.js");
			const tableRoll = randomNumber(100, 1);
			const tableItem = tableH(tableRoll);

			embed.addField("Loot Class:", `${moneyStatement}\n${miscItems.statement}\n1 Roll - **Item Table H**`, true)
				.addField("Item Rolls:", `${moneyRolls}\n${miscItems.rolls} (${miscItems.total})\n${tableRoll}`, true)
				.addField("Final Loot:", `${moneyFinal}\n${miscItems.loot}\n${tableItem}`, false);
			break loot;
		}
	}
	return message.channel.send({ embed }).catch(e => errFunc(e));
};
