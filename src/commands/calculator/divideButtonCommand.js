class DivideButtonCommand {
  constructor (value) {
    this.value = value;
  }

  execute = (currentValue) => this.value / currentValue;
}

export default DivideButtonCommand;
