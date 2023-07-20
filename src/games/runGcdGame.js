import gameBase from '../index.js';
import greeting from '../cli.js';
import getRandomInt from '../utils/getRandomInt.js';

const gcdData = () => {
  const result = [];
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
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
    const subResult = [question, answer];
    result.push(subResult);
  }
  return result;
};
const runGcdGame = () => {
  console.log('brain-gcd');
  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  const arr = gcdData();
  gameBase(userName, arr);
};

export default runGcdGame;
