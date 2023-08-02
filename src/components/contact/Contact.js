import React, { useRef, useState } from "react";
import "./contact.css";
import Phone from "../../images/phone.png";
import Email from "../../images/email.png";
import Address from "../../images/address.png";
import Github from "../../images/github.png";
import Linkedin from "../../images/linkedin.png";
import Profile from "../../images/profile.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vub1ggp",
        "template_91arx7v",
        formRef.current,
        "us9uVdfq7K-m0do86"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    formRef.current.reset();
  };

  return (
    <div className="c" id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Connect with me!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 98869 92547
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              pdhananjay774@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Bengaluru, Karnataka
            </div>
            <div className="line"></div>
            <div className="socials">
              <p className="social-name">Socials</p>
              <div className="socials-wrapper">
                <a
                  className="socials-item"
                  href="https://github.com/dhanno75"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Github} alt="" className="socials-icon" />
                </a>
                <a
                  className="socials-item"
                  href="https://www.linkedin.com/in/dhananjay-p-4b164a19b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Linkedin} alt="" className="socials-icon" />
                </a>
                <a
                  className="socials-item"
                  href="https://drive.google.com/file/d/1JD8UiwKbyTiz3RrDQn7_8Nwz0w9uvNlO/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Profile} alt="" className="socials-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="c-right">
          <p className="c-desc">
            <b>Let's get in touch!</b> If you want to know about me or my work,
            or if you just like to say hello, send me a messaage. I'd love to
            hear from you.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" name="user_name" placeholder="Name" />
            <input type="text" name="user_subject" placeholder="Subject" />
            <input type="text" name="user_email" placeholder="Email" />
            <textarea name="message" rows="5" placeholder="Message" />
            <button>Submit</button>
            {done && "Thank you"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
