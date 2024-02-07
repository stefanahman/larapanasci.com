import React from 'react'

import { BrowserRouter,Routes,Route } from "react-router-dom";

import {HomePage} from './pages/home';
import {AboutPage} from './pages/about';
import {ContactPage} from './pages/contact';
import {NotFoundPage} from './pages/not-found';
import ScrollToTop from './components/ScrollToTop';
import { WorkshopsPage } from './pages/workshops';
import { HandpanPage } from './pages/handpan';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/"  element={<HomePage />}/>

          <Route path="/about"  element={<AboutPage />}/>
          <Route path="/contact"  element={<ContactPage />}/>
          <Route path="/handpan"  element={<HandpanPage />}/>
          <Route path="/workshops"  element={<WorkshopsPage />}/>

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App