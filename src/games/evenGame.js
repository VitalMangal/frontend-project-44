import gameBase from '../index.js';
import greeting from '../cli.js';
import evenData from './evenData.js';

const runEvenGame = () => {
  console.log('brain-even');
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const arr = evenData();
  gameBase(userName, arr);
};

export default runEvenGame;
