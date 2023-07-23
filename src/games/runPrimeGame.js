import runGameBase from '../index.js';
import getRandomInt from '../utils/getRandomInt.js';

const isPrime = (num) => {
  if (num === 1) { return false; }
  for (let i = 2; i < Math.ceil(num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeData = () => {
  const rangeStart = 1;
  const rangeEnd = 100;
  const question = getRandomInt(rangeStart, rangeEnd);
  const answer = (isPrime(question)) ? 'yes' : 'no';
  return [question, answer];
};

const runPrimeGame = () => {
  const gameName = 'brain-prime';
  const exercise = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGameBase(primeData, gameName, exercise);
};

export default runPrimeGame;
