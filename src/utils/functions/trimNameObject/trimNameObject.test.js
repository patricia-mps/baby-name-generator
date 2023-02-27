import '@testing-library/jest-dom';
import trimNameObject from '.';

const data = [
  { name: 'Olivia', gender: 'FEMALE', rank: 2 },
  { name: 'Jonh', gender: 'MALE', rank: 2 },
];

test('slimCharactersData', () => {
  expect(trimNameObject(data, 'MALE')).toEqual([['Jonh', 2]]);
});
