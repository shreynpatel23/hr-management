import React from 'react';
import Styles from "./App.module.scss";
import AppRouter from './routes';
import Logo from "./shared/logo/logo";

function App() {
  return (
    <div className={`${Styles.background}`}>
      <div className={`${Styles.logoBranding}`}>
        <Logo />
      </div>
      <div className={`${Styles.contentContainer}`}>
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
