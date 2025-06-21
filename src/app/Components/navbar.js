"use client";

import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Link from 'next/link';
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import Image from 'next/image';
import "../globals.css";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => setActiveLink(value);

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
            <p><img src="/assets/img/logo.png" alt="Logo" style={{width:"80px",height:"80px", marginTop:"10px"}} /></p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              href="#home"
              className={`nav-link ${activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}`}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Link>
            <Link
              href="#skills"
              className={`nav-link ${activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}`}
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className={`nav-link ${activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}`}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Link>
            <Link
              href="#experience"
              className={`nav-link ${activeLink === 'Experience' ? 'active navbar-link' : 'navbar-link'}`}
              onClick={() => onUpdateActiveLink('experience')}
            >
              Experience
            </Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src={"/assets/img/nav-icon1.svg"} alt="" /></a>
              <a href="#"><img src={"/assets/img/nav-icon2.svg"} alt="" /></a>
              <a href="#"><img src={"/assets/img/nav-icon3.svg"} alt="" /></a>
            </div>
            
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
