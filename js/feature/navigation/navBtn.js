import { nextStep } from "../questions/questionActions.js";
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
  const previousBtn = document.querySelector(".previous");
  previousBtn.addEventListener("click", () => {
    const questions = document.querySelectorAll(".question");
    questions.forEach((question) => {
      if (question.classList.contains("hidden") === false) {
        // get previous number
        const previousIndex = question.id.slice(-1) - 1;
        const previousQuestion = "#question" + previousIndex;
        // remove current question
        question.remove();
        handleNext();
        // remove hidden to previous question
        document.querySelector(previousQuestion).classList.remove("hidden");
        removeCursor(previousIndex);
      }
    });
  });
};

export const handleNext = () => {
  // enable next button
  const nextButton = document.querySelector(".next");
  nextButton.removeAttribute("disabled");
  nextButton.addEventListener("click", (e) => {
    const nextStepIndex = JSON.parse(sessionStorage.getItem("userChoices")).length;
    console.log(nextStepIndex);
    nextStep(nextStepIndex);
  }, {once: true});
};
