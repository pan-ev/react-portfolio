import React from "react";
import Photo from '../../images/portfolio_pic.jpg';

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img id="portfolio_pic" src={Photo} alt=""></img>
      <p>
        Hi, my name is Evan Pan. I studied Industrial & Operations Engineering
        at the University of Michigan. I'm currently a Solutions Architect at
        Chain.io.
      </p>
    </div>
  );
}
