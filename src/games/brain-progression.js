import getRandomNumber from '../common.js';
import runGame from '../index.js';

const getProgression = (firstItem, length, diff) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const item = firstItem + diff * i;
    progression.push(item);
  }
  return progression;
};

const description = 'What number is missing in the progression?';
const getGameData = () => {
  const startItem = getRandomNumber(0, 50);
  const lengthOfProgression = getRandomNumber(5, 10);
  const hiddenItem = getRandomNumber(0, lengthOfProgression - 1);
  const difference = getRandomNumber(0, 15);
  const progression = getProgression(startItem, lengthOfProgression, difference);
  const answer = progression[hiddenItem];
  progression[hiddenItem] = '..';
  const question = `${progression.join(' ')}`;
  return [question, String(answer)];
};

const brainProgression = () => runGame(description, getGameData);

export default brainProgression;
