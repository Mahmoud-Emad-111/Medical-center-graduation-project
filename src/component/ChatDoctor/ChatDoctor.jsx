import React, { useEffect, useState } from 'react'
import '../Chat/Chat.css';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import Cookies from 'react-cookies'
import http from '../http';
import Pusher from 'pusher-js';

export default function ChatDoctor() {
    const [Message, setMessage] = useState([]);
    const navigate = useNavigate();
    const {id} =useParams();
    const [UserChat, setUserChat] = useState([]);
    useEffect(() => {
      const token=Cookies.load('token');
      if (token===undefined) {
          navigate('/');
      }else{
  
          http.defaults.headers.common = {'Authorization': `Bearer ${token}`}
  
          http.post('api/Chat/Get_Chat_User',{
            user_id:id,
          }).then(res=>{
              
            setUserChat(res.data)
          })
          
      }
      
  }, []);
  
  // function ScrollToBottom(){
  //   var d = document.querySelector('.body_chat');
  //   // console.log(d);
  //   d.scrollTop = d.scrollHeight;
  // }
  // ScrollToBottom()
  
  
    // Pusher.logToConsole = true;
    
    var pusher = new Pusher('3fc9bba59aceb10daa36', {
      cluster: 'eu'
    });
    
    var channel = pusher.subscribe(`channelDoctor${localStorage.getItem('id')}`);
    channel.bind('event', function(data) {
      // console.log(data);
      setUserChat([...UserChat,data.data]);
    });
  
  
    function Send_message(e){
      e.preventDefault();
  
      const token=Cookies.load('token');
  
      http.defaults.headers.common = {'Authorization': `Bearer ${token}`}
  
      http.post('api/Chat/Doctor_Message',{
        user_id:id,
        message :Message,
  
      }).then(res=>{
          
        if (res.status===200) {
            setMessage('')
            setUserChat([...UserChat,{message:Message,sender:'Doctor'}]);
  
  
        }
      })
    
    }
  
  return (
      <div className='container mt-5 py-4 rounded-1'>
          <div className='body_chat'>
          <div className='text'>
            <div className='item_chat'>
            
            {
                UserChat.map((e)=>{
  
                    
                      return e.sender=='User' ?    <div  className='receiver'>{e.message}</div> : <div  className='sender'>{e.message}</div>;
                    })
                  }
  
            </div>
  
          </div>
          </div>
          <form onSubmit={Send_message}>
          <div className='input_chat' >
              <input type="text" name="Message" value={Message} id=""   onChange={(e)=>setMessage(e.target.value)}/>
              <button type='submit' >Sent</button>
          </div>
  
          </form>
      </div>
    )
  }
  
  
  
  
  