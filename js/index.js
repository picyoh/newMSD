import { appendFirstQuestion } from "./feature/questions/Question.js";
import { handleQuestionClick } from "./feature/questions/questionActions.js";

import { loadQuestions, loadResult } from "./services/load.js";
import { setCarousel } from "./feature/carousel/carouselActions.js";

window.onload = () => {
  loadQuestions();
  loadResult();
  sessionStorage.setItem("userChoices", "[]");
  appendFirstQuestion();
  handleQuestionClick();
};

const content = document.querySelector("#content");
const questions = document.querySelector("#questions");

export const setUserChoice = (target) => {
  // get value
  const btnValue = target.id.replace("_", " ");
  // get userChoices & index
  const userChoices = JSON.parse(sessionStorage.getItem("userChoices"));
  const userChoicesLength = userChoices.length;
  // get current index
  const currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
  
  // console.log("user/current", userChoicesLength, currentIndex);
  
  // check whether we need change previous choice
  if (userChoicesLength > currentIndex) {
    const diff = userChoicesLength + 1 - currentIndex;

    // console.log("diff", diff);
    
    // pop choices
    let i;
    for (i = 0; i < diff; i++) {
      userChoices.pop();
    }
    // set new choices
    sessionStorage.setItem("userChoices", JSON.stringify(userChoices));
    // disable next button
    document.querySelector(".next").setAttribute("disabled", "");
  }
  // check whether element exist in array
  if (userChoices.indexOf(btnValue) === -1) {
    userChoices.push(btnValue);
    sessionStorage.setItem("userChoices", JSON.stringify(userChoices));
  }
  console.log(userChoicesLength)
  // check length to append carousel
  if(userChoicesLength > 0) {
    setCarousel()
  }
};