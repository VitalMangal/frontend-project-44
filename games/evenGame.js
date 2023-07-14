import { isNumEven } from "./isNumEven.js";
import { rndm } from "./rndm.js";

const gameFunction = () => {
    const question = rndm();
    const answer = isNumEven(question);
    return {question, answer}
};

export {gameFunction};
