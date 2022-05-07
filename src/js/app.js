import validateCard from './validateCard';
import getCreditCardIssuer from './getCreditCardIssuer';

document.addEventListener('DOMContentLoaded', () => {
  const cardInput = document.getElementById('card-input');
  const cardValidate = document.getElementById('card-validate-btn');
  const cardIssuer = document.getElementById('card-issuer-text');
  const isValidText = document.getElementById('is-valid-text')

  const onInputCard = (event) => {
    const { value } = event.currentTarget;
    // clear
    isValidText.textContent = '';
    // check issuer
    const issuer = getCreditCardIssuer(value);
    cardIssuer.innerText = issuer;
  };

  const onValidateCard = (event) => {
    const { value } = cardInput;
    const isValid = validateCard(value);
    if (isValid) {
      isValidText.textContent = 'Valid';
      isValidText.classList.add('valid-input-value');
      isValidText.classList.remove('invalid-input-value');
    } else {
      isValidText.textContent = 'Invalid';
      isValidText.classList.add('invalid-input-value');
      isValidText.classList.remove('valid-input-value');
    }
    cardInput.focus();
  };

  cardInput.addEventListener('input', onInputCard);
  cardValidate.addEventListener('click', onValidateCard);
});
