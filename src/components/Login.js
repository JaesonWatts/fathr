import React from 'react';

export default function Login() {
  return(
    <div>
      <form>
        <label>
          <p>Email</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <a href="url">Login with Google</a>
    </div>
  )
}