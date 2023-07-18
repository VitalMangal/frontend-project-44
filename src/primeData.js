import isPrime from './isPrime.js';
import rndm from './rndm.js';

const primeData = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const question = rndm();
    let answer = '';
    if (isPrime(question)) {
      answer = 'yes';
    } else { answer = 'no'; }
    const subResult = [question, answer];
    result.push(subResult);
  }
  return result;
};

export default primeData;
