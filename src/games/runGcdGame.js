import gameBase from '../index.js';
import greeting from '../cli.js';
import getRandomInt from '../utils/getRandomInt.js';

const gcdData = () => {
  let el1 = getRandomInt(2, 100);
  let el2 = getRandomInt(2, 100);
  const question = `${el1} ${el2}`;
  while (el1 !== 0 && el2 !== 0) {
    if (el1 > el2) {
      el1 %= el2;
    } else {
      el2 %= el1;
    }
  }
  const answer = String(el1 + el2);
  const result = [question, answer];
  return result;
};
const runGcdGame = () => {
  console.log('brain-gcd');
  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  gameBase(userName, gcdData);
};

export default runGcdGame;
