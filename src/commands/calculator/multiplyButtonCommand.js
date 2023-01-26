class MultiplyButtonCommand {
  constructor (value) {
    this.value = value;
  }

  execute = (currentValue) => currentValue * this.value;
}

export default MultiplyButtonCommand;
