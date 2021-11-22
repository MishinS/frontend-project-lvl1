import mainGameFunction from '../index.js';

const isRule = 'Answer "yes" if given number is prime. Otherwise answer "no". ';

const getRandomInt = (min, max) => {
  const random = Math.floor(Math.random() * (max - min) + min);
  return Math.abs(random);
};

const randomNum = getRandomInt(4, 20);
const isFilter = (randomNum) => {    
  if (randomNum < 2) {
    return false;
  }
  for (let i = 2; i < randomNum; i += 1) {
    if (randomNum % i === 0) {
      return false;  
    }
  }
  return true;   
};

const generateGame = () => {
  const question = getRandomInt(4, 20);
  const result = isFilter(question) ? 'yes' : 'no';
  return [question, result];
};

const letPlay = () => {
  mainGameFunction(generateGame, isRule);
};

export default letPlay;
