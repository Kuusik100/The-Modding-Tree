addLayer("p", {
    name: "j", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "j", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ffffff",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "j points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() {
        let mult = new Decimal(1)
        if (hasUpgrade('p', 13)) mult = mult.times(upgradeEffect('p', 13))
        return mult
    },
    
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(4)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "j", description: "J: reset for j points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    
    upgrades: {
        11: {
            title: "egg enhancement",
            description: "multiply your egg production by ×2.69",
            
            cost: new Decimal(2),

        },
        12: {
            title: "egged eggs",
            description: "multiplies egg production by +j points ×.69",
            
            cost: new Decimal(7),
            effect() {
                return player[this.layer].points.add(1).pow(0.69)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },

        },
        13: {
            title: "egged j's",
            description: "multiplies j point production by + eggs ^.15",
            
            cost: new Decimal(34.50),
            effect() {
                return player.points.add(1).pow(0.15)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },

        },
        14: {
            title: "egg inc's premium eggs",
            description: "power your j point production by ^1.10",
            
            cost: new Decimal(226),
            effect() {
                return player.points.pow(1.10)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },

        },
        21: {
            title: "the holy grail of egg",
            description: "multiply your egg production by ×11.11111111",
            
            cost: new Decimal(1000),
            
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"× boost by holy grail" },

        },




    },
})

addLayer("g", {
    name: "generators", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "g", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#b9b9b9",
    requires: new Decimal(0), // Can be a function that takes requirement increases into account
    resource: "generators", // Name of prestige currency
    baseResource: "j points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() {
        let mult = new Decimal(1)
        if (hasUpgrade('p', 13)) mult = mult.times(upgradeEffect('p', 13))
        return mult
    },
    
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "g", description: "G: reset for generators", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},

    upgrades: {
        11: {
            title: "generate more egg",
            description: "multiply your egg production by 69.420",
            
            cost: new Decimal(1),

        

        },
        12: {
            title: "test",
            description: "test",
            
            cost: new Decimal(9999000000000000000000009),

        

        },


    },
})
