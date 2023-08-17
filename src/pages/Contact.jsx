import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import "../styles/stylesComp/contact/contact.css";
import { useTranslation } from "react-i18next";


function Contact() {
  const { t } = useTranslation()
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__title">
              <p>{t("contact.title")}</p>
              <h3>{t("contact.subtitle")} 👇</h3>
            </div>
            <div className="contact__icons">
              <div className="contact__icon-box">
                <span>
                  <FontAwesomeIcon icon={faMapLocationDot} />
                </span>
                <div className="contact__info">
                  <h3>{t("contact.location")}</h3>
                  <p>{t("contact.city")}</p>
                </div>
              </div>

              <div className="contact__icon-box">
                <span>
                  <FontAwesomeIcon icon={faEnvelopeOpenText} />
                </span>
                <div className="contact__info">
                  <h3>Email</h3>
                  <a href="mailto:matheusfribeiro2112@gmail.com">
                    matheusfribeiro2112@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
