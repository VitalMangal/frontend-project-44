const rndm = (num = 100) => {
  const rndmNum = Math.floor(Math.random() * num) + 1;
  return rndmNum;
};

export default rndm;
