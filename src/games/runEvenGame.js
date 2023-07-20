import gameBase from '../index.js';
import greeting from '../cli.js';
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
  const resultt = [];
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const question = getRandomInt();
    const answer = isNumEven(question);
    const subResult = [question, answer];
    resultt.push(subResult);
  }
  return resultt;
};

const runEvenGame = () => {
  console.log('brain-even');
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const arr = evenData();
  gameBase(userName, arr);
};

export default runEvenGame;
