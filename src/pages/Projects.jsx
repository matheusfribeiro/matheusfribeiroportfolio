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
                title="Kings Tips Bets"
                img={'/kingstipslp.gif'}
                description={t('projects.kingstipsdesc')}
                techno1="NextJS"
                techno2="React"
                code="https://github.com/matheusfribeiro/kingstips"
                demo="https://kingstips.com.br/"
                scrollY="-83%"
                icon="$"
              />

              <ProBox
                title="Dictionary Web App"
                img={'/dictionaryapp.gif'}
                description={t("projects.dictionarydesc")}
                techno1="JavaScript"
                techno2="SCSS"
                code="https://github.com/matheusfribeiro/dictionarywebapp"
                demo="https://matheusfribeiro.github.io/dictionarywebapp/"
                scrollY="-74%"
                icon="📖"
                cName="reversed-proj"
              />

              <ProBox
                title="The Recipe Book"
                img={'/therecipebook.gif'}
                description={t("projects.therecipebookdesc")}
                techno1="NodeJS"
                techno2="Express"
                code="https://github.com/matheusfribeiro/TheRecipeBook"
                demo=""
                scrollY="-89%"
                icon="🍽️"
              />

              <ProBox
                title="The Bet Crawler"
                img={'/thebetcrawler.gif'}
                description={t("projects.thebetcrawlerdesc")}
                techno1="Puppeteer"
                techno2="Express"
                code="https://github.com/matheusfribeiro/TheBetCrawler"
                scrollY="-71%"
                icon="🛒"
                cName="reversed-proj"
              />
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}

export default Projects;
