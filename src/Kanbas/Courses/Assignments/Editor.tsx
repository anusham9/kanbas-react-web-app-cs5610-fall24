import React from 'react';

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <form>
        <div className="mb-3">
          <label htmlFor="wd-assignment-name" className="form-label">
            Assignment Name
          </label>
          <input type="text" className="form-control" id="input1" value="A1" />
        </div>

        <div className="mb-3">
          <textarea className="form-control" rows={6}></textarea>
        </div>

        {/* Points */}
        <div className="row mb-3">
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
        <div id="wd-css-styling-dropdowns" className="row mb-3">
          <label htmlFor="wd-assignment-group" className="form-label">
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
        <div id="wd-css-styling-dropdowns">
          <label htmlFor="wd-assignment-group" className="form-label">
            Display Grade As
          </label>
          <select id="wd-display-grade-as" className="form-select">
            <option value="ASSIGNMENTS">Percentage</option>
          </select>
        </div>
        {/* <div className="row mb-3">
          <label
            htmlFor="wd-display-grade-as"
            className="col-sm-2 col-form-label"
          >
            Display Grade As
          </label>
          <div className="col-sm-10">
            <select className="form-control" id="wd-display-grade-as">
              <option value="PERCENTAGE">Percentage</option>
            </select>
          </div>
        </div> */}

        {/* Submission Type */}
        <div className="row mb-3">
          <label htmlFor="wd-submission-type" className="form-label">
            Submission Type
          </label>
          <div>
            <select className="form-control" id="wd-submission-type">
              <option value="Online">Online</option>
            </select>
          </div>
        </div>

        {/* Online Entry Options */}
        <div id="wd-css-styling-switches" className="row mb-3">
          <label className="form-label">Online Entry Options</label>
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
              <label className="form-check-label" htmlFor="wd-media-recordings">
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
        <div className="flex-container">
          {/* Assign To */}
          <div className="row mb-3">
            <label htmlFor="wd-assign-to" className="col-sm-2 col-form-label">
              Assign To
            </label>
            <div className="col-sm-10">
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
            <label htmlFor="wd-due-date" className="col-sm-2 col-form-label">
              Due
            </label>
            <div className="col-sm-10">
              <input
                type="date"
                className="form-control"
                id="wd-due-date"
                value="2024-05-13"
              />
            </div>
          </div>

          {/* Available From */}
          <div className="row mb-3">
            <label
              htmlFor="wd-available-from"
              className="col-sm-2 col-form-label"
            >
              Available From
            </label>
            <div className="col-sm-10">
              <input
                type="date"
                className="form-control"
                id="wd-available-from"
                value="2024-05-06"
              />
            </div>
          </div>

          {/* Available Until */}
          <div className="row mb-3">
            <label
              htmlFor="wd-available-until"
              className="col-sm-2 col-form-label"
            >
              Until
            </label>
            <div className="col-sm-10">
              <input
                type="date"
                className="form-control"
                id="wd-available-until"
                value="2024-05-28"
              />
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <button className="btn btn-secondary me-2">Cancel</button>
            <button className="btn btn-danger float-end">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}

// export default function AssignmentEditor() {
//   return (
//     <div id="wd-assignments-editor">
//       <table>
//         <tr>
//           <td align="right">
//             <label htmlFor="wd-name">Assignment Name</label>
//           </td>
//           <td>
//             <input id="wd-name" value="A1 - ENV + HTML" />
//           </td>
//         </tr>

//         <tr>
//           <td align="right" valign="top">
//             <label htmlFor="wd-description">Description</label>
//           </td>
//           <td>
//             <textarea id="wd-description">
//               The assignment is available online. Submit a link to the landing
//               page of your web application running on Netlify. The landing page
//               should include: - Your full name and section - Links to the Kanban
//               application and relevant source repositories
//             </textarea>
//           </td>
//         </tr>

//         <tr>
//           <td align="right" valign="top">
//             <label htmlFor="wd-points">Points</label>
//           </td>
//           <td>
//             <input id="wd-points" value={100} />
//           </td>
//         </tr>

//         <tr>
//           <td align="right">
//             <label htmlFor="wd-group">Assignment Group</label>
//           </td>
//           <td>
//             <select id="wd-group">
//               <option value="ASSIGNMENTS">ASSIGNMENTS</option>
//               <option value="QUIZZES">QUIZZES</option>
//               <option value="EXAMS">EXAMS</option>
//               <option value="PROJECT">PROJECT</option>
//             </select>
//           </td>
//         </tr>

//         <tr>
//           <td align="right">
//             <label htmlFor="wd-display-grade-as">Display Grade As</label>
//           </td>
//           <td>
//             <select id="wd-display-grade-as">
//               <option value="PERCENTAGE">Percentage</option>
//             </select>
//           </td>
//         </tr>

//         <tr>
//           <td align="right">
//             <label htmlFor="wd-submission-type">Submission Type</label>
//           </td>
//           <td>
//             <select id="wd-submission-type">
//               <option value="Online">Online</option>
//             </select>
//           </td>
//         </tr>

//         <tr>
//           <td align="right" valign="top">
//             <label>Online Entry Options</label>
//           </td>
//           <td>
//             <input type="checkbox" id="wd-text-entry" />
//             <label htmlFor="wd-text-entry">Text Entry</label>
//             <br />

//             <input type="checkbox" id="wd-website-url" />
//             <label htmlFor="wd-website-url">Website URL</label>
//             <br />

//             <input type="checkbox" id="wd-media-recordings" />
//             <label htmlFor="wd-media-recordings">Media Recordings</label>
//             <br />

//             <input type="checkbox" id="wd-student-annotation" />
//             <label htmlFor="wd-student-annotation">Student Annotation</label>
//             <br />

//             <input type="checkbox" id="wd-file-upload" />
//             <label htmlFor="wd-file-upload">File Uploads</label>
//             <br />
//           </td>
//         </tr>

//         <tr>
//           <td align="right">
//             <label htmlFor="wd-assign-to">Assign To</label>
//           </td>
//           <td>
//             <input id="wd-assign-to" value="Everyone" />
//           </td>
//         </tr>

//         <tr>
//           <td align="right">
//             <label htmlFor="wd-due-date">Due</label>
//           </td>
//           <td>
//             <input type="date" id="wd-due-date" value="2024-05-13" />
//           </td>
//         </tr>

//         <tr>
//           <td align="right">
//             <label htmlFor="wd-available-from">Available From</label>
//           </td>
//           <td>
//             <input type="date" id="wd-available-from" value="2024-05-06" />
//           </td>
//         </tr>

//         <tr>
//           <td align="right">
//             <label htmlFor="wd-available-until">Until</label>
//           </td>
//           <td>
//             <input type="date" id="wd-available-until" value="2024-05-28" />
//           </td>
//         </tr>
//         <tr>
//           <td align="left">
//             <button>Cancel</button>
//             <button>Save</button>
//           </td>
//         </tr>
//       </table>
//     </div>
//   );
// }
