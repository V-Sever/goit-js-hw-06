const incrementBtn = document.querySelector('button[data-action="increment"]');
// console.log(incrementBtn);
const decrementBtn = document.querySelector('button[data-action="decrement"]');
// console.log(decrementBtn);
const value = document.querySelector('#value');

let counterValue = 0;

incrementBtn.addEventListener('click', onIncrementBtnClick);
decrementBtn.addEventListener('click', onDecrementBtnClick);

function onIncrementBtnClick() {
  counterValue += 1;
  value.textContent = counterValue;
}

function onDecrementBtnClick() {
  counterValue -= 1;
  value.textContent = counterValue;
}
