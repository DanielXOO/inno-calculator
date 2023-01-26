class СbrtButtonCommand {
  constructor (value) {
    this.value = value;
  }

  execute = (currentValue) => Math.cbrt(currentValue);
}

export default СbrtButtonCommand;
