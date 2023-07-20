import readlineSync from 'readline-sync';

const greeting = (gameName, exercise) => {
  console.log(gameName);
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(exercise);
  return userName;
};

export default greeting;
