import React, { useEffect } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Bassem from "../../assests/images/Basssem.jpg";
import rofida from "../../assests/images/rofida.jpg";
import alaa from "../../assests/images/alaa.jpg";
import walaa from "../../assests/images/walaa.jpg";
import http from "../http";

export default function Appointment() {
  
  const [startDate, setStartDate] = useState(null);
  const [DoctorData, setDoctorData] = useState([]);
  useEffect(() => {
    http.get('api/Doctor/Get').then(res=>{
      setDoctorData(res.data)
    })

  }, []);
  console.log(DoctorData);
  const handleSubmit = () => {
    // You can perform submission logic here
    console.log("Selected Date:", startDate);
    // Reset the date after submission if needed
    setStartDate(null);
  };
  return (
    <>
      <div
        className="container mt-5 py-4 rounded-1"
        style={{ backgroundColor: "rgba(210, 223, 226, 0.44)" }}
      >
        <h2 className="text-black text-center">SELECT A DOCTOR </h2>
        <div className="row">
        {
          DoctorData.map(data=>{
            
            return (<>
            <div className="col-md-3">
            <div className="person text-center fw-bold">
            <p>{data.name}</p>

              <img src={data.image} alt="" className="w-50" />
              <div className="overlay">
          <div className="info">
         <p>{data.Experience}</p>
            


          </div>
        </div>
            </div>
          </div>

            </>)
          })
        }    
        </div>
            <div className="col-md-3 m-auto mt-4 fw-bold ">

           SELECT A DATE : <DatePicker dateFormat={"dd/MM/yyyy"}
             selected={ startDate} onChange={(date) => setStartDate(date)} 
               minDate={new Date()}
             />
           
             <div>
             <button onClick={handleSubmit} className="btn bg-main mt-3">Submit</button>
             </div>

            </div>
      
      </div>
    </>
  );
}
