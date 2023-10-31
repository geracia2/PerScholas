// 1.0 Select and cache the <main> element in a variable named mainEl.
// ------------ Node List selector --------------
const mainEl = document.querySelector("main");
// const mainEl = document.querySelectorAll("main");
// -------- HTMLCollection & selectorAll --------
// const mainEl = document.getElementsByTagName('main');


// 1.1 Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// ------------ Node List selector --------------
mainEl.style.backgroundColor = 'var(--main-bg)';
// -------- HTMLCollection & selectorAll --------
// mainEl[0].style.backgroundColor = 'var(--main-bg)';


// 1.2 Set the content of mainEl to <h1>SEI Rocks!</h1>.
// ------------ Node List selector --------------
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
// -------- HTMLCollection & selectorAll --------
// mainEl[0].innerHTML = '<h1>SEI Rocks!</h1>'


// 1.3 Add a class of flex-ctr to mainEl.
// ------------ Node List selector --------------
mainEl.classList.add("flex-ctr");
// **** could also be done with a .forEach(function(node)block)
// mainEl.forEach(function(node) {
//     node.className = 'flex-ctr'
// });
// -------- HTMLCollection & selectorAll --------
// mainEl[0].className = 'flex-ctr';


// 2.0 Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
// ------------ Node List selector --------------
const topMenuEl = document.querySelector('nav#top-menu');
// -------- HTMLCollection & selectorAll --------
// const topMenuEl = document.getElementsByTagName("nav");

// 2.1 Set the height topMenuEl element to be 100%.
// ------------ Node List selector --------------
topMenuEl.style.height = '100%';
// -------- HTMLCollection & selectorAll --------
// topMenuEl[0].style.height = '100%';


// 2.2 Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
// ------------ Node List selector --------------
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
// -------- HTMLCollection & selectorAll --------
// topMenuEl[0].style.backgroundColor = 'var(--top-menu-bg)';


// 2.3 Add a class of flex-around to topMenuEl.
// ------------ Node List selector --------------
topMenuEl.classList.add('flex-around');
// -------- HTMLCollection & selectorAll --------
// topMenuEl[0].classList.add('flex-around');


// 3.0 
// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

// 3.1 Iterate over the entire menuLinks array and for each "link" object:
// ---- Create an <a> element.
// ---- On the new element, add an href attribute with its value set to the href property of the "link" object.
// ---- Set the new element's content to the value of the text property of the "link" object.
// ---- Append the new element to the topMenuEl element.

for (let value of menuLinks){
    let newLink = document.createElement('a');
    newLink.setAttribute('href', value.href); 
    newLink.textContent = value.text;
    topMenuEl.appendChild(newLink);
};

// for (let key in menuLinks){
//     let newLink = document.createElement('a');
//     newLink.setAttribute('href', menuLinks[key].href); 
//     newLink.textContent = menuLinks[key].text;
//     topMenuEl.appendChild(newLink);
// };

// for (let i = 0; i <= menuLinks.length; i++) {
//     let newLink = document.createElement('a');
//     newLink.setAttribute("href", menuLinks[i].href);
//     newLink.textContent = menuLinks[i].text;
//     topMenuEl.appendChild(newLink);
// }

// menuLinks.forEach(function(element, index, array) {
//     let newLink = document.createElement('a');
//     newLink.setAttribute("href", array[index].href);
//     newLink.textContent = array[index].text;
//     topMenuEl.appendChild(newLink);
// });


// --------------- PART 2 ---------------------
// --------------------------------------------

// 4.0 
let subMenuEl = document.querySelector("#sub-menu");
// 4.1 
subMenuEl.style.height = "100%";
// 4.2 
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
// 4.3 
subMenuEl.classList.add("flex-around");
// 4.4 
subMenuEl.style.position = "absolute";
// 4.5
subMenuEl.style.top = "0";
// 5.0

// 5.1 Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
// -- Declare a global showingSubMenu variable and initialize it to false;

// ('#top-menu(parent) a(child)') = all anchors in top-menu
let topMenuLinks = topMenuEl.querySelectorAll("a");
// console.log(topMenuLinks);
// lets check if this is hitting the links
topMenuLinks.forEach(function(element, index, array) {
  array[index].style.border = 'solid red 5px';
});
let showingSubMenu = false;

// 5.2 
// in topMenuEl listen for click, do a function
// save the produced event object as evt
topMenuEl.addEventListener('click', function(evt) {
    evt.preventDefault(showingSubMenu);
    // console.log(evt)
    console.log(evt.target.classList)
    if (evt.target.nodeName !== 'A'){
        return;
    } else {
        console.log(evt.target.innerHTML);
    }
    // 5.3 another if <a> link has a class of active
    if (evt.target.classList.contains('active')) {

    }
    
    
})







// 5.4 remove active class name from <a> or <evt> 
// in topMenuLinks whether the activeclass exists or not. 


/*
let subMenuEl = document.getElementById("sub-menu");

subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

let topMenuLinks = document.querySelectorAll("#top-menu a");

let showingSubMenu = false;

topMenuEl.addEventListener("click", (evt) => {
  evt.preventDefault();
  // console.log(event.target.nodeName);
  if (evt.target.nodeName !== "A") {
    return;
  } else {
    console.log(evt.target.innerHTML);
  }
  if (evt.target.classList.contains("active")) {
    evt.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    console.log(evt);
    return;
  }
  for (let value of topMenuLinks) {
    value.classList.remove("active");
  }
  evt.target.classList.add("active");
  // 5.6
  if ((showingSubMenu = true)) {
  }
});
*/