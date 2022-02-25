function sortResults(datas, userChoices) {
  const dataArray = datas.results;

  const maxLength = 6;
  let userResults = [];
  let nextScore = 0;
  // calculate score and stack 6 highests
  dataArray.forEach((result, index) => {
    let score = parseInt(result.value);
    const tags = result.tags;
    // add score for each tags matching
    tags.forEach((tag) => {
      if (userChoices.indexOf(tag) > -1) {
        //   TODO:implementer fraction questions
        score += 10;
      }
    });
    const data = dataArray[index];
    // stack 6 results in userResults
    if (userResults.length < maxLength) {
      //   push if isSuperior
      if (score >= nextScore) return userResults.push({ data, score }), (nextScore = score);
      
      if (score < nextScore) {
        const first = userResults[0];
        // unshift the lowest
        if (score < first.score) {
          return userResults.unshift({ data, score });
        }
        // shift then unshfift lowest & current
        if (score >= first.score) {
          return (
            userResults.shift(),
            userResults.unshift(first, { data, score })
          );
        }
      }
    }
    //shift & push if score is highest when array is full
    if (userResults.length > maxLength && score >= nextScore) {
      return (
        userResults.shift(),
        userResults.push({ index: data, score: score }),
        (nextScore = score)
      );
    }
  });
  console.log(userResults)
  return userResults;
}

export { sortResults }