const getCreditCardIssuer = (card) => {
  const value = card.replace(/\D/g, '');

  // Visa Electron
  const visaELectron = [
    /^4026/,
    /^417500/,
    /^4508/,
    /^4844/,
    /^491[37]/,
  ];
  if (visaELectron.some((regexp) => regexp.test(value))) {
    return 'Visa Electron';
  }

  // Visa
  if (value.startsWith('4')) {
    return 'Visa';
  }

  // MasterCard
  if (/^5[1-5]/.test(value) || (value > '222100' && value < '272099') || (value === '222100' && value === '272099')) {
    return 'MasterCard';
  }

  // Maestro
  const maestro = [
    /^5018/,
    /^5020/,
    /^5038/,
    /^5893/,
    /^6304/,
    /^6759/,
    /^676[1-3]/,
  ];
  if (maestro.some((regexp) => regexp.test(value))) {
    return 'Maestro';
  }

  // JCB
  if ((value > '3528' && value < '3589') || value === '3528' || value === '3589') {
    return 'JCB';
  }

  // InstaPayment
  if (/^63[7-9]/.test(value)) {
    return 'InstaPayment';
  }

  // American Express
  if (/^3[47]/.test(value)) {
    return 'American Express';
  }

  // МИР
  if (value.startsWith('22')) {
    return 'МИР';
  }

  // nothing
  return '';
};

export default getCreditCardIssuer;
