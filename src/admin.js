import React, { useState } from "react";
import "./admin.css";
const Admin = () => {
  const [isVisible, setIsVisisble] = useState(true);

  return (
    <>
      it is Admin component
      <nav>
        <ul >
          <li>
            <a  href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li className="subnav">
            <a  href="#">Services</a>
            <ul
          
             className="subnav-content"
            >
              <li className="service-subnav" style={{position: "relative", left: -39}}>
                <a href="#">Service 1</a>
                <ul className="service1-subnav-content">
                  {/* <li>
                  <a  href="#">prem</a>
                  </li> */}
                  <li>  <a  href="#">rama</a></li>
                  <li className="krishana-submenu">  <a  href="#">krishana</a>
                  <ul className="krishana-submenu-content">
                  <li>  <a  href="#">ja ma kali</a></li>
                  <li>  <a  href="#">Ram krishna Hari</a></li>
                  </ul>
                  </li>
                  <li>  <a  href="#">hare rama</a></li>
                </ul>
              </li>
              <li style={{  position: "relative", left: -39 }}>
                <a href="#">Service 2</a>
              </li>
              <li style={{ position: "relative", left: -39 }}>
                <a href="#">Service 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
   
      </nav>
    </>
  );
};

export default Admin;
