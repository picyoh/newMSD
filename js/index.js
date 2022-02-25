import Question from "./components/questions.js";
import Carousel from "./components/carousel.js";
import { loadQuestions, loadResult } from "./services/load.js";
import { sortResults } from "./services/sortResults.js";

const main = document.getElementById("main");

window.onload = () => {
  loadQuestions();
  const firstQ = new Question(-1, datas);
  firstQ.appendFirst();
  firstQ.handleClick();
  sessionStorage.setItem('userChoices', JSON.stringify([]))
};

const datas = JSON.parse(sessionStorage.getItem('questionsItem'))
// TODO: add userChoices to sessionStorage
const userChoices = JSON.parse(sessionStorage.getItem('userChoices'));

// ajouter parent
function nextStep(number) {
  console.log(datas);
  const current = datas[number];
  if (current.final) {
    loadResult()
      .then((datas) => {
        const results = sortResults(datas, userChoices);
        const carousel = new Carousel();
        carousel.appendResults();
        // carousel.handleClick()
      })
      .catch((reason) => console.log(reason.message));
  } else {
    console.log(datas);
    const NewQuestion = new Question(
      number,
      current.question,
      current.qMulti,
      current.choices,
      current.choices.parent,
      datas
    );
    NewQuestion.appendBtn();
    NewQuestion.handleClick();
  }
}

function stepBack() {}

function setUserChoice(btnValue) {
  if (userChoices.indexOf(btnValue) === -1) {
    userChoices.push(btnValue);
  }
}

export { nextStep, stepBack, setUserChoice };
