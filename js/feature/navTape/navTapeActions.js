import { nextStep, stepBack } from "../questions/questionActions.js";

export const hideNavTape = () => {
  // hide navigation
  document.querySelector(".cursorContainer").classList.add("hidden");
  document.querySelector(".navBtn").classList.add("hidden");
};

// Cursor actions

export const moveCursor = (index) => {
  const pos = "#cursor" + index;
  const currentCursor = document.querySelector(pos).classList.add("active");
};

export const removeCursor = (index) => {
  const pos = "#cursor" + index;
  const currentCursor = document.querySelector(pos).classList.remove("active");
};

// Button actions

export const handlePrevious = () => {
  // get previous button
  const previousBtn = document.querySelector(".previous");
  // get current index
  const currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
  // enable previous button
  if (previousBtn.hasAttribute("disabled") && currentIndex > 1) {
    previousBtn.removeAttribute("disabled");
  }
  // Listen
  previousBtn.addEventListener("click", (e) => {
    // check limit
    if (currentIndex > 1) {
      // step back
      stepBack();
      // enable next button
      const nextButton = document.querySelector(".next");
      nextButton.removeAttribute("disabled");
      handleNext();
    } else {
      // disable previous button
      previousBtn.setAttribute("disabled", "");
    }
  });
};

export const handleNext = () => {
  // TODO: compare current position to userChoicesLenght 
  // enable next button
  const nextButton = document.querySelector(".next");
  nextButton.removeAttribute("disabled");
  // get current index
  const currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
  // get user choices length
  const userChoicesLength = JSON.parse(
    sessionStorage.getItem("userChoices")
  ).length;
  console.log("current/userChoices", currentIndex, userChoicesLength);
  nextButton.addEventListener("click", (e) => {
    e.stopPropagation();
    if (currentIndex <= userChoicesLength) {
      //  TODO: remove hidden
      nextStep();
    } else {
      // disable next button
      document.querySelector(".next").setAttribute("disabled", "");
    }
  });
};
