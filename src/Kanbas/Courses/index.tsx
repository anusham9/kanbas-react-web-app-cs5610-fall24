import { Navigate, Route, Routes } from 'react-router';
import CoursesNavigation from './Navigation';
import Modules from './Modules';
import Home from './Home';
import Assignments from './Assignments';
import AssignmentEditor from './Assignments/Editor';
import PeopleTable from './People/Table';

export default function Courses() {
  return (
    <div id="wd-courses">
      <h2>Course 1234</h2>
      <table>
        <tr>
          <td valign="top">
            <CoursesNavigation />
          </td>
          <td>
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="People" element={<PeopleTable />} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
  );
}
