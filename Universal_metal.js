// --- SANDBOXELS ULTIMATE UNIVERSAL METALS MOD (SPACED & FIXED) ---

// Register custom categories safely
["improved_metals", "improved_molten"].forEach(cat => {
    if (!elementCategories.includes(cat)) {
        elementCategories.push(cat);
    }
});

// Helper function to safely update vanilla elements without wiping out reactions or properties
function modifyOrCreateElement(name, data) {
    if (elements[name]) {
        Object.assign(elements[name], data);
        if (!elements[name].category) {
            elements[name].category = "improved_metals";
        }
    } else {
        elements[name] = Object.assign({
            category: "improved_metals",
            state: "solid"
        }, data);
    }
}

// ==========================================
// 1. SOLIDS (improved_metals category)
// ==========================================

const solidMetals = {

    tungsten: { 
        color: "#5e5e60", 
        density: 19300, 
        hardness: 0.95, 
        tempHigh: 3422, 
        stateHigh: "molten_tungsten" 
    },

    beryllium: { 
        color: "#a4b0a3", 
        density: 1850, 
        hardness: 0.85, 
        tempHigh: 1287, 
        stateHigh: "molten_beryllium" 
    },

    titanium: { 
        color: "#87888a", 
        density: 4506, 
        hardness: 0.80, 
        tempHigh: 1668, 
        stateHigh: "molten_titanium" 
    },

    chromium: { 
        color: "#8a9ea7", 
        density: 7190, 
        hardness: 0.85, 
        tempHigh: 1907, 
        stateHigh: "molten_chromium" 
    },

    manganese: { 
        color: "#9c93a1", 
        density: 7210, 
        hardness: 0.60, 
        tempHigh: 1246, 
        stateHigh: "molten_manganese" 
    },

    iron: { 
        color: "#717378", 
        density: 7874, 
        hardness: 0.65, 
        tempHigh: 1538, 
        stateHigh: "molten_iron",
        reactions: {
            "water": { "elem1": "rust", "elem2": "water", chance: 0.05 },
            "acid": { "elem1": "hydrogen", "elem2": "rust", chance: 0.2 }
        }
    },

    cobalt: { 
        color: "#6b7c85", 
        density: 8900, 
        hardness: 0.75, 
        tempHigh: 1495, 
        stateHigh: "molten_cobalt" 
    },

    nickel: { 
        color: "#a8a799", 
        density: 8908, 
        hardness: 0.70, 
        tempHigh: 1455, 
        stateHigh: "molten_nickel" 
    },

    copper: { 
        color: "#c86e3a", 
        density: 8960, 
        hardness: 0.50, 
        tempHigh: 1085, 
        stateHigh: "molten_copper",
        reactions: {
            "water": { "elem1": "copper_oxide", "elem2": "water", chance: 0.02 }
        }
    },

    zinc: { 
        color: "#979ba0", 
        density: 7140, 
        hardness: 0.30, 
        tempHigh: 419, 
        stateHigh: "molten_zinc" 
    },

    gallium: { 
        color: "#b0c4de", 
        density: 5910, 
        hardness: 0.10, 
        tempHigh: 30, 
        stateHigh: "molten_gallium" 
    },

    zirconium: { 
        color: "#a19f95", 
        density: 6520, 
        hardness: 0.75, 
        tempHigh: 1855, 
        stateHigh: "molten_zirconium" 
    },

    niobium: { 
        color: "#92969b", 
        density: 8570, 
        hardness: 0.70, 
        tempHigh: 2477, 
        stateHigh: "molten_niobium" 
    },

    molybdenum: { 
        color: "#7e8388", 
        density: 10280, 
        hardness: 0.85, 
        tempHigh: 2623, 
        stateHigh: "molten_molybdenum" 
    },

    ruthenium: { 
        color: "#6e757c", 
        density: 12370, 
        hardness: 0.90, 
        tempHigh: 2334, 
        stateHigh: "molten_ruthenium" 
    },

    rhodium: { 
        color: "#d0d2d3", 
        density: 12410, 
        hardness: 0.85, 
        tempHigh: 1964, 
        stateHigh: "molten_rhodium" 
    },

    palladium: { 
        color: "#ced2d6", 
        density: 12020, 
        hardness: 0.50, 
        tempHigh: 1555, 
        stateHigh: "molten_palladium" 
    },

    silver: { 
        color: "#c0c0c0", 
        density: 10490, 
        hardness: 0.35, 
        tempHigh: 961, 
        stateHigh: "molten_silver" 
    },

    cadmium: { 
        color: "#a3a8af", 
        density: 8650, 
        hardness: 0.20, 
        tempHigh: 321, 
        stateHigh: "molten_cadmium" 
    },

    indium: { 
        color: "#c4c8cd", 
        density: 7310, 
        hardness: 0.15, 
        tempHigh: 157, 
        stateHigh: "molten_indium" 
    },

    tin: { 
        color: "#d3d4d5", 
        density: 7310, 
        hardness: 0.20, 
        tempHigh: 231, 
        stateHigh: "molten_tin" 
    },

    antimony: { 
        color: "#b4b8bc", 
        density: 6697, 
        hardness: 0.40, 
        tempHigh: 631, 
        stateHigh: "molten_antimony" 
    },

    hafnium: { 
        color: "#8a8c8e", 
        density: 13310, 
        hardness: 0.80, 
        tempHigh: 2233, 
        stateHigh: "molten_hafnium" 
    },

    tantalum: { 
        color: "#74787d", 
        density: 16650, 
        hardness: 0.85, 
        tempHigh: 3017, 
        stateHigh: "molten_tantalum" 
    },

    rhenium: { 
        color: "#727a82", 
        density: 21020, 
        hardness: 0.95, 
        tempHigh: 3186, 
        stateHigh: "molten_rhenium" 
    },

    osmium: { 
        color: "#525960", 
        density: 22590, 
        hardness: 0.98, 
        tempHigh: 3033, 
        stateHigh: "molten_osmium" 
    },

    iridium: { 
        color: "#5c6268", 
        density: 22560, 
        hardness: 0.97, 
        tempHigh: 2446, 
        stateHigh: "molten_iridium" 
    },

    platinum: { 
        color: "#e5e4e2", 
        density: 21450, 
        hardness: 0.45, 
        tempHigh: 1768, 
        stateHigh: "molten_platinum" 
    },

    gold: { 
        color: "#ffd700", 
        density: 19300, 
        hardness: 0.25, 
        tempHigh: 1064, 
        stateHigh: "molten_gold" 
    },

    mercury: { 
        color: "#b0b7bc", 
        state: "liquid", 
        density: 13534, 
        hardness: 0.0, 
        tempHigh: 356, 
        stateHigh: "molten_mercury" 
    },

    thallium: { 
        color: "#9a9ea4", 
        density: 11850, 
        hardness: 0.15, 
        tempHigh: 304, 
        stateHigh: "molten_thallium" 
    },

    lead: { 
        color: "#4a4e54", 
        density: 11340, 
        hardness: 0.15, 
        tempHigh: 327, 
        stateHigh: "molten_lead" 
    },

    bismuth: { 
        color: "#d8c5c4", 
        density: 9780, 
        hardness: 0.35, 
        tempHigh: 271, 
        stateHigh: "molten_bismuth" 
    },

    polonium: { 
        color: "#c2a953", 
        density: 9320, 
        hardness: 0.30, 
        tempHigh: 254, 
        stateHigh: "molten_polonium" 
    },

    thorium: { 
        color: "#6b6e73", 
        density: 11720, 
        hardness: 0.50, 
        tempHigh: 1750, 
        stateHigh: "molten_thorium" 
    },

    uranium: { 
        color: "#586e53", 
        density: 19100, 
        hardness: 0.60, 
        tempHigh: 1132, 
        stateHigh: "molten_uranium" 
    },

    plutonium: { 
        color: "#8a9682", 
        density: 19860, 
        hardness: 0.55, 
        tempHigh: 640, 
        stateHigh: "molten_plutonium" 
    },

    lithium: { 
        color: "#bcc6cc", 
        density: 534, 
        hardness: 0.05, 
        tempHigh: 180, 
        stateHigh: "molten_lithium",
        reactions: {
            "water": { "elem1": "fire", "elem2": "hydrogen", chance: 1.0 },
            "salt_water": { "elem1": "fire", "elem2": "hydrogen", chance: 1.0 }
        }
    },

    aluminum: { 
        color: "#d1d5db", 
        density: 2700, 
        hardness: 0.35, 
        tempHigh: 660, 
        stateHigh: "molten_aluminum",
        reactions: {
            "acid": { "elem1": "hydrogen", "elem2": "fire", chance: 0.5 }
        }
    },

    maraging_steel: { 
        color: "#3f444c", 
        density: 8100, 
        hardness: 0.99, 
        tempHigh: 1413, 
        stateHigh: "molten_maraging_steel" 
    },

    bulk_metallic_glass: { 
        color: "#2a3b4c", 
        density: 6100, 
        hardness: 0.98, 
        tempHigh: 1100, 
        stateHigh: "molten_metallic_glass" 
    },

    cobalt_chromium: { 
        color: "#5c656d", 
        density: 8500, 
        hardness: 0.96, 
        tempHigh: 1400, 
        stateHigh: "molten_cobalt_chromium" 
    },

    ferrochromium: { 
        color: "#5b6770", 
        density: 7150, 
        hardness: 0.94, 
        tempHigh: 1650, 
        stateHigh: "molten_ferrochromium" 
    },

    inconel_718: { 
        color: "#54524b", 
        density: 8190, 
        hardness: 0.92, 
        tempHigh: 1336, 
        conduct: 0.8, 
        stateHigh: "molten_inconel" 
    },

    titanium_grade_5: { 
        color: "#9aa3a8", 
        density: 4430, 
        hardness: 0.90, 
        tempHigh: 1660, 
        stateHigh: "molten_titanium_g5" 
    },

    high_entropy_alloy: { 
        color: "#6b6965", 
        density: 8000, 
        hardness: 0.88, 
        tempHigh: 1350, 
        stateHigh: "molten_hea" 
    },

    aerospace_aluminum: { 
        color: "#e2e8f0", 
        density: 2810, 
        hardness: 0.78, 
        tempHigh: 635, 
        stateHigh: "molten_aero_aluminum" 
    },

    neutron_matter: { 
        color: "#00ffff", 
        density: 4000000000, 
        hardness: 1.0, 
        tempHigh: 10000, 
        stateHigh: "molten_neutron_matter" 
    }
};

for (let key in solidMetals) {
    modifyOrCreateElement(key, solidMetals[key]);
}


// ==========================================
// 2. MOLTEN LIQUIDS (improved_molten category)
// ==========================================

const moltenMetals = {

    molten_tungsten: { 
        color: "#fff3d6", 
        density: 17600, 
        temp: 3500, 
        tempLow: 3422, 
        stateLow: "tungsten" 
    },

    molten_beryllium: { 
        color: "#ff6600", 
        density: 1650, 
        temp: 1350, 
        tempLow: 1287, 
        stateLow: "beryllium" 
    },

    molten_titanium: { 
        color: "#ff8800", 
        density: 4110, 
        temp: 1750, 
        tempLow: 1668, 
        stateLow: "titanium" 
    },

    molten_chromium: { 
        color: "#ffaa00", 
        density: 6300, 
        temp: 2000, 
        tempLow: 1907, 
        stateLow: "chromium" 
    },

    molten_manganese: { 
        color: "#ff8844", 
        density: 6400, 
        temp: 1300, 
        tempLow: 1246, 
        stateLow: "manganese" 
    },

    molten_iron: { 
        color: "#ff5a00", 
        density: 6980, 
        temp: 1600, 
        tempLow: 1538, 
        stateLow: "iron",
        reactions: {
            "water": { "elem1": "steam", "elem2": "rust", chance: 0.8 },
            "salt_water": { "elem1": "steam", "elem2": "rust", chance: 0.9 }
        }
    },

    molten_cobalt: { 
        color: "#ff5500", 
        density: 7750, 
        temp: 1600, 
        tempLow: 1495, 
        stateLow: "cobalt" 
    },

    molten_nickel: { 
        color: "#ff5000", 
        density: 7800, 
        temp: 1550, 
        tempLow: 1455, 
        stateLow: "nickel" 
    },

    molten_copper: { 
        color: "#e84e1b", 
        density: 8020, 
        temp: 1150, 
        tempLow: 1085, 
        stateLow: "copper",
        reactions: {
            "water": { "elem1": "steam", "elem2": "copper_oxide", chance: 0.4 }
        }
    },

    molten_zinc: { 
        color: "#555b63", 
        density: 6570, 
        temp: 450, 
        tempLow: 419, 
        stateLow: "zinc" 
    },

    molten_gallium: { 
        color: "#8fa3c7", 
        density: 6090, 
        temp: 50, 
        tempLow: 30, 
        stateLow: "gallium" 
    },

    molten_zirconium: { 
        color: "#ffa500", 
        density: 5800, 
        temp: 1900, 
        tempLow: 1855, 
        stateLow: "zirconium" 
    },

    molten_niobium: { 
        color: "#ff9933", 
        density: 7800, 
        temp: 2500, 
        tempLow: 2477, 
        stateLow: "niobium" 
    },

    molten_molybdenum: { 
        color: "#ffcc00", 
        density: 9300, 
        temp: 2700, 
        tempLow: 2623, 
        stateLow: "molybdenum" 
    },

    molten_ruthenium: { 
        color: "#e6c280", 
        density: 11000, 
        temp: 2400, 
        tempLow: 2334, 
        stateLow: "ruthenium" 
    },

    molten_rhodium: { 
        color: "#ffd700", 
        density: 11000, 
        temp: 2000, 
        tempLow: 1964, 
        stateLow: "rhodium" 
    },

    molten_palladium: { 
        color: "#ffb366", 
        density: 11000, 
        temp: 1600, 
        tempLow: 1555, 
        stateLow: "palladium" 
    },

    molten_silver: { 
        color: "#cc3300", 
        density: 9320, 
        temp: 1050, 
        tempLow: 961, 
        stateLow: "silver" 
    },

    molten_cadmium: { 
        color: "#70767c", 
        density: 8000, 
        temp: 350, 
        tempLow: 321, 
        stateLow: "cadmium" 
    },

    molten_indium: { 
        color: "#9aa0a6", 
        density: 7000, 
        temp: 180, 
        tempLow: 157, 
        stateLow: "indium" 
    },

    molten_tin: { 
        color: "#a2a4a6", 
        density: 6990, 
        temp: 250, 
        tempLow: 231, 
        stateLow: "tin" 
    },

    molten_antimony: { 
        color: "#8a8d91", 
        density: 6000, 
        temp: 650, 
        tempLow: 631, 
        stateLow: "antimony" 
    },

    molten_hafnium: { 
        color: "#ff7700", 
        density: 12000, 
        temp: 2300, 
        tempLow: 2233, 
        stateLow: "hafnium" 
    },

    molten_tantalum: { 
        color: "#ff6600", 
        density: 15000, 
        temp: 3100, 
        tempLow: 3017, 
        stateLow: "tantalum" 
    },

    molten_rhenium: { 
        color: "#ff5500", 
        density: 19000, 
        temp: 3250, 
        tempLow: 3186, 
        stateLow: "rhenium" 
    },

    molten_osmium: { 
        color: "#ff4400", 
        density: 20000, 
        temp: 3100, 
        tempLow: 3033, 
        stateLow: "osmium" 
    },

    molten_iridium: { 
        color: "#ff4f00", 
        density: 20000, 
        temp: 2500, 
        tempLow: 2446, 
        stateLow: "iridium" 
    },

    molten_platinum: { 
        color: "#ffb833", 
        density: 19700, 
        temp: 1850, 
        tempLow: 1768, 
        stateLow: "platinum" 
    },

    molten_gold: { 
        color: "#d94000", 
        density: 17300, 
        temp: 1150, 
        tempLow: 1064, 
        stateLow: "gold" 
    },

    molten_mercury: { 
        color: "#8a9299", 
        density: 13000, 
        temp: 400, 
        tempLow: 356, 
        stateLow: "mercury" 
    },

    molten_thallium: { 
        color: "#7c8086", 
        density: 11000, 
        temp: 330, 
        tempLow: 304, 
        stateLow: "thallium" 
    },

    molten_lead: { 
        color: "#5a5e64", 
        density: 10660, 
        temp: 350, 
        tempLow: 327, 
        stateLow: "lead" 
    },

    molten_bismuth: { 
        color: "#b09e9d", 
        density: 9000, 
        temp: 300, 
        tempLow: 271, 
        stateLow: "bismuth" 
    },

    molten_polonium: { 
        color: "#a08c43", 
        density: 8500, 
        temp: 280, 
        tempLow: 254, 
        stateLow: "polonium" 
    },

    molten_thorium: { 
        color: "#55585d", 
        density: 10500, 
        temp: 1800, 
        tempLow: 1750, 
        stateLow: "thorium" 
    },

    molten_uranium: { 
        color: "#485843", 
        density: 17300, 
        temp: 1200, 
        tempLow: 1132, 
        stateLow: "uranium" 
    },

    molten_plutonium: { 
        color: "#6c7764", 
        density: 18000, 
        temp: 700, 
        tempLow: 640, 
        stateLow: "plutonium" 
    },

    molten_lithium: { 
        color: "#99a2a8", 
        density: 512, 
        temp: 200, 
        tempLow: 180, 
        stateLow: "lithium",
        reactions: { 
            "water": { "elem1": "fire", "elem2": "hydrogen", chance: 1.0 } 
        }
    },

    molten_aluminum: { 
        color: "#882222", 
        density: 2375, 
        temp: 750, 
        tempLow: 660, 
        stateLow: "aluminum",
        reactions: { 
            "water": { "elem1": "steam", "elem2": "fire", chance: 0.5 } 
        }
    },

    molten_maraging_steel: { 
        color: "#ff4400", 
        density: 7400, 
        temp: 1500, 
        tempLow: 1413, 
        stateLow: "maraging_steel" 
    },

    molten_metallic_glass: { 
        color: "#ee3300", 
        density: 5800, 
        temp: 1200, 
        tempLow: 1100, 
        stateLow: "bulk_metallic_glass" 
    },

    molten_cobalt_chromium: { 
        color: "#ff5500", 
        density: 7800, 
        temp: 1500, 
        tempLow: 1400, 
        stateLow: "cobalt_chromium" 
    },

    molten_ferrochromium: { 
        color: "#ff7700", 
        density: 6500, 
        temp: 1750, 
        tempLow: 1650, 
        stateLow: "ferrochromium" 
    },

    molten_inconel: { 
        color: "#ee4400", 
        density: 7600, 
        temp: 1450, 
        tempLow: 1336, 
        stateLow: "inconel_718" 
    },

    molten_titanium_g5: { 
        color: "#ff8000", 
        density: 4050, 
        temp: 1750, 
        tempLow: 1660, 
        stateLow: "titanium_grade_5" 
    },

    molten_hea: { 
        color: "#ff4a00", 
        density: 7200, 
        temp: 1450, 
        tempLow: 1350, 
        stateLow: "high_entropy_alloy" 
    },

    molten_aero_aluminum: { 
        color: "#772222", 
        density: 2500, 
        temp: 750, 
        tempLow: 635, 
        stateLow: "aerospace_aluminum" 
    },

    molten_neutron_matter: { 
        color: "#ffffff", 
        density: 3500000000, 
        temp: 11000, 
        tempLow: 10000, 
        stateLow: "neutron_matter" 
    }
};

for (let key in moltenMetals) {
    if (elements[key]) {
        Object.assign(elements[key], moltenMetals[key]);
        elements[key].category = "improved_molten";
    } else {
        elements[key] = Object.assign({
            behavior: behaviors.LIQUID,
            category: "improved_molten",
            state: "liquid"
        }, moltenMetals[key]);
    }
      }

