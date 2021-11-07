import mainGameFunction from '../index.js';

// Функция возвращает случайное число
const getRandomInt = (max) => {
  const random = Math.floor(Math.random() * max);
  return random;
};

const isRules = 'Find the greatest common divisor of given numbers.';

Math.gcd = function() {
  if (arguments.length === 2) {
    if (arguments[1] === 0)
      return arguments[0];
    else
      return Math.gcd(arguments[1], arguments[0] % arguments[1]);
  } else if (arguments.length > 2) {
    const result = Math.gcd(arguments[0], arguments[1]);
    for (let i = 2; i < arguments.length; i += 1)
      result = Math.gcd(result, arguments[i]);
    return result;
  }
};

const getGcd = () => {
  const randomNum1 = getRandomInt(1000);
  const randomNum2 = getRandomInt(1000);
  const question = (`${randomNum1} ${randomNum2}`);
  const result = Math.gcd(randomNum1, randomNum2);
  return [question, String(result)];
};

const letPlay = () => {
  mainGameFunction(getGcd, isRules);
};

export default letPlay;
