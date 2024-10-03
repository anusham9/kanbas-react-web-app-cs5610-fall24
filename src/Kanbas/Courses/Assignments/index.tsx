import { BsGripVertical } from 'react-icons/bs';
import { SiLibreofficewriter } from 'react-icons/si';
import LessonControlButtons from '../Modules/LessonControlButtons';

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div>
        <input id="wd-search-assignment" placeholder="Search for Assignments" />
        <button
          id="wd-add-assignment-group"
          className="btn btn-lg btn-secondary"
        >
          + Group
        </button>
        <button id="wd-add-assignment" className="btn btn-lg btn-danger">
          + Assignment
        </button>
      </div>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item list-group rounded-0">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <button className="btn btn-secondary">40% of Total</button>
            <button>+</button>
          </div>
          <li className="wd-assignment-list-item list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
            <SiLibreofficewriter />
            <a
              className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123"
            >
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
          <li className="wd-assignment-list-item list-group-item p-3 ps-1">
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
          <li className="wd-assignment-list-item list-group-item p-3 ps-1">
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
