import { appendResults, carouselContent, manageInfos } from "./Carousel.js";
import { sortResults } from "../results/sortResults.js";

export const setCarousel = () => {
  // get datas
  const resultDatas = JSON.parse(sessionStorage.getItem("resultsItem"));
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const questions = JSON.parse(sessionStorage.getItem("questionsItem"));
  // sort result data
  const results = sortResults(resultDatas, userData, questions.length);
  // set carousel
  appendResults(results);
  carouselPrev();
  carouselNext();
};

export const updateCarousel = () => {
  // remove content from carousel
  const carouselContentChildren = Array.from(
    document.querySelector(".carouselContainer").children
  );
  carouselContentChildren.forEach((child) => {
    child.remove();
  });
  // remove content from infos
  const infosContentChildren = Array.from(
    document.querySelector(".resultInfos").children
  );
  infosContentChildren.forEach((child) => {
    child.remove();
  });
  // get datas
  const resultDatas = JSON.parse(sessionStorage.getItem("resultsItem"));
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const questions = JSON.parse(sessionStorage.getItem("questionsItem"));
  // sort result data
  const results = sortResults(resultDatas, userData, questions.length);
  // set carousel
  carouselContent(results);
  manageInfos(results);
};

const carouselPrev = () => {
  document.querySelector("#carouselPrev").addEventListener("click", (e) => {
    e.stopPropagation();
    rotate("left");
  });
};

const carouselNext = () => {
  document.querySelector("#carouselNext").addEventListener("click", (e) => {
    e.stopPropagation();
    rotate("right");
  });
};

const rotate = (direction) => {
  // get foreground and decompose it
  const foregroundElement = document.querySelector('#position0').classList[1];
  const actualForeground = parseInt(foregroundElement.slice(-1));
  // calc previous foreground Element
  let previousForeground;
  // Left
  if (direction === "left") {
    let tmp = actualForeground + 1;
    if (tmp > 5) {
      previousForeground = 6 - Math.abs(actualForeground) - 1;
    } else {
      previousForeground = tmp;
    }
  }
  // Right
  if (direction === "right") {
    const tmp = actualForeground - 1;
    if (tmp < 0) {
      previousForeground = 6 - Math.abs(actualForeground) - 1;
    } else {
      previousForeground = tmp;
    }
  }
  /*
  console.log("prevForegroundNumber : " + previousForeground);
  */
  // Modify positions
  for (let i = 0; i <= 5; i++) {
    const calc = i - previousForeground;
    // Handle negatives numbers
    if (calc < 0) {
      document.querySelector('.result' + i).id = 'position' + (6 - Math.abs(calc));
      /*
      console.log("i : " + i, "pos<0 : " + (6 - Math.abs(calc)));
      */

    } else {
      document.querySelector('.result' + i).id = 'position' + calc;
      /*
      console.log("i : " + i, "pos>0 : " + calc);
      */
    }
  }
  // swich infos
  document.querySelector('.info' + previousForeground).classList.add('visible');
  document.querySelector('.info' + actualForeground).classList.remove('visible');
};
