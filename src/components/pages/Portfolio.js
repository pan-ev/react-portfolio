import React from "react";
import "../../styles/Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Project from "./Projects";

export default function Portfolio() {
  const projects = [
    {
      name: "Project 1",
      description: "First Project",
      githubLink: "https://github.com/pan-ev/conscious-spender",
      link: "https://murmuring-everglades-61234.herokuapp.com/login",
      screenshot: "https://images.unsplash.com/photo-1525543907410-b2562b6796d6?ixlib=rb-0.3.5&s=9ff8e5e718a6a40cbd0e1471235912f4&auto=format&fit=crop&w=3452&q=80",
    },
    {
      name: "Project 2",
      description: "Second Project",
      githubLink: "https://github.com/pan-ev/conscious-spender",
      link: "https://murmuring-everglades-61234.herokuapp.com/login",
      screenshot: "https://images.unsplash.com/photo-1525543907410-b2562b6796d6?ixlib=rb-0.3.5&s=9ff8e5e718a6a40cbd0e1471235912f4&auto=format&fit=crop&w=3452&q=80",
    },
  ]
  
  return (
    <div>
      <h1>Portfolio</h1>
      <Project projects={projects}></Project>
      {/* <div className="container">
        <div className="card">
          <h2>Project 1</h2>
          <FontAwesomeIcon
            className="rightArrow fontAwesomeIcon"
            icon={faArrowRight}
          />
          <p>a lonely trip.</p>
          <div className="pic"></div>
          <div className="social">
            <FontAwesomeIcon className="fontAwesomeIcon" icon={faGithub} />
          </div>
          <button></button>
        </div>
        <div className="card card2">
          <h2>Project 2</h2>
          <FontAwesomeIcon
            className="rightArrow fontAwesomeIcon"
            icon={faArrowRight}
          />
          <p>a lonely trip.</p>
          <div className="pic"></div>
          <div className="social">
            <FontAwesomeIcon className="fontAwesomeIcon" icon={faGithub} />
          </div>
          <button></button>
        </div>
        <div className="card card2">
          <h2>Project 3</h2>
          <FontAwesomeIcon
            className="rightArrow fontAwesomeIcon"
            icon={faArrowRight}
          />
          <p>a lonely trip.</p>
          <div className="pic"></div>
          <div className="social">
            <FontAwesomeIcon className="fontAwesomeIcon" icon={faGithub} />
          </div>
          <button></button>
        </div>
        <div className="card card2">
          <h2>Project 4</h2>
          <FontAwesomeIcon
            className="rightArrow fontAwesomeIcon"
            icon={faArrowRight}
          />
          <p>a lonely trip.</p>
          <div className="pic"></div>
          <div className="social">
            <FontAwesomeIcon className="fontAwesomeIcon" icon={faGithub} />
          </div>
          <button></button>
        </div>
        <div className="card card2">
          <h2>Project 5</h2>
          <FontAwesomeIcon
            className="rightArrow fontAwesomeIcon"
            icon={faArrowRight}
          />
          <p>a lonely trip.</p>
          <div className="pic"></div>
          <div className="social">
            <FontAwesomeIcon className="fontAwesomeIcon" icon={faGithub} />
          </div>
          <button></button>
        </div>
        <div className="card card2">
          <h2>Project 6</h2>
          <FontAwesomeIcon
            className="rightArrow fontAwesomeIcon"
            icon={faArrowRight}
          />
          <p>a lonely trip.</p>
          <div className="pic"></div>
          <div className="social">
            <FontAwesomeIcon className="fontAwesomeIcon" icon={faGithub} />
          </div>
          <button></button>
        </div>
      </div> */}
    </div>
  );
}
