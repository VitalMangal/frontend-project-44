import runGameBase from '../index.js';
import getRandomInt from '../utils/getRandomInt.js';

const getCalcAnswer = (el1, el2, sign) => {
  let answer = '';
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
      throw new Error(`Unknown sign: '${sign}'!`);
  }
  return answer;
};

const calcData = () => {
  const el1 = getRandomInt();
  const el2 = getRandomInt();
  const signs = ['+', '*', '-'];
  const sign = signs[getRandomInt(0, signs.length - 1)];
  const question = `${el1} ${sign} ${el2}`;
  const answer = getCalcAnswer(el1, el2, sign);
  const result = [question, answer];
  return result;
};

const runCalculatorGame = () => {
  const gameName = 'brain-calc';
  const exercise = 'What is the result of the expression?';
  runGameBase(calcData, gameName, exercise);
};

export default runCalculatorGame;
