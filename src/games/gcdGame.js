import gameBase from '../index.js';
import greeting from '../cli.js';
import gcdData from './gcdData.js';

const runGcdGame = () => {
  console.log('brain-gcd');
  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  const arr = gcdData();
  gameBase(userName, arr);
};

export default runGcdGame;
