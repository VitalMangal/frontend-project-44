import runGameBase from '../index.js';
import getRandomInt from '../utils/getRandomInt.js';

const isNumEven = (num) => {
  let result = '';
  const remainder = num % 2;
  switch (remainder) {
    case 1:
      result = 'no';
      break;
    case 0:
      result = 'yes';
      break;
    default:
      result = NaN;
  }
  return result;
};

const evenData = () => {
  const question = getRandomInt();
  const answer = isNumEven(question);
  const resultt = [question, answer];
  return resultt;
};

const runEvenGame = () => {
  const gameName = 'brain-even';
  const exercise = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGameBase(evenData, gameName, exercise);
};

export default runEvenGame;
