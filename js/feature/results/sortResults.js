export const sortResults = (datas, userData, questionsLength) => {
  const maxLength = 6;
  let userResults = [];
  let highScore = 0;
  // calculate score and stack 6 highests
  datas.forEach((result, index) => {
    // calc
    let score = parseInt(result.value);
    const tags = result.tags;
    // add score for each tags matching
    const fraction = questionsLength;
    tags.forEach((tag) => {
      if (userData.indexOf(tag) > -1) {
        score += fraction;
      }
    });
    // compare datas
    const data = datas[index];
    /* const lastIndex = userResults.length - 1;
    const smallest = userResults[lastIndex]; */
    // push and sort result score
    //console.log(userResults)
    userResults.push({ data, score });
    userResults.sort((a, b) => {
      return b.score - a.score;
    });
    // pop last if maxlength
    if (userResults.length > maxLength) {
      userResults.pop();
    }
  });
  return userResults;
};
