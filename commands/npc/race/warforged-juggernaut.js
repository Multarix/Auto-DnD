exports.run = async (character) => {
	character.race.name = "Juggernaut Warforged";
	character.race.link = "https://www.dndbeyond.com/races/warforged#Juggernaut";
	character.race.speed = 30;
	return character;
};

exports.stats = async (character) => {
	character.stats.strength += 2;
	character.stats.constitution += 1;
	return character;
};

exports.info = {
	name: "juggernaut",
	aliases: ["warforged-juggernaut", "warforgedjuggernaut", "juggernaut-warforged", "juggernautwarforged"],
};
