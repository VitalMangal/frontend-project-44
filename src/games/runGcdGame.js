import runGameBase from '../index.js';
import getRandomInt from '../utils/getRandomInt.js';

const getGcd = (el1, el2) => {
  while (el1 !== 0 && el2 !== 0) {
    if (el1 > el2) {
      // eslint-disable-next-line no-param-reassign
      el1 %= el2;
    } else {
      // eslint-disable-next-line no-param-reassign
      el2 %= el1;
    }
  }
  const answer = String(el1 + el2);
  return answer;
};

const gcdData = () => {
  const el1 = getRandomInt(2, 100);
  const el2 = getRandomInt(2, 100);
  const question = `${el1} ${el2}`;
  const answer = getGcd(el1, el2);
  const result = [question, answer];
  return result;
};

const runGcdGame = () => {
  const gameName = 'brain-gcd';
  const exercise = 'Find the greatest common divisor of given numbers.';
  runGameBase(gcdData, gameName, exercise);
};

export default runGcdGame;
