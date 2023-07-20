const getCalcAnswer = (el1, el2, sign) => {
let answer = '';
    switch (sign) {
    case '+':
      answer = String(el1 + el2);
      break;
    case '*':
      answer = String(el1 * el2);
      break;
    case '-':
      answer = String(el1 - el2);
      break;
    default:
      throw new Error(`Unknown sign: '${sign}'!`);
  }
  return answer;
}

export default getCalcAnswer;