module.export = () => {
	let str = 8;
	let dex = 8;
	let cont = 8;
	let int = 8;
	let wis = 8;
	let char = 8;

	for(i=0; 27>i; i++){
		const number = Math.floor(Math.random() * 100 + 1);
		if(number <= 30){ str = str++; continue; }; // 30% of points
		if(number <= 40){ dex = dex++; continue; }; // 10% of points
		if(number <= 60){ cont = cont++; continue; }; // 20% of points
		if(number <= 80){ int = int++; continue; }; // 20% of points
		if(number <= 90){ wis = wis++; continue; }; // 10% of points
		if(number >= 91){ char = char++; continue; }; // 10% of points
	};
	const stats = {"str":str, "dex":dex, "cont":cont, "int":int, "wis":wis, "char":char};
	return stats;
};
