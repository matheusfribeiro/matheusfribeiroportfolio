import { useTranslation } from "react-i18next";
import "../styles/stylesComp/about/about.css";

function About() {
  const { t } = useTranslation()
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="techstack-side">
              <h3>{t("about.techstack")}</h3>

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
              <h3>{t("about.aboutme")}</h3>
              <h4>
                {t("about.title")} 📍
              </h4>
              <p>
                {t("about.description")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
