module.exports = (roll, message, embed) => {
	const cp = [];
	let cpAmount = 0;
	for(let i = 0; i < 5; i++){
		const num = d6();
		cp.push(num);
		cpAmount += num;
	}
	const sp = [];
	let spAmount = 0;
	for(let i = 0; i < 4; i++){
		const num = d6();
		sp.push(num);
		spAmount += num;
	}
	const gp = [];
	let gpAmount = 0;
	for(let i = 0; i < 3; i++){
		const num = d6();
		gp.push(num);
		gpAmount += num;
	}

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
