import rndm from './rndm.js';

const progressionData = () => {
  const result = [];
  for (let j = 0; j < 3; j += 1) {
    let elementOfArr = rndm();
    const booster = rndm(10) + 1;// Случайное число от 1 до 10
    const question = [elementOfArr];
    const questionLength = (rndm(5) + 5);// Случайное число от 5 до 9
    for (let i = 0; i <= questionLength; i += 1) {
      question.push(elementOfArr + booster);
      elementOfArr += booster;
    }
    const indx = rndm(question.length);
    const answer = String(question[indx]);
    question[indx] = '..';
    const roundResult = [question, answer];
    result.push(roundResult);
  }
  return result;
};

export default progressionData;
