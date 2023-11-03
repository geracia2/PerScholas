/*
1. How do we assign a value to a variable?
  =
 
2. How do we change the value of a variable?
  variable  = value
  
3. How do we assign an existing variable to a new variable?
  oldVariable = newVariable
  
4. Remind me, what are declare, assign, and define? 
declare is 'let var'
assign/initialize is '= value'
define is 'var = value'

5. What is pseudocoding and why should you do it?
  because coding is hard and we can work out the logic first without
  working on exact syntax, defining steps along the way too. 
  
6. What percentage of time should be spent thinking about how you're
going to solve a problem vs actually typing in code to solve it?
  80/20, thinking / solving

*/
/*
B. Strings
For all other questions that involve writing code, you can solve them via the

1.Create a variable called firstVariable
2.Assign it the value of the string "Hello World"
3.Change the value of this variable to some number
4.Store the value of firstVariable in a new variable called secondVariable
5.Change the value of secondVariable to any string.
6.What is the value of firstVariable?
7.Create a variable called yourName and set it equal to your name as a string.
Then, write an expression that takes the string 
"Hello, my name is " and the variable yourName so that it returns a new string
with them concatenated.
ex: Hello, my name is Jean Valjean


*/

// B. 
let firstVariable = 'Hello World'
firstVariable = 2
let secondVariable = firstVariable 
secondVariable = 'World, Hello'
console.log(firstVariable) // 2
let yourName = "Mena";
console.log("Hello, My name is " + yourName);


/*
C. Booleans
Using the provided variable definitions, 
replace the blanks so that all log statements 
print true in the console. 
Answers should be all be valid JS syntax 
and not weird things that don't make 
sense but happen to print true to the console
*/
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false == false)
console.log(e === 'Kevin');
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

/*
D. The farm
Declare a variable animal. Set it to be either "cow" or something else
Write code that will print out "mooooo" if it is equal to cow
Change your code so that if the variable animal is anything other 
than a cow, it will print "Hey! You're not a cow."
Commit
*/

let animal = "wallaby"
if(animal == "cow"){
    console.log('Mooooooooo!!! (from the soul)')
}
else{
    console.log("Hey! You're not a cow.")
}

/*
E. Driver's Ed
Make a variable that holds a person's age; be semantic
Write code that will print out "Here are the keys!", 
if the age is 16 years or older, or, if the age is younger 
than 16, a message should print "Sorry, you're too young."
*/
const age = "18";
if (age >= 16 && age !== null && age !== ""){
    console.log('Here are the keys!')
} if (age <= 16 && age !== null && age !== ""){
    console.log("Sorry, you're too young.")
} else {
    console.log('give me a valid ID kid.')
}

/*
II. Loops
Remember: USE let when you initialize your for loops!
This is GOOD: for(let i = 0; i < 100; i++)
This is NO GOOD: for(i = 0; i < 100; i++)

A. The basics
Write a loop that will print out all the numbers from 0 to 10, inclusive
Write a loop that will print out all the numbers from 10 up to and including 400
Write a loop that will print out every third number starting with 12 and going no higher than 4000
*/

for(let i = 0; i <= 10; i++ ){
    console.log(i);
}
for(let x = 10; x <= 400; x++){
    console.log(x);
}
for(let i = 12 ; i <= 4000; i+=3){
    console.log(i)
}

/*
B. Get even
Print out the numbers that are within the range of 1 - 100
Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
*/

for(let i = 0; i <= 100; i++ ){
    if (i % 2 == 0){
    console.log(`${i} <-- is an even number`);
    } else {
        console.log(i)
    }
}

/*
C. Give me Five
For the numbers 0 - 100, print out "I found a number. 
High five!" if the number is a multiple of five
*/

for(let i = 0; i <= 100; i++ ){
    if (i % 5 == 0){
    console.log(`I found a ${i}. High five`);
    } 
}

/*
Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
Example Output:
*/
for(let i = 0; i <= 100; i++ ){
  if (i % 5 == 0){
  console.log(`I found a ${i}. High five`);
  } 
  else if (i%3 == 0){
    console.log(`I found a ${i}. Three is a crowd`);
  }
  }

  /*
  For numbers divisible by both three and five, be sure your code prints both messages
  */
  for(let i = 0; i <= 100; i++ ){
    if (i % 3 == 0 && i % 5 == 0){
        console.log(`I found a ${i}. Three is a crowd, High five.`);
    } else if (i % 5 == 0){
        console.log(`I found a ${i}. High five`);
    } 
    else if (i%3 == 0){
        console.log(`I found a ${i}. Three is a crowd`);
    }
}

/*
D. Savings account
Write code that will save the sum of all the numbers 
between 1 - 10 to a variable called bank_account.
Check your work! Your bank_account should have $55 in it.

You got a bonus! Your pay is now doubled each week. 
Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it.
*/

// let bank_account = 0
// for (let i = 1; i <= 10; i++) {
//     bank_account += i;
// }
// console.log(bank_account)

let bank_account = 0
for (let i = 1; i <= 100; i++) {
    bank_account += (i * 2);
}
console.log(bank_account)

/*
III. Arrays & Control flow
A. Talk about it:
What are the things in an array called?
elements

Do Arrays guarantee those things will be in order?
yes, there is an index order

What real-life thing could you model with an array?
grocery lists.
*/

/*
B. Easy Does It
Create an array that contains three quotes and store it in a variable called quotes
*/

const quotes = ['life is hard', 'kids are a blessing', 'D&D is for everyone']

/*
C. Accessing elements
Given the following array const randomThings = [1, 10, "Hello", true]
How do you access the 1st element in the array?
Change the value of "Hello"to "World"
Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
*/

const randomThings = [1, 10, "Hello", true];
console.log(randomThings[0]); // first index
randomThings[2] = 'World';
console.log(randomThings);

/*
D. Change values
Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
What would you write to access the 3rd element of the array?
Change the value of "Github" to "Octocat"
Add a new element, "Cloud City" to the array
*/

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
ourClass[2];
ourClass[4] = 'Octocat'
ourClass.push('Cloud City');
console.log(ourClass);

/*
E. Mix It Up
Note: You don't really need .splice()for these. 
You could use it, but there are simpler array methods that are more appropriate.

Given the following array: const myArray = [5, 10, 500, 20]

-Add the string "Aegon"to the end of the array.
-Add another string of your choice to the end of the array.
-Remove the 5 from the beginning of the array.
-Add the string "Bob Marley"to the beginning of the array.
-Remove the string of your choice from the end of the array.
-Reverse this array using Array.prototype.reverse(). 
    Did you mutate the array? 
    yes
    What does mutate mean? 
    change the original array, destructive.
    Did the .reverse()method return anything?
    it mutates the original and returns the original
*/
const myArray = [5, 10, 500, 20];
myArray.push('Aegon');
myArray.push('Balder');
myArray.shift();
myArray.unshift('Bob Marley');
myArray.pop();
myArray.reverse();

/*
F. Biggie Smalls
Create a variable that contains an integer.

Write an if ... else statement that:

console.log()s "little number" if the number is entered is less than 100
console.log()s big number if the number is greater than or equal to 100.
*/

laNumber = 9;

if (laNumber < 100){
  console.log("little number")
}
else if (laNumber >= 100){
  console.log('big number')
}

/*
G. Monkey in the Middle
Write an if ... else if ... else statement:

console.log()little number if the number entered is less than 5.
If the number entered is more than 10, log big number.
Otherwise, log "monkey".
*/
const number = 11
if (number < 5) {
    console.log('little number')
} else if (number > 10){
    console.log('big number')
} else {
    console.log('monkey')
}

/*
H. What's in Your Closet?
Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

*/
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",      // [5]
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [                               //thomsCloset[0]
      // These are Thom's shirts
      "grey button-up",             //thomsCloset[0][0]
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[                             //thomsCloset[1]
      // These are Thom's pants
      "grey jeans",                 //thomsCloset[1][0]
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

console.log(`Kristyn is rocking ${kristynsCloset[2]} today!`)
kristynsCloset.splice(6,0,"raybans")
// console.log(kristynsCloset)
kristynsCloset[5] = "stained knit hat"
// console.log(kristynsCloset)
console.log(thomsCloset[0][0])
console.log(thomsCloset[1][0])
console.log(thomsCloset[2][0])

console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]} and ${thomsCloset[2][0]}!`)

thomsCloset[1][2] = 'Footie Pajamasj'

/*
IV. Functions


A. printGreeting
Do you think you could write a function called printGreeting with a parameter 
name that returns a greeting with the argument interpolated into the greeting?
*/

function printGreeting(name) {
    return console.log(`Hi there ${name}`)
    
}
printGreeting("Lisa")

/*
B. printCool
Write a function printCool that accepts one parameter, name as an argument.
 The function should print the name and a message saying that that person is cool.
*/
function printCool(name) {
    console.log(`${name} is cool`)
}
printCool('kevin')
/* 
C. Write a function calculateCube that takes a single number 
and prints the volume of a cube made from that number.
*/
function calculateCube(number) {
    return number**3;
}
console.log(calculateCube(2))

/* 
D. Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. 
Test your function on every vowel'
and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
*/

function isVowel (character) {
  if(character == 'a' ||character == 'e'||character == 'i'||character == 'o' || character == 'u'){
    return true
  }
  else{
    return false
  }
}
console.log(isVowel('b'))


/* 
Write a function getTwoLengthsthat accepts two parameters (strings). 
The function should return an array of numbers where each number is the length of the corresponding string.
*/
function getTwoLengthsthat(string1, string2){
  let length1 = string1.length
  let length2 = string2.length
  return [length1, length2]  
}
console.log('get two lengths ' + getTwoLengthsthat('super long string', 'another string'))
/*
F. getMultipleLengths
Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. 
The function should return an array of numbers where each number is the length of the corresponding string.
*/
function getMultipleLengths(arr) {
    let arrCorStr=[];
    for (let i of arr){
        console.log(i.length)
        arrCorStr.push(i.length)
    }
    return arrCorStr;
}
console.log('get multiple lengths: ' + getMultipleLengths(['this was', 'in the', 'homework']))

/* 
Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, 
it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. 
Be sure to test it with larger values in each of the three locations.
*/
function maxOfThreeNumbers(x, y, z) {
if (x >= y && z) {
  return x;
} else if  (y >= x && z) {
  return y;
}
  else 
{
  return z;
}
}

console.log(maxOfThreeNumbers (5, 3 ,2));

/**
 H.  printLongestWord
*/

function printLongestWord(words) {
  let longestWord = words[0];
  for (let i = 1; i < words.length; i++) {
    const currentWord = words[i];
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  }
  return longestWord;
}
const result = printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]);
console.log(`longest word result: ${result}`);

/* 
Create an object called user.
Write in to the object the key-value pairs for name, email, age, and purchased. 
Set the value of purchased to an empty array []. Set the other values to whatever you would like.
*/

user = {
  name:'Jim',
  age:32,
  email:'sup@gmail.com',
  purchased: []
}


/*
B. Update the user
*/

user.email = 'newgmail@gmail.com';
user.age++
console.log(`should have newgmail and age 33 ${user.age} and ${user.email}`)



/*
C. 
Without changing the original user object, add a new key location
to the object, and give it a value or some-or-other location (a string).
*/
user.location = 'Savana'
console.log(`should have a new key location of Savana ${user.location}`)

/*
D. 
Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
Console.log just the "Merino jodhpurs" from the purchased array.
*/

user.purchased.push('carbohydrates')
user.purchased.push('peace of mind')
user.purchased.push('Merino jodhpurs')
console.log(`should be merino jodhpurs ${user.purchased[2]}`)


/*
 E. Object-within-object
*/
user.friend = {
  name: "Grace Hopper",
  age: 85,
  location: "a place",
  purchased: [] 
}
console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push('The One Ring');
user.friend.purchased.push('A latte');
console.log(user.friend.purchased[1]);

// F. Loops

//     Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.


for (let purchased of user.purchased) {
  console.log("User purchased: " + purchased);
}

//     Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.

for (let purchased of user.friend.purchased) {
  console.log("Friend purchased: " + purchased);
}



/* G. 
1.
Write a single function updateUser that takes no parameters. When the function is run, it should:
it should increment the user's age by 1
make the user's name uppercase
The function does not need a return statement, it will merely modify the user object.
*/

function updateUser(){
  user.age ++
  user.name = user.name.toUpperCase();
}
updateUser()
console.log(user.age, user.name)

/* 
2.
Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, 
make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called.
Call your oldAndLoud function with user as the argument.
*/

function oldAndLoud(person){
  person.age ++
  person.name = person.name.toUpperCase()
}
oldAndLoud(user.friend)
console.log(user.friend)

/*
1. Mama cat
Define an object called cat1that contains the following properties:
name
breed
age (a number)
console.log the cat's age
console.log the cat's breed
*/

let cat1 = {
  name: "Toast",
  breed: "Bengal",
  age: 4,
}

console.log(cat1.age);
console.log(cat1.breed);

/*
2. Papa cat
Define an object called cat2 that also contains the properties:

name
breed
age (a number)
*/

let cat2 = {
  name:'Milkshakes',
  breed:'Orange',
  age:1  
}

/*
3. Combine Cats!
*/
function combineCats(mama, papa) {
  // console.log(mama, papa)
  let combineCatsObj = {};
  combineCatsObj.name = mama.name + papa.name;
  combineCatsObj.age = 1;
  combineCatsObj.breed = mama.breed + '-' + papa.breed;
  return combineCatsObj;
}



console.log(combineCats(cat1, cat2))


/*
4. Cat brain bender
*/
console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))))


/* 

*/