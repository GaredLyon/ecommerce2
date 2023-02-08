import React from 'react'
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom'

import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'

import { Inicio } from '../pages/Inicio/Inicio'
import { Pagina404 } from '../pages/Pagina404/Pagina404'


export const MisRutas = () => {
  return (
    <HashRouter>

      {/* HEADER Y NAVEGACION */}
      <Header/>

      {/* CUERPO */}
      <main className='main'>
        <Routes>

          <Route path='/' element={<Navigate to='/inicio'/>}/>
          <Route path='/inicio' element={<Inicio/>}/>
          <Route path='*' element={<Pagina404/>}/>

        </Routes>

      </main>

      {/* FOOTER */}
      <Footer/>

    </HashRouter>
  )
}
