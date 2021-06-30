import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from './pages/Login';
import index from './pages/index';
import Especialidades from './pages/Especialidades';
import Medicos from './pages/Medicos';
import Clinicas from './pages/Clinicas';
import Usuario from './pages/Usuario;


export default Routes = (
  createSwitchNavigator  ({
      index,
      Login,
      Especialidades,
      Medicos,
      Clinicas,
      Usuario
  })
)