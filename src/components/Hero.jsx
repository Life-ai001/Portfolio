import React from 'react'

export default function Hero() {
  return (
    <section className="py-36">
      <div className="hero-container text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">Hi, I'm Prasan Rajbhandari</h1>
        <p className="mt-4 text-xl text-slate-400">make it so i can show my projects from figma
            UI/UX Designer</p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#projects" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-blue-500/20">View My Work</a>
          <a href="#contact" className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-600 hover:bg-slate-800/50 text-slate-300 px-5 py-3 rounded-lg">Get In Touch</a>
        </div>
      </div>
    </section>
  )
}
