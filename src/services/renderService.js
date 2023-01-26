class RenderService {
  constructor (calculator, selector) {
    this.value = '';
    this.calculator = calculator;
    this.input = document.querySelector(selector);
  }

  init = () => {
    this.value = '0';
    this.input.innerHTML = this.value;
    this.isFirstDigit = true;
    this.isOperatorSet = false;
    this.calculator.isFirstOperation = true;
  };

  renderOperation = (symbol) => {
    switch (symbol) {
      case '=':
        this.calculator.execute();
        this.input.innerHTML = this.calculator.value;
        this.value = this.calculator.value.toString();
        this.calculator.rightOperand = 0;
        this.calculator.command = {};
        this.calculator.isFirstOperand = true;
        this.isFirstDigit = true;
        this.isOperatorSet = false;
        this.calculator.isFirstOperation = false;
        this.calculator.memory = this.calculator.value;
        break;
      case 'AC':
        this.init();
        this.calculator.init();
        break;
      case 'MR':
        this.calculator.isFirstOperand = true;
        this.isFirstDigit = true;
        this.isOperatorSet = false;
        this.calculator.isFirstOperation = false;
        this.calculator.value = this.calculator.memory;
        this.input.innerHTML = this.calculator.memory;
        this.value = this.calculator.memory.toString();
        break;
      case 'M+':
        this.calculator.memory += this.calculator.value;
        break;
      case 'M-':
        this.calculator.memory -= this.calculator.value;
        break;
      case 'MC':
        this.calculator.memory = 0;
        break;
      case 'ln':
        this.init();
        this.calculator.isFirstOperand = false;
        this.calculator.value = 0;
        this.calculator.rightOperand = 0;
        this.input.innerHTML = symbol;
        this.isFirstDigit = false;
        break;
      case 'log10':
        this.init();
        this.calculator.isFirstOperand = false;
        this.calculator.value = 0;
        this.calculator.rightOperand = 0;
        this.input.innerHTML = 'log<sub>10</sub>';
        this.isFirstDigit = false;
        break;
      case 'factorial':
        this.init();
        this.calculator.isFirstOperand = false;
        this.calculator.value = 0;
        this.calculator.rightOperand = 0;
        this.input.innerHTML = '!';
        this.isFirstDigit = false;
        break;
      case '10^':
        this.init();
        this.calculator.isFirstOperand = false;
        this.isFirstDigit = false;
        this.input.innerHTML = symbol;
        this.calculator.value = 10;
        this.isOperatorSet = true;
        break;
      case '^3':
        this.input.append(symbol);
        this.isOperatorSet = true;
        this.calculator.rightOperand = 3;
        break;
      case 'root2':
        this.init();
        this.calculator.isFirstOperand = false;
        this.isFirstDigit = false;
        this.isOperatorSet = true;
        this.input.innerHTML = '&#8730;';
        this.isOperatorSet = true;
        this.calculator.value = 2;
        break;
      case 'root3':
        this.init();
        this.calculator.isFirstOperand = false;
        this.isFirstDigit = false;
        this.isOperatorSet = true;
        this.input.innerHTML = '&#8731;';
        this.isOperatorSet = true;
        this.calculator.value = 3;
        break;
      case 'rootN':
        this.init();
        this.calculator.isFirstOperand = false;
        this.isFirstDigit = false;
        this.isOperatorSet = true;
        this.input.innerHTML = `<sup>${this.calculator.value}</sup>&#8730;`;
        this.isOperatorSet = true;
        break;
      case '^2':
        this.input.append(symbol);
        this.isOperatorSet = true;
        this.calculator.rightOperand = 2;
        break;
      case '%':
        if (this.calculator.rightOperand !== 0) {
          this.calculator.rightOperand = this.calculator.value * 0.1;
          this.input.append(symbol);
        }
        break;
      default:
        if (this.isOperatorSet) {
          const rightOperand = this.calculator.rightOperand !== 0 ? this.calculator.rightOperand : '';
          this.input.innerHTML = `${this.calculator.value} ${symbol} ${rightOperand}`;
        } else {
          this.input.append(symbol);
          this.value = '';
          this.calculator.isFirstOperand = false;
          this.isOperatorSet = true;
        }
        break;
    }
  };

  renderDigits = (digit) => {
    const numberRegex = /^\d+.?\d*$/;
    if (numberRegex.test(this.value + digit)) {
      this.value += digit;
      if (this.isFirstDigit && this.calculator.isFirstOperation) {
        this.input.innerHTML = parseFloat(this.value);
        this.isFirstDigit = false;
        if (digit === '.') {
          this.input.append(digit);
        }
      } else {
        this.input.append(digit);
      }
      if (this.calculator.isFirstOperand) {
        this.calculator.value = parseFloat(this.value);
      } else {
        this.calculator.rightOperand = parseFloat(this.value);
      }
    }
  };
}

export default RenderService;
