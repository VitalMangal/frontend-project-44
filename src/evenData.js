import isNumEven from './isNumEven.js';
import rndm from './rndm.js';

const evenData = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const question = rndm();
    const answer = isNumEven(question);
    const subResult = [question, answer];
    result.push(subResult);
  }
  return result;
};

export default evenData;
