
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import DetectNow from './component/detectNow/DetectNow';
import MainLayouts from './component/Layouts/MainLayouts';
import About from './component/About/About';
import ContactUs from './component/Contact_us/ContactUs';
import Exersizes from './component/Exersizes/Exersizes';
import Appointment from './component/Appointment/Appointment';
import Login from './component/Login/Login';
import Sign_Up from './component/Sign_up/Sign_Up';
import Videos from './component/Videos_Ex/Videos';
import LoginAdmin from './component/LoginAdmin/LoginAdmin';
import Dashboard from './component/Dashboard/Dashboard';
import AddDoctor from './component/AddDoctor/AddDoctor';
import AddNurse from './component/AddNurse/AddNurse';
import AddPatient from './component/AddPatient/AddPatient';
let routers=createBrowserRouter([
  {
    path:"",
    element:<MainLayouts/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"/home",
        element:<Home/>
      },
      {
        path:"/detect",
        element:<DetectNow/>
      },
      {
        path:"/appoint",
        element:<Appointment/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<ContactUs/>
      },
      {
        path:"/exersize",
        element:<Exersizes/>
      },
      {
        path:"/login",
        element:<Login/>

      },
      {
        path:"/addDoctor",
        element:<AddDoctor/>

      },
      {
        path:"/addNurse",
        element:<AddNurse/>

      },
      {
        path:"/addPatient",
        element:<AddPatient/>

      },
      {
        path:"/loginAdmin",
        element:<LoginAdmin/>

      },
      {
        path:"/dashboard",
        element:<Dashboard/>

      },
      {
        path:"/signup",
        element:<Sign_Up/>

      },
      {
        path:"/videos",
        element:<Videos/>

      },
      {
        path:"*",
        element:<NotFound/>
      }


    ]

  }
])
function App() {
  
  return (
   <>
  <RouterProvider router={routers}/>
   
   </>
  );
}

export default App;
