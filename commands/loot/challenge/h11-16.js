const money = require("./miscRolls/money.js");
const table = require("./miscRolls/lootPicker.js");
const vTrash = require("./miscRolls/miscItems.js");
module.exports = (roll, message, embed) => {

	// Copper Coins
	const copper = money(6, "d6");
	const cpFinal = copper.total * 100;
	// Silver Coins
	const silver = money(3, "d6");
	const spFinal = silver.total * 1000;
	// Gold Coins
	const gold = money(2, "d6");
	const gpFinal = gold.total * 100;

	const platinum = money(3, "d6");
	const ppFinal = platinum.total * 10;

	if(roll <= 6){
		return;
	}
	if(roll <= 16){
		return;
	}
	if(roll <= 26){
		return;
	}
	if(roll <= 36){
		return;
	}
	if(roll <= 44){
		return;
	}
	if(roll <= 52){
		return;
	}
	if(roll <= 60){
		return;
	}
	if(roll <= 65){
		return;
	}
	if(roll <= 70){
		return;
	}
	if(roll <= 75){
		return;
	}
	if(roll <= 78){
		return;
	}
	if(roll <= 80){
		return;
	}
	if(roll <= 85){
		return;
	}
	if(roll <= 92){
		return;
	}
	if(roll <= 97){
		return;
	}
	if(roll <= 99){
		return;
	}
	if(roll === 100){
		return;
	}

};
