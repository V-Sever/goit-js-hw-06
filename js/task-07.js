const inputRef = document.querySelector('#font-size-control');
// console.log(inputRef);
const textRef = document.querySelector('#text');
// console.log(textRef);
textRef.style.fontSize = `${inputRef.value}px`;

inputRef.addEventListener('input', event => {
  //   console.log(event.currentTarget.value);
  const size = event.currentTarget.value;
  textRef.style.fontSize = `${size}px`;
});
