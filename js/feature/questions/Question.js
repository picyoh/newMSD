export const appendFirstQuestion = () => {
  const firstValue = JSON.parse(sessionStorage.getItem("questionsItem"))[0]
    .question;
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
  sessionStorage.setItem("currentIndex", "1");
};

export const appendQuestion = (currentIndex) => {
  const currentQuestion = JSON.parse(sessionStorage.getItem("questionsItem"))[
    currentIndex
  ];
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  //console.log(currentQuestion);
  const button = `
            <div id="question${currentIndex}" class="question ariseQuestion">
            ${
              currentQuestion.question === undefined
                ? currentQuestion.qMulti
                    .map((element) => {
                      //console.log(element);
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
                  //console.log(choice);
                  if (choice.titles) {
                    let checkboxes = '';
                    choice.titles.forEach((element)=>{
                      checkboxes +=
                      `
                      <input type="checkbox" id="${element.tag}" name="${element.tag}" />
                      <label for="${element.tag}">${element.title}</label>
                      `
                    });
                    checkboxes += 
                    `
                    <label for="other_${choice.name}">Autres : </label>
                    <input type="text" id="other_${choice.name}" name="other_${choice.name}" />
                    <button id='checkbox_validation> class='validation'>Valider</button>
                    `
                    //console.log(checkboxes);
                    return `
                    <div class="answer">
                      <div id='${choice.name}'>
                      ${checkboxes}
                      </div>
                    </div>
                    `;
                  };
                  if (choice.src !== undefined) {
                    return `
                  <div class="answer">
                    <img id=${choice.title} src= ${choice.src} />
                  </div>`;
                  }
                  if (
                    userData.indexOf(choice.parent) > -1 ||
                    choice.parent === undefined ||
                    choice.parent === ""
                  ) {
                    console.log(choice.tag);
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
  const arisingQuestion = document.querySelector("#question" + toRemove);
  setTimeout(function () {
    arisingQuestion.classList.remove("ariseQuestion");
  }, 1);
};
