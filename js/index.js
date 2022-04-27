import { appendFirstQuestion } from "./feature/questions/questionUi.js";
import { handleQuestionClick } from "./feature/questions/questionActions.js";

import { loadQuestions, loadResult } from "./services/load.js";

window.onload = () => {
  loadQuestions();
  loadResult();
  // TODO: change current Index by userChoices.length
  sessionStorage.setItem("userChoices", "[]");
  appendFirstQuestion();
  handleQuestionClick();
};

const content = document.querySelector("#content");
const questions = document.querySelector("#questions");

export const setUserChoice = (btnValue) => {
  // TODO: check datas / position in question to replace if its necessary
  const userChoices = JSON.parse(sessionStorage.getItem("userChoices"));
  if (userChoices.indexOf(btnValue) === -1) {
    userChoices.push(btnValue);
    sessionStorage.setItem("userChoices", JSON.stringify(userChoices));
  }
}