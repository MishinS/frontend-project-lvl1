import mainGameFunction from '../index.js';

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isRules = 'What is the result of the expression?';

const getRandomSign = (numberFirst, numberSecond, randomSign) => {
  switch (randomSign) {
    case '+': return numberFirst + numberSecond;
    case '-': return numberFirst - numberSecond;
    case '*': return numberFirst * numberSecond;
    default:
      throw new Error('Can`t calculate expression');
  }
};

const generateRound = () => {
  const randomSignArray = ['+', '-', '*'];
  const randomNumber = getRandom(0, randomSignArray.length - 1);
  const numberFirst = getRandom(0, 100);
  const numberSecond = getRandom(0, 100);
  const sign = randomSignArray[randomNumber];
  const question = `${numberFirst} ${sign} ${numberSecond}`;
  const result = getRandomSign(numberFirst, numberSecond, sign);
  return [question, String(result)];
};

const letPlay = () => {
  mainGameFunction(generateRound, isRules);
};

export default letPlay;
