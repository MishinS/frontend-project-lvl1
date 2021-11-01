import mainGameFunction from '../index.js';

const isRule = 'Answer "yes" if the number is even, otherwise answer "no" ';

const getRandomInt = (max) => {
  const random = Math.floor(Math.random() * max);
  return random;
};

const getEven = (randomNum) => (randomNum % 2) === 0;

const generateGame = () => {
  const randomNum = getRandomInt(1000);
  const question = randomNum;
  const result = getEven(randomNum) ? 'yes' : 'no';
  return [question, result];
};

const letPlay = () => {
  mainGameFunction(generateGame, isRule);
};

export default letPlay;
