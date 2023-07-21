import React from "react";
import "./professional.css";

const Professional = () => {
  return (
    <div className="pro" id="professional">
      <h1 className="pro-title">Experience</h1>
      <div className="pro-companies">
        <div className="pro-company">
          <h3 className="pro-company-title">Advisor</h3>
          <h5 className="pro-company-name">[24]7.ai</h5>
          <p className="pro-company-desc">
            Handling queries of the customers of AT&T - Uverse via chat and make
            sure that any problems they are experiencing regarding their bill,
            orders are resolved with utmost satisfaction. Promoting information
            about other products and services.
          </p>
          <p className="pro-company-time">June 2018 - February 2019</p>
        </div>

        <div className="pro-company">
          <h3 className="pro-company-title">Business Development Executive</h3>
          <h5 className="pro-company-name">Toilers</h5>
          <p className="pro-company-desc">
            I identified, researh and target new business prospects. Gaining new
            appointments from hot and cold leads. Managing and maintaining
            databases of potential clients.
          </p>
          <p className="pro-company-time">January 2020 - December 2020</p>
        </div>
      </div>
    </div>
  );
};

export default Professional;
