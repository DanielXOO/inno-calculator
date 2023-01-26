import './css/styles.css';
import CalculatorService from './services/calculatorService';
import operatorMapper from './mappers/operatorMapper';
import RenderService from './services/renderService';

const calculatorFunctions = document.querySelectorAll('.command');
const calculatorDigits = document.querySelectorAll('.btn-number');

const calculator = new CalculatorService();
const renderService = new RenderService(calculator, '#calculator-input');

calculatorFunctions.forEach(e => e.addEventListener('click', () => {
  const operationType = e.getAttribute('value');
  renderService.renderOperation(operationType);
  const command = operatorMapper(operationType, calculator.value);
  if (command) {
    calculator.command = command;
  }
}));

calculatorDigits.forEach(e => e.addEventListener('click', () => {
  const digit = e.getAttribute('value');
  renderService.renderDigits(digit);
}));

document.addEventListener('DOMContentLoaded', () => {
  renderService.init();
});
