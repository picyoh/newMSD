import { nextStep, stepBack } from "../questions/questionActions.js";

// Cursor actions
export const moveCursor = (currentIndex) => {
  const pos = "#cursor" + currentIndex;
  const currentCursor = document.querySelector(pos).classList.add("active");
};

export const removeCursor = (currentIndex) => {
  const pos = "#cursor" + currentIndex;
  const currentCursor = document.querySelector(pos).classList.remove("active");
};

// Button actions
const handlePrevious = () => {
  document.querySelector("#navNext").removeAttribute("disabled");
  const currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
  //console.log("hdlPrev", currentIndex);
  // step back
  stepBack();
};

const handleNext = () => {
  const currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
  //console.log("hdlNext", currentIndex);
  // append Next
  nextStep();
};


export const triggerNavButton = () => {
  // get current index
  const currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
  /*
  console.log("trig", currentIndex);
  */
  // get buttons
  const previousButton = document.querySelector("#navPrev");
  const nextButton = document.querySelector("#navNext");
  // get userData length
  const userDataLength = JSON.parse(sessionStorage.getItem("userData")).length;
  // disable btns
  if (currentIndex <= 1) {
    previousButton.setAttribute("disabled", "");
  }
  if (currentIndex === userDataLength) {
    nextButton.setAttribute("disabled", "");
  }

  if (currentIndex > 1 && currentIndex < 9) {
    previousButton.removeAttribute("disabled");
    // handle buttons
    previousButton.addEventListener("click", handlePrevious);
    nextButton.addEventListener("click", handleNext);
  }
};
