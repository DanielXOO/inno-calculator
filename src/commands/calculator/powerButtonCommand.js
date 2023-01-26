class PowerButtonCommand {
  constructor (value) {
    this.value = value;
  }

  execute = (currentValue) => Math.pow(this.value, currentValue);
}

export default PowerButtonCommand;
