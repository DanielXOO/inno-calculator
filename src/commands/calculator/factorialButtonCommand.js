class FactorialButtonCommand {
  constructor (value) {
    this.value = value;
  }

  execute (currentValue) {
    let factorial = 1;
    for (let i = 2; i <= currentValue; i++) {
      factorial *= i;
    }

    return factorial;
  }
}

export default FactorialButtonCommand;
