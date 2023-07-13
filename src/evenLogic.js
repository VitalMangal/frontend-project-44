import { isNumEven } from "./isNumEven.js";
import { rndm } from "./rndm.js";
import readlineSync from 'readline-sync';

const evenLogic = () => {
  for (let i = 0; i < 3; i += 1) {
    let rndmNum = rndm();
    const evenResult = isNumEven(rndmNum);
    console.log("Question: " + rndmNum);
    var userAnswer = readlineSync.question("Your answer: ");
    if (evenResult === userAnswer) {
      console.log("Correct!");
    } else {
      return console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${evenResult}'.`);
    }
  }
};

export {evenLogic};
