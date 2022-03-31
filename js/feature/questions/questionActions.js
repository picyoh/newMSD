import Question from "./Questions.js";
import Carousel from "../carousel/Carousel.js";
import { appendCursor, moveCursor } from "../navigation/cursor.js";
import { appendNavBtn, handlePrevious } from "../navigation/navBtn.js";
import { sortResults } from "../../services/sortResults.js";

export const handleQuestionClick = () => {
  const answers = document.querySelectorAll(".answer");
  answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
      e.stopPropagation;
      // set userChoice
      if (e.target.id !== "") {
        setUserChoice(e.target.id);
      }
      // get currentIndex
      let currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
      // lauch nextStep
      nextStep(currentIndex);
      const toRemove = "#question" + currentIndex;
      sessionStorage.setItem("currentIndex", currentIndex++);
      console.log({ number: currentIndex, toRemove: toRemove });
      // TODO: if classList.contains("hidden")
      document.querySelector(toRemove).classList.add("hidden");
    });
  });
};

export const nextStep = (currentPos) => {
  // datas
  const resultDatas = JSON.parse(sessionStorage.getItem("resultsItem"));
  const questionDatas = JSON.parse(sessionStorage.getItem("questionsItem"));
  const userChoices = JSON.parse(sessionStorage.getItem("userChoices"));

  const currentQuestion = questionDatas[currentPos];

  if (currentQuestion.final) {
    // sort result data
    const results = sortResults(resultDatas, userChoices);
    // hide navigation
    document.querySelector(".cursorContainer").classList.add("hidden");
    document.querySelector(".navBtn").classList.add("hidden");
    // set carousel
    const carousel = new Carousel(results);
    carousel.appendResults();
    // carousel.moveLeft();
  } else {
    // set a new question
    const newQuestion = new Question(
      currentPos,
      currentQuestion.question,
      currentQuestion.qMulti,
      currentQuestion.choices,
      currentQuestion.choices.parent,
      questionDatas
    );
    newQuestion.appendQuestion();
    newQuestion.handleClick();
    // add cursor
    if (currentPos === 0) {
      appendCursor(questionDatas);
      appendNavBtn();
      handlePrevious();
    } else {
      moveCursor(currentPos);
    }
  }
};

export const stepBack = (currentPos) => {};
