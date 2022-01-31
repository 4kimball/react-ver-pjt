import React from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core';
import { useRoutes } from 'react-router-dom';
import './App.css';
import Login from './views/Login';
import Signup from './views/Signup';
function App() {
  const routes = useRoutes([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
  ]);
  return routes;
}

export default App;
