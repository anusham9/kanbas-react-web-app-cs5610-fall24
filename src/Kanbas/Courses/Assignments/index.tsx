import { BsGripVertical } from 'react-icons/bs';
import { SiLibreofficewriter } from 'react-icons/si';
import LessonControlButtons from '../Modules/LessonControlButtons';
import { FaSearch } from 'react-icons/fa';

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <br />
      <br />
      <div className="wd-assignments-header">
        <input
          id="wd-search-assignment float-start"
          // style={{ padding: '15px',  align-items: flex-start}}
          style={{ padding: '15px' }}
          placeholder="Search for Assignments"
        />
        <div id="wd-assignments-buttons">
          <button
            id="wd-add-assignment-group"
            className="btn btn-lg btn-secondary float-end"
          >
            + Group
          </button>
          <button
            id="wd-add-assignment"
            className="btn btn-lg btn-danger float-end"
          >
            + Assignment
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item list-group rounded-0">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <button className="btn btn-secondary">40% of Total</button>
            <button>+</button>
          </div>
          <li className="wd-lesson list-group-item p-3 ps-1">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              <SiLibreofficewriter />
            </div>
            <a className="col" href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
              <br />
            </a>
            <span className="text-danger">Multiple Modules</span>
            <span>
              {' '}
              | Not available until May 6 at 12:00am | Due May 13 at 11:59pm{' '}
            </span>{' '}
            | 100 pts
            <LessonControlButtons />
          </li>
          <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
            <SiLibreofficewriter />
            <a
              className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123"
            >
              A2 - CSS + BOOTSTRAP
              <br />
            </a>
            <span className="text-danger">Multiple Modules</span>
            <span>
              | Not available until May 13 at 12:00am | Due May 20 at 11:59pm{' '}
            </span>{' '}
            | 100 pts
            <LessonControlButtons />
          </li>
          <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
            <SiLibreofficewriter />
            <a
              className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123"
            >
              A3 - JAVASCRIPT + REACT
            </a>
            <br />
            <span className="text-danger">Multiple Modules</span>
            <span>
              | Not available until May 20 at 12:00am | Due May 27 at 11:59pm{' '}
            </span>{' '}
            | 100 pts
            <LessonControlButtons />
          </li>
        </li>
      </ul>
    </div>
  );
}
