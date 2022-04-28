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

export const triggerNavBtn = () => {
  handlePrevious();
  handleNext();
};

export const handlePrevious = () => {
  // get previous button
  const previousBtn = document.querySelector(".previous");

  previousBtn.addEventListener("click", (e) => {
    // get current index
    const currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
    if (currentIndex > 0) {
      if (previousBtn.hasAttribute("disabled")) {
        previousBtn.removeAttribute("disabled");
      }
      // step back
      stepBack();
    } else {
      // disable previous button
      previousBtn.setAttribute("disabled", "");
    }
  });
};

export const handleNext = () => {
  // enable next button
  const nextButton = document.querySelector(".next");
  nextButton.removeAttribute("disabled");

  nextButton.addEventListener("click", (e) => {
    // get current index
    const currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
    // get user choices length
    const userChoicesLength = JSON.parse(
      sessionStorage.getItem("userChoices")
    ).length;
    console.log("current/userChoices", currentIndex, userChoicesLength);
    // lauch nextStep
    nextStep();
    if (currentIndex + 1 > userChoicesLength) {
      // disable next button
      document.querySelector(".next").setAttribute("disabled", "");
    }
  });
};
