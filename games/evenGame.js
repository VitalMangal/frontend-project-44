import gameBase from '../src/index.js';
import greeting from '../src/cli.js';
import evenData from './evenData.js';

const evenGame = () => {
  console.log('brain-even');
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const arr = evenData();
  gameBase(userName, arr);
};

export default evenGame;
