import "../styles/stylesComp/projects/projects.css"
import ProBox from "../components/ProBox";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation()
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>{t("projects.title")} 🧩</h3>
            <div className="projects-grid">
              <ProBox
                title="Car Rental"
                img={''}
                description="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
                techno1="React"
                techno2="SCSS"
                code="https://github.com/stefvndev/car-rental"
                demo="https://car-rental-ten.vercel.app/"
                scrollY="-83%"
                icon="🚗"
              />

              <ProBox
                title="coindom"
                img={''}
                description="Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time."
                techno1="React"
                techno2="SCSS"
                code="https://github.com/stefvndev/coindom-crypto"
                demo="https://coindom-crypto-search.vercel.app/"
                scrollY="-74%"
                icon="🪙"
                cName="reversed-proj"
              />

              <ProBox
                title="gymate"
                img={''}
                description="A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals."
                techno1="React"
                techno2="Tailwind CSS"
                code="https://github.com/stefvndev/Gymate"
                demo="https://gymate-iota.vercel.app/"
                scrollY="-89%"
                icon="🏋️"
              />

              <ProBox
                title="Raouf Ecommerce"
                img={'Raouf'}
                description="With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need."
                techno1="React"
                techno2="Vanila CSS"
                code="https://github.com/stefvndev/Minimalist-E-commerce"
                demo="https://minimalist-e-commerce.vercel.app/"
                scrollY="-71%"
                icon="🛒"
                cName="reversed-proj"
              />
            </div>
          </div>
          {/* <h2 className="new-projects">New projects coming soon.. 🤠</h2> */}
        </div>
      </section>
    </>
  );
}

export default Projects;
