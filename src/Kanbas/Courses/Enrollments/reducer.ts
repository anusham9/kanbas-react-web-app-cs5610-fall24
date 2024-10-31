import { createSlice } from '@reduxjs/toolkit';
import { enrollments } from '../../Database';
const initialState = {
  enrollments: enrollments,
};
const modulesSlice = createSlice({
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
    removeEnrollment: (state, { payload: enrollmentId }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) => enrollment._id !== enrollmentId
      );
    },
  },
});

export const { addEnrollment, removeEnrollment } = modulesSlice.actions;
export default modulesSlice.reducer;
