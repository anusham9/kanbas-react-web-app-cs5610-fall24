import React from 'react';
import { useParams } from 'react-router';
import * as db from '../../Database';
import { Link } from 'react-router-dom';

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find((assignment) => assignment._id == aid);

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
            value={assignment && assignment.title}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows={6}
            value={assignment && assignment.description}
          ></textarea>
        </div>
        {/* Points */}
        <div className="d-flex mb-3 ">
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
              value={100}
            />
          </div>
        </div>
        {/* Assignment Group */}
        <div id="wd-css-styling-dropdowns" className="d-flex mb-4">
          <label htmlFor="wd-assignment-group" className="col-sm-2 form-label">
            Assignment Group
          </label>
          <select id="wd-assignment-group" className="form-select">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>
        </div>
        {/* Display Grade As */}
        <div id="wd-css-styling-dropdowns" className="d-flex me-4 mb-4">
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
            <div id="wd-css-styling-switches" className="row mb-3">
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
                    value={assignment && assignment.dueDate}
                  />
                </div>
              </div>

              <div className="row mb-3">
                {/* Available From */}
                <div className="col-sm-6">
                  <label htmlFor="wd-available-from" className="form-label">
                    Available From
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="wd-available-from"
                    value={assignment && assignment.availableDate}
                  />
                </div>

                {/* Available Until */}
                <div className="col-sm-6">
                  <label htmlFor="wd-available-until" className="form-label">
                    Until
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="wd-available-until"
                    value={assignment && assignment.until}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Buttons */}
        <br />
        <div className="d-flex float-end">
          <div className="col-sm-12">
            <Link
              className="btn btn-secondary me-2"
              to={`/Kanbas/Courses/${cid}/Assignments`}
            >
              Cancel
            </Link>
            <Link
              className="btn btn-danger float-end"
              to={`/Kanbas/Courses/${cid}/Assignments`}
            >
              Save
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
