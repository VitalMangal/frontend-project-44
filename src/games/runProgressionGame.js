import runGameBase from '../index.js';
import getRandomInt from '../utils/getRandomInt.js';

const progressionData = () => {
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
  const result = [questionString, answer];
  return result;
};

const runProgressionGame = () => {
  const gameName = 'brain-progression';
  const exercise = 'What number is missing in the progression?';
  runGameBase(progressionData, gameName, exercise);
};

export default runProgressionGame;
