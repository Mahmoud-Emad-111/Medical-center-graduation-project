import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import http from "../http";
import Cookies from 'react-cookies'
import   {useNavigate}  from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [Error, setError] = useState(false);
  const { register, handleSubmit,  watch,formState: { errors } } = useForm();
  useEffect(() => {
      
    const token=Cookies.load('token');
    if (token!==undefined) {
        navigate('/Profile');
    }
}, []);
  function Login(data){

    http.post('api/Auth/Login',data).then(res=>{
      console.log(res);
      Cookies.save('token', res.data.data.token);
      localStorage.setItem('id',res.data.data.ID)
      navigate('/Profile');
    }).catch(
      error=>{
        if (error.response.status===401) {
          setError(true);
        }
         console.log(error);
      }
    )
  }
  const p_Style = {

    color: 'red',
  
  
  };
  return (
    <div>
      <div
        className="w-50 m-auto my-4 p-3 rounded mt-5"
        style={{ backgroundColor: "rgba(210, 223, 226, 0.33)", color: "white" }}
      >
        <h2 className="text-white">Login Now :</h2>
        <form  onSubmit={handleSubmit(Login)}>
          <label htmlFor="email" className="form-label text-white">
            Email:
          </label>
          <input type="email" id="email" className="form-control mb-3"  {...register('email',{required:'Email is Required',pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}})}/>
          {errors.email && <p style={p_Style} className="error">{errors.email.message}</p>}
          <label htmlFor="password" className="form-label text-white">
            Password:
          </label>
          <input type="password" id="password" className="form-control mb-3" {...register('password',{required:'password is Required'})}/>
          {errors.password && <p style={p_Style} className="error">{errors.password.message}</p>}

          <button type="submit" className="btn bg-main w-50 d-block mx-auto">
            Login
          </button>
          {Error && <p style={p_Style} className="error">Verify your registration information and try again</p>}

          <span className="text-center d-block">Don't have an account? <Link className="text-decoration-none" to="/signup">Sign Up</Link></span>
        </form>
      </div>
    </div>
  );
}
