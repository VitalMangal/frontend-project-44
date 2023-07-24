import runGameBase from '../index.js';
import getRandomInt from '../utils/getRandomInt.js';

const getGcd = (el1, el2) => {
  if (el2 !== 0) {
    const newElement = el1 % el2;
    return getGcd(el2, newElement);
  }
  return el1;
};

const generateGcdData = (startOfRandomNumberRange = 2, endOfRandomNumberRange = 100) => {
  const el1 = getRandomInt(startOfRandomNumberRange, endOfRandomNumberRange);
  const el2 = getRandomInt(startOfRandomNumberRange, endOfRandomNumberRange);
  const question = `${el1} ${el2}`;
  const answer = String(getGcd(el1, el2));
  return [question, answer];
};

const runGcdGame = () => {
  const gameName = 'brain-gcd';
  const exercise = 'Find the greatest common divisor of given numbers.';
  runGameBase(generateGcdData, gameName, exercise);
};

export default runGcdGame;
