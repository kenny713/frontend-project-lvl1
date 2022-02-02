import getRandomNumber from '../common.js';
import runGame from '../index.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculateExpression = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`operation ${operator} is not supported`);
  }
};

const getGameData = () => {
  const operand1 = getRandomNumber(0, 25);
  const operand2 = getRandomNumber(0, 25);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${operand1} ${operator} ${operand2}`;
  const answer = calculateExpression(operand1, operand2, operator);
  return [question, String(answer)];
};

const brainCalc = () => runGame(description, getGameData);

export default brainCalc;
