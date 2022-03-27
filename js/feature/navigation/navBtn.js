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
    questions.forEach((question)=>{
      if(question.classList.contains('hidden') === false){
        // get previous number
        const previousNumber = question.id.slice(-1) -1
        const previousQuestion = "#question" + previousNumber;
        console.log(previousQuestion)
        // add hidden to current question
        question.remove()
        // remove hidden to previous question
        document.querySelector(previousQuestion).classList.remove("hidden")
        // TODO: removeCursor
      }
    })
  });
};
