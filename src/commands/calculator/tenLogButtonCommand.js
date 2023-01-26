class TenLogButtonCommand {
  constructor (value) {
    this.value = value;
  }

  execute = (currentValue) => Math.log10(currentValue);
}

export default TenLogButtonCommand;
