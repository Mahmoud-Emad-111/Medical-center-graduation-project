import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import http from "../http";
export default function AddDoctor() {
  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    email: '',
    phone: '',
    address: '',
    experience: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const p_Style = {

    color: 'red',
  
  
  };
  function sendData(data) {

    http.post('Dashboard/Doctor/Register',data).then(res=>{
    // Cookies.save('token', res.data.data.Token);
    console.log(res);
    // Navigate('/appoint');
  }).catch(
    error=>{
      console.log(error); 
    }
  )


}


  const { register, handleSubmit,  watch,formState: { errors } } = useForm();

  return (
    <div className="container dash mt-5">
      <h1>Add New Doctor</h1>
      <form onSubmit={handleSubmit(sendData)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required

            {...register('name',{required:'Name is Required'})}/>
          {errors.name && <p style={p_Style} className="error">{errors.name.message}</p>}

        </div>
        <div className="mb-3">
          <label htmlFor="specialty" className="form-label">Specialty:</label>
          <input
            type="text"
            className="form-control"
            id="specialty"
            name="specialty"
            required
            {...register('Specialty',{required:'specialty is Required'})}/>
            {errors.specialty && <p style={p_Style} className="error">{errors.specialty.message}</p>}
  
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
            {...register('email',{required:'Email is Required',pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}})}/>
            {errors.email && <p style={p_Style} className="error">{errors.email.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone:</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            required
            {...register('phone',{required:'phone is Required'})}/>
            {errors.phone && <p style={p_Style} className="error">{errors.phone.message}</p>}
  
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address:</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            required
            {...register('Address',{required:'address is Required'})}/>
            {errors.address && <p style={p_Style} className="error">{errors.address.message}</p>}
 
        </div>
        <div className="mb-3">
          <label htmlFor="experience" className="form-label">Experience:</label>
          <textarea
            className="form-control"
            id="experience"
            name="experience"
            required
            {...register('Experience',{required:'experience is Required'})}
          >

            
          </textarea>
          {errors.experience && <p style={p_Style} className="error">{errors.experience.message}</p>}

        </div>
        <label htmlFor="password" className="form-label text-white">
            Password:
          </label>
          <input type="password" id="password" className="form-control mb-3" {...register('password',{required:'password is Required'})}/>
          {errors.password && <p style={p_Style} className="error">{errors.password.message}</p>}

        <button type="submit" className="btn bg-main w-25 d-block mx-auto mb-3 p-1">Submit</button>
        <Link to="/dashboard"> <i className="bg-main rounded-1 p-2 mb-2 fa-solid fs-4 fa-backward"></i></Link>
      </form>
    </div>
  );
}
