const formRef = document.querySelector('.login-form');
// console.log(formRef);
formRef.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  //   console.log(event.currentTarget.elements.email.value);
  //   console.log(event.currentTarget.elements.password.value);
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === '' || password === '') {
    alert('Все поля должны быть заполнены!');
  }
  const obj = { email, password };
  console.log(obj);
  event.currentTarget.reset();
}
