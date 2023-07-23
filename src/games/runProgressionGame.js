import runGameBase from '../index.js';
import getRandomInt from '../utils/getRandomInt.js';

const getProgQuestion = (startProgLen = 5, endProgLen = 10, startBoost = 1, endBoost = 10) => {
  let elementOfArr = getRandomInt();
  const booster = getRandomInt(startBoost, endBoost);
  const question = [elementOfArr];
  const questionLength = getRandomInt(startProgLen, endProgLen);
  for (let i = 0; i < questionLength; i += 1) {
    question.push(elementOfArr + booster);
    elementOfArr += booster;
  }
  return question;
};

const progressionData = () => {
  const question = getProgQuestion();
  const indx = getRandomInt(0, question.length - 1);
  const answer = String(question[indx]);
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
