import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Jsx = () => {
  return(
    <>
      <h1>Ingrese el Prompt para generar la imagen</h1>
      <App/>
    </>
  );
};

root.render(<Jsx/>)