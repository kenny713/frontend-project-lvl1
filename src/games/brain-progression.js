import getRandomNumber from '../common.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (firstItem, length, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(firstItem + step * i);
  }
  return progression;
};

const generateQuestion = (progression, hiddenItem) => {
  const array = progression.slice(0);
  array[hiddenItem] = '..';
  const question = `${array.join(' ')}`;
  return question;
};

const getGameData = () => {
  const startItem = getRandomNumber(0, 50);
  const lengthOfProgression = getRandomNumber(5, 10);
  const hiddenItem = getRandomNumber(0, lengthOfProgression - 1);
  const difference = getRandomNumber(0, 15);
  const progression = getProgression(startItem, lengthOfProgression, difference);
  const answer = progression[hiddenItem];
  const question = generateQuestion(progression, hiddenItem);
  return [question, String(answer)];
};

const brainProgression = () => runGame(description, getGameData);

export default brainProgression;
