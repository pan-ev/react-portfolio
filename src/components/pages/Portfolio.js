import React from "react";
import "../../styles/Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="container">
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
      </div>
      <a
        href="https://dribbble.com/YancyMin"
        className="dr-url"
        target="_blank"
      >
        <img
          className="dr"
          src="https://cdn.dribbble.com/assets/logo-footer-hd-a05db77841b4b27c0bf23ec1378e97c988190dfe7d26e32e1faea7269f9e001b.png"
          alt=""
        />
      </a>
    </div>
  );
}
