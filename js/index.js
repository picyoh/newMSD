import { appendFirstQuestion } from "./feature/questions/Question.js";
import { handleQuestionClick } from "./feature/questions/questionActions.js";

import { loadQuestions, loadResult } from "./feature/results/load.js";
import {
  setCarousel,
  updateCarousel,
} from "./feature/carousel/carouselActions.js";
import { openingBurger } from "./feature/burger/burgerAction.js";
import { fillCGU, insertPopUp } from "./feature/cgu/cguFiller.js";

window.onload = () => {
  if (document.querySelector("#main") !== null) {
    loadQuestions();
    loadResult();
    sessionStorage.setItem("userData", "[]");
  }
};

export const initContent = () => {
  appendFirstQuestion();
  handleQuestionClick();
  insertPopUp();
  if (document.querySelector("#cguArticle")) {
    fillCGU();
  }
  openingBurger();
};

const content = document.querySelector("#content");
const questions = document.querySelector("#questions");

// TODO: move setUserChoice

export const setUserChoice = (target) => {
  // get value
  const btnValue = target.id.replace("_", " ");
  // get userData & index
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const userDataLength = userData.length;
  // get current index
  const currentIndex = parseInt(sessionStorage.getItem("currentIndex"));

  // console.log("user/current", userDataLength, currentIndex);

  // check whether we need change previous choice
  if (userDataLength > currentIndex) {
    const diff = userDataLength + 1 - currentIndex;

    // console.log("diff", diff);

    // pop choices
    let i;
    for (i = 0; i < diff; i++) {
      userData.pop();
    }
    // set new choices
    sessionStorage.setItem("userData", JSON.stringify(userData));
    // disable next button
    document.querySelector(".next").setAttribute("disabled", "");
  }
  // check whether element exist in array
  if (userData.indexOf(btnValue) === -1) {
    userData.push(btnValue);
    sessionStorage.setItem("userData", JSON.stringify(userData));
  }
  // check length to append carousel
  if (userDataLength === 0) {
    setCarousel();
  }
  // update carousel
  if (userDataLength > 1) {
    updateCarousel();
  }
};
