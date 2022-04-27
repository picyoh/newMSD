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
        // lauch nextStep
        nextStep();
      },
      { once: true }
    );
  });
};

export const nextStep = () => {
  // get index
  const currentIndex = JSON.parse(sessionStorage.getItem("userChoices")).length;
  console.log(currentIndex);

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
    if (currentIndex === 0) {
      // add cursor for the first question
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
  }
};

export const stepBack = (currentIndex) => {};
