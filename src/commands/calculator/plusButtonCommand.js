class PlusButtonCommand {
  constructor (value) {
    this.value = value;
  }

  execute = (currentValue) => currentValue + this.value;
}

export default PlusButtonCommand;
