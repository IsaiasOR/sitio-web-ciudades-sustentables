import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Inicio from './pages/home/Home.jsx';
import Novedades from './pages/news/News.jsx';
import Contacto from './pages/contacts/Contact.jsx';
import Antecedentes from './pages/precedents/Precedents.jsx';
import Integrantes from './pages/members/Members.jsx';
import QueHacemos from './pages/whatWeDo/WhatWeDo.jsx';
import { Header, Footer, ScrollToTop } from './components';
import { Pid7045, Pid7056, Pid7082, PidNovel7037, PidNovel7038 } from './pages/precedents'
import QueHacemosActividades from './pages/whatWeDo/activities/Activities.jsx'
import QueHacemosExtension from './pages/whatWeDo/extension/Extension.jsx'

function App() {
  return (
    <Router basename="/sitio-web-ciudades-sustentables">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/antecedentes" element={<Antecedentes />} />
        <Route path="/antecedentes/pid-novel-7037" element={<PidNovel7037 />} />
        <Route path="/antecedentes/pid-novel-7038" element={<PidNovel7038 />} />
        <Route path="/antecedentes/pid-7045" element={<Pid7045 />} />
        <Route path="/antecedentes/pid-7056" element={<Pid7056 />} />
        <Route path="/antecedentes/pid-7082" element={<Pid7082 />} />
        <Route path="/que-hacemos" element={<QueHacemos />} />
        <Route path="/que-hacemos/actividades" element={<QueHacemosActividades />} />
        <Route path="/que-hacemos/extension" element={<QueHacemosExtension />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/integrantes" element={<Integrantes />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
