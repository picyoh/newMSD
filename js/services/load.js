function loadQuestions() {
  fetch("/mocked/questions.json")
    .then((response) => response.json())
    .then((response) => {
      // get Json
      const datas = response.questions;
      sessionStorage.setItem('questionsItem', JSON.stringify(datas));
      return datas;
    })
    .catch((error) => console.log("erreur json " + error));
}

function loadResult() {
    fetch("/mocked/results.json")
    .then((response) => response.json())
    .then((response) => {
      // get Json
      const datas = response.results;
      sessionStorage.setItem('resultsItem', JSON.stringify(datas));
      return datas;
    })
    .catch((error) => console.log("erreur json " + error));
}
export { loadQuestions, loadResult };
