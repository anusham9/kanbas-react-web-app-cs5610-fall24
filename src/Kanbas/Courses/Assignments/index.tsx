import { BsGripVertical } from 'react-icons/bs';
import { SiLibreofficewriter } from 'react-icons/si';
import LessonControlButtons from '../Modules/LessonControlButtons';
import { FaSearch } from 'react-icons/fa';

export default function Assignments() {
  return (
    <>
      <br />
      <br />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex flex-row">
          <FaSearch className="me-2 fs-5" />
          <input
            id="wd-search-assignment"
            className="form-control rounded-lg"
            style={{ padding: '15px', width: '250px' }}
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
          <button id="wd-add-assignment" className="btn btn-lg btn-danger">
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
          <li className="d-flex justify-content-between wd-lesson list-group-item p-3 ps-1">
            <div className='className="d-flex flex-row justify-content-start'>
              <BsGripVertical className="me-2 fs-3" />
              <SiLibreofficewriter />
              <div>
                <div className="d-flex flex-column">
                  <a
                    className="text-decoration-none"
                    href="#/Kanbas/Courses/1234/Assignments/123"
                  >
                    A1 - ENV + HTML
                  </a>
                </div>
                <div>
                  <span className="text-danger">Multiple Modules</span>
                  <span> | Not available until May 6 at 12:00am |</span>{' '}
                </div>
                <div>Due May 13 at 11:59pm | 100 pts</div>
              </div>
            </div>
            <LessonControlButtons />
          </li>

          <li className="wd-lesson justify-content-evenly list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
            <SiLibreofficewriter />
            <a
              className="text-decoration-none"
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
              className="text-decoration-none"
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
    </>
  );
}
