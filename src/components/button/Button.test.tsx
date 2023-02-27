import { render, screen, fireEvent } from '@testing-library/react';
import Button from '.';

const handleClick = jest.fn();

test('renders Button correctly', () => {
  render(<Button onClick={handleClick} text="Blue Button" />);
  expect(screen.getByTestId('button')).toBeInTheDocument();
  expect(screen.getByText(/Blue Button/i).classList.contains('blue')).toBe(true);

  render(<Button onClick={handleClick} text="Pink button" color="pink" />);
  expect(screen.getByText(/Pink button/i).classList.contains('pink')).toBe(true);

  render(<Button onClick={handleClick} text="Green button" color="green" />);
  expect(screen.getByText(/Green button/i).classList.contains('green')).toBe(true);
});

test('renders Button disabled', () => {
  render(<Button onClick={handleClick} text="Button" disabled />);
  expect(screen.getByText(/Button/i)).toBeDisabled();
  fireEvent.click(screen.getByText(/Button/i));
  expect(handleClick).toHaveBeenCalledTimes(0);
});

test('renders Button onClick prop when clicked', () => {
  render(<Button onClick={handleClick} text="Button" />);
  fireEvent.click(screen.getByText(/Button/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
