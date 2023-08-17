import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import br from '../../images/ptbrflag.jpg'
import us from '../../images/usukflag.jpg'
import "../styles/stylesComp/languageswitcher/langswitcher.css"

function LanguageSwitcher ({ hideOnMobile }) {
  const {t, i18n} = useTranslation()
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

  return (
    <div className={`language-switcher ${hideOnMobile ? "hide-on-mobile" : ""}`}>
      <span>{t('selectyourlanguage')}:</span>
      {languageOptions.map((lngOpt) => (
        <button
          key={lngOpt.value}
          onClick={() => {
            i18n.changeLanguage(lngOpt.value)
          }}
        >

          <img src={lngOpt.flag} alt={lngOpt.name} />
          <span>{lngOpt.name}</span>
        </button>
      ))}
    </div>
  )
}

LanguageSwitcher.propTypes = {
  hideOnMobile: PropTypes.bool
}

export default LanguageSwitcher