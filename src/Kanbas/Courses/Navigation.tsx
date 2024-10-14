import { Link, useLocation, useParams } from 'react-router-dom';

export default function CoursesNavigation() {
  const links = [
    'Home',
    'Modules',
    'Piazza',
    'Zoom',
    'Assignments',
    'Quizzes',
    'Grades',
    'People',
  ];
  const { pathname } = useLocation();
  const { cid } = useParams();

  return (
    <div
      id="wd-courses-navigation"
      className="wd list-group fs-5 rounded-0 d-none d-md-block"
    >
      {links.map((link) => (
        <Link
          key={link}
          className={`${
            pathname.includes(link)
              ? 'list-group-item active border border-0'
              : 'list-group-item text-danger border border-0'
          }`}
          to={`/Kanbas/Courses/${cid}/${link}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
