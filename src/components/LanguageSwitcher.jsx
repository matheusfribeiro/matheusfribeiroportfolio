import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import PropTypes from 'prop-types'
import pt from '../../images/ptbrflag.jpg'
import en from '../../images/usukflag.jpg'
import "../styles/stylesComp/languageswitcher/langswitcher.css"

function LanguageSwitcher ({ hideOnMobile }) {
  const {t, i18n} = useTranslation()
  const [lang, setLang] = useState(false)
  

  const handleLanguageChange = () => {
    setLang(!lang)

    if (lang == true) {
      i18n.changeLanguage('pt');
      return
    } 
    i18n.changeLanguage('en')
  };

  return (
    <div className={`language-switcher ${hideOnMobile ? "hide-on-mobile" : ""}`}>
       
      <span>{t('selectyourlanguage')}:</span>
      <div className="dropdown" onClick={handleLanguageChange}>
        <img src={lang == true ? en : pt} alt="" />
      </div>
      
      
    </div>
  )
}

LanguageSwitcher.propTypes = {
  hideOnMobile: PropTypes.bool
}

export default LanguageSwitcher