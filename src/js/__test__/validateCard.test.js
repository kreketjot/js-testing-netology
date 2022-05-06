import validateCard from '../validateCard';

test.each([
  ['4485465428222336'],
  ['4929386492749810353'],
  ['3539276639412741'],
  ['375034528829787'],
  ['6761509919314829'],
])('check valid cards', (card) => {
  expect(validateCard(card)).toBeTruthy();
});

test.each([
  ['448546542822233'],
  ['492938649274981035'],
  ['353927663941274'],
  ['37503452882978'],
  ['67615099193148'],
])('check invalid cards', (card) => {
  expect(validateCard(card)).toBeFalsy();
});
