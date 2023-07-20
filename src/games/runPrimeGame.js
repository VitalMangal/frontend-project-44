import gameBase from '../index.js';
import greeting from '../cli.js';
import getRandomInt from '../utils/getRandomInt.js';

const isPrime = (num) => {
  for (let i = 2; i < Math.ceil(num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeData = () => {
  const result = [];
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const question = getRandomInt();
    let answer = '';
    if (isPrime(question)) {
      answer = 'yes';
    } else { answer = 'no'; }
    const subResult = [question, answer];
    result.push(subResult);
  }
  return result;
};

const runPrimeGame = () => {
  console.log('brain-prime');
  const userName = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const arr = primeData();
  gameBase(userName, arr);
};

export default runPrimeGame;
