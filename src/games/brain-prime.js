import getRandomNumber from '../common.js';
import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const NumSqrt = Math.sqrt(number);
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= NumSqrt; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const number = getRandomNumber(0, 25);
  const question = String(number);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [question, answer];
};

const brainPrime = () => runGame(description, getGameData);

export default brainPrime;
