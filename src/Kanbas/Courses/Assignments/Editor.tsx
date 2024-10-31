//

import React, { useState } from 'react';
import { useParams } from 'react-router';
import * as db from '../../Database';
import { Link, useNavigate } from 'react-router-dom';
import { addAssignment } from './reducer';
import { useDispatch, useSelector } from 'react-redux';

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const isNewAssignment = aid === 'new';
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const assignments = useSelector(
    (state: any) => state.assignmentsReducer.assignments
  ).filter((a: any) => a.course == cid);

  const course = cid;
  const existingAssignment = assignments.find(
    (assignment: any) => assignment._id === aid
  );

  const [title, setTitle] = useState(
    existingAssignment ? existingAssignment.title : ''
  );
  const [description, setDescription] = useState(
    existingAssignment ? existingAssignment.description : ''
  );
  const [points, setPoints] = useState(
    existingAssignment ? existingAssignment.points : 100
  );

  const [dueDate, setDueDate] = useState(
    existingAssignment ? existingAssignment.dueDate : ''
  );
  const [availableDate, setAvailableDate] = useState(
    existingAssignment ? existingAssignment.availableDate : ''
  );
  const [until, setUntil] = useState(
    existingAssignment ? existingAssignment.until : ''
  );

  const handleSave = () => {
    const assignmentData = {
      title,
      description,
      points,
      dueDate,
      availableDate,
      until,
      course,
    };

    if (isNewAssignment) {
      dispatch(addAssignment(assignmentData));
    } else {
      // Update logic if needed
    }

    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor">
      <br />
      <form>
        <div className="mb-3">
          <label htmlFor="wd-assignment-name" className="form-label">
            Assignment Name
          </label>
          <input
            type="text"
            className="form-control"
            id="input1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        {/* Points */}
        <div className="d-flex mb-3">
          <label
            htmlFor="wd-assignment-points"
            className="col-sm-2 col-form-label"
          >
            Points
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              id="wd-assignment-points"
              type="number"
              value={points}
              onChange={(e) => setPoints(e.target.value)}
            />
          </div>
        </div>

        {/* Assignment Group */}
        <div className="d-flex mb-4" id="wd-css-styling-dropdowns">
          <label htmlFor="wd-assignment-group" className="col-sm-2 form-label">
            Assignment Group
          </label>
          <select
            id="wd-assignment-group"
            className="form-select"
            value={'ASSIGNMENTS'}
          >
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>
        </div>

        {/* Display Grade As */}
        <div className="d-flex me-4 mb-4" id="wd-css-styling-dropdowns">
          <label htmlFor="wd-assignment-group" className="col-sm-2 form-label">
            Display Grade As
          </label>
          <select id="wd-display-grade-as" className="form-select">
            <option value="ASSIGNMENTS">Percentage</option>
          </select>
        </div>

        {/* Submission Type */}
        <div className="d-flex">
          <label
            htmlFor="wd-submission-type"
            className="col-sm-2 form-label mb-4"
          >
            Submission Type
          </label>
          <div className="card">
            <div className="card-body">
              <select className="form-control" id="wd-submission-type">
                <option value="Online">Online</option>
              </select>
            </div>

            {/* Online Entry Options */}
            <div className="row mb-3" id="wd-css-styling-switches">
              <label className="form-label fw-bold ms-3">
                Online Entry Options
              </label>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="wd-text-entry"
                  />
                  <label className="form-check-label" htmlFor="wd-text-entry">
                    Text Entry
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="wd-website-url"
                  />
                  <label className="form-check-label" htmlFor="wd-website-url">
                    Website URL
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="wd-media-recordings"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="wd-media-recordings"
                  >
                    Media Recordings
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="wd-student-annotation"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="wd-student-annotation"
                  >
                    Student Annotation
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="wd-file-upload"
                  />
                  <label className="form-check-label" htmlFor="wd-file-upload">
                    File Uploads
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        {/* Assignment Dates */}
        <div className="d-flex">
          <label className="col-sm-2 form-label mb-4">Assign</label>
          <div className="card">
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-sm-6">
                  <label htmlFor="wd-assign-to" className="form-label fw-bold">
                    Assign To
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="wd-assign-to"
                    value="Everyone"
                  />
                </div>
              </div>

              {/* Due Date */}
              <div className="row mb-3">
                <div className="col-sm-12">
                  <label htmlFor="wd-due-date" className="form-label">
                    Due
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="wd-due-date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-sm-6">
                  <label htmlFor="wd-available-from" className="form-label">
                    Available From
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="wd-available-from"
                    value={availableDate}
                    onChange={(e) => setAvailableDate(e.target.value)}
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="wd-available-until" className="form-label">
                    Until
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="wd-available-until"
                    value={until}
                    onChange={(e) => setUntil(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <br />
        <div className="d-flex float-end">
          <Link
            className="btn btn-secondary me-2"
            to={`/Kanbas/Courses/${cid}/Assignments`}
          >
            Cancel
          </Link>
          <button
            type="button"
            className="btn btn-danger float-end"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
