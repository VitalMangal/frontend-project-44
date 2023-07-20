import gameBase from '../index.js';
import greeting from '../cli.js';
import primeData from './primeData.js';

const runPrimeGame = () => {
  console.log('brain-prime');
  const userName = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const arr = primeData();
  gameBase(userName, arr);
};

export default runPrimeGame;
