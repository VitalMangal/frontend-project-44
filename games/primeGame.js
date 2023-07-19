import gameBase from '../src/index.js';
import greeting from '../src/cli.js';
import primeData from './primeData.js';

const primeGame = () => {
  console.log('brain-prime');
  const userName = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const arr = primeData();
  gameBase(userName, arr);
};

export default primeGame;
