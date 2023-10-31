// cache an element from the dom root .document
let titleEl = document.getElementById("title")
console.log(titleEl)


let pEl = document.querySelector(".cool")
console.log(pEl);


// change something with innerHTML or textContent 
// like you would an object
const pElMain = document.querySelector("p.main-title");
// looking for anything that is a p tag in a main-title class
// pElMain.textContent = "Comments for <strong>Today</strong>"
pElMain.innerHTML = "Comments for <strong>Today</strong>"


// change style directly 
titleEl.style.textAlign = 'center';

// let newStyle = document.querySelector(".newStyle1");
// let newStyle = document.querySelector('span');
// both of these work, 
// newStyle.style.color = "blue";


let googleLink = document.querySelector("a");
googleLink.setAttribute("href", "https://www.google.com");
// variable.setAttribute("attribute", "value")
// this does the same
// googleLink.href = ""https://www.google.com""


// select multiple elements
// since querySelector only does one item at a time
// you need to nest your variables.

let idComments = document.querySelector('#comments')
// returns an NodeList
let liTags = idComments.getElementsByTagName('li')
// returns an HTMLCollection
let liTagsClassComment = document.getElementsByClassName('comment')
// returns an HTMLCollection

// shorten this 
let liTagsAll = document.querySelectorAll('.comment')
// returns a NodeList

console.log(liTags)
console.log(liTagsClassComment)
console.log(liTagsAll)



for(const liTags of liTagsAll) {
	liTags.style.fontSize = '50px';
}


const btnEl = document.querySelector('button')
// btnEl.addEventListener('click', () => {})
btnEl.addEventListener('click', function(evt){
	console.log('inside the event listener function')
	console.log(evt)
	console.log(evt.target) // tells us the <button>
	console.log(this)

	// const inputEl = document.querySelector('input')
	// console.dir(inputEl) 
	// console.dir(inputEl.value) 

	// create a new li element/tag
	const liEl = document.createElement('li');
	// select the input field and store it in variable
	let inputEl = document.querySelector('input');
	// target list item, add text, from input.value
	liEl.textContent = inputEl.value;
	// add to the DOM
	// target the ul element. add child (created element)
	document.querySelector('ul#secondList ul#thirdList').appendChild(liEl);
	// empty the input field with an empty string
	// if this wasn't an input field you could use textContent
	inputEl.value = '';
	
})

// event bubbling and Delegation
function handleClick(evt) {
	console.log('your event object:')
	console.log(evt);
	console.log("your event object's target:")
	console.log(evt.target);
	// right now, anything in the ul will turn red including the ul itself
	// evt.target.style.color = 'red';
	// target.nodeName specification, evt.target is an array of properties so target the NodeName property
	if (evt.target.nodeName === "LI"){
		evt.target.style.color = 'red';
	}
}
// now you have a floating event listener object, if we switch pages, this is still in memory
document.querySelector('ul#delegation').addEventListener('click', handleClick);
// remove that floating even listener object
document.querySelector('ul#delegation').removeEventListener('click', handleClick);
