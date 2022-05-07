import validateCard from '../validateCard';

test.each([
  ['4485465428222336'],
  ['4929386492749810353'],
  ['3539276639412741'],
  ['375034528829787'],
  ['6762312742445103'],
])('check valid cards', (card) => {
  expect(validateCard(card)).toBeTruthy();
});

test.each([
  ['4845465428222336'],
  ['4992386492749810353'],
  ['3539726639412741'],
  ['375035428829787'],
  ['6762317242445103'],
])('check invalid cards', (card) => {
  expect(validateCard(card)).toBeFalsy();
});
