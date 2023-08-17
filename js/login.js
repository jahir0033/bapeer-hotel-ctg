document.getElementById('btn-submit').addEventListener('click',function(){
  const emailField =document.getElementById('email-field');
  const email =emailField.value;

  const passwordField =document.getElementById('user-password');
  const password =passwordField.value;
  // console.log(email,password);

  if(email === 'jahir@gmail.com' && password === 'qwer1234@'){
    window.location.href = 'bank.html';
  }
  else{ alert(' try again')}
})