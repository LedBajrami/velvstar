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
  } else if (650 < window.innerWidth <= 1106) {
    cardWidth = 300
  } else if (window.innerWidth <= 1366) {
    cardWidth = 350
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







const popupBtn = document.querySelector("#viewreport")
const popupBtn2 = document.querySelector("#viewreport2")
const popupBtn3 = document.querySelector("#viewreport3")
const popupBtn4 = document.querySelector("#viewreport4")
const popupBtn5 = document.querySelector("#viewreport5")
const popupBtn6 = document.querySelector("#viewreport6")
const popupBtn7= document.querySelector("#viewreport7")
const popupBtn8 = document.querySelector("#viewreport8")
const popupBtn9 = document.querySelector("#viewreport9")
const popupBtn10 = document.querySelector("#viewreport10")

const popUpClient = document.querySelector("#pop-up-client")
const popUpClient2 = document.querySelector("#pop-up-client2")
const popUpClient3 = document.querySelector("#pop-up-client3")
const popUpClient4 = document.querySelector("#pop-up-client4")
const popUpClient5 = document.querySelector("#pop-up-client5")
const popUpClient6 = document.querySelector("#pop-up-client6")
const popUpClient7 = document.querySelector("#pop-up-client7")
const popUpClient8 = document.querySelector("#pop-up-client8")
const popUpClient9 = document.querySelector("#pop-up-client9")
const popUpClient10 = document.querySelector("#pop-up-client10")

const overlay = document.querySelector('.overlay')
const closePopUpBtn =  Array.from(document.querySelectorAll("#close-popup"))
const thankYouPopUp = document.querySelector('#thankyou-popup')
const thankYouPopUpBtn = document.querySelector('#thankypu-popup-btn')
const closeThankYouPopUpBtn = document.querySelector("#close-thankyou-popup")






function openPopUp(button, popUp) {
  button.addEventListener('click', ()=> {
    popUp.style.display = 'block'
    overlay.style.display = 'block'
  })
}

openPopUp(popupBtn, popUpClient)
openPopUp(popupBtn2, popUpClient2)
openPopUp(popupBtn3, popUpClient3)
openPopUp(popupBtn4, popUpClient4)
openPopUp(popupBtn5, popUpClient5)
openPopUp(popupBtn6, popUpClient6)
openPopUp(popupBtn7, popUpClient7)
openPopUp(popupBtn8, popUpClient8)
openPopUp(popupBtn9, popUpClient9)
openPopUp(popupBtn10, popUpClient10)


overlay.addEventListener('click', closePopUp)

closePopUpBtn.forEach(btn => {
  btn.addEventListener('click', closePopUp)
})


function closePopUp() {
  popUpClient.style.display = 'none'
  popUpClient2.style.display = 'none'
  popUpClient3.style.display = 'none'
  popUpClient4.style.display = 'none'
  popUpClient5.style.display = 'none'
  popUpClient6.style.display = 'none'
  popUpClient7.style.display = 'none'
  popUpClient8.style.display = 'none'
  popUpClient9.style.display = 'none'
  popUpClient10.style.display = 'none'
  thankYouPopUp.style.display = 'none'
  overlay.style.display = 'none'
}




thankYouPopUpBtn.addEventListener('click', openThankYouPopUp)
closeThankYouPopUpBtn.addEventListener('click', closeThankYouPopUp)
overlay.addEventListener('click', closeThankYouPopUp)




function openThankYouPopUp(e) {
  e.preventDefault()
  thankYouPopUp.style.display = 'block'
  overlay.style.display = 'block'
}

function closeThankYouPopUp() {
  thankYouPopUp.style.display = 'none'
  overlay.style.display = 'none'
}

















