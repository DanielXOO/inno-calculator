import operatorMapper from '../mappers/operatorMapper.js';
import TenLogButtonCommand from '../commands/calculator/tenLogButtonCommand.js';

describe('Mapper', () => {
  it('should return instance of TenLogButtonCommand', () => {
    expect(operatorMapper('log10')).toBeInstanceOf(TenLogButtonCommand);
  });

  it('should return falsy value', () => {
    expect(operatorMapper('AA')).toBeFalsy();
  });
});
