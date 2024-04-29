import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AddNurse() {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    email: '',
    phone: '',
    address: '',
    experience: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission (e.g., send data to backend)
    console.log(formData); // Example: Log form data to console
    // Reset form fields
    setFormData({
      name: '',
      department: '',
      email: '',
      phone: '',
      address: '',
      experience: '',
    });
  };

  return (
    <div className="container dash mt-5">
      <h1>Add New Nurse</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="department" className="form-label">Department:</label>
          <input
            type="text"
            className="form-control"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone:</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address:</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="experience" className="form-label">Experience:</label>
          <textarea
            className="form-control"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn bg-main w-25 d-block mx-auto ">Submit</button>
        <Link to="/dashboard"> <i className="bg-main rounded-1 p-2 mb-2 fa-solid fs-4 fa-backward"></i></Link>
      </form>
    </div>
  );
}
