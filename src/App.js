import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import history from './services/history';
import GlobalStyles from './StylesGLobal/global';
import Routes from './Routes';

function App() {
  return (
    <>
      <Router history={history}>
        <GlobalStyles />
        <ToastContainer position="top-center" />
        <Routes />
      </Router>
    </>
  );
}
export default App;
