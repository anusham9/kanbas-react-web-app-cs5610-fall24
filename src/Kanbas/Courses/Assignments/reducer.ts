import { createSlice } from '@reduxjs/toolkit';
import { assignments } from '../../Database';

const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        decription: assignment.description,
        points: assignment.points,
        course: assignment.course,
        dueDate: assignment.dueDate,
        availableDate: assignment.availableDate,
        until: assignment.until,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deletAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      ) as any;
    },
  },
});

export const {
  addAssignment,
  deletAssignment,
  updateAssignment,
  editAssignment,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
