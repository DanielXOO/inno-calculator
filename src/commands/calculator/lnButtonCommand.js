class LnButtonCommand {
  constructor (value) {
    this.value = value;
  }

  execute = (currentValue) => Math.log(currentValue);
}

export default LnButtonCommand;
