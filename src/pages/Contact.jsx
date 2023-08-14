import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import "../styles/stylesComp/contact/contact.css";


function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__title">
              <p>contact</p>
              <h3>Feel free to send me a message! 👇</h3>
            </div>
            <div className="contact__icons">
              <div className="contact__icon-box">
                <span>
                  <FontAwesomeIcon icon={faMapLocationDot} />
                </span>
                <div className="contact__info">
                  <h3>Location</h3>
                  <p>Recife, Brazil</p>
                </div>
              </div>

              <div className="contact__icon-box">
                <span>
                  <FontAwesomeIcon icon={faEnvelopeOpenText} />
                </span>
                <div className="contact__info">
                  <h3>Mail</h3>
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
