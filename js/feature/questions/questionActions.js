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
    answer.addEventListener("click", (e) => {
      e.stopPropagation;
      // set userChoice
      if (e.target.id !== "") {
        setUserChoice(e.target.id);
      }
      // get index
      const currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
      // lauch nextStep
      nextStep(currentIndex);
      // TODO: if classList.contains("hidden")
      const toHide = "#question" + currentIndex;
      document.querySelector(toHide).classList.add("hidden");
    }, {once: true});
  });
};

export const nextStep = (currentIndex) => {
  // datas
  const resultDatas = JSON.parse(sessionStorage.getItem("resultsItem"));
  const questionDatas = JSON.parse(sessionStorage.getItem("questionsItem"));
  const userChoices = JSON.parse(sessionStorage.getItem("userChoices"));

  const currentQuestion = questionDatas[currentIndex];

  if (currentQuestion.final) {
    setCarousel();
  } else {
    // set a new question
    appendQuestion(currentIndex);
    handleQuestionClick();
    // add cursor
    if (currentIndex === 0) {
      appendCursor(questionDatas);
      appendNavBtn();
      handlePrevious();
    } else {
      moveCursor(currentIndex);
    }
    sessionStorage.setItem("currentIndex", currentIndex + 1);
  }
};

export const stepBack = (currentIndex) => {};
