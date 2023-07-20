import gameBase from '../src/index.js';
import greeting from '../src/cli.js';
import calcData from './calcData.js';

const runCalculatorGame = () => {
  console.log('brain-calc');
  const userName = greeting();
  console.log('What is the result of the expression?');
  const arr = calcData();
  gameBase(userName, arr);
};

export default runCalculatorGame;
