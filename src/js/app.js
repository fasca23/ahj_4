import validCards from './validcard';
import validate from './validator';

// как страница загрузилась начинаем проверку
if (typeof document !== 'undefined') {
  const input = document.querySelector('.form-control');

  input.addEventListener('input', () => {
    const type = validCards(input.value);
    const cards = document.querySelectorAll('.card');
    cards.forEach((item) => {
      item.classList.remove('active');
    });
    if (type) {
      document.querySelector(type).classList.add('active');
    }
  });

  input.parentNode.addEventListener('submit', (e) => {
    e.preventDefault();
    const result = document.getElementById('result');
    result.textContent = '';
    // eslint-disable-next-line no-unused-expressions
    validate(input.value)
      ? (result.textContent = 'Действующая карта')
      : (result.textContent = 'Введён неправильный номер карты!');
    document.getElementById('card_number').value = '';
  });
}
