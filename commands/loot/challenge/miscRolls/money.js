module.exports = (n, d) => {
	const rolls = [];
	let total = 0;
	for(let i = 0; i < n; i++){
		let die = false;
		if(d === "d4") die = d4();
		if(d === "d6") die = d6();
		if(die === false) return;

		const num = die;
		rolls.push(num);
		total += num;
	}
	return { "rolls":rolls.join(", "), "total":total };
};
