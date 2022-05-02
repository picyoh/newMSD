import { setUserChoice } from "../../index.js";

import { appendQuestion } from "./Question.js";

import { appendTape } from "../navTape/NavTape.js";
import {
  moveCursor,
  removeCursor,
  handlePrevious,
  hideNavTape,
} from "../navTape/navTapeActions.js";

export const handleQuestionClick = () => {
  const answers = document.querySelectorAll(".answer");
  answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
      // set userChoice
      if (e.target.id !== "") setUserChoice(e.target);
      // set current index
      const currentIndex = parseInt(e.target.closest(".question").id.slice(-1));
      sessionStorage.setItem("currentIndex", currentIndex);
      // lauch nextStep
      nextStep();
    });
  });
};

export const nextStep = () => {
  // get current index
  const currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
  // get current question
  const toHide = "#question" + currentIndex;
  const questionToHide = document.querySelector(toHide);
  // already hide
  if (questionToHide.classList.contains("hidden")) return;
  // or hide
  questionToHide.classList.add("hidden");
  console.log("tohide", currentIndex, questionToHide);
  // get questions datas
  const questionDatas = JSON.parse(sessionStorage.getItem("questionsItem"));
  const currentQuestion = questionDatas[currentIndex];
  // set a new question
  appendQuestion(currentIndex);
  // handle new answer click
  handleQuestionClick();
  if (currentIndex === 0) {
    // add navigation
    appendTape(questionDatas);
  } else {
    if (currentIndex === 1) {
      // trigger navBtn
      handlePrevious();
    }
    // move cursor
    moveCursor(currentIndex);
    if (currentIndex === questionDatas.length) {
      //TODO: hide navTape
      hideNavTape();
    }
  }
  sessionStorage.setItem("currentIndex", currentIndex + 1);
};

export const stepBack = () => {
  const currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
  // remove current question
  const currentQuestion = document.querySelector("#question" + currentIndex);
  currentQuestion.remove();
  console.log("to remove", currentIndex, currentQuestion);
  // get previous Index
  const previousIndex = currentIndex - 1;
  // remove current position
  removeCursor(previousIndex);
  // remove hidden class to previous question
  document
    .querySelector("#question" + previousIndex)
    .classList.remove("hidden");
  // set index
  sessionStorage.setItem("currentIndex", previousIndex);
};
