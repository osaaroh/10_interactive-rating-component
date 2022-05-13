"use strict";

const rating = document.querySelector(".card-rating");
const thanks = document.querySelector(".card-thanks");
const radioButtons =  document.getElementsByName("rating");
const chosenRatingInfo = document.querySelector(".card-thanks__select-info");
const button = document.querySelector("#submit");
const goBackBtn = document.querySelector("#returnBtn");

// add click EventListeners
button.addEventListener('click', submit_rating);
goBackBtn.addEventListener('click', goBack);

function submit_rating() {
  // get selected rating #
  let chosenRating;
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      chosenRating = radioButtons[i].value;
      break;
    }
  }

  if (chosenRating) {
    // set rating for next slide
    chosenRatingInfo.textContent = `You selected ${chosenRating} out of 5`;
    // hide rating slide and show thank you.
    rating.classList.add('hide');
    thanks.classList.remove('hide');
  } 
  else {
    //logic
  }
}

function goBack() {
    thanks.classList.add('hide');
    rating.classList.remove('hide');
}