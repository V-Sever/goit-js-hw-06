function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorRef = document.querySelector('.color');
const changeColorBtnRef = document.querySelector('.change-color');

changeColorBtnRef.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick() {
  const bodyColor = getRandomHexColor();
  // console.log(bodyColor);
  document.body.style.backgroundColor = bodyColor;
  colorRef.textContent = bodyColor;
}
