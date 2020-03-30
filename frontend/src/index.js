import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//JSX (Javascript XML), é quadno o html está dentro do js
//um componente no React é uma função que retorna HTML e pode ter funcionalidade js, cs...

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
