import runGameBase from '../index.js';
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
  const question = getRandomInt(1, 100);
  let answer = '';
  if (isPrime(question)) {
    answer = 'yes';
  } else { answer = 'no'; }
  const result = [question, answer];
  return result;
};

const runPrimeGame = () => {
  console.log('brain-prime');
  const userName = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  runGameBase(userName, primeData);
};

export default runPrimeGame;
