/*
Space Game
1. Create a game script to greet space cadet
2. intro before space battle (details /story)
3. set up the battle of aliens(6 aliens)
4. let the player if they win or not and ask if they want to continue
5. if player win alert Winner 
6.if player retreats GAVE OVER
7.Option to start new game
*/

/*
install NPM Steps
1. First Type clear in Your Terminal or Command Prompt & Hit Enter on Your Keyboard To Clear the Screen
2. Now Type npm init -y in Your Terminal or Command Prompt & Hit Enter on Your Keyboard
3. Now Type npm install prompt-sync in Your Terminal or Command Prompt & Hit Enter on Your Keyboard
*/

////////////////////////////
// INTRO SETUP
////////////////////////////
const prompt = require('prompt-sync')();
console.log(
	`\n\n*************************\nThe year is 3789. \nHumanity is on the brink of destruction.\nYou are the last survivor of the United Human Space Naval Fleet.\nThe enemy is closing in...\n\n*************************`);
let shipName = prompt("What is your ship's name? ");
// let shipName = 'A DEFAULT NAME';

////////////////////////////
// VARIABLES | CLASSES | FUNCTION
////////////////////////////

// ALIEN CREATION
class Alien {
	constructor(name, hull, firepower, accuracy) {
		this.name = name;
		this.hull = hull || Math.floor(Math.random() * (6 - 3 + 1) + 3);
		this.firepower = firepower || Math.floor(Math.random() * (4 - 2 + 1) + 2);
		this.accuracy = accuracy || Number((Math.random() * (0.8 - 0.6 + 0) + 0.6).toFixed(1));
	}
	attack(target) {
		console.log(`\nThe enemy is attacking you!`);
		if (this.accuracy > Math.random()) { // checking to hit
			yourShip.hull = yourShip.hull - this.firepower; // confirm hit
			console.log(`The aliens have hit you ${yourShip.name} and you have ${yourShip.hull} points left.`);
			if (yourShip.hull <= 0) { // checking for a kill
				console.log(`Your ship has been destroyed!`);
				console.log("GAME OVER")
			}
		} else {
			console.log('They missed...');
			respondToFight = prompt('Do you want to continue the fight Y or N? ');
		}
	}
}
// YOUR SHIP
const yourShip = {
	name: shipName,
	hull: 20,
	firepower: 5,
	accuracy: 0.7,
	yourShipLeftoverHull: 0,
	attack: function (target) {
		// check if yourShip.accuracy > randomRoll
		// then
		// alienLeftoverHull = alien[i].hull - youShip.firepower
		// alien[i].hull = alienLeftoverHull
		// else log you missed
		// check if alien[i].hull is <= 0
		// then log that you won and
		// log options
		console.log(`\nyou are attacking: ${target.name}`);
		console.log(target);
		if (yourShip.accuracy > Math.random()) {
			target.hull = target.hull - yourShip.firepower;
			console.log(`You've hit ${target.name}`);
			console.log('The enemy has hp: ' + target.hull);
			if (target.hull <= 0) {
				console.log(`!! You killed ${target.name} !!`);
			} else {
				console.log(`The enemey has ${target.hull} points left!`);
				target.attack();
			}
		} else {
			console.log('You missed...');
			// activate the alien attack
			target.attack();
		}
	},
};

// CREATING ENEMY FLEET
const alienFleet = [];
for (let i = 1; i <= 6; i++) {
	alienFleet.push(new Alien('Alien ' + i));
}


////////////////////////////
// ENCOUNTER LOOP
////////////////////////////
// || start of loop ||
// log encounter stats
// ?? what enemy are you on check
// list of options
// calculate attack
// log result
// check victory
// - list of options
// - calculate attack
// - log result
// - check victory
// || end of loop ||
// check current amount of enemies left
// continue? if not game over
// || repeat loop ||
// check current amount of enemies left
// if 0 game over
////////////////////////////



////////////////////////
// START OF BATTLE
///////////////////////
console.log(`------ START OF BATTLE ------\n------ ${yourShip.name} ------`);
console.log(`Hull points: ${yourShip.hull} Firepower: ${yourShip.firepower} Accuracy: ${yourShip.accuracy}`);
console.log(`\n      V.S.      `);
console.log(`\n------ ${alienFleet[0].name} ------`);
console.log(`Hull points: ${alienFleet[0].hull} Firepower: ${alienFleet[0].firepower} Accuracy: ${alienFleet[0].accuracy}`);
console.log(`\n*************************\nThen enemy is in sight!`);

////////////////////////
// WHILE LOOP FOR ATTACKING
///////////////////////
let respondToFight = prompt('Do you fight Y or N? ')

let i = 0
while (i < alienFleet.length) {
	// let respondToFight = prompt('Do you fight Y or N? ');
	if (respondToFight.toUpperCase() === 'Y') {
		// check to see if the last alien is hulll = 0 or not
		if (alienFleet[i].hull > 0){
			yourShip.attack(alienFleet[i]);
			// what happens to resolve the attack?
			console.log(`Your ship has ${yourShip.hull} points left!`);
		} else if (alienFleet[i].name === 'Alien 6') {
			console.log('!! CONGRATULATIONS The game is over !!');
			break;
		} else if (alienFleet[i].hull <= 0){
			// going to the next alien
			i++;
			respondToFight = prompt('Do you fight Y or N? ')
		}
	} else if (respondToFight.toUpperCase() === 'N') {
	// > skipping a function for game over
	console.log('The game is over!');
	// game over()
	break;
	}
}

// --------- your turn -------------
// loop over for each in alienFleet
// if alien[0].hull >= 0
// next target and
// list of options
// return to kick you out for prompt
// yourShip.attack(alien[0]);
// if alien[0].hull <= 0 at this point all aliens are 0
// win

// -----------Alien turn - -------
// calculate a fight Your Ship to alien()
// check if yourShip.accuracy > randomRoll
// if higher then you hit
// alienLeftoverHul = alien[i].hull - youShip.firepower
// alien[i].hull = alienLeftoverHull
// else log you missed
// check if alien[i].hull is <= 0
// then log that you won and
// log options

// calculate a alien Ship to your ship()
// check if alien[i].accuracy > randomRoll
// if higher then they hit yourShip
// yourShipLeftoverHull = youShip.hull - alien[i].firepower
// youShip.hull = yourShipLeftoverHull
// else log they missed you

// CHOOSE YES
// if (respondToFight.toUpperCase() === "Y" ){
//     console.log (respondToFight)
//     // > skipping a loop for now
//     attack(alien[0]);
//     console.log(yourShip)
//     // --------- your turn -------------
//         // loop over for each in alienFleet
//             // if alien[0].hull >= 0
//                 // next target and
//                 // list of options
//                     // return to kick you out for prompt
//                 // yourShip.attack(alien[0]);
//             // if alien[0].hull <= 0 at this point all aliens are 0
//                 // win

//     // -----------Alien turn - -------
//         // calculate a fight Your Ship to alien()
//             // check if yourShip.accuracy > randomRoll
//                 // if higher then you hit
//                     // alienLeftoverHul = alien[i].hull - youShip.firepower
//                     // alien[i].hull = alienLeftoverHull
//                 // else log you missed
//             // check if alien[i].hull is <= 0
//                 // then log that you won and
//                 // log options

//     // calculate a alien Ship to your ship()
//         // check if alien[i].accuracy > randomRoll
//             // if higher then they hit yourShip
//                 // yourShipLeftoverHull = youShip.hull - alien[i].firepower
//                 // youShip.hull = yourShipLeftoverHull
//             // else log they missed you

// } else if (respondToFight.toUpperCase() === "N" ){
//     // > skipping a function for game over
//     console.log('The game is over!')
//     // game over()
//   }
// }