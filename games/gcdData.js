import getRandomInt from '../src/utils/getRandomInt.js';

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

export default gcdData;
