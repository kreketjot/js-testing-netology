import validateCard from './validateCard';
import getCreditCardIssuer from './getCreditCardIssuer';

document.addEventListener('DOMContentLoaded', () => {
  const cardInput = document.getElementById('card-input');
  const cardValidate = document.getElementById('card-validate');
  const cardIssuer = document.getElementById('card-issuer');

  const onInputCard = (event) => {
    const { value } = event.currentTarget;
    // clear
    cardInput.classList.remove('valid-input-value');
    cardInput.classList.remove('invalid-input-value');
    // check issuer
    const issuer = getCreditCardIssuer(value);
    cardIssuer.innerText = issuer;
  };

  const onValidateCard = (event) => {
    const { value } = event.currentTarget;
    const isValid = validateCard(value);
    if (isValid) {
      cardInput.classList.add('valid-input-value');
      cardInput.classList.remove('invalid-input-value');
    } else {
      cardInput.classList.remove('valid-input-value');
      cardInput.classList.add('invalid-input-value');
    }
  };

  cardInput.addEventListener('input', onInputCard);
  cardValidate.addEventListener('click', onValidateCard);
});
