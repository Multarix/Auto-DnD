module.exports = (x, d, b) => {
	const t = x.toUpperCase();
	if(!t.match(/[ABCDEFGHI]/g)) return undefined;

	const nextNumber = (array, number) => {
		let i = 0;
		let arrayValue;
		const arr = array.length;
		for(i; i < arr; i++){
			if(array[i].roll >= number){ arrayValue = array[i]; break; }
		}
		return arrayValue;
	};

	let rollAmount = false;
	if(d === "d4") rollAmount = d4();
	if(d === "d6") rollAmount = d6();
	if(d === "d8") rollAmount = d8();
	if(!d && b) rollAmount = b;
	if(!rollAmount) rollAmount = 1;

	let tableItems = '';
	const tableRolls = [];
	for(let i = 0; i < rollAmount; i++){
		const num = randomNumber(100, 1);
		const table = require(`../itemTables/MagicItemTable${t}.js`)(num);
		const loot = nextNumber(table, num);
		tableRolls.push(num);
		tableItems += `1 × [${loot.name}](${loot.link})\n`;
	}
	return { "rollAmount":rollAmount, "rolls":tableRolls.join(", "), "items":tableItems };
};
