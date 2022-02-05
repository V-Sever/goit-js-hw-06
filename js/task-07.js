const inputRef = document.querySelector('#font-size-control');
// console.log(inputRef);
const textRef = document.querySelector('#text');
// console.log(textRef);

inputRef.addEventListener('input', event => {
  //   console.log(event.currentTarget.value);
  const size = event.currentTarget.value;
  textRef.style.fontSize = `${size}px`;
});
