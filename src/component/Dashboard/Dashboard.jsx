import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <>
<div className="container dash my-5 p-5">
  <div className="row ">
    <div className="col-md-4">
      <div className="dashboard-item bg-white mt-5 rounded-1 p-2">
        <h3 className='text-center'>Doctors</h3>
     <div className="count d-flex justify-content-between">
     <i className="fa-solid fs-3 fa-user-doctor"></i>
      <span className='fs-3 border-black'>5</span>
     </div>

      <Link to="/addDoctor" className="btn bg-main w-50 d-block mx-auto">Add Doctor</Link>
        
      </div>
    </div>
    <div className="col-md-4">
      <div className="dashboard-item bg-white mt-5 rounded-1 p-2">
        <h3 className='text-center'>Nurses</h3>
      <div className="count d-flex justify-content-between">
     <i className="fa-solid fs-3 fa-user-nurse"></i>
      <span className='fs-3 border-black'>10</span>
     </div>

      <Link to="/addNurse" className="btn bg-main w-50 d-block mx-auto">Add Nurse</Link>
    
      </div>
    </div>
    <div className="col-md-4">
      <div className="dashboard-item bg-white mt-5 rounded-1 p-2">
        <h3 className='text-center'>Patients</h3>

      <div className="count d-flex justify-content-between">
     <i className="fa-solid fs-3 fa-user"></i>
      <span className='fs-3 border-black'>20</span>
     </div> 
     <Link to="/addPatient" className="btn bg-main w-50 d-block mx-auto">Add Patient</Link>
    
      </div>
    </div>
  </div>
</div>
    </>
  )
}

