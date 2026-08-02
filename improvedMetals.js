// --- SANDBOXELS ADVANCED METALS MOD (SPLIT CATEGORIES) ---
// Solids -> improved_metals
// Molten Liquids -> improved_molten

// ==========================================
// 1. SOLIDS (improved_metals category)
// ==========================================

elements.tungsten = {
    color: "#5e5e60", category: "improved_metals", state: "solid",
    density: 19300, hardness: 0.95, tempHigh: 3422, stateHigh: "molten_tungsten"
};

elements.beryllium = {
    color: "#a4b0a3", category: "improved_metals", state: "solid",
    density: 1850, hardness: 0.85, tempHigh: 1287, stateHigh: "molten_beryllium"
};

elements.titanium = {
    color: "#87888a", category: "improved_metals", state: "solid",
    density: 4506, hardness: 0.80, tempHigh: 1668, stateHigh: "molten_titanium"
};

elements.chromium = {
    color: "#8a9ea7", category: "improved_metals", state: "solid",
    density: 7190, hardness: 0.85, tempHigh: 1907, stateHigh: "molten_chromium"
};

elements.cobalt = {
    color: "#6b7c85", category: "improved_metals", state: "solid",
    density: 8900, hardness: 0.75, tempHigh: 1495, stateHigh: "molten_cobalt"
};

elements.nickel = {
    color: "#a8a799", category: "improved_metals", state: "solid",
    density: 8908, hardness: 0.70, tempHigh: 1455, stateHigh: "molten_nickel"
};

elements.iron = {
    color: "#717378", category: "improved_metals", state: "solid",
    density: 7874, hardness: 0.65, tempHigh: 1538, stateHigh: "molten_iron"
};

elements.copper = {
    color: "#c86e3a", category: "improved_metals", state: "solid",
    density: 8960, hardness: 0.50, tempHigh: 1085, stateHigh: "molten_copper"
};

elements.silver = {
    color: "#c0c0c0", category: "improved_metals", state: "solid",
    density: 10490, hardness: 0.35, tempHigh: 961, stateHigh: "molten_silver"
};

elements.gold = {
    color: "#ffd700", category: "improved_metals", state: "solid",
    density: 19300, hardness: 0.25, tempHigh: 1064, stateHigh: "molten_gold"
};

elements.platinum = {
    color: "#e5e4e2", category: "improved_metals", state: "solid",
    density: 21450, hardness: 0.45, tempHigh: 1768, stateHigh: "molten_platinum"
};

elements.zinc = {
    color: "#979ba0", category: "improved_metals", state: "solid",
    density: 7140, hardness: 0.30, tempHigh: 419, stateHigh: "molten_zinc"
};

elements.aluminum = {
    color: "#d1d5db", category: "improved_metals", state: "solid",
    density: 2700, hardness: 0.35, tempHigh: 660, stateHigh: "molten_aluminum"
};

elements.tin = {
    color: "#d3d4d5", category: "improved_metals", state: "solid",
    density: 7310, hardness: 0.20, tempHigh: 231, stateHigh: "molten_tin"
};

elements.lead = {
    color: "#4a4e54", category: "improved_metals", state: "solid",
    density: 11340, hardness: 0.15, tempHigh: 327, stateHigh: "molten_lead"
};

elements.lithium = {
    color: "#bcc6cc", category: "improved_metals", state: "solid",
    density: 534, hardness: 0.05, tempHigh: 180, stateHigh: "molten_lithium"
};

elements.maraging_steel = {
    color: "#3f444c", category: "improved_metals", state: "solid",
    density: 8100, hardness: 0.99, tempHigh: 1413, stateHigh: "molten_maraging_steel"
};

elements.bulk_metallic_glass = {
    color: "#2a3b4c", category: "improved_metals", state: "solid",
    density: 6100, hardness: 0.98, tempHigh: 1100, stateHigh: "molten_metallic_glass"
};

elements.cobalt_chromium = {
    color: "#5c656d", category: "improved_metals", state: "solid",
    density: 8500, hardness: 0.96, tempHigh: 1400, stateHigh: "molten_cobalt_chromium"
};

elements.ferrochromium = {
    color: "#5b6770", category: "improved_metals", state: "solid",
    density: 7150, hardness: 0.94, tempHigh: 1650, stateHigh: "molten_ferrochromium"
};

elements.inconel_718 = {
    color: "#54524b", category: "improved_metals", state: "solid",
    density: 8190, hardness: 0.92, tempHigh: 1336, conduct: 0.8, stateHigh: "molten_inconel"
};

elements.titanium_grade_5 = {
    color: "#9aa3a8", category: "improved_metals", state: "solid",
    density: 4430, hardness: 0.90, tempHigh: 1660, stateHigh: "molten_titanium_g5"
};

elements.high_entropy_alloy = {
    color: "#6b6965", category: "improved_metals", state: "solid",
    density: 8000, hardness: 0.88, tempHigh: 1350, stateHigh: "molten_hea"
};

elements.aerospace_aluminum = {
    color: "#e2e8f0", category: "improved_metals", state: "solid",
    density: 2810, hardness: 0.78, tempHigh: 635, stateHigh: "molten_aero_aluminum"
};


// ==========================================
// 2. MOLTEN LIQUIDS (improved_molten category)
// ==========================================

elements.molten_tungsten = {
    color: "#fff3d6", behavior: behaviors.LIQUID, category: "improved_molten", state: "liquid",
    density: 17600, temp: 3500, tempLow: 3422, stateLow: "tungsten"
};

elements.molten_beryllium = {
    color: "#ff6600", behavior: behaviors.LIQUID, category: "improved_molten", state: "liquid",
    density: 1650, temp: 1350, tempLow: 1287, stateLow: "beryllium"
};

elements.molten_titanium = {
    color: "#ff8800", behavior: behaviors.LIQUID, category: "improved_molten", state: "liquid",
    density: 4110, temp: 1750, tempLow: 1668, stateLow: "titanium"
};

elements.molten_chromium = {
    color: "#ffaa00", behavior: behaviors.LIQUID, category: "improved_molten", state: "liquid",
    density: 6300, temp: 2000, tempLow: 1907, stateLow: "chromium"
};

elements.molten_cobalt = {
    color: "#ff5500", behavior: behaviors.LIQUID, category: "improved_molten", state: "liquid",
    density: 7750, temp: 1600, tempLow: 1495, stateLow: "cobalt"
};

elements.molten_nickel = {
    color: "#ff5000", behavior: behaviors.LIQUID, category: "improved_molten", state: "liquid",
    density: 7800, temp: 1550, tempLow: 1455, stateLow: "nickel"
};

elements.molten_iron = {
    color: "#ff5a00", behavior: behaviors.LIQUID, category: "improved_molten", state: "liquid",
    density: 6980, temp: 1600, tempLow: 1538, stateLow: "iron"
};

elements.molten_copper = {
    color: "#e84e1b", behavior: behaviors.LIQUID, category: "improved_molten", state: "liquid",
    density: 8020, temp: 1150, tempLow: 1085, stateLow: "copper"
};

elements.molten_silver = {
    color: "#cc3300", behavior: behaviors.LIQUID, category: "improved_molten", state: "liquid",
    density: 9320, temp: 1050, tempLow: 961, stateLow: "silver"
};

elements.molten_gold = {
    color: "#d94000", behavior: behaviors.LIQUID, category: "improved_molten", state: "liquid",
    density: 17300, temp: 1150, tempLow: 1064, stateLow: "gold"
};

elements.molten_platinum = {
    color: "#ffb833", behavior: behaviors.LIQUID, category: "improved_molten", state: "liquid",
    density: 19700, temp: 1850, tempLow: 1768, stateLow: "platinum"
};

elements.molten_zinc = {
    color: "#555b63", behavior: behaviors.LIQUID, category: "improved_molten", state: "liquid",
    density: 6570, temp: 450, tempLow: 419, stateLow: "zinc"
};

elements.molten_aluminum = {
    color: "#882222", behavior: behaviors.LIQUID, category: "improved_molten", state: "liquid",
    density: 2375, temp: 750, tempLow: 660, stateLow: "aluminum"
};

elements.molten_tin = {
    color: "#a2a4a6", behavior: behaviors.LIQUID, category: "improved_molten", state: "liquid",
    density: 6990, temp: 250, tempLow: 231, stateLow: "tin"
};

elements.molten_lead = {
    color: "#5a5e64", behavior: behaviors.LIQUID, category: "improved_molten", state: "liquid",
    density: 10660, temp: 350, tempLow: 327, stateLow: "lead"
};

elements.molten_lithium = {
    color: "#99a2a8", behavior: behaviors.LIQUID, category: "improved_molten", state: "liquid",
    density: 512, temp: 200, tempLow: 180, stateLow: "lithium"
};

elements.molten_maraging_steel = {
    color: "#ff4400", behavior: behaviors.LIQUID, category: "improved_molten", state: "liquid",
    density: 7400, temp: 1500, tempLow: 1413, stateLow: "maraging_steel"
};

elements.molten_metallic_glass = {
    color: "#ee3300", behavior: behaviors.LIQUID, category: "improved_molten", state: "liquid",
    density: 5800, temp: 1200, tempLow: 1100, stateLow: "bulk_metallic_glass"
};

elements.molten_cobalt_chromium = {
    color: "#ff5500", behavior: behaviors.LIQUID, category: "improved_molten", state: "liquid",
    density: 7800, temp: 1500, tempLow: 1400, stateLow: "cobalt_chromium"
};

elements.molten_ferrochromium = {
    color: "#ff7700", behavior: behaviors.LIQUID, category: "improved_molten", state: "liquid",
    density: 6500, temp: 1750, tempLow: 1650, stateLow: "ferrochromium"
};

elements.molten_inconel = {
    color: "#ee4400", behavior: behaviors.LIQUID, category: "improved_molten", state: "liquid",
    density: 7600, temp: 1450, tempLow: 1336, stateLow: "inconel_718"
};

elements.molten_titanium_g5 = {
    color: "#ff8000", behavior: behaviors.LIQUID, category: "improved_molten", state: "liquid",
    density: 4050, temp: 1750, tempLow: 1660, stateLow: "titanium_grade_5"
};

elements.molten_hea = {
    color: "#ff4a00", behavior: behaviors.LIQUID, category: "improved_molten", state: "liquid",
    density: 7200, temp: 1450, tempLow: 1350, stateLow: "high_entropy_alloy"
};

elements.molten_aero_aluminum = {
    color: "#772222", behavior: behaviors.LIQUID, category: "improved_molten", state: "liquid",
    density: 2500, temp: 750, tempLow: 635, stateLow: "aerospace_aluminum"
};

