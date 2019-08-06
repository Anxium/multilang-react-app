import React, { Suspense, Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import './App.css';

// Component Page
const Page = () => {
  const { t, i18n } = useTranslation();

  const _handleLanguage = lng => {
    i18n.changeLanguage(lng)
  }

  const myData = {
    firstName: 'Axel',
    surname: 'Anxium',
    age: 28
  };

  return (
    <Fragment>
      <p>{t('title')}</p>
      <p>{t('description')}</p>
      <p>{t('who', { name: myData.surname })}</p>
      <div>
        <button onClick={() => _handleLanguage('en')}>EN</button>
        <button onClick={() => _handleLanguage('fr')}>FR</button>
        <button onClick={() => _handleLanguage('nl')}>NL</button>
      </div>
    </Fragment>
  )
}

// component fallback
const Loading = () => {
  return(
    <h3>Loading...</h3>
  )
}

// Main component
const App = () => {
  return(
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<Loading />}>
          <Page/>
        </Suspense>
      </header>
    </div>
  )
}

export default App;
