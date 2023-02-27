import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
// @ts-ignore
import { createMockStore } from 'redux-test-utils';
import { addSelectedName } from '../../store/namesSlice';
import Homepage from '.';

const mockStore = createMockStore({
  names: {
    femaleNames: [['2016', 'FEMALE', 'WHITE NON HISPANIC', 'Rachel', '221', '2']],
    maleNames: [['2016', 'MALE', 'ASIAN AND PACIFIC ISLANDER', 'Ethan', '193', '1']],
    selectedName: [],
    loading: false,
    isUnsuccessful: false,
    message: '',
  },
});

mockStore.dispatch = jest.fn();

const homepage = (
  <Provider store={mockStore}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

test('renders Homepage correctly', () => {
  render(homepage);

  expect(screen.getByTestId('homepage')).toBeInTheDocument();
  expect(screen.getAllByTestId('card')).toHaveLength(1);
  expect(screen.getAllByTestId('button')).toHaveLength(2);
  expect(screen.getByText('Baby Girl')).toBeInTheDocument();
  expect(screen.getByText('Baby Boy')).toBeInTheDocument();
  expect(screen.getByText('Struggling for a baby name?')).toBeInTheDocument();
  expect(screen.getByText('Try baby name generator for inspiration!')).toBeInTheDocument();
});

test('renders click get baby boy name', async () => {
  render(homepage);

  fireEvent.click(screen.getByText('Baby Boy'));
  expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
  expect(mockStore.dispatch).toHaveBeenCalledWith(addSelectedName(['Ethan']));
});

test('renders click get baby girl name', async () => {
  render(homepage);

  fireEvent.click(screen.getByText(/Baby Girl/i));
  expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
  expect(mockStore.dispatch).toHaveBeenCalledWith(addSelectedName(['Rachel']));
});
