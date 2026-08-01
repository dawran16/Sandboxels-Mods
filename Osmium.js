// Osmium Mod for Sandboxels

elements.osmium = {
    color: "#728a9c",
    behavior: behaviors.WALL,
    category: "solids",
    density: 22590, // Extremely high density
    conduct: 0.12,
    tempHigh: 3033, // High melting point
    stateHigh: "molten_osmium",
    state: "solid",
    hardness: 0.8,
};

elements.molten_osmium = {
    color: ["#9baebd", "#617280", "#c2d1dd"],
    behavior: behaviors.MOLTEN,
    category: "states",
    density: 20000,
    temp: 3100,
    tempLow: 3033,
    stateLow: "osmium",
    state: "liquid",
    hidden: true,
};

elements.osmium_ore = {
    color: ["#51575c", "#728a9c", "#3d4247"],
    behavior: behaviors.WALL,
    category: "land",
    density: 8000,
    tempHigh: 3033,
    stateHigh: "molten_osmium",
    state: "solid",
};

