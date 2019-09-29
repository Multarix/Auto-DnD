module.exports = (character) => {
	const gender = (Math.random() > 0.5) ? "male" : "female";
	character.gender = gender.toProperCase();

	const reggie = /\w+$/g;	// eslint-disable-line no-useless-escape
	const str = character.race.name.toLowerCase().replace("-", "");
	const race = reggie.exec(str)[0];

	const first = require(`./${gender}/${race}.json`);
	const last = require(`./lastNames/${race}.json`);

	character.name = `${first.random()} ${last.random()}`.toProperCase();

	return character;
};
