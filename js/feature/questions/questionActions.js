import Question from "./Questions.js";
import Carousel from "../carousel/Carousel.js";
import { appendCursor, moveCursor } from "../navigation/cursor.js";
import { appendNavBtn } from "../navigation/navBtn.js";
import { sortResults } from "../../services/sortResults.js";

export const nextStep = (currentPos) => {
  // datas
  const resultDatas = JSON.parse(sessionStorage.getItem("resultsItem"));
  const questionDatas = JSON.parse(sessionStorage.getItem("questionsItem"));
  const userChoices = JSON.parse(sessionStorage.getItem("userChoices"));

  const currentQuestion = questionDatas[currentPos];

  //   append Carousel
  if (currentQuestion.final) {
    // sort result data
    const results = sortResults(resultDatas, userChoices);
    // set carousel
    const carousel = new Carousel(results);
    carousel.appendResults();
    // carousel.moveLeft();
  } else {
    //   append new Button
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
      // cursor.handleClick();
    } else {
      moveCursor(currentPos);
    }
  }
};

export const stepBack = (currentPos) => {};
