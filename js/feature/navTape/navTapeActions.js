import { nextStep, stepBack } from "../questions/questionActions.js";

export const hideNavTape = () => {
  // hide navigation
  document.querySelector(".cursorContainer").classList.add("hidden");
  document.querySelector(".navBtn").classList.add("hidden");
}

// Cursor actions

export const moveCursor = (index) => {
  const pos = "#cursor" + index;
  const currentCursor = document.querySelector(pos).classList.add("active")
};

export const removeCursor = (index) => {
  const pos = "#cursor" + index;
  const currentCursor = document.querySelector(pos).classList.remove("active")
};

// Button actions
// TODO: debug previous next btns

export const handlePrevious = () => {
  // get previous button
  const previousBtn = document.querySelector(".previous");
  previousBtn.removeAttribute("disabled");

  previousBtn.addEventListener("click", (e) => {
    // get current index
    const currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
    // 
    if (currentIndex > 1) {
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
