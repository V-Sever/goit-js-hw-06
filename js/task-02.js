const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsRef = document.querySelector('#ingredients');

const newCollection = ingredients.map(ingredient => {
  const newEl = document.createElement('li');
  newEl.textContent = ingredient;
  newEl.classList.add('item');
  return newEl;
});

ingredientsRef.append(...newCollection);
