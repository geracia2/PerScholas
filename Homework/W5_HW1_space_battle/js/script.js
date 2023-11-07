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

const prompt = require("prompt-sync")();
console.log(`\n\n*************************\nThe year is 3789. \nHumanity is on the brink of destruction.\nYou are the last survivor of the United Human Space Naval Fleet.\nThe enemy is closing in...\n\n*************************`);
// let commanderName = prompt(`What is your name? `); 
let commanderName = "a commander name"; 
// console.log(`\n\nHello commander ${commanderName}!\n\n`);
// let shipName = prompt("What is your ship's name? ");
let shipName = 'SHIP NAME';
console.clear; // clear after intro?
// console.log(`\n\n*************************\n\nThe enemy is already here, the ${shipName} is under attack!! \nHumanity depends on you commander!!\n`);

////////////////////////////
// VARIABLES | CLASSES | FUNCTION
////////////////////////////

// ALIEN CREATION
class Alien{
constructor(name,hull,firepower,accuracy){
    this.name=name;
    this.hull=hull || Math.floor(Math.random() * (6 - 3+1) + 3);
    this.firepower=firepower ||Math.floor(Math.random() * (4 - 2+1) + 2);
    this.accuracy=accuracy || Number((Math.random() * (0.8 - 0.6+0) + 0.6).toFixed(1));
    }
    attack: function () {
        console.log(`\nThe enemy is attacking you! ${target.name}`);
        if (true) { // place this back in later this.accuracy > Math.random()
            target.hull = target.hull - yourShip.firepower;
            console.log(`Congrats! You've hit ${target.name}`)
            console.log(target)
            if (target.hull <= 0) {
                console.log(`You killed ${target.name}`)
            } else {
                console.log(`The enemey has ${target.hull} points left!`);
                target.attack()
            }
        } else {
            console.log("You missed...");
            target.attack()
        }
}

// YOUR SHIP
const yourShip =  {
  name: shipName,
  hull : 20,
  firepower : 5,
  accuracy : .7,
  yourShipLeftoverHull : 0,
  attack: function (target) {
    console.log(`\nyou are attacking: ${target.name}`);
    console.log(target);
    if (true) { // place this back in later yourShip.accuracy > Math.random()
        target.hull = target.hull - yourShip.firepower;
        console.log(`Congrats! You've hit ${target.name}`)
        console.log(target)
        if (target.hull <= 0) {
            console.log(`You killed ${target.name}`)
        } else {
            console.log(`The enemey has ${target.hull} points left!`);
            target.attack()
        }
    } else {
        console.log("You missed...");
        target.attack()
    }
    
    // check if yourShip.accuracy > randomRoll
        // then
            // alienLeftoverHull = alien[i].hull - youShip.firepower
            // alien[i].hull = alienLeftoverHull
        // else log you missed
    // check if alien[i].hull is <= 0
        // then log that you won and
        // log options
  }
  // taking damage()
}

// CREATING ENEMY FLEET
const alienFleet=[];
for(let i=1;i<=6;i++){
  alienFleet.push(new Alien("Alien"+i))
}



// checking if we win()


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


// ENCOUNTER STATS - inside our while loop
// function stats(target) {
//     console.log(`------ START OF BATTLE ------\n\n------ ${yourShip.name} ------`);
//     console.log(yourShip)
//     console.log(`\n|||||||  VS |||||||`)
//     console.log(`\n------ ${alienFleet[0].name} ------`);
//     console.log(alienFleet[0])
//     console.log(`\n*************************\nThen enemy is in sight!`);
// }

console.log(`------ START OF BATTLE ------\n\n------ ${yourShip.name} ------`);
console.log(yourShip)
console.log(`\n|||||||  VS |||||||`)
console.log(`\n------ ${alienFleet[0].name} ------`);
console.log(alienFleet[0])

console.log(`\n*************************\nThen enemy is in sight!`);

////////////////////////
// WHILE LOOP FOR ATTACKING
///////////////////////

// OPTIONS
let respondToFight = prompt('Do you fight Y or N? ');

if (respondToFight.toUpperCase() === "Y" ){
  // > skipping a loop for now
  yourShip.attack(alienFleet[0]);
  console.log(`Your ship has ${yourShip.hull} points left!`)

} else if (respondToFight.toUpperCase() === "N" ){
  // > skipping a function for game over
  console.log('The game is over!')
  // game over()
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
