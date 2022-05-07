import getCreditCardIssuer from "../getCreditCardIssuer";

test.each([
  ['4485465428222336', 'Visa'],
  ['4026819389942074', 'Visa Electron'],
  ['2221004506069021', 'MasterCard'],
  ['6761509919314829', 'Maestro'],
  ['3539276639412741', 'JCB'],
  ['6390454445239332', 'InstaPayment'],
  ['375034528829787', 'American Express'],
  ['2201381234567891', 'МИР'],
  ['', ''],
])('check card issuers', (card, issuer) => {
  expect(getCreditCardIssuer(card)).toBe(issuer);
});
