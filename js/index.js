import Question from "./feature/Questions.js";
import Carousel from "./feature/carousel/Carousel.js";
import { appendCursor, moveCursor } from "./feature/cursor/cursor.js";
import { loadQuestions, loadResult } from "./services/load.js";
import { sortResults } from "./services/sortResults.js";

window.onload = () => {
  loadQuestions();
  loadResult();
  sessionStorage.setItem("userChoices", "[]");
  const firstQ = new Question(-1, []);
  firstQ.appendFirst();
  firstQ.handleClick();
};

const main = document.getElementById("main");
const questions = document.querySelector(".questions")

// ajouter parent
function nextStep(currentPos) {
  // datas
  const resultDatas = JSON.parse(sessionStorage.getItem("resultsItem"));
  const questionDatas = JSON.parse(sessionStorage.getItem("questionsItem"));
  const userChoices = JSON.parse(sessionStorage.getItem("userChoices"));

  const currentQuestion = questionDatas[currentPos];

  if (currentQuestion.final) {
    // sort result data
    const results = sortResults(resultDatas, userChoices);
    // set carousel
    const carousel = new Carousel(results);
    carousel.appendResults();
    carousel.rotateLeft();
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
    newQuestion.appendBtn(currentPos);
    newQuestion.handleClick(currentPos);
    // add cursor
    if (currentPos === 0) {
      appendCursor(questionDatas);
      // cursor.handleClick();
    } else {
      moveCursor();
    }
  }
}

function stepBack() {
  
}

function setUserChoice(btnValue) {
  const userChoices = JSON.parse(sessionStorage.getItem("userChoices"));
  if (userChoices.indexOf(btnValue) === -1) {
    userChoices.push(btnValue);
    sessionStorage.setItem("userChoices", JSON.stringify(userChoices));
  }
}

export { nextStep, stepBack, setUserChoice };
