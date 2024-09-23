const validateForm = formSelector => {
  const formElement = document.querySelector(formSelector);  

const validationOptions = [
  {
    attribute: 'required' ,
    isValid: input => input.value.trim() !== '',
    errorMessage: (label) => `${label.textContent} is required`
  }
]; 

const validateSingleFormGroup = formGroup =>{
  const input = formGroup.querySelector('input');
  const label = formGroup.querySelector('label');
  const errorContainer = formGroup.querySelector('.error-message')
  console.log(errorContainer);

  for(const option of validationOptions){
    if(input.hasAttribute(option.attribute) && !option.isValid(input)){
      errorContainer.textContent = option.errorMessage(label);
    }
  }
  }

  formElement.setAttribute('novalidate', '');
   
  formElement.addEventListener('submit', event =>{
    event.preventDefault();
    validateAllFormGroups(formElement);
  });

  const validateAllFormGroups = formToValidate => {
    const formGroups = Array.from(formToValidate.querySelectorAll('.form-group'))
    formGroups.forEach(formGroup =>{
      validateSingleFormGroup(formGroup);
      console.log('active');
    })
  }
};
validateForm(".form");


// /   const input = formGroup.querySelector('input')
//   const errorContainer = formGroup.querySelector('#name-error');

//   for(const option of validationOptions){
//     if(input.hasAttribute(option.attribute) && !option.isValid(input)){
//       errorContainer.innerHtml = option.errorMessage;
//       console.log(option);
      
//     }