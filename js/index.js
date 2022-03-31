import { appendFirstQuestion } from "./feature/questions/questionUi.js";
import { handleQuestionClick } from "./feature/questions/questionActions.js";

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

export const setUserChoice = (btnValue) => {
  const userChoices = JSON.parse(sessionStorage.getItem("userChoices"));
  if (userChoices.indexOf(btnValue) === -1) {
    userChoices.push(btnValue);
    sessionStorage.setItem("userChoices", JSON.stringify(userChoices));
  }
}