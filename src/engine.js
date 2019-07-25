import readlineSync from 'readline-sync';

const engine = (showDescription, generateRoundData, numberOfRounds = 3) => {
  console.log('Welcome to the Brain Games!');
  showDescription();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let roundsCount = 1; roundsCount <= numberOfRounds; roundsCount += 1) {
    const roundData = generateRoundData();
    const rightAnswer = roundData.answer;

    console.log(`Question: ${roundData.questionText}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (rightAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct was '${rightAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratilations, ${userName}!`);
};

export default engine;
