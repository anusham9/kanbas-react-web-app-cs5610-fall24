import { Link } from 'react-router-dom';
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input
        id="wd-username"
        className="form-control mb-2"
        value="alice"
        placeholder="username"
      />
      <br />
      <input
        id="wd-password"
        value="123"
        className="form-control mb-2"
        placeholder="password"
        type="password"
      />
      <br />
      <input
        id="wd-firstname"
        className="form-control mb-2"
        value="Alice"
        placeholder="First Name"
      />
      <br />
      <input
        id="wd-lastname"
        className="form-control mb-2"
        value="Wonderland"
        placeholder="Last Name"
      />
      <br />
      <input
        id="wd-dob"
        className="form-control mb-2"
        value="2000-01-01"
        type="date"
      />
      <br />
      <input
        id="wd-email"
        className="form-control mb-2"
        value="alice@wonderland"
        type="email"
      />
      <br />
      <select id="wd-role" className="form-control mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <br />
      <Link to="/Kanbas/Account/Signin">Sign out</Link>
    </div>
  );
}
