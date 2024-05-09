import React, { useEffect, useState } from 'react'
import './Chat.css';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import Cookies from 'react-cookies'
import http from '../http';

export default function Chat() {
  const navigate = useNavigate();
  const {id} =useParams();
  const [DoctorChat, setDoctorChat] = useState([]);
  useEffect(() => {
        
    const token=Cookies.load('token');
    if (token===undefined) {
        navigate('/');
    }else{

        http.defaults.headers.common = {'Authorization': `Bearer ${token}`}

        http.post('api/Chat/Get_Chat_Doctor',{
          doctor_id:1,
        }).then(res=>{
            
          setDoctorChat(res.data);
        })
        
    }
    
}, []);  return (
    <div className='container mt-5 py-4 rounded-1'>
        <div className='body_chat'>
        <div className='text'>
          <div className='item_chat'>
          <span  className='receiver'>Text</span>

          </div>
          <div className='item_chat'>
            {
              DoctorChat.map((e)=>{
                 
                  return   <span className='sender'>{e.message}</span>
                   
                  })
                }
            </div>
        </div>
        </div>
        <div className='input_chat'>
            <input type="text" name="" id="" />
            <button type='submit'>Sent</button>
        </div>
    </div>
  )
}
