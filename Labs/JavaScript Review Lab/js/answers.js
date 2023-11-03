////////////////////////////////
// Easy Going
// Write a for loop that will log the numbers 1 through 20.
////////////////////////////////
for (let i = 1; i <= 20; i++) {
    console.log(i)
}
////////////////////////////////
// Get Even
// Write a for loop that will log only the even numbers in 0 through 200.
// Hint: Think about the increment expression.
////////////////////////////////
for(let i = 0; i<= 200; i++){
  if(i%2 == 0){
    console.log(i)
  }
}
////////////////////////////////
// Fizz Buzz
// This is a classic problem that you should get really comfortable solving. 
// If you've solved it before, try to make it more elegant and short.
// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
////////////////////////////////

const fizzbuzz = [];

for (let x = 1; x <= 100; x++) {
  x % 3 === 0 ? (x % 5 === 0 ? fizzbuzz.push("FizzBuzz") : fizzbuzz.push("Fizz")) : (x % 5 == 0 ? fizzbuzz.push("Buzz") : fizzbuzz.push(x));
}

// for (let x = 1; x <= 100; x++) {
//   if ((x % 3 === 0) && (x % 5 === 0)) {
//     fizzbuzz.push("fizzbuzz");
//   } else if (x % 3 === 0) {
//     fizzbuzz.push("fizz");
//   } else if (x % 5 === 0) {
//     fizzbuzz.push("buzz");
//   } else {
//     fizzbuzz.push(x);
//   }
// }

console.log(fizzbuzz);


////////////////////////////////
// Wild Wild Life
// Use the following arrays to answer the questions
// 1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// 2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// 3. Give D'Art a second hometown by adding "Hawkins"
// 4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
// write code below

console.log("Plantee's age:", plantee[2]+= 1);
console.log("Wolfy's hometown:", wolfy[3] = "Gotham City");
console.log("D'Art's second hometown:", dart.push("Hawkins"));
console.log("Wolfy's new name:", wolfy[0] = "Gameboy");


////////////////////////////////
// Yell at the Ninja Turtles
// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase()on each of them and print out the result.
////////////////////////////////
const ninjas = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
// write code below
for (let ninja of ninjas) {
    console.log(ninja.toUpperCase());
}
////////////////////////////////
// Methods, Revisited
// + Console log: the index of Titanic
// Do the following and console.log the final results 
// (I have included some thought questions, you don't have to write out an answer for those marked as such):
// 1. use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
// 2. Use the method pop
// 3. push"Guardians of the Galaxy"
// 4. Reverse the array
// 5. Use the shift method
// 6. unshift- what does it return?
// 7. splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
// 8. slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
// 9. store the value of your slice in a variable, console.log it - Thought question: what is going on here?
// 10. console.log your final results
// 11. After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
// 12. Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// write code below
console.log(favMovies[8])
favMovies.sort() // mutates
favMovies.pop() // mutates
favMovies.push('Guardians of the Galaxy') // mutates
favMovies.reverse() // mutates
favMovies.shift() // mutates - first
favMovies.unshift() // mutates empty value in index 0
favMovies.splice(favMovies.findIndex(element => element === 'Django Unchained'), 0, 'Avatar') // mutates
const newFavMovies = favMovies.slice((((favMovies.length) / 2) - 1)) // returns a new array and saves it to a new variable
console.log(favMovies)
console.log(favMovies[18]) // if mutated we get the value of whatever we shifted into it's place
// 12. const wil not let you reassign an array but let will. 

////////////////////////////////
//   Where is Waldo
// Remove Eggbert (hint look at the slice/splice method(s))
// Change "Neff" to "No One"
// Access and console.log "Waldo"
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"],      // whereIsWaldo[0], whereIsWaldo[0][0], whereIsWaldo[0][1]
                        "Eggbert",             // whereIsWaldo[1]
                    ["Lucinda", "Jacc", "Neff", "Snoop"], // whereIsWaldo[1]
                    ["Petunia", ["Baked Goods", "Waldo"]]];// whereIsWaldo[2][1]
// write code below

whereIsWaldo.splice(1, 1); 
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo[2][1][1]); 



////////////////////////////////
//  Excited Kitten
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
////////////////////////////////
for(let i = 0; i<20; i++){
  console.log('Love me, pet me! HSSSSSS!')
  
  if(i%2 == 0){
    choice = Math.floor(Math.random()*3)
    switch(choice)
    {
      case 0:
        console.log('...human...why you taking pictures of me?...')

      case 1:
        console.log('...the catnip made me do it...')

      case 2:
        console.log('...why does the red dot always get away...')
    }
  } 
}

////////////////////////////////
//  Find the Median
// Find the median number in the following nums array, then console.log that number.
// hint if you check the length of the array / 2, you might get not get a whole number. In which case, look into Math.floor( // something )
////////////////////////////////
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
// write code below
// looking for the middle number of an array
// const array1 = [1, 30, 4, 21, 100000];
// 
// console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]

function median (array) {
  let newNums = array.sort((a, b) => a - b); // mutates the original array
  console.log(newNums)
  let medianIndex = Math.floor(newNums.length / 2); // find the middle number index
  return newNums[medianIndex - 1] // select and log the middle index
}


console.log(median(nums))

///////////////////////////////
//  Hungry for More?
// Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.
// Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!
////////////////////////////////
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
  // wite code below

  let kristynsShoe = kristynsCloset.shift()
  thomsCloset[2].push(kristynsShoe) 

  thomsOutfit = `Thom is wearing their ${thomsCloset[0][2]} to compliment their ${thomsCloset[1][0]} and wraps the whole outfit together with a fashionable ${thomsCloset[2][1]}`
  thomsOutfit2 = `Thom is wearing their ${kristynsCloset[3]} to compliment their ${thomsCloset[1][1]} and wraps the whole outfit together with a stylish pair of ${thomsCloset[2][2]}`
  thomsOutfit2 = `Thom is wearing their ${kristynsCloset[3]} to compliment their ${thomsCloset[1][2]} and wraps the whole outfit together with a stylish pair of ${thomsCloset[2][0]}`
  kristynsOutfit = `Kristyn is wearing their ${kristynsCloset[2]} that matches with the ripped ${thomsCloset[1][0]} and wraps the whole outfit with a comfortable ${kristynsCloset[3]}`
  kristynsOutfit2 = `Kristyn is wearing their ${kristynsCloset[4]} that matches with their flannel ${thomsCloset[0][1]} and wraps the whole outfit with a warm pair of ${thomsCloset[2][0]}`
  kristynsOutfit3 = `Kristyn is wearing their ${kristynsCloset[5]} that matches with their  ${thomsCloset[0][3]} and wraps the whole outfit with a stylish pair of ${thomsCloset[2][2]}`