import React from "react";

export default function Videos() {
  return (
    <>
      <div
        className="container mt-5 mb-5 py-4"
        style={{
          backgroundColor: "rgba(210, 223, 226, 0.7)",
        }}
      >
        <div className="Videos text-center text-black">
          <h3>SAVE YOUR LIFE WITH US. </h3>
        </div>{" "}
      
        <div className="row">
          <div className="col-md-4 mt-2">
            <div className="item">
              <h5 className="text-black text-center">
                CAN I PREVENT ALZHEIMER
              </h5>
              <iframe
                className="w-100 rounded-1"
                src="https://www.youtube.com/embed/k3IWmxvqS1c"
                frameBorder={0}
                style={{ height: "250px" }}
              ></iframe>
            </div>
          </div>
          <div className="col-md-4 mt-2">
            <div className="item">
              <h5 className="text-black text-center">
                How to Prevent Alzheimer’s With Diet
              </h5>
              <iframe
                className="w-100 rounded-1"
                src="https://www.youtube.com/embed/t-noCw4LsY4"
                frameBorder={0}
                style={{ height: "250px" }}
              ></iframe>
            </div>
          </div>
          <div className="col-md-4 mt-2">
            <div className="item">
              <h5 className="text-black text-center">PROTECT YOUR PLAN</h5>
              <iframe
                className="w-100 rounded-1"
                src="https://www.youtube.com/embed/xBDGgovA1LI"
                frameBorder="0"
                style={{ height: "250px" }}
              ></iframe>
            </div>
          </div>
          <div className="col-md-4 mt-2">
            <div className="item">
              <h5 className="text-black text-center">
                Preventing Alzheimer’s Disease With Plants
              </h5>
              <iframe
                className="w-100 rounded-1"
                src="https://www.youtube.com/embed/rQa8McNAhKs"
                frameBorder="0"
                style={{ height: "250px" }}
              ></iframe>
            </div>
          </div>
          <div className="col-md-4 mt-2">
            <div className="item">
              <h5 className="text-black text-center">
                Alzheimer's disease, what to expect? | Stages & life expectancy
              </h5>
              <iframe
                className="w-100 rounded-1"
                src="https://www.youtube.com/embed/4fr7j8qfoE4"
                frameBorder="0"
                style={{ height: "250px" }}
              ></iframe>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="item">
              <h5 className="text-black text-center">
                Understanding Alzheimer’s Disease
              </h5>
              <iframe
                className="w-100 rounded-1"
                src="https://www.youtube.com/embed/lFBTlHfV8Iw"
                frameBorder={0}
                style={{ height: "250px" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
