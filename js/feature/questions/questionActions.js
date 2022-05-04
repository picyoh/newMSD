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
    // check if it exists
    const nextIndex = currentIndex + 1;
    const questionAdded = "#question" + nextIndex;
    const getAdded = document.querySelector(questionAdded);
    console.log(currentIndex + 1, questionAdded, getAdded);
    if (getAdded === null) {
      // set a new question
      appendQuestion(currentIndex);
    }
    // handle NavTape
    if (currentIndex === 0) {
      appendNavTape(questionDatas);
    }
    // move cursor
    moveCursor(currentIndex);
    // set index
    sessionStorage.setItem("currentIndex", currentIndex + 1);
    console.log("next", currentIndex);
    // handle new answer click
    handleQuestionClick();
    // handle navTape click
    triggerNavButton();
  }
};

export const stepBack = () => {
  // get current index & question
  const currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
  const currentQuestion = document.querySelector(`#question${currentIndex}`);
  // check if it exists
  if (currentQuestion === null) return;
  // remove current question
  currentQuestion.remove();
  // get previousIndex
  const previousIndex = currentIndex - 1;
  // remove hidden class to previous question
  const previousQuestion = document.querySelector(`#question${previousIndex}`);
  previousQuestion.classList.remove("hidden");
  // remove cursor
  removeCursor(previousIndex);
  // adjust currentIndex
  sessionStorage.setItem("currentIndex", previousIndex);
};
