import { BsGripVertical } from 'react-icons/bs';
import { SiLibreofficewriter } from 'react-icons/si';
import LessonControlButtons from '../Modules/LessonControlButtons';
import { FaSearch, FaTrash } from 'react-icons/fa';
import { IoEllipsisVertical } from 'react-icons/io5';
import { GoTriangleDown } from 'react-icons/go';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { addAssignment, deleteAssignment, updateAssignment } from './reducer';
import { useDispatch, useSelector } from 'react-redux';
import DeleteAssignmentModal from './DeleteAssignmentModal';
import { useState } from 'react';

export default function Assignments() {
  const { cid } = useParams();
  const assignments = useSelector(
    (state: any) => state.assignmentsReducer.assignments
  ).filter((a: any) => a.course === cid);
  const dispatch = useDispatch();
  // const [deletingModal, setIsDeletingModal] = useState(false);

  // const handleDeleteClick = () => {
  //   setIsDeletingModal(true); // Show the modal when FaTrash is clicked
  // };

  // const closeModal = () => {
  //   setIsDeletingModal(false); // Hide the modal
  // };

  return (
    <>
      <br />
      <br />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex flex-row">
          <FaSearch className="me-2 fs-4" />
          <input
            id="wd-search-assignment"
            className="form-control rounded-lg"
            style={{ padding: '10px', width: '250px' }}
            placeholder="Search for Assignments"
          />
        </div>
        <div>
          <button
            id="wd-add-assignment-group"
            className="btn btn-lg btn-secondary me-2"
          >
            + Group
          </button>
          <Link to={`/Kanbas/Courses/${cid}/Assignments/new`}>
            <button id="wd-add-assignment" className="btn btn-lg btn-danger">
              + Assignment
            </button>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item list-group">
          <div className="wd-title grid-row p-3 ps-2 bg-secondary">
            <div className="float-start" style={{ fontSize: '40px' }}>
              <BsGripVertical className="me-2 fs-1" />
              <GoTriangleDown />
              ASSIGNMENTS
            </div>
            <div className="float-end flex-container d-flex justify-content-center border-0">
              <div className="bg-secondary flex-box rounded-pill">
                40% of Total
              </div>
              <div
                className="text-white opacity-50"
                style={{ fontSize: '50px' }}
              >
                +
              </div>
              <IoEllipsisVertical size={30} />
            </div>
          </div>

          {assignments &&
            assignments.map((assignment: any) => (
              <li
                key={assignment._id}
                className="wd-lesson list-group-item p-3 ps-1"
              >
                <BsGripVertical className="me-2 fs-3" />
                <SiLibreofficewriter />
                <a
                  className="text-decoration-none"
                  href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                >
                  {assignment.title}
                </a>
                <br />
                <span className="text-danger">Multiple Modules</span>
                <span>
                  | Not available until May 6 at 12:00am | Due May 13 at 11:59pm
                  | {assignment.points}
                </span>{' '}
                <FaTrash
                  className="text-danger me-2 mb-1"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteAssignmentModal"
                />
                <DeleteAssignmentModal
                  dialogTitle="Are you sure you want to delete this?"
                  assignmentId={assignment._id}
                  deleteAssignment={(id) => dispatch(deleteAssignment(id))}
                />
                <LessonControlButtons />
              </li>
            ))}
        </li>
      </ul>
    </>
  );
}
