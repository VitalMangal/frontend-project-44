import getRandomInt from '../src/utils/getRandomInt.js';

const calcData = () => {
  const result = [];
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const el1 = getRandomInt();
    const el2 = getRandomInt();
    const signs = ['+', '*', '-'];
    const sign = signs[getRandomInt(0, 2)];
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
