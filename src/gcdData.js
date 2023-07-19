import rndm from './rndm.js';

const gcdData = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    let el1 = rndm(100, 1);
    let el2 = rndm(100, 1);
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
