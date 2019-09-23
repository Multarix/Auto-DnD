module.exports = (character) => {
	const gender = (Math.random() > 0.5) ? "male" : "female";
	character.gender = gender.toProperCase();

	const first = require(`./${gender}/firstname.json`);
	const last = require("./lastname.json");

	const r1 = Math.floor(Math.random() * first.length);
	const r2 = Math.floor(Math.random() * last.length);
	character.name = `${first[r1]} ${last[r2]}`.toProperCase();

	return character;
};
