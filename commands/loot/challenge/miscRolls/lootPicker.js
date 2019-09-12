module.exports = (x, d) => {
	const t = x.toUpperCase();
	if(!t.match(/[ABCDEFGHI]/g)) return;

	let tableItems = '';
	let rollAmount = false;
	if(d === "d4") rollAmount = d4();
	if(d === "d6") rollAmount = d6();
	if(d === "d8") rollAmount = d8();
	const tableRolls = [];
	for(let i = 0; i < rollAmount; i++){

		const tableA = require(`../itemTables/MagicItemTable${t}.js`);
		const num = Math.floor(Math.random() * 100 + 1);
		tableRolls.push(num);
		tableItems += tableA(num);
	}
	return { "rollAmount":rollAmount, "rolls":tableRolls, "items":tableItems };
};
