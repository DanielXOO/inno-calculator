import DivideButtonCommand from '../commands/calculator/divideButtonCommand.js';

describe('Divide of', () => {
  let divideButtonCommand;

  it('7 and 2 should be equal of 3.5', () => {
    divideButtonCommand = new DivideButtonCommand(7);
    expect(divideButtonCommand.execute(2)).toBeCloseTo(3.5);
  });

  it('4 and 2 should be 2', () => {
    divideButtonCommand = new DivideButtonCommand(4);
    expect(divideButtonCommand.execute(2)).toBe(2);
  });
});
