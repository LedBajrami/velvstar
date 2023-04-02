const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const cardCarousel = document.querySelector('.card-carousel');



let cardWidth;
let cardMargin = 0;
let cardCount = cardCarousel.querySelectorAll('.card').length;
let cardContainerWidth = cardWidth * cardCount + cardMargin * (cardCount - 1);

cardCarousel.style.width = `${cardContainerWidth}px`;





  if (window.innerWidth <= 500) {
    cardWidth = 140;
  } else if (window.innerWidth <= 1336) {
    cardWidth = 400
  } else {
    cardWidth = 500
  }

prevButton.addEventListener('click', () => {
  cardCarousel.scrollBy({
    left: -(cardWidth + cardMargin),
    behavior: 'smooth'
  });
});

nextButton.addEventListener('click', () => {
  cardCarousel.scrollBy({
    left: cardWidth + cardMargin,
    behavior: 'smooth'
  });
});




//Nav Menu Mobile
const openNav = document.querySelector('#open-nav')
const closeNav = document.querySelector('#close-nav')
const listItems = document.querySelector('.list-items-mobile')

openNav.addEventListener('click', () => {
  listItems.classList.toggle('active')
})

closeNav.addEventListener('click', () => {
  listItems.classList.remove('active')
})

const listItemClicked = Array.from(document.querySelectorAll('.list-item'))

listItemClicked.forEach(item => item.addEventListener('click', ()=> {
  listItems.classList.remove('active')
}))





//Collapsible Buttons - FAQS
let coll = document.getElementsByClassName("collapsible-button");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

document.addEventListener('click', (e)=> {
  if(!e.target.matches('.collapsible-button')) return

  e.target.style.border = 'none'
})





const popupBtn = document.querySelector("#viewreport")
const popupBtn2 = document.querySelector("#viewreport2")
const popupBtn3 = document.querySelector("#viewreport3")
const popUpClient = document.querySelector("#pop-up-client")
const popUpClient2 = document.querySelector("#pop-up-client2")
const popUpClient3 = document.querySelector("#pop-up-client3")
const overlay = document.querySelector('.overlay')
const closePopUpBtn =  Array.from(document.querySelectorAll("#close-popup"))
const thankYouPopUp = document.querySelector('#thankyou-popup')
const thankYouPopUpBtn = document.querySelector('#thankypu-popup-btn')
const closeThankYouPopUpBtn = document.querySelector("#close-thankyou-popup")




popupBtn.addEventListener('click', ()=> {
  popUpClient.style.display = 'block'
  overlay.style.display = 'block'
})
popupBtn2.addEventListener('click', ()=> {
  popUpClient2.style.display = 'block'
  overlay.style.display = 'block'
})
popupBtn3.addEventListener('click', ()=> {
  popUpClient3.style.display = 'block'
  overlay.style.display = 'block'
})


overlay.addEventListener('click', closePopUp)

closePopUpBtn.forEach(btn => {
  btn.addEventListener('click', closePopUp)
})


thankYouPopUpBtn.addEventListener('click', openThankYouPopUp)
closeThankYouPopUpBtn.addEventListener('click', closeThankYouPopUp)
overlay.addEventListener('click', closeThankYouPopUp)


function closePopUp() {
  popUpClient.style.display = 'none'
  popUpClient2.style.display = 'none'
  popUpClient3.style.display = 'none'
  thankYouPopUp.style.display = 'none'
  overlay.style.display = 'none'
}



function openThankYouPopUp(e) {
  e.preventDefault()
  thankYouPopUp.style.display = 'block'
  overlay.style.display = 'block'
}

function closeThankYouPopUp() {
  thankYouPopUp.style.display = 'none'
  overlay.style.display = 'none'
}

















