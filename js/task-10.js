function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsRef = document.querySelector('#controls');
// console.log(controlsRef);
const inputRef = controlsRef.firstElementChild;
// console.log(inputRef);
const createButtonRef = document.querySelector('button[data-create');
// console.log(createButtonRef);
const destroyButtonRef = document.querySelector('button[data-destroy');
// console.log(destroyButtonRef);
const collectionRef = document.querySelector('#boxes');
// console.log(collectionRef);

let numberOfElmnts = 0;

inputRef.addEventListener('input', onInput);
createButtonRef.addEventListener('click', createBoxes);
destroyButtonRef.addEventListener('click', destroyBoxes);

function onInput(event) {
  numberOfElmnts = event.currentTarget.value;
  // console.log(numberOfElmnts);
}

function createBoxes(amount) {
  collectionRef.innerHTML = '';
  amount = numberOfElmnts;
  const elmntsCollection = [];
  let width = 30;
  let height = 30;

  for (let i = 1; i <= amount; i += 1) {
    const newElmnt = document.createElement('div');

    newElmnt.style.width = `${width}px`;
    newElmnt.style.height = `${height}px`;
    newElmnt.style.backgroundColor = getRandomHexColor();
    elmntsCollection.push(newElmnt);
    width += 10;
    height += 10;
  }
  // console.log(elmntsCollection);

  collectionRef.append(...elmntsCollection);
}

function destroyBoxes() {
  collectionRef.innerHTML = '';
}
