import runGameBase from '../index.js';
import getRandomInt from '../utils/getRandomInt.js';

const getProgQuestion = (firstElementOfProgression, questionLength, booster) => {
  const question = [firstElementOfProgression];
  let elementOfArr = firstElementOfProgression;
  for (let i = 0; i < questionLength; i += 1) {
    question.push(elementOfArr + booster);
    elementOfArr += booster;
  }
  return question;
};

const generateProgresData = (startProgLen = 5, endProgLen = 10, startBoost = 1, endBoost = 10) => {
  const firstElementOfProgression = getRandomInt();
  const booster = getRandomInt(startBoost, endBoost);
  const questionLength = getRandomInt(startProgLen, endProgLen);
  const question = getProgQuestion(firstElementOfProgression, questionLength, booster);
  const indx = getRandomInt(0, question.length - 1);
  const answer = String(question[indx]);
  question[indx] = '..';
  const questionString = question.join(' ');
  return [questionString, answer];
};

const runProgressionGame = () => {
  const gameName = 'brain-progression';
  const exercise = 'What number is missing in the progression?';
  runGameBase(generateProgresData, gameName, exercise);
};

export default runProgressionGame;
