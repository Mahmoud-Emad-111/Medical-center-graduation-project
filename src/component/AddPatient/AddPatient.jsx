import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AddPatient() {
  const [formData, setFormData] = useState({
    name: '',
    condition: '',
    age: '',
    gender: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData); // Example: Log form data to console
    // Reset form fields
    setFormData({
      name: '',
      condition: '',
      age: '',
      gender: '',
      address: '',
    });
  };

  return (
    <div className="container dash mt-5">
      <h1>Add New Patient</h1>
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
          <label htmlFor="condition" className="form-label">Condition:</label>
          <input
            type="text"
            className="form-control"
            id="condition"
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age:</label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender:</label>
          <select
            className="form-control"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
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
        <button type="submit" className="btn bg-main w-25 d-block mx-auto mb-3">Submit</button>
        <Link to="/dashboard"> <i className="bg-main rounded-1 p-2 mb-2 fa-solid fs-4 fa-backward"></i></Link>
      </form>
    </div>
  );
}
