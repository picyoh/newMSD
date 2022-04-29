export const sortResults = (datas, userChoices, questionsLength) => {
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
      if (userChoices.indexOf(tag) > -1) {
        score += fraction;
      }
    });
    // console.log(score);
    const data = datas[index];
    const lastIndex = userResults.length - 1;
    const smallest = userResults[lastIndex];
    // stack 6 results in userResults
    // push and sort result score
    userResults.push({ data, score });
    userResults.sort((a, b) => {
      return b.score - a.score;
    });
    // pop last if maxlength
    if (userResults.length > maxLength) {
      userResults.pop();
    }
  });
  console.log(userResults);
  return userResults;
}
