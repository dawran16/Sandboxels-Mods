// Sandboxels Astronomy & Cosmology Mod
// Adds a brand-new "Astronomy" category with space phenomena!

// 1. Define the custom category
elements.astronomy = {
    color: "#a463fa",
    category: "Astronomy",
    hidden: true // Base item so the category registers cleanly
};

// 2. Define the space elements
elements.star = {
    color: ["#ffee55", "#ffaa33", "#ffffff"],
    behavior: behaviors.WALL,
    category: "Astronomy",
    state: "gas",
    density: 10000,
    temp: 5500,
    tempHigh: 15000,
    stateHigh: "supernova",
    burn: 100,
    burnTime: 2000,
    reaction: {
        "hydrogen": { elem1: "star", elem2: "helium", chance: 0.1 }
    }
};

elements.stardust = {
    color: ["#d3b8e5", "#bfa4d8", "#9c77b8"],
    behavior: behaviors.POWDER,
    category: "Astronomy",
    state: "solid",
    density: 50,
    temp: -270,
    tempHigh: 2000,
    stateHigh: "star"
};

elements.black_hole = {
    color: ["#0a0a0a", "#1a002b"],
    behavior: [
        ["XX", "XX", "XX"],
        ["XX", "XX", "XX"],
        ["XX", "XX", "XX"]
    ],
    category: "Astronomy",
    state: "gas",
    density: 999999,
    temp: -273.15,
    tick: function(pixel) {
        // Dev Note: Pull in and devour neighboring pixels
        let neighbors = [
            [-1, -1], [0, -1], [1, -1],
            [-1,  0],          [1,  0],
            [-1,  1], [0,  1], [1,  1]
        ];

        for (let offset of neighbors) {
            let cx = pixel.x + offset[0];
            let cy = pixel.y + offset[1];

            if (isEmpty(cx, cy, true)) continue;

            let target = pixelMap[cx][cy];
            if (target && target.element !== "black_hole") {
                // SUCK IT IN AND DESTROY IT
                deletePixel(cx, cy);
                // Slightly heat up from accretion
                pixel.temp += 0.5;
            }
        }
    }
};

elements.supernova = {
    color: ["#ffffff", "#00d4ff", "#ff0066"],
    behavior: [
        ["XX", "EX", "XX"],
        ["EX", "XX", "EX"],
        ["XX", "EX", "XX"]
    ],
    category: "Astronomy",
    state: "gas",
    density: 10,
    temp: 50000,
    tick: function(pixel) {
        // Explode into cosmic dust and heat
        if (Math.random() < 0.15) {
            changePixel(pixel, "stardust");
        }
    }
};

elements.meteor = {
    color: ["#5c4738", "#3d2e24", "#8c6f58"],
    behavior: behaviors.POWDER,
    category: "Astronomy",
    state: "solid",
    density: 3000,
    temp: 1200,
    reaction: {
        "ground": { elem1: "fire", elem2: "impact_crater", chance: 0.8 },
        "sand": { elem1: "glass", elem2: "glass", chance: 0.5 }
    }
};

