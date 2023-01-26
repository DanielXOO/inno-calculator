class CalculatorService {
  constructor () {
    this.memory = 0;
    this.init();
  }

  init () {
    this.value = 0;
    this.rightOperand = 0;
    this.isFirstOperand = true;
    this.isFirstOperation = true;
    this.command = {};
  }

  execute () {
    this.value = this.command.execute(this.rightOperand);
  }
}

export default CalculatorService;
