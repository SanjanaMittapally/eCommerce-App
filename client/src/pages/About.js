import React from "react";
import Layout from "./../components/Layout/Layout";
import "../styles/about.css";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 img-div">
          <img
            src={require('../images/WhatsApp Image 2024-04-29 at 13.29.51 (1).jpeg')}
            alt="contactus"

          />
        </div>
        <div className="col-md-4 box">
          <p className="text-justify mt-2">
            Hello! I'm Sanjana Mittapally from Warangal, Telangana, currently pursuing a Bachelor of
            Technology final year at
            IIT Dharwad.I have hands-on experience with full-stack development using the MERN stack, showcased
            through projects like a Blood Bank Management System, ecommerce app and a comprehensive grievance
            redressal application at IIT Dharwad. My technical skills include proficiency in C/C++,
            HTML, CSS, JavaScript, NodeJS, Express.js, React.js, MongoDB, MySQL.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
