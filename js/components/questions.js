class Question {
    constructor(number, question, qMulti, choices, parent){
      this.number = number
      this.question = question
      this.qMulti = qMulti
      this.choices = choices
      this.parent = parent
    }

    appendFirst(){
      const first = `
      <section class="question">
        <h2>Découvrez votre souris</h2>
        <div class="answerGroup">
          <button class="firstAnswer answer">Go !</button>
        </div>
      </section>
      `;
      main.insertAdjacentHTML('beforeend', first);  
    }

    appendBtn(){
        const button = `
            <section class="question">
            ${this.question === undefined ?
              this.qMulti.map(element => {
                if (stack.indexOf(element.parent) > -1){
                  return `<h2>${ element.question }</h2>`
                }
              }).join('') :
              `<h2>${this.question}</h2>`
            }
            <div class="answerGroup">
              ${this.choices.map(choice => {
                if(choice.src !== undefined){
                  return `
                  <div class="answer">
                    <img src= ${ choice.src } />
                  </div>`
                }
                if((stack.indexOf(choice.parent) > -1) || choice.parent === undefined){
                  return `<button class="answer">${ choice.title }</button>`
                }
              }).join('')}
              </div>
            </section>
        `;
        main.insertAdjacentHTML('beforeend', button);
    }

    handleClick(){
      const question = document.querySelector('.question')
      const answers = document.querySelectorAll('.answer')
      answers.forEach(answer => {
        answer.addEventListener('click', (e) => {
          // console.log(e.target)
          stackPath(e.target.innerText)
          main.removeChild(question)
          this.number ++
          // console.log(this.number)
          nextStep(this.number)
          e.stopPropagation
        })
      })
    }
}