import readlineSync from 'readline-sync';

const gameBase = (userName, arr) => {
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    console.log(`Question: ${arr[i][0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (arr[i][1] === userAnswer) {
      console.log('Correct!');
    } else {
      return console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${arr[i][1]}'.\nLet's try again, ${userName}! `,
      );
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default gameBase;
