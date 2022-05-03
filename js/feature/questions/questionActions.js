import { setUserChoice } from "../../index.js";

import { appendQuestion } from "./Question.js";

import { appendNavTape } from "../navTape/NavTape.js";
import {
  moveCursor,
  removeCursor,
  triggerNavButton,
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
  // hide current question
  questionToHide.classList.add("hidden");
  // get questions datas
  const questionDatas = JSON.parse(sessionStorage.getItem("questionsItem"));
  // hide navTape at the end
  if (currentIndex + 1 === questionDatas.length) {
    document.querySelector(".navTape").classList.add("hidden");
  } else {
    // set a new question
    appendQuestion(currentIndex);
    // handle NavTape
    if (currentIndex === 0) {
      appendNavTape(questionDatas);
    }
    moveCursor(currentIndex);
    // handle new answer click
    handleQuestionClick();
    // set index
    sessionStorage.setItem("currentIndex", currentIndex + 1);
    // handle navTape click
    triggerNavButton();
  }
};
