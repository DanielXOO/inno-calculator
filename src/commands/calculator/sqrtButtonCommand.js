class SqrtButtonCommand {
  constructor (value) {
    this.value = value;
  }

  execute = (currentValue) => Math.sqrt(currentValue);
}

export default SqrtButtonCommand;
