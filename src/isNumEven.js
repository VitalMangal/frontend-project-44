const isNumEven = (num) => {
  let result = '';
  const remainder = num % 2;
  switch (remainder) {
    case 1:
      result = 'no';
      break;
    case 0:
      result = 'yes';
      break;
    default:
      result = NaN;
  }
  return result;
};

export default isNumEven;
