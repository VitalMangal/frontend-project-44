import runGameBase from '../index.js';
import getRandomInt from '../utils/getRandomInt.js';

const isNumEven = (num) => ((num % 2 === 0));

const generateEvenData = () => {
  const question = getRandomInt();
  const answer = (isNumEven(question)) ? 'yes' : 'no';
  return [question, answer];
};

const runEvenGame = () => {
  const gameName = 'brain-even';
  const exercise = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGameBase(generateEvenData, gameName, exercise);
};

export default runEvenGame;
