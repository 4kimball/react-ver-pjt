import React from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core';
import { useRoutes } from 'react-router-dom';
import './App.css';
import Login from './views/Login';

function App() {
  const routes = useRoutes([
    {
      path: '/login',
      element: Login,
    },
  ]);
  return <>{routes}</>;
}

export default App;
