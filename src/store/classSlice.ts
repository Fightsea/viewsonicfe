import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Class } from '../types';

interface ClassState {
  classes: Class[];
  currentClass: Class;
  status: 'idle' | 'loading' | 'failed';
}

const defaultClass: Class = {
  id: '',
  name: '',
  link: '',
};

const initialState: ClassState = {
  classes: [],
  currentClass: defaultClass,
  status: 'idle',
};

export const fetchClasses = createAsyncThunk('classes/fetch', async () => {
  const response = await fetch('/api/classes');
  return await response.json();
});

const classSlice = createSlice({
  name: 'class',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchClasses.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchClasses.fulfilled, (state, action) => {
        state.status = 'idle';
        state.classes = action.payload;
        state.currentClass = action.payload.length ? action.payload[0] : defaultClass;
      })
      .addCase(fetchClasses.rejected, state => {
        state.status = 'failed';
      });
  },
});

export default classSlice.reducer;
