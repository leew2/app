import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function logUser(auth) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(auth)
 })
   .then(data => data.json())
}
export default function Login({ setToken }) {
  const [username, setUser] = useState();
  const [password, setPass] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await logUser({
      username,
      password
    });
    setToken(token);
  }
  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUser(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPass(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
};