module.exports = (x, d) => {
	const t = x.toUpperCase();
	if(!t.match(/[ABCDEFGHI]/g)) return;

	let rollAmount = false;
	if(d === "d4") rollAmount = d4();
	if(d === "d6") rollAmount = d6();
	if(d === "d8") rollAmount = d8();
	if(!rollAmount) rollAmount = 1;

	let tableItems = '';
	const tableRolls = [];
	for(let i = 0; i < rollAmount; i++){
		const table = require(`../itemTables/MagicItemTable${t}.js`);
		const num = Math.floor(Math.random() * 100 + 1);
		tableRolls.push(num);
		tableItems += table(num);
	}
	return { "rollAmount":rollAmount, "rolls":tableRolls.join(", "), "items":tableItems };
};
