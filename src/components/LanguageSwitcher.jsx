import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import PropTypes from 'prop-types'
import br from '../../images/ptbrflag.jpg'
import us from '../../images/usukflag.jpg'
import "../styles/stylesComp/languageswitcher/langswitcher.css"

function LanguageSwitcher ({ hideOnMobile }) {
  const {t, i18n} = useTranslation()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const languageOptions = [
    {
      name: "Português",
      value: "pt",
      flag: br
    },
    {
      name: "English",
      value: "en",
      flag: us
    }
  ]

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const changeLanguage = (value) => {
    i18n.changeLanguage(value)
    setDropdownOpen(false)
  }

  return (
    <div className={`language-switcher ${hideOnMobile ? "hide-on-mobile" : ""}`}>
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          {t('selectyourlanguage')}
        </button>
        <div className="dropdown-menu">
          languages
        </div>
      </div>
    </div>
  )
}

LanguageSwitcher.propTypes = {
  hideOnMobile: PropTypes.bool
}

export default LanguageSwitcher