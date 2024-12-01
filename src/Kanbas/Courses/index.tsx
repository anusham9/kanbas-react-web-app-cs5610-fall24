import { Navigate, Route, Routes, useLocation, useParams } from 'react-router';
import CoursesNavigation from './Navigation';
import Modules from './Modules';
import Home from './Home';
import Assignments from './Assignments';
import AssignmentEditor from './Assignments/Editor';
import PeopleTable from './People/Table';
import { FaAlignJustify } from 'react-icons/fa6';
import * as courseClient from '../Courses/client';
import { useEffect, useState } from 'react';

export default function Courses({ courses }: { courses: any }) {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsersForCourse = async () => {
    const users = await courseClient.findUsersForCourse(cid as string);
    setUsers(users);
  };
  useEffect(() => {
    fetchUsersForCourse();
  }, [cid]);

  const course = courses.find((course: any) => course._id == cid);
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split('/')[4]}
      </h2>{' '}
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable users={users} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
