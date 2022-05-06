const validateCard = (value) => value
  .replace(/\D/g, '')
  .split('')
  .reverse()
  .reduce((sum, digit, index) => {
    let nDigit = +digit;
    // eslint-disable-next-line no-cond-assign
    if (index % 2 && (nDigit *= 2) > 9) {
      nDigit -= 9;
    }
    return sum + nDigit;
  }, 0)
  % 10 === 0;

export default validateCard;
