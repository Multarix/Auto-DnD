exports.run = async (character) => {
	character.race.name = "Skirmisher Warforged";
	character.race.link = "https://www.dndbeyond.com/races/warforged#Skirmisher";
	character.race.speed = 35;
	return character;
};

exports.stats = async (character) => {
	character.stats.dexterity += 2;
	character.stats.constitution += 1;
	return character;
};

exports.info = {
	name: "skirmisher",
	aliases: ["warforged-skirmisher", "warforgedskirmisher", "skirmisher-warforged", "skirmisherwarforged"],
};
