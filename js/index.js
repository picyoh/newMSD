import { appendFirstQuestion, appendQuestion } from "./feature/questions/questionUi.js";
import { handleQuestionClick, nextStep, stepBack } from "./feature/questions/questionActions.js";
import { appendNavBtn } from "./feature/navigation/navBtn.js";

import { loadQuestions, loadResult } from "./services/load.js";

window.onload = () => {
  loadQuestions();
  loadResult();
  sessionStorage.setItem("currentIndex", "0");
  sessionStorage.setItem("userChoices", "[]");
  appendFirstQuestion();
  handleQuestionClick();
};
const content = document.querySelector("#content");
const questions = document.querySelector("#questions");

function setUserChoice(btnValue) {
  const userChoices = JSON.parse(sessionStorage.getItem("userChoices"));
  if (userChoices.indexOf(btnValue) === -1) {
    userChoices.push(btnValue);
    sessionStorage.setItem("userChoices", JSON.stringify(userChoices));
  }
}

export { setUserChoice };
