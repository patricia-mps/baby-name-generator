import { render, screen } from '@testing-library/react';
import Card from '.';

test('renders Card correctly', () => {
  render(<Card title="Jonh" />);

  expect(screen.getByTestId('card')).toBeInTheDocument();
  expect(screen.getByText('Jonh').classList.contains('component__title')).toBe(true);
});
