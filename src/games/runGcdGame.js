import runGameBase from '../index.js';
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
  const gameName = 'brain-gcd';
  const exercise = 'Find the greatest common divisor of given numbers.';
  runGameBase(gcdData, gameName, exercise);
};

export default runGcdGame;
