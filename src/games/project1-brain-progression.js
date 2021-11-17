import mainGameFunction from '../index.js';

const isRules = 'What number is missing in the progression?';

// Получаем случайное число
const getRandomInt1 = (min, max) => {
  const random = Math.floor(Math.random() * (max - min) + min);
  return Math.abs(random);
};

// Получаем случайную последовательность чисел
const getNumbers = () => {
  const res = [];
  const randomNumbers = getRandomInt1(5, 20);
  for (let i = 0; i <= randomNumbers; i += 1) {
    const count = (randomNumbers + i);
    res.push(count);
  }
  return res;
};

// Функция помещает в массив
const getRandomProgression = () => {
  const numbersLength = getNumbers().length;
  const randomStepNum = getRandomInt1(2, 8);
  const arr = [];
  let countProgression = 0;
  for (let i = 0; i < numbersLength; i += 1) {
    countProgression += randomStepNum;
    arr.push(countProgression);
  }
  return arr;
};

// Получаем последовательность чисел заменяя случайное число точками, и выводит из массива
const getRandomChar = () => {
  const progression = getRandomProgression();
  const progressionLength = progression.length;
  const positionDots = getRandomInt1(5, progressionLength);
  const result = (progression[positionDots]);
  progression.splice(positionDots, 1, '..');
  const question = progression.join(' ');
  return [question, String(result)];
};

const letPlay = () => {
  mainGameFunction(getRandomChar, isRules);
};

export default letPlay;
