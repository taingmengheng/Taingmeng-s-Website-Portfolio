import React from 'react'
import LandingPage from './assets/Components/LandingPage'
import './i18n'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'


function App() {

  return (
    <>
      <I18nextProvider i18n={i18n}>
        <LandingPage />
      </I18nextProvider>
    </>
  )
}

export default App
