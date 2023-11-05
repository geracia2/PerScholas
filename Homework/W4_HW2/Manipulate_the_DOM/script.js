let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
let mainTitleElm = document.querySelector('#main-title');
mainTitleElm.innerHTML = 'Welcome to my homepage.';
  // Part 2
let bodyElm = document.getElementsByTagName('body');
bodyElm[0].style.backgroundColor = 'red';
  // Part 3
let favThingsElm = document.querySelector("#favorite-things");
lastItem = favThingsElm.lastElementChild
favThingsElm.removeChild(lastItem)
  // Part 4
const specialTitleElms = document.querySelectorAll('.special-title')

for (let elements of specialTitleElms) {
  elements.style.fontSize = '2rem';
}
  // Part 5
  const pasRacesElm = document.querySelector('#past-races')
  // console.log(pasRacesElm)
  // console.dir(pasRacesElm)
  // console.log(pasRacesElm.children)
  let pasRacesChildren = pasRacesElm.getElementsByTagName('li')
  pasRacesChildren[3].remove()
  // Part 6
  const newRaces = document.createElement('li')
  newRaces.textContent = 'Cincinnati'
  pasRacesElm.appendChild(newRaces)
  // Part 7
  const blogPostElms = document.querySelector('div.main');
  // console.log(blogPostElms)
  // console.dir(blogPostElms)
  // console.log(blogPostElms.children)
  // console.dir(blogPostElms.lastChild)
  function createBlogPost (city, para) {
    let newDiv = document.createElement('div');
    let newH1 = document.createElement('h1');
    let newP = document.createElement('p');
    newDiv.classList.add('blog-post');
    newDiv.classList.add('purple');
    newH1.innerText = city;
    newP.innerText = para;
    blogPostElms.appendChild(newDiv)
    newDiv.appendChild(newH1)
    newDiv.appendChild(newP)
  }
 createBlogPost(newRaces.textContent, 'I DROVE ACROSS THE QUEEN CITY!')
  // Part 8
  let newQuote = document.querySelector('#quote-title')
  newQuote.addEventListener('click', (evt) => {randomQuote()});
  // Part 9
  let allBlogPost = document.getElementsByClassName('blog-post')
  console.log(allBlogPost)
  console.dir(allBlogPost)
  for (let element of allBlogPost) {
      element.addEventListener('mouseout', (evt) => {element.classList.toggle('purple')});
      element.addEventListener('mouseenter', (evt) => {element.classList.toggle('red')});
  }
  
});
