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
        e.stopPropagation;
        // set userChoice
        if (e.target.id !== "") {
          setUserChoice(e.target.id);
        }
        // get index
        const currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
        // lauch nextStep
        nextStep(currentIndex);
      },
      { once: true }
    );
  });
};

export const nextStep = (currentIndex) => {
  // hide current question
  const toHide = "#question" + currentIndex;
  document.querySelector(toHide).classList.add("hidden");
  // datas
  const resultDatas = JSON.parse(sessionStorage.getItem("resultsItem"));
  const questionDatas = JSON.parse(sessionStorage.getItem("questionsItem"));
  const userChoices = JSON.parse(sessionStorage.getItem("userChoices"));
  const currentQuestion = questionDatas[currentIndex];
  if (currentQuestion.final) {
    // set a carousel
    setCarousel();
  } else {
    // set a new question
    appendQuestion(currentIndex);
    handleQuestionClick();
    // add cursor for the first question
    if (currentIndex === 0) {
      appendCursor(questionDatas);
      appendNavBtn();
      handlePrevious();
    } else {
      // move cursor
      moveCursor(currentIndex);
      // disable nextButton
      const nextButton = document.querySelector(".next");
      if (nextButton.hasAttribute("disabled") === false) {
        nextButton.setAttribute("disabled", "");
      }
    }
    // store index
    sessionStorage.setItem("currentIndex", currentIndex + 1);
  }
};

export const stepBack = (currentIndex) => {};
