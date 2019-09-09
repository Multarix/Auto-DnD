module.exports = (client) => {
	const roll = Math.floor(Math.random() * 10 + 1);
	const num = roll * 10 - 10;
	return num;
};
