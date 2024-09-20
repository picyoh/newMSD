import { setUserChoice } from "../../index.js";

import { appendQuestion, animationRemoveClass } from "./Question.js";

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
      // lauch nextStep
      nextStep();
    });
  });
};

export const nextStep = () => {
  // get current index
  const currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
  // get current question
  const number =  currentIndex - 1;
  const toHide = "#question" + number;
  const questionToHide = document.querySelector(toHide);
  // hide current question
  questionToHide.classList.add("hiddenQuestion");
  // get questions datas
  const questionDatas = JSON.parse(sessionStorage.getItem("questionsItem"));
  // check if it exists
  const nextIndex = currentIndex + 1;
  const questionAdded = "#question" + nextIndex;
  const getAdded = document.querySelector(questionAdded);
  /*
  console.log(currentIndex + 1, questionAdded, getAdded);
  */

  // Center carousel at the end
  if (currentIndex + 1 === questionDatas.length) {
    document.querySelector('.carousel').classList.add('final');
  }
  // set a new question
  if (getAdded === null && (currentIndex < (questionDatas.length - 1))) {
    appendQuestion(currentIndex);
    animationRemoveClass(currentIndex);
  }
  if(getAdded !== null){
    animationRemoveClass(currentIndex);
  }
  // handle NavTape
  if (currentIndex === 1) {
    appendNavTape(questionDatas);
  }
  // move cursor
  moveCursor(currentIndex);
  // set index
  sessionStorage.setItem("currentIndex", currentIndex + 1);
  //console.log("next", currentIndex);
  // handle new answer click
  handleQuestionClick();
  // handle navTape click
  triggerNavButton();
};

export const stepBack = () => {
  // get current index & question
  const currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
  const currentQuestion = document.querySelector(`#question${currentIndex}`);
  // check if it exists
  if (currentQuestion === null) return;
  // remove current question
  currentQuestion.classList.add("ariseQuestion");
  // get previousIndex
  const previousIndex = currentIndex - 1;
  // remove hidden class to previous question
  const previousQuestion = document.querySelector(`#question${previousIndex}`);
  previousQuestion.classList.remove("hiddenQuestion");
  // remove cursor
  removeCursor(previousIndex);
  // adjust currentIndex
  sessionStorage.setItem("currentIndex", previousIndex);
  triggerNavButton();
};
