
import { Link, NavLink } from 'react-router-dom';
import Cookies from 'react-cookies';
import { useEffect, useState } from 'react';



export default function Navbar() {
  const [isLogin, setisLogin] = useState(false);
  
  useEffect(() => {
    if (Cookies.load('token') !== undefined) {
      setisLogin(true)

    }
    
  }, []);

  function CheckLogin(){
    if (isLogin) {
      return (
        <>
            <li className='text-center'>
          <Link className='text-text-decoration-none btn bg-main' to={localStorage.getItem('isDoctor')==='false' ? '/Profile': '/ProfileDoctor'} >
          Profile
          </Link>
          </li>
        </>
      )
    }else{
        return (
          <>
            <li className='text-center'>
              <Link className='text-text-decoration-none btn bg-main ' to="/login" >
              User
              </Link>
              </li>
              <hr />
              <li className='text-center'>
              <Link className='text-text-decoration-none btn bg-main' to="/loginDoctor" >
              Doctor
              </Link>
            </li>
          </>
        )
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#365d6c', padding: '10px' }}>
        <div className="container-fluid">
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/detect">Detect-Now</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/appoint">Appointment</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/contact">Contact Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/exersize">Exercises</NavLink>
              </li>
            </ul>
            <ul className="navbar-nav">
     <li className="nav-item dropdown">
  <NavLink className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    <i className="fa-solid fa-user" />
  </NavLink>
  <ul className="dropdown-menu dropdown-menu-end">
    {  CheckLogin() }

  </ul>
</li>

            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
}
