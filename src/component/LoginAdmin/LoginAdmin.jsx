import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginAdmin() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
      e.preventDefault(); 
  

      const email = e.target.elements.email.value;
      const password = e.target.elements.password.value;
      if (email === 'admin@example.com' && password === 'admin123') {
        
        navigate('/dashboard');
      } else {
       
        alert('Invalid email or password');
      }
    };

  return (
    <div>
      <div
        className="w-50 m-auto my-4 p-3 rounded mt-5"
        style={{ backgroundColor: 'rgba(210, 223, 226, 0.33)', color: 'white' }}
      >
        <h2 className="text-white">Login Now:</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email" className="form-label text-white">
            Email:
          </label>
          <input type="email" id="email" className="form-control mb-3" required />
          <label htmlFor="password" className="form-label text-white">
            Password:
          </label>
          <input type="password" id="password" className="form-control mb-3" required />

          <button type="submit" className="btn bg-main w-50 d-block mx-auto">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
