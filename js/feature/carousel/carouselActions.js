import { appendResults, carouselContent } from "./Carousel.js";
import { sortResults } from "../../services/sortResults.js";

export const setCarousel = () => {
  // get datas
  const resultDatas = JSON.parse(sessionStorage.getItem("resultsItem"));
  const userChoices = JSON.parse(sessionStorage.getItem("userChoices"));
  const questions = JSON.parse(sessionStorage.getItem("questionsItem"));
  // sort result data
  const results = sortResults(resultDatas, userChoices, questions.length);
  // set carousel
  appendResults(results);
};
export const updateCarousel = () => {
  // remove content
  const carouselContentChildren = Array.from(
    document.querySelector(".carouselContainer").children
  );
  carouselContentChildren.forEach((child, index) => {
    child.remove();
  });
  // get datas
  const resultDatas = JSON.parse(sessionStorage.getItem("resultsItem"));
  const userChoices = JSON.parse(sessionStorage.getItem("userChoices"));
  const questions = JSON.parse(sessionStorage.getItem("questionsItem"));
  // sort result data
  const results = sortResults(resultDatas, userChoices, questions.length);
  // set carousel
  carouselContent(results);
};

// TODO: check bug rotatebefore
const carouselBefore = () => {
  document.querySelector(".carouselBefore").addEventListener("click", (e) => {
    console.log("left");
    rotate("left");
  });
};

const carouselAfter = () => {
  document.querySelector(".carouselAfter").addEventListener("click", (e) => {
    console.log("right");
    rotate("right");
  });
};

// TODO: carousel mouvement
const rotate = (direction) => {
  let degree = 0;

  switch (direction) {
    //   case "up":
    //     return degree =
    case "right":
      degree = -60;
      break;
    //   case "down":
    case "left":
      degree = 60;
      break;
    default:
      degree;
  }
  console.log(degree);
  // move carousel
  const carousel = document.querySelector(".carouselContainer");
  carousel.style.transform = "rotateY(" + degree + "deg)";
  // move items
  const items = document.querySelectorAll(".results");
  items.forEach((item, index) => {
    // add a rotation to
    item.style.transform =
      "translateX(150%) translateY(25%) rotateY(" +
      60 * index +
      "deg) translateZ(250px) rotateY(-" +
      60 * index +
      "deg) rotateY(" +
      -degree +
      "deg)";
  });
  // TODO: change class? check on codepen
};
