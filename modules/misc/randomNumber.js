module.exports = (num, mod) => {
	if(!mod) return Math.floor(Math.random() * num);
	return Math.floor(Math.random() * num + mod);
};
