// Register Vibranium
elements.vibranium = {
    color: ["#7b00ff", "#9d00ff", "#bf40ff"], // Purple metallic glow
    behavior: behaviors.WALL, // Indestructible solid wall behavior
    category: "solids",
    state: "solid",
    density: 19000,
    hardness: 1, // Maximum blast resistance
    conduct: 1,  // High conductivity
    temp: 20,
    tick: function(pixel) {
        // Absorbs heat around it and stores/neutralizes it
        if (pixel.temp > 20) {
            pixel.temp = Math.max(20, pixel.temp - 5);
        }
    },
    properties: {
        glow: true
    }
};

// Register Vibranium Powder
elements.vibranium_powder = {
    color: ["#9d00ff", "#c566ff"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 8000,
    conduct: 0.8,
    reactions: {
        "fire": { elem1: "vibranium_powder", elem2: null, chance: 0.1 } // Kinetic energy absorption under heat
    }
};

