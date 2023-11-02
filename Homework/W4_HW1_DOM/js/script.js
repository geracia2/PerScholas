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
    {text: 'catalog', href: '#', subLinks: [        //menuLinks[1].subLinks -array
      {text: 'all', href: '/catalog/all'},          //menuLinks[1].subLinks[0].text -value
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
    let link = document.createElement('a');
    link.setAttribute('href', value.href); 
    link.textContent = value.text;
    topMenuEl.appendChild(link);
    // console.log(link)
};

// for (let key in menuLinks){
//     let link = document.createElement('a');
//     link.setAttribute('href', menuLinks[key].href); 
//     link.textContent = menuLinks[key].text;
//     topMenuEl.appendChild(link);
// };

// for (let i = 0; i <= menuLinks.length; i++) {
//     let link = document.createElement('a');
//     link.setAttribute("href", menuLinks[i].href);
//     link.textContent = menuLinks[i].text;
//     topMenuEl.appendChild(link);
// }

// menuLinks.forEach(function(element, index, array) {
//     let link = document.createElement('a');
//     link.setAttribute("href", array[index].href);
//     link.textContent = array[index].text;
//     topMenuEl.appendChild(link);
// });


// --------------- PART 2 ---------------------
// --------------------------------------------

// 4.0 
let subMenuEl = document.querySelector("nav#sub-menu");
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
// -- lets check if this is hitting the <a> links
// topMenuLinks.forEach(function(element, index, array) {
//   array[index].style.border = 'solid red 5px';
// });
let showingSubMenu = false;

// 5.2 
topMenuEl.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'A'){
      return;
  } else {
      console.log("event target element:")
      console.log(evt.target.innerHTML);
  }
  // 5.3 
  if (evt.target.classList.contains('active')) {
    evt.target.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  }

  // 5.4 
  topMenuLinks.forEach(function(element, index, array) {
    array[index].classList.remove('active');
  });

  // 5.5 
  evt.target.classList.add('active');

  // 5.6 Set showingSubMenu to true if the clicked <a> element's 
  // "link" object within menuLinks has a subLinks property (all do, 
  //  except for the "link" object for ABOUT), otherwise, set it to false.

  let subLinks = []; 
  let linkElement = menuLinks.find(({text}) => text === evt.target.innerHTML)
  console.log("link element:")
  console.dir(linkElement)
  for (const key in menuLinks) {
    // hasOwnProperty kinda like saying "does this array have a property key named('')"
    if (linkElement.hasOwnProperty('subLinks')) {
        subLinks = linkElement.subLinks; //5.6 hint?
        showingSubMenu = true;
    } else {
      // subLinks = linkElement;
      showingSubMenu = false;
    }
  }
  

  // 5.7 If showingSubMenu is true:
  if (showingSubMenu === true) {
    buildSubMenu(subLinks);
    subMenuEl.style.top = '100%';
  } else if (showingSubMenu = false) {
    subMenuEl.style.top = '0';
  } 
 
  
  // 5.8  buildSubMenu function
  function buildSubMenu(obj) {
    // subMenuEl.remove() // this removes it completely, not clears it
    subMenuEl.innerHTML = ''  // it does remove hard code elements
    // subMenuEl.removeChild(subMenuEl.firstChild); // may be it unless we need to clear more than 1
    for (let value of obj){//does this need to be a for each to work with about?
      // console.dir(value)
      let link = document.createElement('a');
      link.setAttribute('href', value.href); 
      link.textContent = value.text;
      subMenuEl.appendChild(link);
    }
    // obj.forEach(function(element, index, obj) {
    //     let link = document.createElement('a');
    //     link.setAttribute('href', element.href);
    //     link.textContent = element.text;
    //     subMenuEl.appendChild(link);
    // });
  }
  // 6.4 ????????
  if (evt.target.innerHTML === 'about') {
    const h1El = document.querySelector('h1');
    h1El.textContent = 'about'
  }
});

// 6.0 Attach a delegated >'click' event listener to >subMenuEl.
// The first line of code of the event listener function 
// should call the event object's preventDefault() method.
// The second line of code function should immediately return 
// >if the element clicked was not an <a> element.
// console.log the content of the <a> to verify the handler is working
subMenuEl.addEventListener('click', function (evt) {
  evt.preventDefault()
  if (evt.target.nodeName !== 'A') {
    return;
  } else {
    console.log("event target element:")
    console.log(evt.target.innerHTML);
  }
  // 6.1
  showingSubMenu = false;
  subMenuEl.style.top = '0';

  // 6.2 
  evt.target.classList.remove('active')

  // 6.3 
  const h1El = document.querySelector('h1');
  h1El.textContent = evt.target.innerHTML
  console.log("click target after starting submenu listener:")
  console.log(evt.target.innerHTML)
  // 6.4 ????????
  // if (evt.target.innerHTML === 'about') {
  //   h1El.textContent = 'about'
  // }
});