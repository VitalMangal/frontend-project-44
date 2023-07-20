import gameBase from '../index.js';
import greeting from '../cli.js';
import getRandomInt from '../utils/getRandomInt.js';

const calcData = () => {
  const el1 = getRandomInt();
  const el2 = getRandomInt();
  const signs = ['+', '*', '-'];
  const sign = signs[getRandomInt(0, signs.length - 1)];
  const question = `${el1} ${sign} ${el2}`;
  let answer = 0;
  switch (sign) {
    case '+':
      answer = String(el1 + el2);
      break;
    case '*':
      answer = String(el1 * el2);
      break;
    case '-':
      answer = String(el1 - el2);
      break;
    default:
      answer = NaN;
      break;
  }
  const result = [question, answer];
  return result;
};

const runCalculatorGame = () => {
  console.log('brain-calc');
  const userName = greeting();
  console.log('What is the result of the expression?');
  gameBase(userName, calcData);
};

export default runCalculatorGame;
