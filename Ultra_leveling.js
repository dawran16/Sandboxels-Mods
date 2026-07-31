// --- Clear All Categories Except "Shop" ---
if (window.elements) {
    for (var elem in elements) {
        if (elements[elem]) {
            elements[elem].category = undefined;
        }
    }
}

// --- Global Game & Shop Data ---
window.robotGameData = {
    coins: 0,
    shopOpen: false,
    upgrades: {
        damage: 0,        // Attack Range
        health: 0,        // Extra Max HP
        speed: 1,         // Step Distance
        lifesteal: 0,     // Healing per kill
        doubleAttack: 0,  // Chance for extra discharge
        coinMultiplier: 1 // Coin gain multiplier
    }
};

window.robotWaveData = {
    currentWave: 1,
    maxWaves: 1000
};

// Player Mobile Directional State
window.playerRobotDir = { x: 0, y: 0 };

// Texture Generator for 1000 Robot Stages
function getRobotTexture(level) {
    var size = 4 + Math.min(Math.floor(level / 10), 60);
    var canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    var ctx = canvas.getContext('2d');

    var primaryHue = (level * 1.8) % 360;
    var secondaryHue = (level * 5 + 120) % 360;
    var color1 = `hsl(${primaryHue}, 90%, 55%)`;
    var color2 = `hsl(${secondaryHue}, 80%, 40%)`;

    if (level % 20 === 0) {
        // Boss Level Marker Texture
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(0, 0, size, size);
        ctx.fillStyle = "#000000";
        ctx.fillRect(1, 1, size - 2, size - 2);
    } else {
        ctx.fillStyle = color1;
        ctx.fillRect(0, 0, size, size);
        ctx.fillStyle = color2;
        for (var x = 0; x < size; x += 2) {
            ctx.fillRect(x, 0, 1, size);
        }
    }

    return canvas;
}

// Enemy Spawner
function spawnWaveEnemies(playerX, playerY, wave) {
    var enemyTypes = ["fire", "plasma", "acid", "laser", "slug", "termite", "zombie"];
    var count = 5 + Math.floor(wave * 0.5);
    
    for (var i = 0; i < count; i++) {
        var spawnX = Math.min(Math.max(playerX + (Math.floor(Math.random() * 30) - 15), 2), width - 3);
        var spawnY = Math.min(Math.max(playerY + (Math.floor(Math.random() * 30) - 15), 2), height - 3);
        
        if (isEmpty(spawnX, spawnY)) {
            var selectedEnemy = enemyTypes[Math.floor(Math.random() * enemyTypes.length)];
            createPixel(selectedEnemy, spawnX, spawnY);
        }
    }
}

// --- Player Robot Element (Shop Category Only) ---
elements.player_robot = {
    color: "#4a90e2",
    behavior: behaviors.SOLID,
    category: "Shop",
    state: "solid",
    density: 2000,
    conduct: 1,
    properties: {
        level: 1,
        kills: 0,
        hp: 100
    },
    tick: function(pixel) {
        if (!pixel.level) pixel.level = 1;
        
        var baseHp = 100 + (pixel.level * 25);
        pixel.maxHp = baseHp + (window.robotGameData.upgrades.health * 50);
        if (!pixel.hp) pixel.hp = pixel.maxHp;

        if (pixel.ticks === undefined) pixel.ticks = 0;
        pixel.ticks++;

        // Enemy waves
        if (pixel.ticks % 120 === 0 && window.robotWaveData.currentWave <= 1000) {
            spawnWaveEnemies(pixel.x, pixel.y, window.robotWaveData.currentWave);
        }

        var reach = 3 + window.robotGameData.upgrades.damage;

        // Combat Detection
        for (var dx = -reach; dx <= reach; dx++) {
            for (var dy = -reach; dy <= reach; dy++) {
                if (dx === 0 && dy === 0) continue;
                var nx = pixel.x + dx;
                var ny = pixel.y + dy;
                
                if (isEmpty(nx, ny)) continue;
                var neighbor = pixelMap[nx][ny];

                if (neighbor && neighbor.element !== pixel.element && neighbor.element !== "player_robot") {
                    deletePixel(nx, ny);
                    pixel.kills++;

                    // Lifesteal Improvement
                    if (window.robotGameData.upgrades.lifesteal > 0) {
                        pixel.hp = Math.min(pixel.maxHp, pixel.hp + (window.robotGameData.upgrades.lifesteal * 10));
                    }

                    // Coins
                    window.robotGameData.coins += 10 * window.robotGameData.upgrades.coinMultiplier;

                    // Level Up Logic (1000 Levels)
                    var requiredKills = pixel.level * 2;
                    if (pixel.kills >= requiredKills && pixel.level < 1000) {
                        pixel.level++;
                        pixel.kills = 0;
                        pixel.hp = pixel.maxHp;

                        window.robotWaveData.currentWave = pixel.level;
                        pixel.color_cache = getRobotTexture(pixel.level);
                        pixel.color = "hsl(" + ((pixel.level * 1.8) % 360) + ", 100%, 50%)";

                        // Boss Every 20 Levels
                        if (pixel.level % 20 === 0) {
                            var bossX = Math.min(Math.max(pixel.x + 6, 2), width - 3);
                            createPixel("boss_robot", bossX, pixel.y);
                            alert(`LEVEL ${pixel.level} REACHED! A BOSS HAS SPAWNED!`);
                        }
                    }
                    
                    if (isEmpty(nx, ny)) {
                        createPixel("electric", nx, ny);
                    }
                    return;
                }
            }
        }

        // Movement with Speed Improvement
        var step = window.robotGameData.upgrades.speed;
        var moveX = window.playerRobotDir.x !== 0 ? window.playerRobotDir.x * step : (Math.floor(Math.random() * 3) - 1);
        var moveY = window.playerRobotDir.y !== 0 ? window.playerRobotDir.y * step : (Math.floor(Math.random() * 3) - 1);

        var targetX = Math.min(Math.max(pixel.x + moveX, 1), width - 2);
        var targetY = Math.min(Math.max(pixel.y + moveY, 1), height - 2);

        if (isEmpty(targetX, targetY)) {
            movePixel(pixel, targetX, targetY);
        }
    }
};

// --- Boss Element (Spawns Every 20 Levels) ---
elements.boss_robot = {
    color: "#ff0000",
    behavior: behaviors.SOLID,
    category: "Shop",
    state: "solid",
    density: 9000,
    conduct: 1,
    properties: {
        hp: 5000,
        isBoss: true
    },
    tick: function(pixel) {
        if (!pixel.color_cache) {
            pixel.color_cache = getRobotTexture(20);
        }

        for (var dx = -5; dx <= 5; dx++) {
            for (var dy = -5; dy <= 5; dy++) {
                var nx = pixel.x + dx;
                var ny = pixel.y + dy;
                if (!isEmpty(nx, ny)) {
                    var target = pixelMap[nx][ny];
                    if (target && target.element === "player_robot") {
                        if (Math.random() < 0.35) {
                            deletePixel(nx, ny);
                        }
                    }
                }
            }
        }
    }
};

// --- Mobile On-Screen Controls ---
function createMobileUI() {
    if (document.getElementById("robot-mobile-ui")) return;

    var container = document.createElement("div");
    container.id = "robot-mobile-ui";
    container.style.position = "fixed";
    container.style.bottom = "20px";
    container.style.left = "20px";
    container.style.zIndex = "99999";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.userSelect = "none";

    var btnStyle = "width: 50px; height: 50px; background: rgba(0,0,0,0.7); color: white; border: 2px solid #4a90e2; border-radius: 8px; font-weight: bold; font-size: 18px; touch-action: manipulation;";

    container.innerHTML = `
        <button id="btn-up" style="${btnStyle} margin-bottom: 5px;">▲</button>
        <div style="display: flex; gap: 5px; margin-bottom: 5px;">
            <button id="btn-left" style="${btnStyle}">◄</button>
            <button id="btn-down" style="${btnStyle}">▼</button>
            <button id="btn-right" style="${btnStyle}">►</button>
        </div>
        <button id="btn-toggle-shop" style="width: 160px; height: 40px; background: #4a90e2; color: white; border: none; border-radius: 6px; font-weight: bold; margin-top: 5px; touch-action: manipulation;">🛒 Open Shop</button>
    `;

    document.body.appendChild(container);

    function setDir(x, y) { window.playerRobotDir.x = x; window.playerRobotDir.y = y; }
    function resetDir() { window.playerRobotDir.x = 0; window.playerRobotDir.y = 0; }

    var bindBtn = function(id, x, y) {
        var btn = document.getElementById(id);
        btn.ontouchstart = function(e) { e.preventDefault(); setDir(x, y); };
        btn.ontouchend = function(e) { e.preventDefault(); resetDir(); };
        btn.onmousedown = function() { setDir(x, y); };
        btn.onmouseup = function() { resetDir(); };
    };

    bindBtn("btn-up", 0, -1);
    bindBtn("btn-down", 0, 1);
    bindBtn("btn-left", -1, 0);
    bindBtn("btn-right", 1, 0);

    document.getElementById("btn-toggle-shop").onclick = function() {
        var ui = document.getElementById("robot-shop-ui");
        if (ui) {
            ui.style.display = (ui.style.display === "none") ? "block" : "none";
        }
    };
}

// --- Expanded Shop UI with New Improvements ---
function createShopUI() {
    if (document.getElementById("robot-shop-ui")) return;

    var shop = document.createElement("div");
    shop.id = "robot-shop-ui";
    shop.style.position = "fixed";
    shop.style.top = "10px";
    shop.style.right = "10px";
    shop.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    shop.style.color = "#fff";
    shop.style.padding = "15px";
    shop.style.borderRadius = "8px";
    shop.style.fontFamily = "sans-serif";
    shop.style.zIndex = "99999";
    shop.style.border = "2px solid #4a90e2";
    shop.style.maxHeight = "80vh";
    shop.style.overflowY = "auto";
    shop.style.maxWidth = "240px";

    shop.innerHTML = `
        <h3 style="margin: 0 0 10px 0; color: #4a90e2;">Improvements Shop</h3>
        <p><strong>Coins:</strong> <span id="shop-coins">0</span></p>
        <button id="buy-range" style="margin-bottom: 5px; width: 100%; padding: 8px;">+1 Range (100 C)</button>
        <button id="buy-hp" style="margin-bottom: 5px; width: 100%; padding: 8px;">+50 HP (150 C)</button>
        <button id="buy-speed" style="margin-bottom: 5px; width: 100%; padding: 8px;">+1 Speed (200 C)</button>
        <button id="buy-lifesteal" style="margin-bottom: 5px; width: 100%; padding: 8px;">+1 Lifesteal (250 C)</button>
        <button id="buy-coins" style="width: 100%; padding: 8px;">2x Coins (300 C)</button>
    `;

    document.body.appendChild(shop);

    document.getElementById("buy-range").onclick = function() {
        if (window.robotGameData.coins >= 100) {
            window.robotGameData.coins -= 100;
            window.robotGameData.upgrades.damage += 1;
            updateShopUI();
        } else { alert("Not enough coins!"); }
    };

    document.getElementById("buy-hp").onclick = function() {
        if (window.robotGameData.coins >= 150) {
            window.robotGameData.coins -= 150;
            window.robotGameData.upgrades.health += 1;
            updateShopUI();
        } else { alert("Not enough coins!"); }
    };

    document.getElementById("buy-speed").onclick = function() {
        if (window.robotGameData.coins >= 200) {
            window.robotGameData.coins -= 200;
            window.robotGameData.upgrades.speed += 1;
            updateShopUI();
        } else { alert("Not enough coins!"); }
    };

    document.getElementById("buy-lifesteal").onclick = function() {
        if (window.robotGameData.coins >= 250) {
            window.robotGameData.coins -= 250;
            window.robotGameData.upgrades.lifesteal += 1;
            updateShopUI();
        } else { alert("Not enough coins!"); }
    };

    document.getElementById("buy-coins").onclick = function() {
        if (window.robotGameData.coins >= 300) {
            window.robotGameData.coins -= 300;
            window.robotGameData.upgrades.coinMultiplier *= 2;
            updateShopUI();
        } else { alert("Not enough coins!"); }
    };

    document.addEventListener("keydown", function(e) {
        if (e.key.toLowerCase() === "s") {
            var ui = document.getElementById("robot-shop-ui");
            if (ui) {
                ui.style.display = (ui.style.display === "none") ? "block" : "none";
            }
        }
    });
}

function updateShopUI() {
    var coinsEl = document.getElementById("shop-coins");
    if (coinsEl) {
        coinsEl.innerText = window.robotGameData.coins;
    }
}

// Initialize Elements & UI
createShopUI();
createMobileUI();
setInterval(updateShopUI, 200);


