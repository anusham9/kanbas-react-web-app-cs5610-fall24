import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addEnrollment, removeEnrollment } from './Courses/Enrollments/reducer';
export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const [showAllCourses, setShowAllCourses] = useState(false);

  const dispatch = useDispatch();

  const handleEnrollment = (courseId: string) => {
    const existingEnrollment = enrollments.find(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );

    if (existingEnrollment) {
      dispatch(removeEnrollment({ user: currentUser._id, course: courseId }));
    } else {
      dispatch(addEnrollment({ user: currentUser._id, course: courseId }));
    }
  };

  const filteredCourses = showAllCourses
    ? courses
    : courses.filter((course) =>
        enrollments.some(
          (enrollment: any) =>
            enrollment.user === currentUser._id &&
            enrollment.course === course._id
        )
      );

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      {currentUser.role === 'STUDENT' && (
        <button
          className="btn btn-primary float-end"
          onClick={() => setShowAllCourses((initial) => !initial)}
        >
          {showAllCourses ? 'My Enrollments' : 'All Courses'}
        </button>
      )}

      {currentUser.role === 'FACULTY' && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </>
      )}

      <h2 id="wd-dashboard-published">
        {showAllCourses ? 'All Courses' : 'My Enrollments'}
      </h2>
      <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {filteredCourses.map((course) => (
            <div
              key={course._id}
              className="wd-dashboard-course col"
              style={{ width: '300px' }}
            >
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img
                    src="/images/reactjs.jpg"
                    width="100%"
                    height={160}
                    alt="Course Thumbnail"
                  />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    <button className="btn btn-primary">Go</button>

                    {currentUser.role === 'STUDENT' && (
                      <button
                        className={`btn ${
                          enrollments.some(
                            (enrollment: any) =>
                              enrollment.user === currentUser._id &&
                              enrollment.course === course._id
                          )
                            ? 'btn-danger'
                            : 'btn-success'
                        } float-end`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleEnrollment(course._id);
                        }}
                      >
                        {enrollments.some(
                          (enrollment: any) =>
                            enrollment.user === currentUser._id &&
                            enrollment.course === course._id
                        )
                          ? 'Unenroll'
                          : 'Enroll'}
                      </button>
                    )}

                    {currentUser.role === 'FACULTY' && (
                      <>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
