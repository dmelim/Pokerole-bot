const randomNum = (number) => {
  const rand = Math.floor(Math.random() * number) + 1;
  return rand;
};

const multipleDice = (times, number) => {
  let arrayTimes = [];
  for (let index = 0; index < times; index++) {
    arrayTimes.push(randomNum(number));
  }
  return arrayTimes;
};

export default multipleDice;
