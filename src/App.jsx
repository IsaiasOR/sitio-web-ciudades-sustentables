import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Inicio from './pages/home/Home.jsx';
import Header from './components/Header/header.jsx';
import Novedades from './pages/news/News.jsx';
import Contacto from './pages/contacts/Contact.jsx';
import Antecedentes from './pages/precedents/Precedents.jsx';
import Integrantes from './pages/members/Members.jsx';
import QueHacemos from './pages/whatWeDo/WhatWeDo.jsx';
import Footer from './components/footer/Footer.jsx';
import AntecedentesPidNovel7037 from './pages/precedents/pids/PidNovel7037.jsx';
import AntecedentesPidNovel7038 from './pages/precedents/pids/PidNovel7038.jsx';
import AntecedentesPid7045 from './pages/precedents/pids/Pid7045.jsx';
import AntecedentesPid7056 from './pages/precedents/pids/Pid7056.jsx';
import AntecedentesPid7082 from './pages/precedents/pids/Pid7082.jsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';
import QueHacemosActividades from './pages/whatWeDo/activities/Activities.jsx'
import QueHacemosExtension from './pages/whatWeDo/extension/Extension.jsx'


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/antecedentes" element={<Antecedentes />} />
        <Route path="/antecedentes/pid-novel-7037" element={<AntecedentesPidNovel7037 />} />
        <Route path="/antecedentes/pid-novel-7038" element={<AntecedentesPidNovel7038 />} />
        <Route path="/antecedentes/pid-7045" element={<AntecedentesPid7045 />} />
        <Route path="/antecedentes/pid-7056" element={<AntecedentesPid7056 />} />
        <Route path="/antecedentes/pid-7082" element={<AntecedentesPid7082 />} />
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
