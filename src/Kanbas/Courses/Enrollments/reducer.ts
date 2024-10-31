import { createSlice } from '@reduxjs/toolkit';
import { enrollments } from '../../Database';
const initialState = {
  enrollments: enrollments,
};
const enrollmentsSlice = createSlice({
  name: 'enrollments',
  initialState,
  reducers: {
    addEnrollment: (state, { payload: enrollment }) => {
      const newEnrollment = {
        _id: new Date().getTime().toString(),
        user: enrollment.user,
        course: enrollment.course,
      };
      state.enrollments = [...state.enrollments, newEnrollment];
    },
    removeEnrollment: (state, { payload: enrollment }) => {
      state.enrollments = state.enrollments.filter(
        (e) => !(enrollment.user === e.user && enrollment.course === e.course)
      );
    },
  },
});

export const { addEnrollment, removeEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
