import "../styles/stylesComp/about/about.css";

function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="techstack-side">
              <h3>My Tech Stack</h3>

              <div className="stack-space">
                <span style={{ marginRight: "25px" }}>Front-End</span>
                <span>Back-End</span>
              </div>
              <div className="skill-stack">
                <ul className="front-skills">
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">HTML</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">CSS</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">JavaScript</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://react.dev/">React.js</a>
                  </li>
                </ul>
                <ul className="back-skills">
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://nodejs.org/en/docs">Node.js</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://expressjs.com/pt-br/">Express</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.mongodb.com/docs/">MongoDB</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://dev.mysql.com/doc/">MySQL</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://sequelize.org/docs/v6/category/core-concepts/">Sequelize</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
                A Fullstack Web Developer <br /> based in Recife,
                Brazil 📍
              </h4>
              <p>
                As a Fullstack Developer, i possess an impressive arsenal of
                skills in HTML, CSS, JavaScript, React, Node, and SCSS.<br></br>{" "}
                I excel in designing and maintaining responsive websites that
                offer a smooth user experience. My expertise lies in crafting
                dynamic, engaging interfaces through writing clean and optimized
                code and utilizing cutting-edge development tools and
                techniques. I am also a team player who thrives in collaborating
                with cross-functional teams to produce outstanding web
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
