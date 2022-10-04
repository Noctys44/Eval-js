"use strict";


// FONCTIONNEMENT NAV

var nav = document.getElementById("myNav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");


openBtn.addEventListener("click", () => {
    openNav()
})
closeBtn.addEventListener("click", () => {
    closeNav()
})


function openNav() {
  nav.classList.add("active");
}

function closeNav() {
  nav.classList.remove("active");
}

// SCROLL INFINI

const articleContainer = document.querySelector(".article-container")
const watcher = document.querySelector("footer")

const addArticle = () => {
  for(let i = 0; i < 4; i++) {
  const article = document.createElement('div')
  article.classList.add('main-article')
  article.innerHTML = `<div>
  <img class="img-article" src="./img/vehicule4.png" alt="vehicule4">
</div>
<div>
  <div class="describe-article">
      <div class="margin-article">
          <h3>Peugeot 208</h3>
      </div>
      <div class="margin-article">
          <p class="p-size">Diesel, 5 portes, GPS, Autoradio, Forfait 1000km (0.5/km supplémentaire)</p>
      </div>
      <div class="margin-article">
          <p class="p-size">999 € - Agence de Paris</p>
      </div>
  </div>
  <div class="margin-article">
      <button type="submit" class="btn-article">Réservez et payer</button>
  </div>
</div>`
  articleContainer.appendChild(article)
}
}

const handleIntersect = entries => {
  console.log(entries);
  if(entries[0].isIntersecting) {
    addArticle()
  }
}

let options = {
  root: null,
  threshold: 1,
  rootMargin: "0px"
}
new IntersectionObserver(handleIntersect, options).observe(watcher)


// CARROUSEL

let slideNumber = 2;
const header = document.querySelector('.header')
header.style.backgroundImage = "url('./img/background1.jpg')"
header.style.backgroundSize = "cover"

function slide() {
  for(let i=1;i<=slideNumber;i++){  
    const header = document.querySelector('.header') 
    const background = header.style.backgroundImage = "url('./img/background"+i+".jpg')"
    background.style.backgroundSize = "cover"
    
 
}}


