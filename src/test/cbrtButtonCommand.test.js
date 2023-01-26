import СbrtButtonCommand from '../commands/calculator/cbrtButtonCommand.js';

describe('Cube root', () => {
  let cbrtButtonCommand;

  beforeEach(() => {
    cbrtButtonCommand = new СbrtButtonCommand(0);
  });

  it('of 8 should be 2', () => {
    expect(cbrtButtonCommand.execute(8)).toBe(2);
  });

  it('of 7 close to 2', () => {
    expect(cbrtButtonCommand.execute(9)).toBeCloseTo(2.08);
  });
});
