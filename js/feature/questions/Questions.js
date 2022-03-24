import { nextStep, stepBack } from "./questionActions.js";
import { setUserChoice } from "../../index.js";

class Question {
  constructor(number, question, qMulti, choices, parent) {
    this.number = number;
    this.question = question;
    this.qMulti = qMulti;
    this.choices = choices;
    this.parent = parent;
  }

  appendFirst() {
    const first = `
    <section id="content">
      <div id="questions">
        <div id="question0" class="question firstQuestion">
          <h2>Découvrez votre souris</h2>
          <div class="answerGroup">
            <button class="firstAnswer answer">Go !</button>
          </div>
        </div>
      </div>
    </section>
      `;
    document.querySelector("#main").insertAdjacentHTML("beforeend", first);
  }

  appendQuestion() {
    const userChoices = JSON.parse(sessionStorage.getItem("userChoices"));
    const button = `
            <div id="question${this.number + 1}" class="question">
            ${
              this.question === undefined
                ? this.qMulti
                    .map((element) => {
                      if (userChoices.indexOf(element.parent) > -1) {
                        return `<h2>${element.question}</h2>`;
                      }
                    })
                    .join("")
                : `<h2>${this.question}</h2>`
            }
            <div class="answerGroup">
              ${this.choices
                .map((choice) => {
                  if (choice.src !== undefined) {
                    return `
                  <div class="answer">
                    <img id=${choice.title} src= ${choice.src} />
                  </div>`;
                  }
                  if (
                    userChoices.indexOf(choice.parent) > -1 ||
                    choice.parent === undefined
                  ) {
                    return `<button id=${choice.title} class="answer">${choice.title}</button>`;
                  }
                })
                .join("")}
              </div>
            </div>
        `;
    questions.insertAdjacentHTML("beforeend", button);
  }

  handleClick() {
    const answers = document.querySelectorAll(".answer");
    answers.forEach((answer) => {
      answer.addEventListener("click", (e) => {
        e.stopPropagation;
        let pos;
        if (e.target.id !== "") {
          setUserChoice(e.target.id);
        }
        this.number++;
        nextStep(this.number);
        const toRemove = "#question" + this.number;
        const previousQuestion = document.querySelector(toRemove);
        previousQuestion.className = "hidden";
      });
    });
  }
}

export default Question;
