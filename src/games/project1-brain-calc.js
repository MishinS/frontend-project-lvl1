import mainGameFunction from '../index.js';

// Функция возвращает случайное число
const getRandomInt = (max) => {
  const random = Math.floor(Math.random() * max);
  return random;
};

const isRules = 'What is the result of the expression?';
const arrOperator = ['*', '+', '-'];

// Функция возвращает случайного оператора
let result = '';
const getRandomArr = () => {
  for (let i = 0; i < arrOperator.length; i += 1) {
    const randomArr = getRandomInt(3);
    result = arrOperator[randomArr];
  }
  return result;
};

// Функция возвращает результат операции со случайным оператором
const getCalc = () => {
  const randomNum1 = getRandomInt(100);
  const randomNum2 = getRandomInt(100);
  const randomOperator = getRandomArr(arrOperator);
  const question = (randomNum1 + randomOperator + randomNum2);
  const calc = (eval(randomNum1 + randomOperator + randomNum2));
  return [question, String(calc)];
};

const letPlay = () => {
  mainGameFunction(getCalc, isRules);
};

export default letPlay;
