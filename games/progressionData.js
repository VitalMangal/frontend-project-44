import getRandomInt from '../src/utils/getRandomInt.js';

const progressionData = () => {
  const result = [];
  const numberOfRounds = 3;
  for (let j = 0; j < numberOfRounds; j += 1) {
    let elementOfArr = getRandomInt();
    const booster = getRandomInt(1, 10);
    const question = [elementOfArr];
    const questionLength = getRandomInt(5, 10);
    for (let i = 0; i < questionLength; i += 1) {
      question.push(elementOfArr + booster);
      elementOfArr += booster;
    }
    const indx = getRandomInt(0, questionLength);
    const answer = String(question[indx]);
    question[indx] = '..';
    const roundResult = [question, answer];
    result.push(roundResult);
  }
  return result;
};

export default progressionData;
