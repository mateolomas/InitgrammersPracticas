import React from 'react'
import TiposBasicos from './typescript/TiposBasicos';
import ObjetosLiterales from './typescript/ObjetosLiterales';
import { Funciones } from './typescript/Funciones';
import { Contador } from './components/Contador';
import { ContadorConHook } from './components/ContadorConHook';
import { Login } from './components/Login';
import {Usuarios} from './components/Usuarios';
import { Formularios } from './components/Formularios';

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introduction a Typescript</h1>
      
        <TiposBasicos />
      <Funciones />
      <ObjetosLiterales />
      <Contador />
      <ContadorConHook />
      <Login />
      <Usuarios />
      
      <Formularios />
      
      </div>
  )
}

export default App