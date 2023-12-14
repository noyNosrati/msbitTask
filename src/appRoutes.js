import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Page404 from './componnents/page404'
import Navigation from './componnents/navigation'
import HomePage from './componnents/homePage'
import Footer from './componnents/footer'
import Configuration from './componnents/configuration'
import Email from './componnents/email'
import Pacman from './componnents/pacman'
import Matrix from './componnents/matrix'


export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/*' element={<Navigation />} />
    </Routes>
    <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/email' element={<Email />} />
    <Route path='/configuration' element={<Configuration />} />
    <Route path='/pacman' element={<Pacman />} />
    <Route path='/matrix' element={<Matrix />} />
    <Route path='/*' element={<Page404 />} />
    </Routes>
    <Routes>
        <Route path='/*' element={<Footer/>}/>
    </Routes>
</BrowserRouter>
  )
}
