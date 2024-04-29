import React from "react";
import { Link } from "react-router-dom";

export default function Exersizes() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <div
            className="content text-black fw-bolder"
            style={{
              backgroundColor: "rgba(210, 223, 226, 0.7)",
              color: "white",
              /*   borderRight: "3px solid #638a99",
              borderBottom: "3px solid #638a99", */
              marginBottom: "15px",
              padding: "15px", // Add padding to the div
            }}
          >
            <ul>
              <h5 className="text-black fw-bold mt-2">STAY ACTIVE :</h5>
              <li> ATM FOR 10.000 STEPS DAILY.</li>
              <li> INCORPORATE STRENGTH AND FLEXIBILITY EXERCISES.</li>
              <li> REGULAR PHYSICAL ACTIVITY REDUCES ALZHEIMER'S RISK.</li>
            </ul>

            <ul>
              <h5 className="text-black fw-bold mt-2">STAY CONNECTED :</h5>
              <li> COMPAT SOCIAL ISOLATION, WHICH HARMS HEALTH.</li>
              <li> CONNECT WITH FAMILY,FRIENDS,AND COMMUNITY.</li>
              <li> ONLINE RESOURCES AND PROGRAMS CAN HELP STAY CONNECTED.</li>
            </ul>
            <ul>
              <h5 className="text-black fw-bold mt-2">LEARN NEW THINGS :</h5>
              <li> FORMAL CLASSES, ONLINE COURSES, OR HOBBIES.</li>
              <li> STIMULATE THE MIND AND STAY ENGAGED.</li>
              <li> YOUTUBE OFFERS VARIOUS LEARNING OPPORTUNITIES.</li>
            </ul>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="text-black">MORE TIPS</div>
              <div style={{ marginTop: "5px" }}>
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="content2"
            style={{
              backgroundColor: "rgba(210, 223, 226, 0.7)",
              color: "white",
              marginBottom: "15px",
              padding: "15px",
            }}
          >
            <div className="row py-3">
              <div className="desc-exersize">
                <p className="text-black">
                  OUR EXERSIZES ARE{" "}
                  <span className="fw-bold">FREQUENTLY USED</span> IN OUR
                  PROGRAMS.
                  <span className="fw-bold">
                    {" "}
                    WE HAVE A LIST OF SOME OF THE BEST EXERSIZES
                  </span>
                  THAT CAN BE USED IN OUR PROGRAMS.
                  <span className="fw-bold ">
                    ONE OF THE BEST EXERSIZES IS THE FOLLOWING ONE{" "}
                  </span>
                </p>
              </div>

              <div className="item">
                <h5>CAN I PREVENT ALZHEIMER</h5>
                <iframe
                  className="w-100 rounded-1"
                  src="https://www.youtube.com/embed/k3IWmxvqS1c"
                  frameBorder={0}
                ></iframe>
              </div>

              <div className="mt-2"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div className="text-black">MORE TIPS</div>
                <div style={{ marginTop: "5px" }}>
                  <Link to="/videos"><i className="fa-solid fa-chevron-down"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
