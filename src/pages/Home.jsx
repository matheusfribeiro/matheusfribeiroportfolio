import "../styles/stylesComp/home/home.css";
import Html from "../../images/HTML5_logo_and_wordmark.svg.png";
import Css from "../../images/CSS3_logo_and_wordmark.svg.png";
import Js from "../../images/Unofficial_JavaScript_logo_2.svg.png";
import React from "../../images/React-icon.svg.png";
import Node from "../../images/nodejs-logo-D26404F360-seeklogo.com.png";
import Sass from "../../images/2560px-Sass_Logo_Color.svg.png";
import Mongodb from "../../images/mongodb.png";
import Mysql from "../../images/Database-mysql.svg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Home() {
  const skillsIcons = [
    {
      img: Html,
      title: "HTML5",
    },
    {
      img: Css,
      title: "CSS3",
    },
    {
      img: Js,
      title: "Java Script",
    },
    {
      img: React,
      title: "React",
    },
    {
      img: Node,
      title: "Node",
    },
    {
      img: Sass,
      title: "SCSS",
    },
    {
      img: Mongodb,
      title: "MongoDB",
    },
    {
      img: Mysql,
      title: "MySQL",
    },
  ];

  const cvPdfUrl = '../../public/Curriculo - Matheus F. Ribeiro.pdf'

  return (
    <>
      <section id="home" className="home">
        <div className="container">
          <div className="content">
            <div className="home-main">
              <div className="home-text">
                <h1>Fullstack Web Developer</h1>
                
                <p>
                  Hi, i am Matheus Ribeiro. A passionate Fullstack Web
                  Developer based in Recife, Brazil. 📍
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/matheusfribeiro/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/matheusfribeiro"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <div className="cv">
                    <a href={cvPdfUrl} download>
                      Download CV
                    </a>
                  </div>
                </span>
                
              </div>

              <div className="home-img"></div>
            </div>

            {/*  */}
            <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.title}>
                      <img src={icon.img} title={icon.title} alt="skill-icon" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
