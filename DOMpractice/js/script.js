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

// for (let li of liTagsAll) {
//     console.log(li)
// }

// for (let i = 0; i<liTagsAll.length; i++){

// }


for(const liTags of liTagsAll) {
	liTags.style.fontSize = '50px';
}