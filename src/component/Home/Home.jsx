import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'react-cookies'

export default function Home() {
  const [isLogin, setisLogin] = useState(false);
  
  useEffect(() => {
    if (Cookies.load('token') !== undefined) {
      setisLogin(true)

    }
    
  }, []);

  console.log(isLogin);
  function LoginPage(){
    return (
      <>
      <div className="container mt-5 py-5" style={{ backgroundColor: 'rgba(210, 223, 226, 0.33)', color: 'white' }}>
  
        <div className="description text-center">
          <p>EARLY RECOGNITION SAVES LIVES</p>
          <p>"RECOGNIZE THE SIGNS EARLY - IT COULD MAKE ALL THE DIFFERENCE"</p>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="login text-center text-white fw-bold">
              <p>START YOUR JOURNEY</p>
              <p>IF YOU ALREADY HAVE AN ACCOUNT</p>
              <Link to="/login" className="btn bg-main w-50">LOG IN</Link> {/* Updated the "to" prop */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="sign text-center text-white fw-bold">
              <p>CREATE AN ACCOUNT AND</p>
              <p>START YOUR JOURNEY</p>
              <Link to="/signup" className="btn bg-main w-50">SIGN UP</Link>
            </div>
          </div>
        </div>
      </div>
  
      </>
    )
  }
  return  isLogin===false ? LoginPage() : <></>;
  
}









