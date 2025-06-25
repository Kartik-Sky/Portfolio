"use client"

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact-section">
        <div className="contact-container">
    
    <div className="contact-left">
      <h2 className="contact-title">Let&apos;s <span>Connect</span></h2>
        <p className="contact-subtitle">
            Whether it's collaboration, opportunity, or just to say hi — drop a message anytime.
        </p>
      <div className="contact-item">
        <h3>Email</h3>
        <p>kaartik05@gmail.com</p>
    </div>
      <div className="contact-item">
        <h3>Location</h3>
        <p>Ahmedabad, India</p>
      </div>
    </div>

    <div className="contact-right">
      <img src="/assets/img/contact-img.svg" alt="Contact" className="contact-image" />
    </div>
  </div>
</section>

  )
}
