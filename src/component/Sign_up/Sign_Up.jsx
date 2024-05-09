import React,{useEffect, useRef} from "react";
import { useForm } from "react-hook-form";
import http from "../http";
import Cookies from 'react-cookies'
import   {useNavigate}  from "react-router-dom";


export default function Sign_Up() {

  
  
  const navigate = useNavigate();
  
  const { register, handleSubmit,  watch,formState: { errors } } = useForm();
  useEffect(() => {
        
    const token=Cookies.load('token');
    if (token!==undefined) {
        navigate('/Profile');
    }
    
    
}, []);
 //////////// Handel Login ////////////////////////
  function Login(data){
    
    http.post('api/Auth/Register',data).then(res=>{
      Cookies.save('token', res.data.data.Token);
      navigate('/Profile');
    }).catch(
      error=>{
        console.log(error); 
      }
    )
  }
  
  //////////////handel password ////////////////////
  const password = useRef({});
  password.current = watch("password", "");

  const p_Style = {

    color: 'red',
  
  
  };
  return (
    <div>
      <div
        className="w-75 m-auto my-4 p-3 rounded mt-5"
        style={{ backgroundColor: "rgba(210, 223, 226, 0.33)", color: "white" }}
      >
        <h2 className="text-white">Sign Up:</h2>
        <form onSubmit={handleSubmit(Login)}>
          <label htmlFor="email" className="form-label text-white">
            Email:  
          </label>
          <input type="email" id="email" className="form-control mb-3"  {...register('email',{required:'Email is Required',pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}})}/>
          {errors.email && <p style={p_Style} className="error">{errors.email.message}</p>}

          
          <label htmlFor="userName" id="userName" className="form-label text-white" >
            User Name:
          </label>
          <input type="text" id="userName" className="form-control mb-3" {...register('name',{required:'Name is Required'})}/>
          {errors.name && <p style={p_Style} className="error">{errors.name.message}</p>}

          <label htmlFor="password" className="form-label text-white">
            Password:</label>
          <input type="password" id="password" className="form-control mb-3" name="password" {...register('password',{required:'password is Required'})}/>
          {errors.password && <p style={p_Style} className="error">{errors.password.message}</p>}

          <label htmlFor="confirm_password" className="form-label text-white">
            Confirm Password:
          </label>
          <input type="password" id="confirm_password" name="confirm_password" className="form-control mb-3"  {...register('confirm_password',{required:'confirm password is Required',
            validate:value =>
                value === password.current || "The passwords do not match"
            })}/>
            {errors.confirm_password && <p style={p_Style} className="error">{errors.confirm_password.message}</p>}

          <button type="submit" className="btn bg-main w-50 d-block mx-auto">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
