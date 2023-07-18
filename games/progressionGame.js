import gameBase from '../src/index.js';
import greeting from '../src/cli.js';
import progressionData from '../src/progressionData.js';

const progressionGame = () => {
  console.log('brain-progression');
  const userName = greeting();
  console.log('What number is missing in the progression?');
  const arr = progressionData();
  gameBase(userName, arr);
};

export default progressionGame;
