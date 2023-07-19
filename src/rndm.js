const rndm = (rangeLength = 100, rangeStart = 0) => {
  const rndmNum = Math.floor(Math.random() * rangeLength) + rangeStart;
  return rndmNum;
};

export default rndm;
