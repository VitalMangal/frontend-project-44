import readlineSync from 'readline-sync';

const gameBase = (userName) => {
  for (let i = 0; i < 3; i += 1) {
    let {question, answer} = gameFunction();
    console.log("Question: " + question);
    var userAnswer = readlineSync.question("Your answer: ");
    if (answer === userAnswer) {
      console.log("Correct!");
    } else {
      return console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
    }
  }
  return console.log(`Congratulations, ${userName}!`)
};

export {gameBase};