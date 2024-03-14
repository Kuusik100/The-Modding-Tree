let modInfo = {
	name: "the egg tree ver. 1.01 a",
	id: "mymod",
	author: "nobody",
	pointsName: "eggs",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 69,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "1.01 a",
	name: "12 months no updates",
}

let changelog = `<h1>chanegle log:</h1><br>
	<h3>1.00 a</h3><br>
		- Added j.<br>
		- Added more egg.`

let winText = `wowowooowowwowo You beat ! ! ! gam,eeeee`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)
	

	let gain = new Decimal(1)
	if (hasUpgrade('p', 11)) gain = gain.times(2.69)
	if (hasUpgrade('p', 12)) gain = gain.times(upgradeEffect('p', 12))
	if (hasUpgrade('p', 14)) gain = gain.times(8)
	if (hasUpgrade('p', 21)) gain = gain.times(11.111111)
	if (hasUpgrade('g', 11)) gain = gain.times(69.420)

	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e69420000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(1800) // Default is 30 which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}