module.exports = (roll) => {
	if(roll <= 75){
		return [
			{ "roll": 5, "name": "**Defender**", "link":"https://www.dndbeyond.com/magic-items/defender" },
			{ "roll": 10, "name": "**Hammer of Thunderbolts**", "link":"https://www.dndbeyond.com/magic-items/hammer-of-thunderbolts" },
			{ "roll": 20, "name": "**Sword of Answering**", "link":"https://aversten.obsidianportal.com/wiki_pages/sword-of-answering" },
			{ "roll": 23, "name": "**Holy Avenger**", "link":"https://www.dndbeyond.com/magic-items/holy-avenger" },
			{ "roll": 26, "name": "**Ring of Djinni Summoning**", "link":"https://www.dndbeyond.com/magic-items/ring-of-djinni-summoning" },
			{ "roll": 29, "name": "**Ring of Invisibility**", "link":"https://www.dndbeyond.com/magic-items/ring-of-invisibility" },
			{ "roll": 32, "name": "**Ring of Spell Turning**", "link":"https://www.dndbeyond.com/magic-items/ring-of-spell-turning" },
			{ "roll": 38, "name": "**Rod of Lordly Might**", "link":"https://www.dndbeyond.com/magic-items/rod-of-lordly-might" },
			{ "roll": 41, "name": "**Vorpal Sword**", "link":"https://www.dndbeyond.com/magic-items/vorpal-sword" },
			{ "roll": 43, "name": "**Belt of Cloud Giant Strength**", "link":"https://www.dndbeyond.com/magic-items/belt-of-cloud-giant-strength" },
			{ "roll": 45, "name": "**Armor, +2 Breastplate**", "link":"https://www.dndbeyond.com/magic-items/armor-2" },
			{ "roll": 47, "name": "**Armor, +3 Chain Mail**", "link":"https://www.dndbeyond.com/magic-items/armor-3" },
			{ "roll": 49, "name": "**Armor, +3 Chain Shirt**", "link":"https://www.dndbeyond.com/magic-items/armor-3" },
			{ "roll": 51, "name": "**Cloak of Invisibility**", "link":"https://aversten.obsidianportal.com/wiki_pages/cloak-of-invisibility" },
			{ "roll": 53, "name": "**Crystal Ball (Legendary Version)**", "link":"https://www.dndbeyond.com/magic-items/crystal-ball" },
			{ "roll": 55, "name": "**Armor, +1 Half Plate**", "link":"https://www.dndbeyond.com/magic-items/armor-1" },
			{ "roll": 57, "name": "**Iron Flask**", "link":"https://www.dndbeyond.com/magic-items/iron-flask" },
			{ "roll": 59, "name": "**Armor, +3 Leather**", "link":"https://www.dndbeyond.com/magic-items/armor-3" },
			{ "roll": 61, "name": "**Armor, +1 Plate**", "link":"https://www.dndbeyond.com/magic-items/armor-1" },
			{ "roll": 63, "name": "**Robe of the Archmagi**", "link":"https://www.dndbeyond.com/magic-items/robe-of-the-archmagi" },
			{ "roll": 65, "name": "**Rod of Resurrection**", "link":"https://aversten.obsidianportal.com/wiki_pages/rod-of-resurrection" },
			{ "roll": 67, "name": "**Armor, +1 Scale Mail**", "link":"https://www.dndbeyond.com/magic-items/armor-1" },
			{ "roll": 69, "name": "**Scarab of Protection**", "link":"https://www.dndbeyond.com/magic-items/scarab-of-protection" },
			{ "roll": 71, "name": "**Armor, +2 Splint**", "link":"https://www.dndbeyond.com/magic-items/armor-2" },
			{ "roll": 73, "name": "**Armor, +2 Studded Leather**", "link":"https://www.dndbeyond.com/magic-items/armor-2" },
			{ "roll": 75, "name": "**Well of Many Worlds**", "link":"https://www.dndbeyond.com/magic-items/well-of-many-worlds" }
		];
	}
	if(roll === 76){
		const armor = d12();
		if(armor <= 2) return [{ "roll": 76, "name": "**Armor, +2 Half Plate**", "link":"https://www.dndbeyond.com/magic-items/armor-2" }];
		if(armor <= 4) return [{ "roll": 76, "name": "**Armor, +2 Plate**", "link":"https://www.dndbeyond.com/magic-items/armor-2" }];
		if(armor <= 6) return [{ "roll": 76, "name": "**Armor, +3 Studded Leather**", "link":"https://www.dndbeyond.com/magic-items/armor-3" }];
		if(armor <= 8) return [{ "roll": 76, "name": "**Armor, +3 Breastplate**", "link":"https://www.dndbeyond.com/magic-items/armor-3" }];
		if(armor <= 10) return [{ "roll": 76, "name": "**Armor, +3 Splint**", "link":"https://www.dndbeyond.com/magic-items/armor-3" }];
		if(armor === 11) return [{ "roll": 76, "name": "**Armor, +3 Half Plate**", "link":"https://www.dndbeyond.com/magic-items/armor-3" }];
		if(armor === 12) return [{ "roll": 76, "name": "**Armor, +3 Plate**", "link":"https://www.dndbeyond.com/magic-items/armor-3" }];
	}
	return [
		{ "roll": 77, "name": "**Apparatus of Kwalish**", "link":"https://aversten.obsidianportal.com/wiki_pages/apparatus-of-kwalish" },
		{ "roll": 78, "name": "**Armor of Invulnerability**", "link":"https://www.dndbeyond.com/magic-items/armor-of-invulnerability" },
		{ "roll": 79, "name": "**Belt of Storm Giant Strength*", "link":"https://www.dndbeyond.com/magic-items/belt-of-storm-giant-strength" },
		{ "roll": 80, "name": "**Cubic Gate**", "link":"https://www.dndbeyond.com/magic-items/cubic-gate" },
		{ "roll": 81, "name": "**Deck of Many Things**", "link":"https://www.dndbeyond.com/magic-items/deck-of-many-things" },
		{ "roll": 82, "name": "**Efretti Chain**", "link":"https://aversten.obsidianportal.com/wiki_pages/efretti-chain" },
		{ "roll": 83, "name": "**Armor of Resistance (Half Plate)**", "link":"https://www.dndbeyond.com/magic-items/armor-of-resistance" },
		{ "roll": 84, "name": "**Horn of Valhalla (Iron)**", "link":"https://www.dndbeyond.com/magic-items/horn-of-valhalla-iron" },
		{ "roll": 85, "name": "**Instrument of the Bards (Ollamh Harp)**", "link":"https://aversten.obsidianportal.com/wiki_pages/instrument-of-the-bards" },
		{ "roll": 86, "name": "**Ioun Stone (Greater Absorption)**", "link":"https://www.dndbeyond.com/magic-items/ioun-stone-of-greater-absorption" },
		{ "roll": 87, "name": "**Ioun Stone (Mastery)**", "link":"https://www.dndbeyond.com/magic-items/ioun-stone-of-mastery" },
		{ "roll": 88, "name": "**Ioun Stone (Regneration)**", "link":"https://www.dndbeyond.com/magic-items/ioun-stone-of-regeneration" },
		{ "roll": 89, "name": "**Plate Armor of Etherealness**", "link":"https://www.dndbeyond.com/magic-items/plate-armor-of-etherealness" },
		{ "roll": 90, "name": "**Armor of Resistance (Plate)**", "link":"https://www.dndbeyond.com/magic-items/armor-of-resistance" },
		{ "roll": 91, "name": "**Ring of Air Elemental Command**", "link":"https://www.dndbeyond.com/magic-items/ring-of-air-elemental-command" },
		{ "roll": 92, "name": "**Ring of Earth Elemental Command**", "link":"https://www.dndbeyond.com/magic-items/ring-of-earth-elemental-command" },
		{ "roll": 93, "name": "**Ring of Fire Elemental Command**", "link":"https://www.dndbeyond.com/magic-items/ring-of-fire-elemental-command" },
		{ "roll": 94, "name": "**Ring of Three Wishes**", "link":"https://www.dndbeyond.com/magic-items/ring-of-three-wishes" },
		{ "roll": 95, "name": "**Ring of Water Elemental Command**", "link":"https://www.dndbeyond.com/magic-items/ring-of-water-elemental-command" },
		{ "roll": 96, "name": "**Sphere of Annihilation**", "link":"https://www.dndbeyond.com/magic-items/sphere-of-annihilation" },
		{ "roll": 97, "name": "**Talisman of Pure Good**", "link":"https://www.dndbeyond.com/magic-items/talisman-of-pure-good" },
		{ "roll": 98, "name": "**Talisman of the Sphere**", "link":"https://www.dndbeyond.com/magic-items/talisman-of-the-sphere" },
		{ "roll": 99, "name": "**Talisman of Ultimate Evil**", "link":"https://www.dndbeyond.com/magic-items/talisman-of-ultimate-evil" },
		{ "roll": 100, "name": "**Tome of the Stilled Tongue**", "link":"https://aversten.obsidianportal.com/wiki_pages/tome-of-the-stilled-tongue" }
	];
};
