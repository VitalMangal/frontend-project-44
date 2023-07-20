import gameBase from '../index.js';
import greeting from '../cli.js';
import getRandomInt from '../utils/getRandomInt.js';

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
    const questionString = question.join(' ');
    const roundResult = [questionString, answer];
    result.push(roundResult);
  }
  return result;
};

const runProgressionGame = () => {
  console.log('brain-progression');
  const userName = greeting();
  console.log('What number is missing in the progression?');
  const arr = progressionData();
  gameBase(userName, arr);
};

export default runProgressionGame;
