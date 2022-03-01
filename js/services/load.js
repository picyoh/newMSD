function loadQuestions() {
  fetch("/mocked/questions.json")
    .then((response) => response.json())
    .then((response) => {
      // get Json
      const questionDatas = response.questions;
      sessionStorage.setItem('questionsItem', JSON.stringify(questionDatas));
    })
    .catch((error) => console.log("erreur json " + error));
}

function loadResult() {
    fetch("/mocked/results.json")
    .then((response) => response.json())
    .then((response) => {
      // get Json
      const resultDatas = response.results;
      sessionStorage.setItem('resultsItem', JSON.stringify(resultDatas));
    })
    .catch((error) => console.log("erreur json " + error));
}
export { loadQuestions, loadResult };
