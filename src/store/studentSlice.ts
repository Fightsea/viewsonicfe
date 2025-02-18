import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Student } from '../types';

interface StudentState {
  students: Student[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: StudentState = {
  students: [],
  status: 'idle',
};

export const fetchStudents = createAsyncThunk('students/fetch', async (classId: string) => {
  const response = await fetch(`/api/class/${classId}/students`);
  return await response.json();
});

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    increaseScore: (state, action: PayloadAction<string>) => {
      const student = state.students.find(s => s.id === action.payload);
      if (student) student.score += 1;
    },
    decreaseScore: (state, action: PayloadAction<string>) => {
      const student = state.students.find(s => s.id === action.payload);
      if (student && student.score > 0) student.score -= 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchStudents.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.status = 'idle';
        state.students = action.payload;
      })
      .addCase(fetchStudents.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const { increaseScore, decreaseScore } = studentSlice.actions;
export default studentSlice.reducer;
