import { useTranslation } from 'react-i18next'
import { translationKeys } from './lib/translationKey'

import ShowLogo from './components/ShowLogo'
import { Button } from './components/ui/button'

function App() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
  }

  return (
    <>
      <ShowLogo />
      <div>
        <h1 className="text-red-500">{t(translationKeys['For Both Staff & Students'])}</h1>
      </div>
      <Button onClick={() => changeLanguage('en')}>En</Button>
      <Button onClick={() => changeLanguage('ru')}>ru</Button>
      <Button onClick={() => changeLanguage('uz')}>UZ</Button>
    </>
  )
}

export default App