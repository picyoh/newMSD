import { appendResults } from "./carouselUi.js";
import { sortResults } from "../../services/sortResults.js";

export const setCarousel = () => {
  const resultDatas = JSON.parse(sessionStorage.getItem("resultsItem"));
  const userChoices = JSON.parse(sessionStorage.getItem("userChoices"));
  const questions = JSON.parse(sessionStorage.getItem("questionsItem"));
  // sort result data
  const results = sortResults(resultDatas, userChoices, questions.length);
  // hide navigation
  document.querySelector(".cursorContainer").classList.add("hidden");
  document.querySelector(".navBtn").classList.add("hidden");
  // set carousel
  appendResults(results);
  // carousel.moveLeft();
};

export const moveLeft = () => {
    const topLeft = document.querySelector('#topLeft');
    topLeft.addEventListener('click', (e)=>{

      const carouselContainer = document.querySelector('.carouselContainer');

      const top = document.querySelector('#top');
      const topRight = document.querySelector('#topRight');
      const botRight = document.querySelector('#botRight');
    })
  }

export const moveRight = () => {

}