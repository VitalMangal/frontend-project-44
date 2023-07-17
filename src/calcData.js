import rndm from './rndm.js';

const calcData = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const el1 = rndm();
    const el2 = rndm();
    const signs = ['+', '*', '-'];
    const sign = signs[rndm(3)];
    const question = `${el1} ${sign} ${el2}`;
    let answer = 0;
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
        answer = NaN;
        break;
    }
    const subResult = [question, answer];
    result.push(subResult);
  }
  return result;
};

export default calcData;
