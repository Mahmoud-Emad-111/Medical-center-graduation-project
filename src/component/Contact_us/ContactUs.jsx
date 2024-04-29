import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import http from "../http";

export default function ContactUs() {
  const navigate = useNavigate();

  const { register, handleSubmit,  watch,formState: { errors } } = useForm();

  // function Sent(data){
    
    // http.post('api/Auth/Register',data).then(res=>{
    //   Cookies.save('token', res.data.data.Token);
    //   navigate('/appoint');
    // }).catch(
    //   error=>{
    //     console.log(error); 
    //   }
    // )
  // }

  function sendData(data) {

      http.post('api/Contact/Insert',data).then(res=>{
      // Cookies.save('token', res.data.data.Token);
      console.log(res);
      navigate('/appoint');
    }).catch(
      error=>{
        console.log(error); 
      }
    )


  }
  const p_Style = {

    color: 'red',
  
  
  };
  return (
    <>
      <div>
        <div
          className="w-50 m-auto my-4 p-3 rounded mt-5"
          style={{
            backgroundColor: "rgba(210, 223, 226, 0.44)",
            
          }}
        >
          <div className="desc text-center">
            <h2 className="text-black fw-bold"> Contact Us</h2>
            <p className="fw-bold">Feel free to reach out to us</p>
          </div>

          <form onSubmit={handleSubmit(sendData)}>
            <label htmlFor="email" className="form-label text-white">
              Email:
            </label>
            <input type="email" id="email" className="form-control mb-3" {...register('email',{required:'Email is Required',pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}})}/>
          {errors.email && <p style={p_Style} className="error">{errors.email.message}</p>}
            <label htmlFor="Name" className="form-label text-white">
              Name:
            </label>
            <input type="text" id="Name" className="form-control mb-3" {...register('name',{required:'Name is Required'})}/>
          {errors.name && <p style={p_Style} className="error">{errors.name.message}</p>}

            <label htmlFor="phone" className="form-label text-white">
              Phone:
            </label>
            <input type="tel" id="phone" className="form-control mb-3"  {...register('phone',{required:'phone is Required'})}/>
          {errors.phone && <p style={p_Style} className="error">{errors.phone.message}</p>}

            <label htmlFor="message" className="form-label text-white">
              Message:
            </label>
            <textarea id="message" className="form-control mb-3" {...register('message',{required:'message is Required'})}/>
          {errors.message && <p style={p_Style} className="error">{errors.message.message}</p>}

            

            <button type="submit" className="btn bg-main w-50 d-block mx-auto">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
