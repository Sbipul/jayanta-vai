import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <div className="color " >

      <div className="container ">
        <h1>Car-Store</h1>
        <p>
          khajedeowan 2nd-lan<br />
          lalbugh, Dhaka <br />
          +880 1766913719 <br />

          carstore07@gmail.com
        </p>
      </div>



      <div className="pb-3 text-center">
        <p className="footer-bottom">
          Copyright ©2021 All rights reserved | Designed and Developed by
          <span className="text-danger"> <a rel="noopener noreferrer" href="https://www.facebook.com/joyantajoy07/" target="_blank">
            Joyanta Paul Joy</a></span>
        </p>
      </div>
    </div >

  );
};

export default Footer;