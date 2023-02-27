import '@testing-library/jest-dom';
import getStaticticRandomName from '.';

const data = [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Olivia', '172', '1']];

test('slimCharactersData', () => {
  expect(getStaticticRandomName(data)).toEqual(['Olivia']);
});
