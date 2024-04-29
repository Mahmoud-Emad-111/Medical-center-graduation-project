import React from "react";

export default function About() {
  return (
    <div className="container mt-5 w-75">
      <div className="row">
        <div className="col-md-6">
          <div
            style={{
              backgroundColor: "rgba(210, 223, 226, 0.7)",
              color: "white",
            /*   borderRight: "3px solid #638a99",
              borderBottom: "3px solid #638a99", */
              marginBottom: "15px",
              padding: "15px", // Add padding to the div
            }}
          >
            <h5 className="text-black fw-bold mt-2">Our Mission</h5>
            <p className="text-black">
              OUR MISSION IS TO EMPOWER INDIVIDUALS AND THEIR FAMILIES BY
              PROVIDING RELIABLE RESOURCES FOR THE EARLY DETECTION OF
              ALZHEIMER'S DISEASES. WE UNDERSTAND THE IMPORTANCE OF EARLY
              INTERVENTION AND AIM TO MAKE THE PROCESS ACCESSIBLE, INFORMATIONAL,
              AND SUPPORTIVE.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div
            style={{
              backgroundColor: "rgba(210, 223, 226, 0.7)",
              color: "white",
              marginBottom: "15px",
              padding: "15px", // Add padding to the div
            }}
          >
            <h5 className="text-black fw-bold mt-2">WHO WE ARE</h5>
            <p className="text-black">
              ESTABLISHED BY STUDENTS AT THE COLLEGE OF COMPUTER SCIENCE AND
              ARTIFICIAL INTELLIGENCE, SPECIALIZING IN MEDICAL INFORMATICS, OUR
              COLLECTIVE MISSION IS TO ADDRESS THE CHALLENGES OF THE EARLY
              DETECTION OF ALZHEIMER'S DISEASES.
            </p>
          </div>
        </div>
        <div className="col-md-12">
          <div
            style={{
              backgroundColor: "rgba(210, 223, 226, 0.7)",
              marginBottom: "15px",
              padding: "15px", // Add padding to the div
            }}
          >
            <h5 className="text-black fw-bold mt-2 text-center">WHAT WE OFFER</h5>
            <p className="text-black">
              <ul className="py-2">
                <li>
                  DETECTION TOOLS: EXPLORE OUR USER-FRIENDLY DETECTION TOOLS
                  DESIGNED FOR EARLY DETECTION. THESE TOOLS ARE BASED ON THE
                  LATEST ADVANCEMENTS IN ALZHEIMER'S RESEARCH AND ACCESSIBLE TO
                  EVERYONE.
                </li>
                <li>
                  EXPERT CONSULTATION: CONNECT WITH OUR TEAM OF SPECIALIZED
                  DOCTORS WHO ARE HERE TO GUIDE YOU THROUGH THE DETECTION
                  PROCESSES. WHETHER YOU HAVE CONCERNS OR NEED ADVICE, WE'RE HERE
                  TO HELP.
                </li>
                <li>
                  TIPS AND EXPERIENCE: OUR WEBSITE OFFERS VALUABLE TIPS AND
                  EXPERIENCES TO SUPPORT BRAIN HEALTH. FROM LIFESTYLE CHANGES TO
                  COGNITIVE EXERCISES, WE PROVIDE PRACTICAL SUGGESTIONS FOR YOUR
                  WELL-BEING.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
