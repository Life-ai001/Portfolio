import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="site-shell">
      <Nav />
      <main className="snap-wrapper">
        <section id="home" className="full-page-section">
          <Hero />
        </section>
        <section id="projects" className="full-page-section">
          <Projects />
        </section>
        <section id="about" className="full-page-section bg-white">
          <About />
        </section>
        <section id="contact" className="full-page-section">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
