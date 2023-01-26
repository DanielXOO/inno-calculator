import PlusButtonCommand from '../commands/calculator/plusButtonCommand';
import MinusButtonCommand from '../commands/calculator/minusButtonCommand';
import DivideButtonCommand from '../commands/calculator/divideButtonCommand';
import MultiplyButtonCommand from '../commands/calculator/multiplyButtonCommand';
import TenLogButtonCommand from '../commands/calculator/tenLogButtonCommand';
import PowerButtonCommand from '../commands/calculator/powerButtonCommand';
import RootNButtonCommand from '../commands/calculator/rootNButtonCommand';
import LnButtonCommand from '../commands/calculator/lnButtonCommand';
import SqrtButtonCommand from '../commands/calculator/sqrtButtonCommand';
import СbrtButtonCommand from '../commands/calculator/cbrtButtonCommand';
import FactorialButtonCommand from '../commands/calculator/factorialButtonCommand';

const operationsMap = {
  '+': PlusButtonCommand.prototype.constructor,
  '-': MinusButtonCommand.prototype.constructor,
  '/': DivideButtonCommand.prototype.constructor,
  '*': MultiplyButtonCommand.prototype.constructor,
  log10: TenLogButtonCommand.prototype.constructor,
  '^': PowerButtonCommand.prototype.constructor,
  '^3': PowerButtonCommand.prototype.constructor,
  '^2': PowerButtonCommand.prototype.constructor,
  root2: SqrtButtonCommand.prototype.constructor,
  root3: СbrtButtonCommand.prototype.constructor,
  rootN: RootNButtonCommand.prototype.constructor,
  '10^': PowerButtonCommand.prototype.constructor,
  factorial: FactorialButtonCommand.prototype.constructor,
  ln: LnButtonCommand.prototype.constructor
};

const operatorMapper = (symbol, value) => {
  const constructor = operationsMap[symbol];
  if (constructor) {
    return new constructor(value);
  }
};

export default operatorMapper;
