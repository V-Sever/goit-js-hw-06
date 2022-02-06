const inputRef = document.querySelector('#validation-input');

// console.log(inputRef.dataset.length);

const correctLength = Number(inputRef.dataset.length);

inputRef.addEventListener('blur', onBlur);

function onBlur(event) {
  const inputLength = Number(event.currentTarget.value.trim().length);
  //   console.log(inputLength);

  if (inputLength !== correctLength) {
    inputRef.classList.add('invalid');
  } else {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  }
}
