import Question from "./feature/questions/Questions.js";

import { loadQuestions, loadResult } from "./services/load.js";

window.onload = () => {
  loadQuestions();
  loadResult();
  sessionStorage.setItem("userChoices", "[]");
  const firstQ = new Question(-1, []);
  firstQ.appendFirst();
  firstQ.handleClick();
  firstQ.appendNavBtn;
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
