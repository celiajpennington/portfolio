import React from 'react';
import '../../style/Resume.css';
import Footer from './Footer';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default function Resume() {
  return (
    <div className="resume">
      <h2 className="professional">Professional Summary</h2>
      <p className="summary"> 
        Hard working, passionate and determined full stack web development student. I believe my retail management, customer service and human resources experience combined with my newly developed and continuously evolving web design skills give me a competitive edge in the web development industry. I enjoy a challenge, and possess the problem solving skills needed to decode it.
      </p>
      <Nav>
    <NavItem>
    <NavLink style={{ textDecoration: "none", color: "#0D0D0D", fontSize: "25px", textAlign:"center", marginLeft: "500px", marginBottom:"200px"}} href="https://docs.google.com/document/d/1XK-jaZZg_fB3NbKXifW0RuK9saoeoyzQ6rxSBAJ9qBs/edit?usp=sharing">Full resume here</NavLink>
  </NavItem>
  </Nav>
      
      <hr />
      <Footer></Footer>
    </div>
  );
}
