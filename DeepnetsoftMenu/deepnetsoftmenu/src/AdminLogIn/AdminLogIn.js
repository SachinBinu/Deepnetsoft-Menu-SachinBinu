import React, { useState } from 'react';
import './AdminLogIn.css';
import { useNavigate } from "react-router-dom";

function AdminLogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function loginAuth(e) {
    e.preventDefault(); // prevent page reload

    const validEmail = "admin@gmail.com";
    const validPassword = "Admin123";

    if (email === validEmail && password === validPassword) {
      navigate("/Addnewfood"); // ✅ redirect
    } else {
      alert("❌ Invalid email or password");
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 color-da">
      <div className="card p-4 shadow rounded-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4 fw-bold">Welcome Back <br />Admin !!</h3>

        <form className='py-3' onSubmit={loginAuth}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-secondary w-100">Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogIn;
