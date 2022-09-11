import { appendResults, carouselContent } from "./Carousel.js";
import { sortResults } from "../../services/sortResults.js";

let foreground = 0;
let currentDegree;

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
  currentDegree = 0;
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
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const questions = JSON.parse(sessionStorage.getItem("questionsItem"));
  // sort result data
  const results = sortResults(resultDatas, userData, questions.length);
  // set carousel
  carouselContent(results);
};
 
const carouselPrev = () => {
  document.querySelector("#carouselPrev").addEventListener("click", (e) => {
    e.stopPropagation();
    foreground++;
    console.log("left", foreground);
    rotate("left", foreground);
  });
};

const carouselNext = () => {
  document.querySelector("#carouselNext").addEventListener("click", (e) => {
    e.stopPropagation();
    foreground--;
    console.log("right", foreground);
    rotate("right", foreground);
  });
};

const rotate = (direction, foreground) => {

  switch (direction) {
    //   case "up":
    //     return degree =
    case "right":
      currentDegree -= 60;
      break;
    //   case "down":
    case "left":
      currentDegree += 60;
      break;
    default:
      currentDegree;
  }

  console.log(currentDegree);
  // move carousel
  const carousel = document.querySelector(".carouselContainer");
  carousel.style.transform = "rotateY(" + currentDegree + "deg)";
  // move items
  const items = document.querySelectorAll(".results");
  items.forEach((item, index) => {
    item.style.transform =
      "translateX(-50%) translateY(15%) rotateY(" +
      60 * index +
      "deg) translateZ(250px) rotateY(-" +
      60 * index +
      "deg) rotateY(" +
      -currentDegree +
      "deg)";
      //hide background
      /*
      if(){

      }
      */
  });

};
