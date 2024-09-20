export const appendFirstQuestion = () => {
  const firstValue= JSON.parse(sessionStorage.getItem('questionsItem'))[0].question;
  const first = `
    <section id="content">
      <div id="questions">
        <div id="question0" class="question firstQuestion">
          <h2>Découvrez votre souris</h2>
          <div class="answerGroup">
            <button class="firstAnswer answer">${firstValue}</button>
          </div>
        </div>
      </div>
    </section>
      `;
  document.querySelector("#main").insertAdjacentHTML("beforeend", first);
  sessionStorage.setItem('currentIndex', '1');
};

export const appendQuestion = (currentIndex) => {
  const currentQuestion = JSON.parse(sessionStorage.getItem("questionsItem"))[
    currentIndex
  ];
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  console.log(currentQuestion)
  const button = `
            <div id="question${currentIndex}" class="question ariseQuestion">
            ${
              currentQuestion.question === undefined
                ? currentQuestion.qMulti
                    .map((element) => {
                      console.log(element)
                      if (userData.indexOf(element.parent) > -1) {
                        return `<h2>${element.question}</h2>`;
                      }
                    })
                    .join("")
                : `<h2>${currentQuestion.question}</h2>`
            }
            <div class="answerGroup">
              ${currentQuestion.choices
                .map((choice) => {
                  if (choice.src !== undefined) {
                    return `
                  <div class="answer">
                    <img id=${choice.title} src= ${choice.src} />
                  </div>`;
                  }
                  if (
                    userData.indexOf(choice.parent) > -1 ||
                    choice.parent === undefined || choice.parent === "" 
                  ) {
                    return `<button id=${choice.tag.replace(
                      " ",
                      "_"
                    )} class="answer">${choice.title}</button>`;
                  }
                })
                .join("")}
              </div>
            </div>
        `;
  questions.insertAdjacentHTML("beforeend", button);
  animationRemoveClass(currentIndex);
};

export const animationRemoveClass = (toRemove) => {
const arisingQuestion = document.querySelector('#question' + toRemove);
setTimeout(function() {
  arisingQuestion.classList.remove('ariseQuestion');
}, 1)
}