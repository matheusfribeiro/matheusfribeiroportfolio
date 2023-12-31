import "../styles/stylesComp/footer/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation()
  return (
    <>
      <footer>
        <div className="container">
          <div className="footerc">
            <h3>
              Copyright © {new Date().getFullYear()}. {t("copyright")}
            </h3>
            <div className="footerc__socials">
              <a
                aria-label="linkedin"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/matheusfribeiro/"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                aria-label="github"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/matheusfribeiro"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
