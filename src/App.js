import React from 'react';
import Styles from "./App.module.scss";
import AppRouter from './routes';
import Logo from "./shared/logo";

function App() {
  return (
    <div className={`${Styles.background} d-flex align-items-center justify-content-center`}>
      <Logo />
      <AppRouter />
    </div>
  );
}

export default App;
