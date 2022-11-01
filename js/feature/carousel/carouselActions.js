import { appendResults, carouselContent } from "./Carousel.js";
import { sortResults } from "../../services/sortResults.js";

let foreground = 0;

export const setCarousel = () => {
  // get datas
  const resultDatas = JSON.parse(sessionStorage.getItem("resultsItem"));
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const questions = JSON.parse(sessionStorage.getItem("questionsItem"));
  // sort result data
  const results = sortResults(resultDatas, userData, questions.length);
  // set carousel
  appendResults(results);
  document.querySelector("#result0").classList.add("foreground");
  carouselPrev();
  carouselNext();
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
  document.querySelector("#result0").classList.add("foreground");
};

const carouselPrev = () => {
  document.querySelector("#carouselPrev").addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Set foreground
    foreground++;
    foreground = calcLimit(foreground);
    console.log("right", foreground);
    translate("right", foreground);
  });
};

const carouselNext = () => {
  document.querySelector("#carouselNext").addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Set foreground
    foreground--;
    foreground = calcLimit(foreground);
    console.log("left", foreground);
    translate("left", foreground);
  });
};

const translate = (direction, foreground) => {
  // Set translate value
  let currentDegree;
  if (direction === "left") {
    currentDegree = "11.25vw";
  }
  if (direction === "right") {
    currentDegree = "-11.25vw";
  }
  // translate whole carousel and scale the right images
  const items = document.querySelectorAll(".results");
  items.forEach((item, index) => {
    // Calculate positions
    var pos = calcLimit(2 - foreground + index);
    console.log(
      "index : " +
        index +
        " pos : " +
        pos +
        " item id: " +
        JSON.stringify(item.id)
    );
    // Move last or first tile
    if (direction === "right" && pos === 0) {
      item.style.transform = "translateX(60vw)";
    }
    if (direction === "right" && pos === 5) {
      item.style.transform = "translateX(-11vw)";
    }
    item.style.transform =
      item.style.transform + "translateX(" + currentDegree + ");";
    // Scale middle tiles
    switch (pos) {
      case 0:
        item.style.transform = "scale(1, 1)";
        item.style.opacity = 1;
        break;
      case 1:
        item.style.transform = "translateX(10vw) scale(1.2, 1.2)";
        item.classList.remove("foreground");
        break;
      case 2:
        item.style.transform = "translateX(22.5vw) scale(1.5, 1.5)";
        item.classList.add("foreground");
        break;
      case 3:
        item.style.transform = "translateX(35vw) scale(1.2, 1.2)";
        item.classList.remove("foreground");
        break;
      case 4:
        item.style.transform = "translateX(45vw)";
        item.style.opacity = 1;
        break;
      case 5:
        item.style.transform = "scale(0, 0)";
        item.style.opacity = 0;
        break;
      default:
        console.log("carousel error");
        break;
    }
  });
};

const calcLimit = (number) => {
  if (number > 5) {
    return number - 6;
  }
  if (number < 0) {
    return number + 6;
  }
  return number;
};
