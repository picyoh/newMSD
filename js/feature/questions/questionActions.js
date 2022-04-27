import { appendQuestion } from "./questionUi.js";
import { setCarousel } from "../carousel/carouselActions.js";

import { appendNavBtn, handlePrevious } from "../navigation/navBtn.js";
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
        const currentIndex = e.target.parentNode.parentNode.id.slice(-1);
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
  console.log(currentIndex);
  // hide current question
  const toHide = "#question" + currentIndex;
  document.querySelector(toHide).classList.add("hidden");
  // datas
  const questionDatas = JSON.parse(sessionStorage.getItem("questionsItem"));
  const currentQuestion = questionDatas[currentIndex];
  // set next
  if (currentQuestion.final) {
    // set a carousel
    setCarousel();
  } else {
    // set a new question
    appendQuestion(currentIndex);
    handleQuestionClick();
    if (currentIndex === 0) {
      // add navigation
      appendCursor(questionDatas);
      appendNavBtn();
      handlePrevious();
    } else {
      // move cursor
      moveCursor(currentIndex);
    }
  }
};

export const stepBack = () => {
  const currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
  // adjust current index
  const indexToHide = currentIndex + 1;
  // remove current question
  const currentQuestion = document.querySelector("#question" + indexToHide);
  console.log(indexToHide, currentQuestion);
  currentQuestion.remove();
  // remove current position
  removeCursor(currentIndex);
  // remove hidden class to previous question
  document.querySelector("#question" + currentIndex).classList.remove("hidden");

};
