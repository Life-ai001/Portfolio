import React from 'react'

export default function Nav() {
  return (
    <header className="sticky top-0 z-30 bg-slate-900/60 backdrop-blur-sm border-b border-slate-800">
      <nav className="hero-container py-4 flex items-center justify-between">
        <a href="#home" className="inline-flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-slate-800 shadow flex items-center justify-center text-slate-100 font-bold">P</div>
        </a>

        <div className="hidden sm:flex items-center gap-8 text-sm text-slate-300">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>
    </header>
  )
}
