import gameBase from '../index.js';
import greeting from '../cli.js';
import getRandomInt from '../utils/getRandomInt.js';

const calcData = () => {
  const result = [];
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const el1 = getRandomInt();
    const el2 = getRandomInt();
    const signs = ['+', '*', '-'];
    const sign = signs[getRandomInt(0, 2)];
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
    const subResult = [question, answer];
    result.push(subResult);
  }
  return result;
};

const runCalculatorGame = () => {
  console.log('brain-calc');
  const userName = greeting();
  console.log('What is the result of the expression?');
  const arr = calcData();
  gameBase(userName, arr);
};

export default runCalculatorGame;
