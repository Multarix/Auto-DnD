module.exports = (roll) => {
	if(roll <= 11) return [{ "roll": 11, "name": "**+2 Weapon**", "link":"https://www.dndbeyond.com/magic-items/weapon-2" }];
	if(roll <= 14){
		const figurine = d8();
		if(figurine === 1) return [{ "roll": 14, "name": "**Figurine of Wondrous Power (Bronze Griffon)**", "link":"https://www.dndbeyond.com/magic-items/figurine-of-wondrous-power-bronze-griffon" }];
		if(figurine === 2) return [{ "roll": 14, "name": "**Figurine of Wondrous Power (Ebony Fly)**", "link":"https://www.dndbeyond.com/magic-items/figurine-of-wondrous-power-ebony-fly" }];
		if(figurine === 3) return [{ "roll": 14, "name": "**Figurine of Wondrous Power (Golden Lions)**", "link":"https://www.dndbeyond.com/magic-items/figurine-of-wondrous-power-golden-lions" }];
		if(figurine === 4) return [{ "roll": 14, "name": "**Figurine of Wondrous Power (Ivory Goats)**", "link":"https://www.dndbeyond.com/magic-items/figurine-of-wondrous-power-ivory-goats" }];
		if(figurine === 5) return [{ "roll": 14, "name": "**Figurine of Wondrous Power (Marble Elephant)**", "link":"https://www.dndbeyond.com/magic-items/figurine-of-wondrous-power-marble-elephant" }];
		if(figurine <= 7) return [{ "roll": 14, "name": "**Figurine of Wondrous Power (Onyx Dog)**", "link":"https://www.dndbeyond.com/magic-items/figurine-of-wondrous-power-onyx-dog" }];
		if(figurine === 8) return [{ "roll": 14, "name": "**Figurine of Wondrous Power (Serpentine Owl)**", "link":"https://www.dndbeyond.com/magic-items/figurine-of-wondrous-power-serpentine-owl" }];
	}
	return [
		{ "roll": 15, "name": "**Adamantine Armor (Breastplate)**", "link":"https://www.dndbeyond.com/magic-items/adamantine-armor" },
		{ "roll": 16, "name": "**Adamantine Armor (Splint)**", "link":"https://www.dndbeyond.com/magic-items/adamantine-armor" },
		{ "roll": 17, "name": "**Amulet of Health**", "link":"https://www.dndbeyond.com/magic-items/amulet-of-health" },
		{ "roll": 18, "name": "**Armor of Vulnerability**", "link":"https://www.dndbeyond.com/magic-items/armor-of-vulnerability" },
		{ "roll": 19, "name": "**Arrow Catching Shield**", "link":"https://www.dndbeyond.com/magic-items/arrow-catching-shield" },
		{ "roll": 20, "name": "**Belt of Dwarvenkind**", "link":"https://www.dndbeyond.com/magic-items/belt-of-dwarvenkind" },
		{ "roll": 21, "name": "**Belt of Hill Giant Strength**", "link":"https://www.dndbeyond.com/magic-items/belt-of-hill-giant-strength" },
		{ "roll": 22, "name": "**Berserker Axe**", "link":"https://www.dndbeyond.com/magic-items/berserker-axe" },
		{ "roll": 23, "name": "**Boots of Levitation**", "link":"https://www.dndbeyond.com/magic-items/boots-of-levitation" },
		{ "roll": 24, "name": "**Boots of Speed**", "link":"https://www.dndbeyond.com/magic-items/boots-of-speed" },
		{ "roll": 25, "name": "**Bowl of Commanding Water Elementals**", "link":"https://www.dndbeyond.com/magic-items/bowl-of-commanding-water-elementals" },
		{ "roll": 26, "name": "**Bracers of Defense**", "link":"https://www.dndbeyond.com/magic-items/bracers-of-defense" },
		{ "roll": 27, "name": "**Brazier of Commanding Fire Elementals**", "link":"https://www.dndbeyond.com/magic-items/brazier-of-commanding-fire-elementals" },
		{ "roll": 28, "name": "**Cape of the Mountebank**", "link":"https://www.dndbeyond.com/magic-items/cape-of-the-mountebank" },
		{ "roll": 29, "name": "**Censer of Controlling Air Elementals**", "link":"https://www.dndbeyond.com/magic-items/censer-of-controlling-air-elementals" },
		{ "roll": 30, "name": "**Armor, +1 Chain Mail**", "link":"https://www.dndbeyond.com/magic-items/armor-1" },
		{ "roll": 31, "name": "**Armor of Resistance (Chain Mail)**", "link":"https://www.dndbeyond.com/magic-items/armor-of-resistance" },
		{ "roll": 32, "name": "**Armor of Resistance (Chain Shirt)**", "link":"https://www.dndbeyond.com/magic-items/armor-of-resistance" },
		{ "roll": 33, "name": "**Armor, +1 Chain Shirt**", "link":"https://www.dndbeyond.com/magic-items/armor-1" },
		{ "roll": 34, "name": "**Cloak of Displacement**", "link":"https://www.dndbeyond.com/magic-items/cloak-of-displacement" },
		{ "roll": 35, "name": "**Cloak of the Bat**", "link":"https://www.dndbeyond.com/magic-items/cloak-of-the-bat" },
		{ "roll": 36, "name": "**Cube of Force**", "link":"https://www.dndbeyond.com/magic-items/cube-of-force" },
		{ "roll": 37, "name": "**Daern's Instant Fortress**", "link":"https://aversten.obsidianportal.com/wiki_pages/daerns-instant-fortress" },
		{ "roll": 38, "name": "**Dagger of Venom**", "link":"https://www.dndbeyond.com/magic-items/dagger-of-venom" },
		{ "roll": 39, "name": "**Dimensional Shackles**", "link":"https://www.dndbeyond.com/magic-items/dimensional-shackles" },
		{ "roll": 40, "name": "**Dragon Slayer**", "link":"https://www.dndbeyond.com/magic-items/dragon-slayer" },
		{ "roll": 41, "name": "**Elven Chain**", "link":"https://www.dndbeyond.com/magic-items/elven-chain" },
		{ "roll": 42, "name": "**Flame Tongue**", "link":"https://www.dndbeyond.com/magic-items/flame-tongue" },
		{ "roll": 43, "name": "**Gem of Seeing**", "link":"https://www.dndbeyond.com/magic-items/gem-of-seeing" },
		{ "roll": 44, "name": "**Giant Slayer**", "link":"https://www.dndbeyond.com/magic-items/giant-slayer" },
		{ "roll": 45, "name": "**Glamoured Studded Leather**", "link":"https://www.dndbeyond.com/magic-items/glamoured-studded-leather" },
		{ "roll": 46, "name": "**Helm of Teleportation**", "link":"https://www.dndbeyond.com/magic-items/helm-of-teleportation" },
		{ "roll": 47, "name": "**Horn of Blasting**", "link":"https://www.dndbeyond.com/magic-items/horn-of-blasting" },
		{ "roll": 48, "name": "**Horn of Valhalla (Silver or Brass)**", "link":"https://www.dndbeyond.com/magic-items/horn-of-valhalla" },
		{ "roll": 49, "name": "**Instrument of the Bards (Canaith Mandolin)**", "link":"https://aversten.obsidianportal.com/wiki_pages/instrument-of-the-bards" },
		{ "roll": 50, "name": "**Instrument of the Bards (Cii Lyre)**", "link":"https://aversten.obsidianportal.com/wiki_pages/instrument-of-the-bards" },
		{ "roll": 51, "name": "**Ioun Stone (Awareness)**", "link":"https://www.dndbeyond.com/magic-items/ioun-stone-of-awareness" },
		{ "roll": 52, "name": "**Ioun Stone (Protection)**", "link":"https://www.dndbeyond.com/magic-items/ioun-stone-of-protection" },
		{ "roll": 53, "name": "**Ioun Stone (Reserve)**", "link":"https://www.dndbeyond.com/magic-items/ioun-stone-of-reserve" },
		{ "roll": 54, "name": "**Ioun Stone (Sustenance)**", "link":"https://www.dndbeyond.com/magic-items/ioun-stone-of-sustenance" },
		{ "roll": 55, "name": "**Iron Bands of Bilarro**", "link":"https://aversten.obsidianportal.com/wikis/iron-bands-of-bilarro" },
		{ "roll": 56, "name": "**Armor, +1 Leather**", "link":"https://www.dndbeyond.com/magic-items/armor-1" },
		{ "roll": 57, "name": "**Armor of Resistance (Leather)**", "link":"https://www.dndbeyond.com/magic-items/armor-of-resistance" },
		{ "roll": 58, "name": "**Mace of Disruption**", "link":"https://www.dndbeyond.com/magic-items/mace-of-disruption" },
		{ "roll": 59, "name": "**Mace of Smiting**", "link":"https://www.dndbeyond.com/magic-items/mace-of-smiting" },
		{ "roll": 60, "name": "**Mace of Terror**", "link":"https://www.dndbeyond.com/magic-items/mace-of-terror" },
		{ "roll": 61, "name": "**Mantle of Spell Resistance**", "link":"https://www.dndbeyond.com/magic-items/mantle-of-spell-resistance" },
		{ "roll": 62, "name": "**Necklace of Prayer Beads**", "link":"https://www.dndbeyond.com/magic-items/necklace-of-prayer-beads" },
		{ "roll": 63, "name": "**Periapt of Proof against Poison**", "link":"https://www.dndbeyond.com/magic-items/periapt-of-proof-against-poison" },
		{ "roll": 64, "name": "**Ring of Animal Influence**", "link":"https://www.dndbeyond.com/magic-items/ring-of-animal-influence" },
		{ "roll": 65, "name": "**Ring of Evasion**", "link":"https://www.dndbeyond.com/magic-items/ring-of-evasion" },
		{ "roll": 66, "name": "**Ring of Feather Falling**", "link":"https://www.dndbeyond.com/magic-items/ring-of-feather-falling" },
		{ "roll": 67, "name": "**Ring of Free Action**", "link":"https://www.dndbeyond.com/magic-items/ring-of-free-action" },
		{ "roll": 68, "name": "**Ring of Protection**", "link":"https://www.dndbeyond.com/magic-items/ring-of-protection" },
		{ "roll": 69, "name": "**Ring of Resistance**", "link":"https://www.dndbeyond.com/magic-items/ring-of-resistance" },
		{ "roll": 70, "name": "**Ring of Spell Storing**", "link":"https://www.dndbeyond.com/magic-items/ring-of-spell-storing" },
		{ "roll": 71, "name": "**Ring of the Ram**", "link":"https://www.dndbeyond.com/magic-items/ring-of-the-ram" },
		{ "roll": 72, "name": "**Ring of X-Ray Vision**", "link":"https://www.dndbeyond.com/magic-items/ring-of-x-ray-vision" },
		{ "roll": 73, "name": "**Robe of Eyes**", "link":"https://www.dndbeyond.com/magic-items/robe-of-eyes" },
		{ "roll": 74, "name": "**Rod of Rulership**", "link":"https://www.dndbeyond.com/magic-items/rod-of-rulership" },
		{ "roll": 75, "name": "**+2 Rod of the Pact Keeper**", "link":"https://aversten.obsidianportal.com/search?utf8=%E2%9C%93&q=Rod+of+the+Pact+Keeper" },
		{ "roll": 76, "name": "**Rope of Entanglement**", "link":"https://www.dndbeyond.com/magic-items/rope-of-entanglement" },
		{ "roll": 77, "name": "**Armor, +1 Scale Mail**", "link":"https://www.dndbeyond.com/magic-items/armor-1" },
		{ "roll": 78, "name": "**Armor of Resistance (Scale Mail)**", "link":"https://www.dndbeyond.com/magic-items/armor-of-resistance" },
		{ "roll": 79, "name": "**+2 Shield**", "link":"https://www.dndbeyond.com/magic-items/shield-2" },
		{ "roll": 80, "name": "**Shield of Missile Attraction**", "link":"https://www.dndbeyond.com/magic-items/shield-of-missile-attraction" },
		{ "roll": 81, "name": "**Staff of Charming**", "link":"https://www.dndbeyond.com/magic-items/staff-of-charming" },
		{ "roll": 82, "name": "**Staff of Healing**", "link":"https://www.dndbeyond.com/magic-items/staff-of-healing" },
		{ "roll": 83, "name": "**Staff of Swarming Insects**", "link":"https://www.dndbeyond.com/magic-items/staff-of-swarming-insects" },
		{ "roll": 84, "name": "**Staff of the Woodlands**", "link":"https://www.dndbeyond.com/magic-items/staff-of-the-woodlands" },
		{ "roll": 85, "name": "**Staff of Withering**", "link":"https://www.dndbeyond.com/magic-items/staff-of-withering" },
		{ "roll": 86, "name": "**Stone of Controlling Earth Elementals**", "link":"https://www.dndbeyond.com/magic-items/stone-of-controlling-earth-elementals" },
		{ "roll": 87, "name": "**Sun Blade**", "link":"https://www.dndbeyond.com/magic-items/sun-blade" },
		{ "roll": 88, "name": "**Sword of Life Stealing**", "link":"https://www.dndbeyond.com/magic-items/sword-of-life-stealing" },
		{ "roll": 89, "name": "**Sword of Wounding**", "link":"https://www.dndbeyond.com/magic-items/sword-of-wounding" },
		{ "roll": 90, "name": "**Tentacle Rod**", "link":"https://aversten.obsidianportal.com/wikis/tentacle-rod" },
		{ "roll": 91, "name": "**Vicious Weapon**", "link":"https://www.dndbeyond.com/magic-items/vicious-weapon" },
		{ "roll": 92, "name": "**Wand of Binding**", "link":"https://www.dndbeyond.com/magic-items/wand-of-binding" },
		{ "roll": 93, "name": "**Wand of Enemy Detection**", "link":"https://www.dndbeyond.com/magic-items/wand-of-enemy-detection" },
		{ "roll": 94, "name": "**Wand of Fear**", "link":"https://www.dndbeyond.com/magic-items/wand-of-fear" },
		{ "roll": 95, "name": "**Wand of Fireballs**", "link":"https://www.dndbeyond.com/magic-items/wand-of-fireballs" },
		{ "roll": 96, "name": "**Wand of Lightning Bolts**", "link":"https://www.dndbeyond.com/magic-items/wand-of-lightning-bolts" },
		{ "roll": 97, "name": "**Wand of Paralysis**", "link":"https://www.dndbeyond.com/magic-items/wand-of-paralysis" },
		{ "roll": 98, "name": "**+2 Wand of the War Mage**", "link":"https://www.dndbeyond.com/magic-items/wand-of-the-war-mage" },
		{ "roll": 99, "name": "**Wand of Wonder**", "link":"https://www.dndbeyond.com/magic-items/wand-of-wonder" },
		{ "roll": 100, "name": "**Wings of Flying**", "link":"https://www.dndbeyond.com/magic-items/wings-of-flying" }
	];
};
