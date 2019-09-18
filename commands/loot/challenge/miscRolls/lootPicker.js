module.exports = (x, d, b) => {
	const t = x.toUpperCase();
	if(!t.match(/[ABCDEFGHI]/g)) return undefined;

	let rollAmount = false;
	if(d === "d4") rollAmount = d4();
	if(d === "d6") rollAmount = d6();
	if(d === "d8") rollAmount = d8();
	if(!d && b) rollAmount = b;
	if(!rollAmount) rollAmount = 1;

	let tableItems = '';
	const tableRolls = [];
	for(let i = 0; i < rollAmount; i++){
		const num = Math.floor(Math.random() * 100 + 1);
		const table = require(`../itemTables/MagicItemTable${t}.js`)(num);
		tableRolls.push(num);
		tableItems += `1 × [${table.name}](${table.link})\n`;
	}
	return { "rollAmount":rollAmount, "rolls":tableRolls.join(", "), "items":tableItems };
};
