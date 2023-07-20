import readlineSync from 'readline-sync';

const runGameBase = (userName, data) => {
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const dataRound = data();
    console.log(`Question: ${dataRound[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (dataRound[1] === userAnswer) {
      console.log('Correct!');
    } else {
      return console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${dataRound[1]}'.\nLet's try again, ${userName}! `,
      );
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default runGameBase;
