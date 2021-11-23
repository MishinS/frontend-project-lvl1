import mainGameFunction from '../index.js';

// Функция возвращает случайное число
const getRandomInt = (max) => {
  const random = Math.floor(Math.random() * max);
  return random;
};

const isRules = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => {
  if (num2 === 0) {
    return Math.abs(num1);
  }
  return findGCD(num2, num1 % num2);
};

const getGcd = () => {
  const randomNum1 = getRandomInt(1000);
  const randomNum2 = getRandomInt(1000);
  const question = (`${randomNum1} ${randomNum2}`);
  const result = findGCD(randomNum1, randomNum2);
  return [question, String(result)];
};

const letPlay = () => {
  mainGameFunction(getGcd, isRules);
};

export default letPlay;
