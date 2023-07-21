import runGameBase from '../index.js';
import getRandomInt from '../utils/getRandomInt.js';

const isNumEven = (num) => ((num % 2 === 0));

const evenData = () => {
  const question = getRandomInt();
  const answer = (isNumEven(question)) ? 'yes' : 'no';
  const resultt = [question, answer];
  return resultt;
};

const runEvenGame = () => {
  const gameName = 'brain-even';
  const exercise = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGameBase(evenData, gameName, exercise);
};

export default runEvenGame;
