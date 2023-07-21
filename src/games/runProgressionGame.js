import runGameBase from '../index.js';
import getRandomInt from '../utils/getRandomInt.js';

const getProgressionQuestion = (startOfProgressionLength = 5, endOfProgressionLength = 10) => {
  let elementOfArr = getRandomInt();
  const startOfBoosterRange = 1;
  const endOfBoosterRange = 10;
  const booster = getRandomInt(startOfBoosterRange, endOfBoosterRange);
  const question = [elementOfArr];
  const questionLength = getRandomInt(startOfProgressionLength, endOfProgressionLength);
  for (let i = 0; i < questionLength; i += 1) {
    question.push(elementOfArr + booster);
    elementOfArr += booster;
  }
  return question;
};

const progressionData = () => {
  const question = getProgressionQuestion();
  const indx = getRandomInt(0, question.length - 1);
  const answer = question[indx];
  question[indx] = '..';
  const questionString = question.join(' ');
  return [questionString, answer];
};

const runProgressionGame = () => {
  const gameName = 'brain-progression';
  const exercise = 'What number is missing in the progression?';
  runGameBase(progressionData, gameName, exercise);
};

export default runProgressionGame;
