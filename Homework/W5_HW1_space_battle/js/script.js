////////////////////////////
// INTRO SETUP
////////////////////////////

const prompt = require("prompt-sync")();
console.log(
  `\n\n*************************\nThe year is 3789. \nHumanity is on the brink of destruction.\nYou are the last survivor of the United Human Space Naval Fleet.\nThe enemy is closing in...\n\n*************************`
);
// let commanderName = prompt(`What is your name? `);
let commanderName = "a commander name";
// console.log(`\n\nHello commander ${commanderName}!\n\n`);
// let shipName = prompt("What is your ship's name? ");
let shipName = "SHIP NAME";
console.clear; // clear after intro?
// console.log(`\n\n*************************\n\nThe enemy is already here, the ${shipName} is under attack!! \nHumanity depends on you commander!!\n`);

////////////////////////////
// VARIABLES | CLASSES | FUNCTION
////////////////////////////

// ALIEN CREATION
class Alien {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull || Math.floor(Math.random() * (6 - 3 + 1) + 3);
    this.firepower = firepower || Math.floor(Math.random() * (4 - 2 + 1) + 2);
    this.accuracy =
      accuracy || Number((Math.random() * (0.8 - 0.6 + 0) + 0.6).toFixed(1));
  }
  attack(target) {
    console.log(`\nThe enemy is attacking you! ${yourShip.name}}`);
    if (this.accuracy > Math.random()) {
      // checking to hit
      this.hull = this.hull - yourShip.firepower; // confirm hit
      console.log(`The aliens have hit you ${yourShip.name}`);
      if (this.hull <= 0) {
        // checking for a kill
        console.log(`You have been killed ${yourShip.name}`);
        // console.log("GAME OVER")
        // break;
        // call a function that ends the game and prompts the user to replay and then restarts the looop if they say yes
        // end the game
      } else {
        console.log(`You have  ${yourShip.hull} points left!`);
        this.attack();
      }
    } else {
      console.log("They missed...");
      // battleLoop();
      // give us stat
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
    console.log(`\nyou are attacking: ${target.name}`);
    console.log(target);
    if (yourShip.accuracy > Math.random()) {
      // place this back in later yourShip.accuracy > Math.random()
      target.hull = target.hull - yourShip.firepower;
      console.log(`Congrats! You've hit ${target.name}`);
      console.log(target);
      if (target.hull <= 0) {
        console.log(`You killed ${target.name}`);
      } else {
        console.log(`The enemey has ${target.hull} points left!`);
        target.attack();
      }
    } else {
      console.log("You missed...");
      // activate the alien attack
      // target.attack();
    }
  },
};

// CREATING ENEMY FLEET
const alienFleet = [];
for (let i = 1; i <= 6; i++) {
  alienFleet.push(new Alien("Alien" + i));
}

// checking if we win()

////////////////////////////
// ENCOUNTER LOOP
////////////////////////////

console.log(`------ START OF BATTLE ------\n\n------ ${yourShip.name} ------`);
console.log(yourShip);
console.log(`\n|||||||  VS |||||||`);
console.log(`\n------ ${alienFleet[0].name} ------`);
console.log(alienFleet[0]);

console.log(`\n*************************\nThen enemy is in sight!`);

////////////////////////
// WHILE LOOP FOR ATTACKING
///////////////////////
function battleLoop() {
  let i = 0;
  while (i < alienFleet.length) {
    let respondToFight = prompt("Do you fight Y or N? ");
    if (respondToFight.toUpperCase() === "Y") {
      // if (yourShip.attack()){} else if (alienship.attack()){}
      yourShip.attack(alienFleet[i]);
      console.log(`Your ship has ${yourShip.hull} points left!`);
      i++;
    } else if (respondToFight.toUpperCase() === "N") {
      // > skipping a function for game over
      console.log("The game is over!");
      // game over()
      break;
    }
  }
}
battleLoop();


