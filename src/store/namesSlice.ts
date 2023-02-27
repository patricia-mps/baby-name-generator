import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import names from '../utils/data';

interface InitialState {
  femaleNames: string[][];
  maleNames: string[][];
  selectedName: string[];
  loading: boolean;
  isUnsuccessful: boolean;
  message: string;
}

export const getNamesList = createAsyncThunk('list', async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/names`);
  return { ...response.data.data };
});

const initialState: InitialState = {
  femaleNames: names.filter(item => item[1] === 'FEMALE'),
  maleNames: names.filter(item => item[1] === 'MALE'),
  selectedName: [],
  loading: false,
  isUnsuccessful: false,
  message: '',
};

export const namesSlice = createSlice({
  name: 'names',
  initialState,
  reducers: {
    addSelectedName: (state: InitialState, action: PayloadAction<string[]>) => {
      state.selectedName = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getNamesList.pending, (state: InitialState, action: any) => {
        state.loading = true;
      })
      .addCase(getNamesList.fulfilled, (state: InitialState, action: PayloadAction<string[][]>) => {
        state.loading = false;
        state.isUnsuccessful = false;

        // console.log(action.payload);

        // const { results } = action.payload;

        // state.femaleNames = results.map(item => [item.name, item.rank]);
        // state.maleNames = results.map(item => [item.name, item.rank]);
      })
      .addCase(getNamesList.rejected, (state: InitialState, action: any) => {
        const {
          error: { code },
        } = action;

        state.loading = false;
        state.isUnsuccessful = true;

        if (code === 'ERR_BAD_REQUEST') state.message = 'Something went wrong!';
      });
  },
});

export const { addSelectedName } = namesSlice.actions;

export default namesSlice.reducer;
