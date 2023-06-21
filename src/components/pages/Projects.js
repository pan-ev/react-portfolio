import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Project(props) {
    
  return (
    <div>
      {props.projects.map((project) => (
        <div className="container">
          <div className="card">
            <h2>{project.name}</h2>
            <FontAwesomeIcon
              className="rightArrow fontAwesomeIcon"
              icon={faArrowRight}
            />
            <p>{project.description}</p>
            <img src={project.screenshot} alt="" />
            <div className="social">
              <a href={project.githubLink}>
                <FontAwesomeIcon className="fontAwesomeIcon" icon={faGithub} />
              </a>
            </div>
            <button href={project.link}></button>
          </div>
        </div>
      ))}
    </div>
  );
}
