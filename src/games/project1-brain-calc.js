import mainGameFunction from '../index.js';

// Функция возвращает случайное число
const getRandomInt = (max) => {
  const random = Math.floor(Math.random() * max);
  return random;
};

const isRules = 'What is the result of the expression?';
const arrOperator = ['*', '+', '-'];

// Функция возвращает случайного оператора
const getRandomArr = () => {
  for (const item of arrOperator) {
    const randomArr = getRandomInt(3);
    return arrOperator[randomArr];
  }
};

// Функция возвращает результат операции со случайным оператором
const getCalc = () => {
  const randomNum1 = getRandomInt(1000);
  const randomNum2 = getRandomInt(1000);
  const randomOperator = getRandomArr(arrOperator);
  const question = (randomNum1 + randomOperator + randomNum2);
  const calc = (eval(randomNum1 + randomOperator + randomNum2));
  return [question, String(calc)];
};

const letPlay = () => {
  mainGameFunction(getCalc, isRules);
};

export default letPlay;
