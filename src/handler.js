import './css/styles.css';
import CalculatorService from './services/calculatorService';
import operatorMapper from './mappers/operatorMapper';
import RenderService from './services/renderService';

const calculatorButtons = document.getElementById('calculator-buttons');

const calculator = new CalculatorService();
const renderService = new RenderService(calculator, '#calculator-input');

calculatorButtons.onclick = (e) => {
  const target = e.target;
  if (target.classList.contains('btn-number')) {
    const digit = target.value;
    renderService.renderDigits(digit);
  } else if (target.classList.contains('btn-operation') || target.classList.contains('btn-function')) {
    const operationType = target.value;
    renderService.renderOperation(operationType);
    const command = operatorMapper(operationType, calculator.value);
    if (command) {
      calculator.command = command;
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  renderService.init();
});
