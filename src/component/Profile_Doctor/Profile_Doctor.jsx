import React, { useEffect, useState } from 'react'
import './ProfileDoctor.css'
import http from '../http';
import Cookies from 'react-cookies'
import { useNavigate } from "react-router";
import DoctorCart from '../DoctorCart/DoctorCart';
export default function Profile_Doctor() {
  const navigate = useNavigate();
  const [Data, setData] = useState({
      Name:'',
      Email:'',
      Image:'',
  });
  const [Doctors, setDoctors] = useState([]);
  useEffect(() => {
      
      const token=Cookies.load('token');
      if (token===undefined) {
          navigate('/');
      }else{
          if (!localStorage.getItem('isDoctor')) {
          navigate('/Profile');

          }
          http.defaults.headers.common = {'Authorization': `Bearer ${token}`}
  
          http.get('api/Auth/Profile',{token}).then(res=>{
           localStorage.setItem('id',res.data.id)
              
              setData(res.data)
          })
          http.get('api/Doctor/User_appointment',{token}).then(res=>{
              setDoctors(res.data)
          })
          
      }
      
  }, []);

  const Logout =()=>{
      const token=Cookies.load('token');
      http.defaults.headers.common = {'Authorization': `Bearer ${token}`}
      http.post('api/Auth/Logout',{token}).then(res=>{
          console.log(res);
      })
      Cookies.remove('token')
      localStorage.removeItem('isDoctor');

      navigate('/');
  }
  return (
  <div className='container  py-5'>
      <div className='profile_Doctor'>
          <div className='left'>
              <span>{Data.Email}</span>
              <img src={Data.Image} alt="" className='Name' />
          </div>
          <div className='right'>
              <button onClick={Logout}>Logout</button>
          </div>
          
      </div>
      <div className='Carts'>
          
          {
              Doctors.map((item)=>{
                return  <DoctorCart Chat={'chatDoctor'} id={item.id} name={item.name} email={item.email} image={item.image}/>
              })
          }
      </div>
  </div>
)
}
