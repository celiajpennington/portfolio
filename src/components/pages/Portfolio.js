//import React from 'react';
import "../../style/Portfolio.css";
import Footer from './Footer';
import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
// import { Tooltip } from 'reactstrap';

const Portfolio = (props) => {
  return (
    <div className="portfolio-div">
       <h1 className="portfolio-title">My Work</h1>
      <Nav vertical>
      <img className="sous-chef" src="https://i.imgur.com/HVGngPv.png" alt="recipe website"></img>
        <NavItem>
          <NavLink style={{ textDecoration: "none", color: "#D99E89", fontSize: "50px" }} href="https://sous-chef-project-2.herokuapp.com/">Sous-Chef</NavLink>
        </NavItem>
        <NavItem>
        <img src="https://i.imgur.com/yLoMqef.png" alt="travel website"></img>
          <NavLink style={{ textDecoration: "none", color: "#D99E89", fontSize: "50px" }} href="https://jguiro09.github.io/TopTourist/">Top Tourist</NavLink>
        </NavItem>
        <NavItem>
        <img src="https://i.imgur.com/kEoToXP.png" alt="pink code quiz"></img>
          <NavLink style={{ textDecoration: "none", color: "#D99E89", fontSize: "50px" }} href="https://celiajpennington.github.io/code.Quiz/">Code Quiz</NavLink>
        </NavItem>
        
      </Nav>
    
      <hr />
      <Footer></Footer>
    </div>
  );
}

export default Portfolio;


/*import sousChefImg from "../../style/img/Profile-Sous-Chef.png";*/


