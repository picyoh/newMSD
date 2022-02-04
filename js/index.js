const main = document.getElementById("main");
let datas;
let results;
let stack = [];

function init() {
    let firstQ = new Question(-1);
    firstQ.appendFirst();
    loadQuestions();
    firstQ.handleClick();
}

// ajouter parent
function nextStep(number){
    const current = datas[number]
    if(current.final) {
        loadResult()
        .then(data => console.log(data))
        .catch(reason => console.log(reason.message))
        
        const Result = new Results(results)

        // result.appendResults()
        // result.handleClick()
    }else {
        const NewQ = new Question(number, current.question, current.qMulti, current.choices, current.choices.parent)
        NewQ.appendBtn()
        NewQ.handleClick()   
    }
}

function stepBack(){

}

function stackPath(btnValue){
 if (stack.indexOf(btnValue) < 0){
     stack.push(btnValue);
 } 
 console.log(stack)
}

init();
