module.exports = (character) => {
	const gender = (Math.random() > 0.5) ? "male" : "female";
	character.gender = gender.toProperCase();

	const reggie = /\w+$/g;	// eslint-disable-line no-useless-escape
	const str = character.race.toLowerCase().replace("-", "");
	const race = reggie.exec(str)[0];

	const first = require(`./${gender}/${race}.json`);
	const last = require(`./lastNames/${race}.json`);

	const r1 = Math.floor(Math.random() * first.length);
	const r2 = Math.floor(Math.random() * last.length);
	character.name = `${first[r1]} ${last[r2]}`.toProperCase();

	return character;
};
