import { appendFirstQuestion } from "./feature/questions/questionUi.js";
import { handleQuestionClick } from "./feature/questions/questionActions.js";

import { loadQuestions, loadResult } from "./services/load.js";

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
  // TODO: check datas / position in question to replace if its necessary
  const btnValue = target.id.replace("_", " ");
  // get userChoices & index
  const userChoices = JSON.parse(sessionStorage.getItem("userChoices"));
  const userChoicesLength = userChoices.length;
  // get current index
  const currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
  console.log("user/current", userChoicesLength, currentIndex);
  if (userChoicesLength > currentIndex) {
    const diff = userChoicesLength + 1 - currentIndex;
    console.log("diff", diff);
    let i;
    for (i = 0; i < diff; i++) {
      userChoices.pop();
    }
    sessionStorage.setItem("userChoices", JSON.stringify(userChoices));
    document.querySelector(".next").setAttribute("disabled", "");
  }
  // check whether element exist in array
  if (userChoices.indexOf(btnValue) === -1) {
    userChoices.push(btnValue);
    sessionStorage.setItem("userChoices", JSON.stringify(userChoices));
  }
};
