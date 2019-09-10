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

	if(roll <= 4){
		return;
	}
	if(roll <= 10){
		return;
	}
	if(roll <= 16){
		return;
	}
	if(roll <= 22){
		return;
	}
	if(roll <= 28){
		return;
	}
	if(roll <= 32){
		return;
	}
	if(roll <= 36){
		return;
	}
	if(roll <= 40){
		return;
	}
	if(roll <= 44){
		return;
	}
	if(roll <= 49){
		return;
	}
	if(roll <= 54){
		return;
	}
	if(roll <= 59){
		return;
	}
	if(roll <= 63){
		return;
	}
	if(roll <= 66){
		return;
	}
	if(roll <= 69){
		return;
	}
	if(roll <= 72){
		return;
	}
	if(roll <= 74){
		return;
	}
	if(roll <= 76){
		return;
	}
	if(roll <= 78){
		return;
	}
	if(roll === 79){
		return;
	}
	if(roll === 80){
		return;
	}
	if(roll <= 84){
		return;
	}
	if(roll <= 88){
		return;
	}
	if(roll <= 91){
		return;
	}
	if(roll <= 94){
		return;
	}
	if(roll <= 96){
		return;
	}
	if(roll <= 98){
		return;
	}
	if(roll === 99){
		return;
	}
	if(roll === 100){
		return;
	}
};
