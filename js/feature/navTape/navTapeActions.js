import { nextStep } from "../questions/questionActions.js";

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
  // get current index & question
  const currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
  const currentQuestion = document.querySelector(`#question${currentIndex}`);
  // check if it exists
  if (currentQuestion === null) return;
  // remove current
  currentQuestion.remove();
  // get previousIndex
  const previousIndex = currentIndex - 1;
  // remove hidden class to previous question
  const previousQuestion = document.querySelector(`#question${previousIndex}`);
  previousQuestion.classList.remove("hidden");
  // remove cursor
  removeCursor(previousIndex);
  // adjust currentIndex
  sessionStorage.setItem("currentIndex", previousIndex);
};

const handleNext = () => {
  const currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
  const currentQuestion = document.querySelector(`#question${currentIndex}`);
  console.log("hdlNext", currentIndex, currentQuestion);
  // append Next
  nextStep()
};

export const triggerNavButton = () => {
  // get current index
  const currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
  console.log(currentIndex);
  // get buttons
  const previousButton = document.querySelector(".previous");
  const nextButton = document.querySelector(".next");
  // get userData length
  const userDataLength = JSON.parse(sessionStorage.getItem("userData")).length;
  // disable btns
  if (currentIndex <= 1) {
    previousButton.setAttribute("disabled", "");
  }
  if (currentIndex >= userDataLength) {
    nextButton.setAttribute("disabled", "");
  }

  if (currentIndex === 2) {
    previousButton.removeAttribute("disabled");
    previousButton.addEventListener("click", () => {
      //  if(currentIndex) currentQuestionuestion exist
      handlePrevious();
      nextButton.removeAttribute("disabled");
    });
    nextButton.addEventListener("click", () => {
      handleNext();
    });
  }

  // eg.
  // if (currentIndex + 1 >= userDataLength) {
  // document.querySelector(".next").setAttribute("disabled", "");
  // }
};
