import runGameBase from '../index.js';
import getRandomInt from '../utils/getRandomInt.js';

const getAnswerValue = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const evenData = () => {
  const question = getRandomInt();
  const answer = getAnswerValue(question);
  const resultt = [question, answer];
  return resultt;
};

const runEvenGame = () => {
  const gameName = 'brain-even';
  const exercise = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGameBase(evenData, gameName, exercise);
};

export default runEvenGame;
