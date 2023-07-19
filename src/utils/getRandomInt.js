const getRandomInt = (minNum = 0, maxNum = 99) => {
  const min = Math.ceil(minNum);
  const max = Math.floor(maxNum);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default getRandomInt;
