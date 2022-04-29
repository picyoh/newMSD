import { appendQuestion } from "./questionUi.js";
import { setCarousel } from "../carousel/carouselActions.js";

import { handlePrevious } from "../navigation/navBtn.js";
import {
  appendCursor,
  moveCursor,
  removeCursor,
} from "../navigation/cursor.js";

import { setUserChoice } from "../../index.js";

export const handleQuestionClick = () => {
  const answers = document.querySelectorAll(".answer");
  answers.forEach((answer) => {
    answer.addEventListener(
      "click",
      (e) => {
        // set userChoice
        if (e.target.id !== "") setUserChoice(e.target);
        // set current index
        const currentIndex = e.target.closest(".question").id.slice(-1);
        sessionStorage.setItem("currentIndex", currentIndex);
        // lauch nextStep
        nextStep();
      },
      { once: true }
    );
  });
};

export const nextStep = () => {
  // get index
  const currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
  // hide current question
  const toHide = "#question" + currentIndex;
  const questionToHide = document.querySelector(toHide);
  console.log("tohide", currentIndex, questionToHide);
  if (questionToHide.classList.contains("hidden")) return;
  questionToHide.classList.add("hidden");
  // datas
  const questionDatas = JSON.parse(sessionStorage.getItem("questionsItem"));
  const currentQuestion = questionDatas[currentIndex];
  // set next
  // set a new question
  appendQuestion(currentIndex);
  handleQuestionClick();
  if (currentIndex === 0) {
    // add navigation
    appendCursor(questionDatas);
  } else {
    // move cursor
    moveCursor(currentIndex);
    // trigger navBtn
    handlePrevious();
  }
  sessionStorage.setItem("currentIndex", currentIndex + 1);
};

export const stepBack = () => {
  const currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
  // remove current question
  const currentQuestion = document.querySelector("#question" + currentIndex);
  console.log("to remove", currentIndex, currentQuestion);
  currentQuestion.remove();
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
