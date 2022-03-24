import { nextStep } from "../index.js";
import { setUserChoice } from "../index.js";
import { loadQuestions } from "../services/load.js";

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
    <section class="questions">
      <div class="question0">
        <h2>Découvrez votre souris</h2>
        <div class="answerGroup">
          <button class="firstAnswer answer">Go !</button>
        </div>
      </div>
    </section>
      `;
    main.insertAdjacentHTML("beforeend", first);
  }

  appendBtn(currentPos) {
    const userChoices = JSON.parse(sessionStorage.getItem("userChoices"));
    const button = `
            <div class="question${currentPos + 1}">
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
    main.insertAdjacentHTML("beforeend", button);
  }

  handleClick(currentPos) {
    const answers = document.querySelectorAll(".answer");
    answers.forEach((answer) => {
      answer.addEventListener("click", (e) => {
        e.stopPropagation;
        let pos;
        if (e.target.id !== "") {
          setUserChoice(e.target.id);
        }
        if(currentPos === undefined){
          pos = 0
        }else{
          pos = currentPos + 1
        }
        const toRemove = '.question' + pos;
        console.log(toRemove)
        this.number++;
        nextStep(this.number);
        const previousQuestion = document.querySelector(toRemove);
        previousQuestion.className = toRemove + " hidden"
      });
    });
  }
}

export default Question;
