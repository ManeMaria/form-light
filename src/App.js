import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import history from './services/history';
import GlobalStyles from './StylesGLobal/global';
import Routes from './Routes';

function App() {
  return (
    <div>
      <Router history={history}>
        <GlobalStyles />
        <ToastContainer position="top-center" />
        <Routes />
      </Router>
    </div>
  );
}
export default App;
