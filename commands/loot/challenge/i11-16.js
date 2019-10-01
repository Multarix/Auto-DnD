const money = require("./miscRolls/money.js");
module.exports = (roll, message, embed) => {

	loot:{
		// 1 - 20
		if(roll <= 20){
			const silver = money(4, "d6");
			const spFinal = silver.total * 100;

			const gold = money(1, "d6");
			const gpFinal = gold.total * 10;

			embed.addField("Loot Class:", `4 D6 x100 - **Silver Pieces**\n1 D6 x10 - **Gold Pieces**`, true)
				.addField("Item Rolls:", `\n${silver.rolls} (${silver.total})\n${gold.rolls} (${gold.total})`, true)
				.addField("Final Loot:", `${spFinal} × **Silver Pieces**\n${gpFinal} × **Gold Pieces**`, false);
			break loot;
		}

		// 21 - 35
		if(roll <= 35){
			const electrum = money(1, "d6");
			const epFinal = electrum.total * 100;

			const gold = money(1, "d6");
			const gpFinal = gold.total * 100;

			embed.addField("Loot Class:", `1 D6 x100 - **Electrum Pieces**\n1 D6 x100 - **Gold Pieces**`, true)
				.addField("Item Rolls:", `${electrum.rolls} (${electrum.total})\n${gold.rolls} (${gold.total})`, true)
				.addField("Final Loot:", `${epFinal} × **Electrum Pieces**\n${gpFinal} × **Gold Pieces**`, false);
			break loot;
		}

		// 36 - 75
		if(roll <= 75){

			const gold = money(2, "d6");
			const gpFinal = gold.total * 100;

			const platinum = money(1, "d6");
			const ppFinal = platinum.total * 10;

			embed.addField("Loot Class:", `2 D6 x100 - **Gold Pieces**\n1 D6 x10 - **Platinum Pieces**`, true)
				.addField("Item Rolls:", `${gold.rolls} (${gold.total})\n${platinum.rolls} (${platinum.total})`, true)
				.addField("Final Loot:", `${gpFinal} × **Gold Pieces**\n${ppFinal} × **Platinum Pieces**`, false);
			break loot;
		}

		// 76 - 100
		if(roll <= 100){
			const gold = money(2, "d6");
			const gpFinal = gold.total * 100;

			const platinum = money(2, "d6");
			const ppFinal = platinum.total * 10;

			embed.addField("Loot Class:", `2 D6 x100 - **Gold Pieces**\n2 D6 x10 - **Platinum Pieces**`, true)
				.addField("Item Rolls:", `${gold.rolls} (${gold.total})\n${platinum.rolls} (${platinum.total})`, true)
				.addField("Final Loot:", `${gpFinal} × **Gold Pieces**\n${ppFinal} × **Platinum Pieces**`, false);
			break loot;
		}
	}
	return message.channel.send({ embed }).catch(e => errFunc(e));
};
