import { nextStep, stepBack } from "../questions/questionActions.js";
import { removeCursor } from "./cursor.js";

export const appendNavBtn = () => {
  const navBtn = `
      <div class="navBtn">
        <button class="previous">Previous</button>
        <button class="next" disabled>Next</button>
      </div>
      `;
  content.insertAdjacentHTML("beforeend", navBtn);
};

export const handlePrevious = () => {
  // get previous button
  const previousBtn = document.querySelector(".previous");
  previousBtn.addEventListener("click", (e) => {
    // get current index
    const currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
    if (currentIndex > 0) {
      stepBack();
      sessionStorage.setItem("currentIndex", currentIndex - 1);
    } else {
      previousBtn.setAttribute("disabled", "");
    }
    // trigger next btn
    if (document.querySelector(".next").hasAttribute("disabled") === true)
      handleNext();
  });
};

export const handleNext = () => {
  const nextButton = document.querySelector(".next");
  // adjust current Index
  const currentIndex = parseInt(sessionStorage.getItem("currentIndex")) + 1;
  // get user choices length
  const userChoicesLength = JSON.parse(
    sessionStorage.getItem("userChoices")
  ).length;
  if (currentIndex < userChoicesLength) {
    // enable next button
    nextButton.removeAttribute("disabled");
  }

  // console.log(currentIndex, userChoicesLength);

  nextButton.addEventListener("click", (e) => {
    if (currentIndex < userChoicesLength) {
      // go next
      sessionStorage.setItem("currentIndex", currentIndex);
      // lauch nextStep
      nextStep();
    } else {
      // disable next button
      nextButton.setAttribute("disabled", "");
    }
  });
};
