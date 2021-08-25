import React from 'react';
import "../../style/Portfolio.css";
import sousChefImg from "../../style/img/Profile-Sous-Chef.png";


export default function Portfolio() {
  return (
    <div className="portfolio-div">
      <h1>My Work</h1>


      {/* <img  className ="sous-chef"src="https://i.imgur.com/HVGngPv.png" alt="recipe website"></img> */}
      <img className= "sous-chef" src={sousChefImg} alt ="cooking website"/>
      <h3>Sous-Chef</h3>




        <img src="https://i.imgur.com/yLoMqef.png" alt="travel website"></img> 
        <h3>Top Tourist</h3>


          
            <img src="https://i.imgur.com/kEoToXP.png" alt="pink code quiz"></img>
            <h3>Code Quiz</h3>



              <img src="https://i.imgur.com/UDdW4Sb.png" alt="workout tracker app"></img>
              <h3>Workout Tracker</h3>


    </div>
              );
}
