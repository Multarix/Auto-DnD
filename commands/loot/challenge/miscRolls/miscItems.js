module.exports = (i, c, d, r) => {
	if(!i || !c || !d || !r) return null;

	let item = false;
	if(i === "gem" || i === "gems") item = "Gems";
	if(i === "art") item = "Art Objects";

	let dName = false;
	if(d.toLowerCase() === "d4") dName = "D4";
	if(d.toLowerCase() === "d6") dName = "D6";
	if(d.toLowerCase() === "d8") dName = "D8";
	if(d.toLowerCase() === "d10") dName = "D10";

	if(!item || !dName) return null;

	const rolls = [];
	let total = 0;
	for(let i = 0; i < r; i++){
		let dice = false;
		if(dName === "D4") dice = d4();
		if(dName === "D6") dice = d6();
		if(dName === "D8") dice = d8();
		if(dName === "D10") dice = d10();
		if(!dice) return;

		const num = dice;
		rolls.push(num);
		total += num;
	}
	return { "rolls":rolls.join(", "), "total":total, "statement":`${r} ${dName} × **${c} GP ${item}**`, "loot":`${total} × **${c} GP ${item}**` };
};
