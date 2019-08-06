import React, { Component, Suspense, Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import './App.css';

// Component Test
const Test = () => {
  const { t, i18n } = useTranslation();

  const lng = lng => {
    i18n.changeLanguage(lng)
  }

  return (
    <Fragment>
      <p>{t('title')}</p>
      <p>{t('description')}</p>
      <div>
        <button onClick={() => lng('en')}>EN</button>
        <button onClick={() => lng('fr')}>FR</button>
        <button onClick={() => lng('nl')}>NL</button>
      </div>
    </Fragment>
  )
}

// component fallback
const Loading = () => {
  return(
    <h1>Loading...</h1>
  )
}

//component page
class Page extends Component {
  constructor(props) { 
    super(props);

    this.state = {
      language: 'fr'
    }
  }

  render() {
    return (
      <Test />
    );
  }
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
