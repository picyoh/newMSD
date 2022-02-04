function loadQuestions(){
    fetch('../datas/questions.json')
    .then(response => response.json())
    .then((response) => {
        // get Json
        datas = response.questions;
        // console.log(datas)
        return datas;
    })
    .catch(error => console.log('erreur json' + error));
}

async function loadResult(){
    let response = await fetch('/datas/results.json');
    let data = await response.json();
    return data;
}