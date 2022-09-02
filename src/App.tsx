import './scss/stylesheet.scss'

import Nav from './components/Nav'
import Slider from './components/Slider'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import ScrollTopArrow from './components/ScrollTopArrow'
import { useState } from 'react'
import ProjectModal from './components/ProjectModal'
import Footer from './components/Footer'

const App = () => {
  const [ openModal, setOpenModal ] = useState<boolean>(false)

  return (
    <div className="App">
      <header className="main__header">
        <Nav />
        <Slider />
      </header>
      <Portfolio />
      <Skills />
      <Footer setOpenModal={setOpenModal} />
      <ScrollTopArrow />
      { openModal && <ProjectModal openModal={openModal} setOpenModal={setOpenModal} /> }
    </div>
  );
}

export default App;
