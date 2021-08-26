import React from 'react';
import Footer from './Footer';
import "../../style/About.css"

export default function About() {
  return (

    <div className="about-page">
      <img className="about-img" src="https://images.squarespace-cdn.com/content/v1/5a879220ccc5c51cc1773086/1588779833131-1P7QTHHWFSWO0XLBT85K/ke17ZwdGBToddI8pDm48kPJ6V8LYmqs_2HHkc0Ep4HRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIn74pbp6umyXGaY1dJ95oZ7ldtRJ7CDzW77vdidlIayoKMshLAGzx4R3EDFOm1kBS/03EE3A6D-6278-4CB6-AAF9-9603C5B8DA72.JPG?format=500w"  alt="portrait of Celia with green background"></img>

      <h1 className="about-title"> About</h1>
      <p className="description">I'm a hard working, passionate and determined full stack web development student. I believe my retail
        management, customer service and human resources experience combined with my newly (and
        continuously) evolving web design skills give me a competitive edge in the web development industry.
        I enjoy a challenge, and possess the problem solving skills needed to decode it.</p>
        <hr />
        <Footer></Footer>
    </div>
    
  );
}
