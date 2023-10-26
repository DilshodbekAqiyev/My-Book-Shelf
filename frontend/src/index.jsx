import React from 'react'
import ReactDOM from 'react-dom/client'

import '../firebase'

import i18n from './i18n.js'
import { I18nextProvider } from 'react-i18next'

import Main from './main.jsx'

import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n} initialLanguage={'uz'}>
      <Main />
    </I18nextProvider>
  </React.StrictMode>,
)
