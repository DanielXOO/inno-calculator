class RootNButtonCommand {
  constructor (value) {
    this.value = value;
  }

  execute = (currentValue) => Math.pow(currentValue, 1 / this.value);
}

export default RootNButtonCommand;
