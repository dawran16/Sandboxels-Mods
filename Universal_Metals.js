// --- SANDBOXELS ULTIMATE UNIVERSAL METALS MOD (VIBRANT COLORS & POLISHED DEFINITIONS) ---

// 1. Safely register custom categories into Sandboxels
const customCategories = ["improved_metals", "improved_molten"];

customCategories.forEach(cat => {
    if (!elementCategories.includes(cat)) {
        elementCategories.push(cat);
    }
});

// Force-build UI category buttons if the function exists
if (typeof createCategoryButtons === "function") {
    try { createCategoryButtons(); } catch (e) {}
}

// Helper function to safely update or create elements with full properties & validation
function modifyOrCreateElement(name, data) {
    if (elements[name]) {
        Object.assign(elements[name], data);
        if (!elements[name].category) {
            elements[name].category = "improved_metals";
        }
        if (!elements[name].state) {
            elements[name].state = "solid";
        }
    } else {
        elements[name] = Object.assign({
            category: "improved_metals",
            state: "solid"
        }, data);
    }
}

// ==========================================
// 2. SOLIDS (improved_metals category with hyper-vibrant neon & saturated color profile)
// ==========================================

const solidMetals = {

    tungsten: { 
        color: "#c0c0d0", 
        state: "solid",
        density: 19300, 
        hardness: 0.95, 
        tempHigh: 3422, 
        stateHigh: "molten_tungsten",
        reactions: {
            "fire": { "elem1": "tungsten", "elem2": "fire", chance: 0.01 }
        }
    },

    beryllium: { 
        color: "#2ecc71", 
        state: "solid",
        density: 1850, 
        hardness: 0.85, 
        tempHigh: 1287, 
        stateHigh: "molten_beryllium",
        reactions: {
            "acid": { "elem1": "hydrogen", "elem2": "fire", chance: 0.4 }
        }
    },

    titanium: { 
        color: "#38bdf8", 
        state: "solid",
        density: 4506, 
        hardness: 0.80, 
        tempHigh: 1668, 
        stateHigh: "molten_titanium",
        reactions: {
            "acid": { "elem1": "hydrogen", "elem2": "fire", chance: 0.1 }
        }
    },

    chromium: { 
        color: "#00ffcc", 
        state: "solid",
        density: 7190, 
        hardness: 0.85, 
        tempHigh: 1907, 
        stateHigh: "molten_chromium",
        reactions: {
            "acid": { "elem1": "hydrogen", "elem2": "fire", chance: 0.2 }
        }
    },

    manganese: { 
        color: "#d946ef", 
        state: "solid",
        density: 7210, 
        hardness: 0.60, 
        tempHigh: 1246, 
        stateHigh: "molten_manganese",
        reactions: {
            "water": { "elem1": "rust", "elem2": "water", chance: 0.03 }
        }
    },

    iron: { 
        color: "#94a3b8", 
        state: "solid",
        density: 7874, 
        hardness: 0.65, 
        tempHigh: 1538, 
        stateHigh: "molten_iron",
        reactions: {
            "water": { "elem1": "rust", "elem2": "water", chance: 0.05 },
            "salt_water": { "elem1": "rust", "elem2": "salt_water", chance: 0.15 },
            "acid": { "elem1": "hydrogen", "elem2": "rust", chance: 0.2 }
        }
    },

    cobalt: { 
        color: "#2563eb", 
        state: "solid",
        density: 8900, 
        hardness: 0.75, 
        tempHigh: 1495, 
        stateHigh: "molten_cobalt",
        reactions: {
            "acid": { "elem1": "hydrogen", "elem2": "fire", chance: 0.1 }
        }
    },

    nickel: { 
        color: "#a3e635", 
        state: "solid",
        density: 8908, 
        hardness: 0.70, 
        tempHigh: 1455, 
        stateHigh: "molten_nickel",
        reactions: {
            "acid": { "elem1": "hydrogen", "elem2": "fire", chance: 0.1 }
        }
    },

    copper: { 
        color: "#ff5500", 
        state: "solid",
        density: 8960, 
        hardness: 0.50, 
        tempHigh: 1085, 
        stateHigh: "molten_copper",
        reactions: {
            "water": { "elem1": "copper_oxide", "elem2": "water", chance: 0.02 },
            "acid": { "elem1": "hydrogen", "elem2": "fire", chance: 0.3 }
        }
    },

    zinc: { 
        color: "#0ea5e9", 
        state: "solid",
        density: 7140, 
        hardness: 0.30, 
        tempHigh: 419, 
        stateHigh: "molten_zinc",
        reactions: {
            "acid": { "elem1": "hydrogen", "elem2": "fire", chance: 0.5 }
        }
    },

    gallium: { 
        color: "#00ffff", 
        state: "solid",
        density: 5910, 
        hardness: 0.10, 
        tempHigh: 30, 
        stateHigh: "molten_gallium",
        reactions: {
            "aluminum": { "elem1": "gallium", "elem2": "dust", chance: 0.1 }
        }
    },

    zirconium: { 
        color: "#f8fafc", 
        state: "solid",
        density: 6520, 
        hardness: 0.75, 
        tempHigh: 1855, 
        stateHigh: "molten_zirconium",
        reactions: {
            "fire": { "elem1": "fire", "elem2": "zirconium", chance: 0.05 }
        }
    },

    niobium: { 
        color: "#00f5ff", 
        state: "solid",
        density: 8570, 
        hardness: 0.70, 
        tempHigh: 2477, 
        stateHigh: "molten_niobium" 
    },

    molybdenum: { 
        color: "#38bdf8", 
        state: "solid",
        density: 10280, 
        hardness: 0.85, 
        tempHigh: 2623, 
        stateHigh: "molten_molybdenum" 
    },

    ruthenium: { 
        color: "#64748b", 
        state: "solid",
        density: 12370, 
        hardness: 0.90, 
        tempHigh: 2334, 
        stateHigh: "molten_ruthenium" 
    },

    rhodium: { 
        color: "#ffffff", 
        state: "solid",
        density: 12410, 
        hardness: 0.85, 
        tempHigh: 1964, 
        stateHigh: "molten_rhodium" 
    },

    palladium: { 
        color: "#e2e8f0", 
        state: "solid",
        density: 12020, 
        hardness: 0.50, 
        tempHigh: 1555, 
        stateHigh: "molten_palladium",
        reactions: {
            "hydrogen": { "elem1": "fire", "elem2": "palladium", chance: 0.2 }
        }
    },

    silver: { 
        color: "#ffffff", 
        state: "solid",
        density: 10490, 
        hardness: 0.35, 
        tempHigh: 961, 
        stateHigh: "molten_silver" 
    },

    cadmium: { 
        color: "#c084fc", 
        state: "solid",
        density: 8650, 
        hardness: 0.20, 
        tempHigh: 321, 
        stateHigh: "molten_cadmium" 
    },

    indium: { 
        color: "#3b82f6", 
        state: "solid",
        density: 7310, 
        hardness: 0.15, 
        tempHigh: 157, 
        stateHigh: "molten_indium" 
    },

    tin: { 
        color: "#cbd5e1", 
        state: "solid",
        density: 7310, 
        hardness: 0.20, 
        tempHigh: 231, 
        stateHigh: "molten_tin" 
    },

    antimony: { 
        color: "#10b981", 
        state: "solid",
        density: 6697, 
        hardness: 0.40, 
        tempHigh: 631, 
        stateHigh: "molten_antimony" 
    },

    hafnium: { 
        color: "#f43f5e", 
        state: "solid",
        density: 13310, 
        hardness: 0.80, 
        tempHigh: 2233, 
        stateHigh: "molten_hafnium" 
    },

    tantalum: { 
        color: "#ff0055", 
        state: "solid",
        density: 16650, 
        hardness: 0.85, 
        tempHigh: 3017, 
        stateHigh: "molten_tantalum" 
    },

    rhenium: { 
        color: "#00bfff", 
        state: "solid",
        density: 21020, 
        hardness: 0.95, 
        tempHigh: 3186, 
        stateHigh: "molten_rhenium" 
    },

    osmium: { 
        color: "#4f46e5", 
        state: "solid",
        density: 22590, 
        hardness: 0.98, 
        tempHigh: 3033, 
        stateHigh: "molten_osmium" 
    },

    iridium: { 
        color: "#a855f7", 
        state: "solid",
        density: 22560, 
        hardness: 0.97, 
        tempHigh: 2446, 
        stateHigh: "molten_iridium" 
    },

    platinum: { 
        color: "#f8fafc", 
        state: "solid",
        density: 21450, 
        hardness: 0.45, 
        tempHigh: 1768, 
        stateHigh: "molten_platinum" 
    },

    gold: { 
        color: "#ffd700", 
        state: "solid",
        density: 19300, 
        hardness: 0.25, 
        tempHigh: 1064, 
        stateHigh: "molten_gold",
        reactions: {
            "acid": { "elem1": "gold", "elem2": "fire", chance: 0.01 }
        }
    },

    mercury: { 
        color: "#00d2ff", 
        state: "liquid", 
        behavior: behaviors.LIQUID,
        density: 13534, 
        hardness: 0.0, 
        tempHigh: 356, 
        stateHigh: "molten_mercury",
        reactions: {
            "gold": { "elem1": "gold", "elem2": "mercury", chance: 0.5 }
        }
    },

    thallium: { 
        color: "#ff007f", 
        state: "solid",
        density: 11850, 
        hardness: 0.15, 
        tempHigh: 304, 
        stateHigh: "molten_thallium" 
    },

    lead: { 
        color: "#475569", 
        state: "solid",
        density: 11340, 
        hardness: 0.15, 
        tempHigh: 327, 
        stateHigh: "molten_lead",
        reactions: {
            "acid": { "elem1": "hydrogen", "elem2": "fire", chance: 0.2 }
        }
    },

    bismuth: { 
        color: "#ff7f00", 
        state: "solid",
        density: 9780, 
        hardness: 0.35, 
        tempHigh: 271, 
        stateHigh: "molten_bismuth" 
    },

    polonium: { 
        color: "#ffe100", 
        state: "solid",
        density: 9320, 
        hardness: 0.30, 
        tempHigh: 254, 
        stateHigh: "molten_polonium" 
    },

    thorium: { 
        color: "#00ff88", 
        state: "solid",
        density: 11720, 
        hardness: 0.50, 
        tempHigh: 1750, 
        stateHigh: "molten_thorium" 
    },

    uranium: { 
        color: "#00ff00", 
        state: "solid",
        density: 19100, 
        hardness: 0.60, 
        tempHigh: 1132, 
        stateHigh: "molten_uranium",
        reactions: {
            "fire": { "elem1": "fire", "elem2": "fallout", chance: 0.5 }
        }
    },

    plutonium: { 
        color: "#00ffcc", 
        state: "solid",
        density: 19860, 
        hardness: 0.55, 
        tempHigh: 640, 
        stateHigh: "molten_plutonium",
        reactions: {
            "fire": { "elem1": "fire", "elem2": "fallout", chance: 0.8 }
        }
    },

    lithium: { 
        color: "#ff0000", 
        state: "solid",
        density: 534, 
        hardness: 0.05, 
        tempHigh: 180, 
        stateHigh: "molten_lithium",
        reactions: {
            "water": { "elem1": "fire", "elem2": "hydrogen", chance: 1.0 },
            "salt_water": { "elem1": "fire", "elem2": "hydrogen", chance: 1.0 },
            "acid": { "elem1": "fire", "elem2": "hydrogen", chance: 1.0 }
        }
    },

    aluminum: { 
        color: "#ffffff", 
        state: "solid",
        density: 2700, 
        hardness: 0.35, 
        tempHigh: 660, 
        stateHigh: "molten_aluminum",
        reactions: {
            "acid": { "elem1": "hydrogen", "elem2": "fire", chance: 0.5 },
            "water": { "elem1": "hydrogen", "elem2": "copper_oxide", chance: 0.01 }
        }
    },

    maraging_steel: { 
        color: "#64748b", 
        state: "solid",
        density: 8100, 
        hardness: 0.99, 
        tempHigh: 1413, 
        stateHigh: "molten_maraging_steel" 
    },

    bulk_metallic_glass: { 
        color: "#00ffff", 
        state: "solid",
        density: 6100, 
        hardness: 0.98, 
        tempHigh: 1100, 
        stateHigh: "molten_metallic_glass" 
    },

    cobalt_chromium: { 
        color: "#3b82f6", 
        state: "solid",
        density: 8500, 
        hardness: 0.96, 
        tempHigh: 1400, 
        stateHigh: "molten_cobalt_chromium" 
    },

    ferrochromium: { 
        color: "#10b981", 
        state: "solid",
        density: 7150, 
        hardness: 0.94, 
        tempHigh: 1650, 
        stateHigh: "molten_ferrochromium" 
    },

    inconel_718: { 
        color: "#ff9900", 
        state: "solid",
        density: 8190, 
        hardness: 0.92, 
        tempHigh: 1336, 
        conduct: 0.8, 
        stateHigh: "molten_inconel" 
    },

    titanium_grade_5: { 
        color: "#00aaff", 
        state: "solid",
        density: 4430, 
        hardness: 0.90, 
        tempHigh: 1660, 
        stateHigh: "molten_titanium_g5" 
    },

    high_entropy_alloy: { 
        color: "#cc00ff", 
        state: "solid",
        density: 8000, 
        hardness: 0.88, 
        tempHigh: 1350, 
        stateHigh: "molten_hea" 
    },

    aerospace_aluminum: { 
        color: "#60a5fa", 
        state: "solid",
        density: 2810, 
        hardness: 0.78, 
        tempHigh: 635, 
        stateHigh: "molten_aero_aluminum" 
    },

    neutron_matter: { 
        color: "#ffffff", 
        state: "solid",
        density: 4000000000, 
        hardness: 1.0, 
        tempHigh: 10000, 
        stateHigh: "molten_neutron_matter",
        reactions: {
            "stone": { "elem1": "neutron_matter", "elem2": "plasma", chance: 1.0 }
        }
    }
};

for (let key in solidMetals) {
    modifyOrCreateElement(key, solidMetals[key]);
}


// ==========================================
// 3. MOLTEN LIQUIDS (improved_molten category with ultra-bright glowing neon colors)
// ==========================================

const moltenMetals = {

    molten_tungsten: { 
        color: "#ffffff", 
        state: "liquid",
        behavior: behaviors.LIQUID,
        density: 17600, 
        temp: 3500, 
        tempLow: 3422, 
        stateLow: "tungsten" 
    },

    molten_beryllium: { 
        color: "#ffaa00", 
        state: "liquid",
        behavior: behaviors.LIQUID,
        density: 1650, 
        temp: 1350, 
        tempLow: 1287, 
        stateLow: "beryllium" 
    },

    molten_titanium: { 
        color: "#ff6600", 
        state: "liquid",
        behavior: behaviors.LIQUID,
        density: 4110, 
        temp: 1750, 
        tempLow: 1668, 
        stateLow: "titanium" 
    },

    molten_chromium: { 
        color: "#ffff00", 
        state: "liquid",
        behavior: behaviors.LIQUID,
        density: 6300, 
        temp: 2000, 
        tempLow: 1907, 
        stateLow: "chromium" 
    },

    molten_manganese: { 
        color: "#ff00ff", 
        state: "liquid",
        behavior: behaviors.LIQUID,
        density: 6400, 
        temp: 1300, 
        tempLow: 1246, 
        stateLow: "manganese" 
    },

    molten_iron: { 
        color: "#ff3300", 
        state: "liquid",
        behavior: behaviors.LIQUID,
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
        color: "#0088ff", 
        state: "liquid",
        behavior: behaviors.LIQUID,
        density: 7750, 
        temp: 1600, 
        tempLow: 1495, 
        stateLow: "cobalt" 
    },

    molten_nickel: { 
        color: "#77ff00", 
        state: "liquid",
        behavior: behaviors.LIQUID,
        density: 7800, 
        temp: 1550, 
        tempLow: 1455, 
        stateLow: "nickel" 
    },

    molten_copper: { 
        color: "#ff4400", 
        state: "liquid",
        behavior: behaviors.LIQUID,
        density: 8020, 
        temp: 1150, 
        tempLow: 1085, 
        stateLow: "copper",
        reactions: {
            "water": { "elem1": "steam", "elem2": "copper_oxide", chance: 0.4 }
        }
    },

    molten_zinc: { 
        color: "#00bfff", 
        state: "liquid",
        behavior: behaviors.LIQUID,
        density: 6570, 
        temp: 450, 
        tempLow: 419, 
        stateLow: "zinc" 
    },

    molten_gallium: { 
        color: "#00ffff", 
        state: "liquid",
        behavior: behaviors.LIQUID,
        density: 6090, 
        temp: 50, 
        tempLow: 30, 
        stateLow: "gallium" 
    },

    molten_zirconium: { 
        color: "#ffcc00", 
        state: "liquid",
        behavior: behaviors.LIQUID,
        density: 5800, 
        temp: 1900, 
        tempLow: 1855, 
        stateLow: "zirconium" 
    },

    molten_niobium: { 
        color: "#00ffff", 
        state: "liquid",
        behavior: behaviors.LIQUID,
        density: 7800, 
        temp: 2500, 
        tempLow: 2477, 
        stateLow: "niobium" 
    },

    molten_molybdenum: { 
        color: "#ffff00", 
        state: "liquid",
        behavior: behaviors.LIQUID,
        density: 9300, 
        temp: 2700, 
        tempLow: 2623, 
        stateLow: "molybdenum" 
    },

    molten_ruthenium: { 
        color: "#ffffff", 
        state: "liquid",
        behavior: behaviors.LIQUID,
        density: 11000, 
        temp: 2400, 
        tempLow: 2334, 
        stateLow: "ruthenium" 
    },

    molten_rhodium: { 
        color: "#ffffaa", 
        state: "liquid",
        behavior: behaviors.LIQUID,
        density: 11000, 
        temp: 2000, 
        tempLow: 1964, 
        stateLow: "rhodium" 
    },

    molten_palladium: { 
        color: "#ffeedd", 
        state: "liquid",
        behavior: behaviors.LIQUID,
        density: 11000, 
        temp: 1600, 
        tempLow: 1555, 
        stateLow: "palladium" 
    },

    molten_silver: { 
        color: "#ffffff", 
        state: "liquid",
        behavior: behaviors.LIQUID,
        density: 9320, 
        temp: 1050, 
        tempLow: 961, 
        stateLow: "silver" 
    },

    molten_cadmium: { 
        color: "#e879f9", 
        state: "liquid",
        behavior: behaviors.LIQUID,
        density: 8000, 
        temp: 350, 
        tempLow: 321, 
        stateLow: "cadmium" 
    },

    molten_indium: { 
        color: "#60a5fa", 
        state: "liquid",
        behavior: behaviors.LIQUID,
        density: 7000, 
        temp: 180, 
        tempLow: 157, 
        stateLow: "indium" 
    },

    molten_tin: { 
        color: "#f1f5f9", 
        state: "liquid",
        behavior: behaviors.LIQUID,
        density: 6990, 
        temp: 250, 
        tempLow: 231, 
        stateLow: "tin" 
    },

    molten_antimony: { 
        color: "#00ffaa", 
        state: "liquid",
        behavior: behaviors.LIQUID,
        density: 6000, 
        temp: 650, 
        tempLow: 631, 
        stateLow: "antimony" 
    },

    molten_hafnium: { 
        color: "#ff3366", 
        state: "liquid",
        behavior: behaviors.LIQUID,
        density: 12000, 
        temp: 2300, 
        tempLow: 2233, 
        stateLow: "hafnium" 
    },

    molten_tantalum: { 
        color: "#ff0044", 
        state: "liquid",
        behavior: behaviors.LIQUID,
        density: 15000, 
        temp: 3100, 
        tempLow: 3017, 
        stateLow: "tantalum" 
    },

    molten_rhenium: { 
        color: "#00d5ff", 
        state: "liquid",
        behavior: behaviors.LIQUID,
        density: 19000, 
        temp: 3250, 
        tempLow: 3186, 
        stateLow: "rhenium" 
    },

    molten_osmium: { 
        color: "#6366f1", 
        state: "liquid",
        behavior: behaviors.LIQUID,
        density: 20000, 
        temp: 3100, 
        tempLow: 3033, 
        stateLow: "osmium" 
    },

    molten_iridium: { 
        color: "#c084fc", 
        state: "liquid",
        behavior: behaviors.LIQUID,
        density: 20000, 
        temp: 2500, 
        tempLow: 2446, 
        stateLow: "iridium" 
    },

    molten_platinum: { 
        color: "#ffff33", 
        state: "liquid",
        behavior: behaviors.LIQUID,
        density: 19700, 
        temp: 1850, 
        tempLow: 1768, 
        stateLow: "platinum" 
    },

    molten_gold: { 
        color: "#ffaa00", 
        state: "liquid",
        behavior: behaviors.LIQUID,
        density: 17300, 
        temp: 1150, 
        tempLow: 1064, 
        stateLow: "gold" 
    },

    molten_mercury: { 
        color: "#00ffff", 
   
