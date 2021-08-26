import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import '../../style/Footer.css';

const Footer = (props) => {
  return (
    <div className="footer">
    <Nav>
    <NavItem>
    <NavLink style={{ textDecoration: "none", color: "#0D0D0D", fontSize: "25px" }} href="https://github.com/celiajpennington">Github</NavLink>
  </NavItem>
  <NavItem>
  
    <NavLink style={{ textDecoration: "none", color: "#0D0D0D", fontSize: "25px" }} href="512-468-5740">Phone: (512)468-5740</NavLink>
  </NavItem>
  <NavItem>
  
    <NavLink style={{ textDecoration: "none", color: "#0D0D0D", fontSize: "25px" }} href="https://www.linkedin.com/in/celia-pennington-47a8a6114/">Linkedin</NavLink>
  </NavItem>
  
</Nav>
</div>
);
}
export default Footer;

//     <div className="footer">

//       <p className="github" a href="https://github.com/celiajpennington">Github | </p>

//       <p className="phone"> Phone: (512)468-5740 | </p>

//       <p className="linkedin" a href="https://www.linkedin.com/in/celia-pennington-47a8a6114/">Linkedin </p>


//   </div>
//   );
// }
