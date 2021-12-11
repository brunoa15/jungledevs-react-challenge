import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header';
import './index.scss';
import Home from './pages/home/Home';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
