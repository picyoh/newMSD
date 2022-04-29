import { appendResults } from "./Carousel.js";
import { sortResults } from "../../services/sortResults.js";

export const setCarousel = () => {
  const resultDatas = JSON.parse(sessionStorage.getItem("resultsItem"));
  const userChoices = JSON.parse(sessionStorage.getItem("userChoices"));
  const questions = JSON.parse(sessionStorage.getItem("questionsItem"));
  // sort result data
  const results = sortResults(resultDatas, userChoices, questions.length);
  // set carousel
  appendResults(results);
};
// TODO: checker sans classe juste avec id result0...
// order carousel components
export const orderCarousel = () => {
  // set base results order
  const result0 = document.querySelector("#result0");
  result0.classList.add("activeResult");
  const result1 = document.querySelector("#result1");
  result1.classList.add("right");
  const result2 = document.querySelector("#result2");
  result2.classList.add("backRight");
  const result3 = document.querySelector("#result3");
  result3.classList.add("back");
  const result4 = document.querySelector("#result4");
  result4.classList.add("backLeft");
  const result5 = document.querySelector("#result5");
  result5.classList.add("left");
  carouselBefore();
  carouselAfter();
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
