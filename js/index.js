import Question from "./feature/questions.js";
import Carousel from "./feature/carousel.js";
import Cursor from "./feature/cursor.js"
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
function nextStep(currentPos) {
  // datas
  const resultDatas = JSON.parse(sessionStorage.getItem("resultsItem"));
  const questionDatas = JSON.parse(sessionStorage.getItem("questionsItem"));
  
  const currentQuestion = questionDatas[currentPos];

  if (currentQuestion.final) {
    // sort result data
    const results = sortResults(resultDatas, userChoices);
    // add carousel
    const carousel = new Carousel(results);
    carousel.appendResults();
    // carousel.handleClick()
  } else {
    // add a new question
    const NewQuestion = new Question(
      currentPos,
      currentQuestion.question,
      currentQuestion.qMulti,
      currentQuestion.choices,
      currentQuestion.choices.parent,
      questionDatas
    );
    NewQuestion.appendBtn();
    NewQuestion.handleClick();
  }

    // add cursor
    if(currentPos === 0){
      const maxPos = questionDatas.length;
      console.log(maxPos)
      const cursor = new Cursor(currentPos, questionDatas);
      cursor.appendCursor();
    }else{
      // cursor.moveCursor(currentPos)
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
