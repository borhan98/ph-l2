const survey = ["A", "B", "D", "A", "A", "C", "D", "B", "C", "D", "D", "A", "B", "C", "D", "A", "B", "C", "D", "D", "C", "D"];

const surveyResult = survey.reduce((acc, vote) => {
  // !Option: 1
  // if (!acc[vote]) {
  //   acc[vote] = 1;
  // } else {
  //   acc[vote] += 1;
  // }

  // !Option: 2
  acc[vote] = acc[vote] ? acc[vote] + 1 : 1;

  return acc;
}, {})

console.log(surveyResult);