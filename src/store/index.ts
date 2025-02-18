import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import classesReducer from './classSlice';
import studentReducer from './studentSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    classes: classesReducer,
    students: studentReducer,
  },
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
