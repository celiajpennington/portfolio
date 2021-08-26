//import React from 'react';
import "../../style/Portfolio.css";
import Footer from './Footer';
import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';



/*import sousChefImg from "../../style/img/Profile-Sous-Chef.png";*/



const Portfolio = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div className="portfolio-div">
      <h1 className="portfolio-title">My Work</h1>


      <img className="sous-chef" src="https://i.imgur.com/HVGngPv.png" alt="recipe website"></img>
      {/*<img className= "sous-chef" src={sousChefImg} alt ="cooking website"/>*/}

      <h3> <span style={{ textDecoration: "none", color: "#D99E89" }} href="https://sous-chef-project-2.herokuapp.com/" id="DisabledAutoHideExample">Sous-Chef</span></h3>
      <Tooltip placement="top" isOpen={tooltipOpen} autohide={false} target="DisabledAutoHideExample" toggle={toggle}>
        Click here to go to deployed site!

      </Tooltip>
      <img src="https://i.imgur.com/yLoMqef.png" alt="travel website"></img>
      <h3> <span style={{ textDecoration: "none", color: "#D99E89" }} href="https://jguiro09.github.io/TopTourist/" id="DisabledAutoHideExample">Top Tourist</span></h3>
      <Tooltip placement="top" isOpen={tooltipOpen} autohide={false} target="DisabledAutoHideExample" toggle={toggle}>
        Click here to go to deployed site!

      </Tooltip>
      <img src="https://i.imgur.com/kEoToXP.png" alt="pink code quiz"></img>

      <h3> <span style={{ textDecoration: "none", color: "#D99E89" }} href="https://celiajpennington.github.io/code.Quiz/" id="DisabledAutoHideExample">Code Quiz</span></h3>
      <Tooltip placement="top" isOpen={tooltipOpen} autohide={false} target="DisabledAutoHideExample" toggle={toggle}>
        Click here to go to deployed site!

      </Tooltip>

      <Footer></Footer>
    </div>
  );
}

export default Portfolio;
// export default function Portfolio() {
//   return (
//     <div className="portfolio-div">
//       <h1>My Work</h1>


//        <img  className ="sous-chef"src="https://i.imgur.com/HVGngPv.png" alt="recipe website"></img> 
//       {/*<img className= "sous-chef" src={sousChefImg} alt ="cooking website"/>*/}
//       <h3>Sous-Chef</h3>




//         <img src="https://i.imgur.com/yLoMqef.png" alt="travel website"></img> 
//         <h3>Top Tourist</h3>



//             <img src="https://i.imgur.com/kEoToXP.png" alt="pink code quiz"></img>
//             <h3>Code Quiz</h3>



//               <img src="https://i.imgur.com/UDdW4Sb.png" alt="workout tracker app"></img>
//               <h3>Workout Tracker</h3>

//               <Footer></Footer>
//     </div>
//               );
// }
