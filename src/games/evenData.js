import getRandomInt from '../utils/getRandomInt.js';

const isNumEven = (num) => {
  let result = '';
  const remainder = num % 2;
  switch (remainder) {
    case 1:
      result = 'no';
      break;
    case 0:
      result = 'yes';
      break;
    default:
      result = NaN;
  }
  return result;
};

const evenData = () => {
  const result = [];
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const question = getRandomInt();
    const answer = isNumEven(question);
    const subResult = [question, answer];
    result.push(subResult);
  }
  return result;
};

export default evenData;
