import readlineSync from 'readline-sync';

const count = 3;

export default (letPlay, isRules) => {
  console.log('Welcom to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello! ${name}`);
  console.log(isRules);
  for (let i = 0; i < count; i += 1) {
    const [question, answer] = letPlay();
    console.log(`Question: ${question}`);
    const userChoice = readlineSync.question();
    console.log(`Your answer: ${userChoice}`);
    if (userChoice !== answer) {
      console.log(`${userChoice} is wrong answer ;(. Correct was '${answer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
