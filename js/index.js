import Question from "./feature/questions.js";
import Carousel from "./feature/carousel.js";
import { loadQuestions, loadResult } from "./services/load.js";
import { sortResults } from "./services/sortResults.js";

window.onload = () => {
  loadQuestions();
  loadResult();
  const firstQ = new Question(-1, []);
  firstQ.appendFirst();
  firstQ.handleClick();
};

const main = document.getElementById("main");
let userChoices = [];

// ajouter parent
function nextStep(number) {
  
  const resultDatas = JSON.parse(sessionStorage.getItem("resultsItem"));
  const questionDatas = JSON.parse(sessionStorage.getItem("questionsItem"));
  const current = questionDatas[number];
  
  if (current.final) {
    const results = sortResults(resultDatas, userChoices);
    const carousel = new Carousel(results);
    carousel.appendResults();
    // carousel.handleClick()
  } else {
    const NewQuestion = new Question(
      number,
      current.question,
      current.qMulti,
      current.choices,
      current.choices.parent,
      questionDatas
    );
    NewQuestion.appendBtn();
    NewQuestion.handleClick();
  }
}

function stepBack() {}

function setUserChoice(btnValue) {
  if (userChoices.indexOf(btnValue) === -1) {
    userChoices.push(btnValue);
    // console.log(userChoices);
  }
}

export { nextStep, stepBack, setUserChoice, userChoices };
