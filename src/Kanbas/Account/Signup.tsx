import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as client from './client';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './reducer';

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    navigate('/Kanbas/Account/Profile');
  };

  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
        className="form-control mb-2"
      />
      <br />
      <input
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        type="password"
        placeholder="password"
        className="form-control mb-2"
      />
      <br />
      <button
        onClick={signup}
        id="wd-signin-btn"
        className="btn btn-primary w-100"
      >
        Sign up{' '}
      </button>
      <br />
      <Link to="/Kanbas/Account/Signin">Sign in</Link>
    </div>
  );
}
