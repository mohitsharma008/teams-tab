import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@fluentui/react-northstar';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './routes';

function App() {
  return (
    <BrowserRouter>
      <RoutesList />
    </BrowserRouter>
  //   <div>
  //   <h1>fdsf</h1>
  //   <h1>fdsf</h1>

  // </div>
  );
}

export default App;
