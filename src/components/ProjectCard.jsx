import React, { useState } from 'react'

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const handleFigmaClick = (e) => {
    e.preventDefault()
    window.open(project.figmaUrl, '_blank')
  }

  return (
    <article className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
      <p className="mt-2 text-slate-600">{project.summary}</p>

      {project.figmaUrl ? (
        <div className="mt-6">
          <button 
            onClick={handleFigmaClick}
            className="w-full bg-blue-600 text-white rounded-lg p-4 flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.5 6h-7A3.5 3.5 0 0 0 5 9.5v5A3.5 3.5 0 0 0 8.5 18H11v-2.5A3.5 3.5 0 0 1 14.5 12h1a3.5 3.5 0 0 1 3.5 3.5V18a3 3 0 0 1-3 3h-7A6 6 0 0 1 3 15V9a6 6 0 0 1 6-6h7a3 3 0 0 1 3 3v2.5a3.5 3.5 0 0 1-3.5 3.5h-1a3.5 3.5 0 0 1-3.5-3.5V6"/>
            </svg>
            View Figma Prototype
          </button>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-4">
          {project.images.map((image, i) => (
            <button 
              key={i}
              onClick={() => { setIndex(i); setOpen(true) }}
              className={`${image.color} rounded-lg aspect-video flex items-center justify-center text-white font-medium hover:opacity-90 transition-opacity`}
            >
              {image.label}
            </button>
          ))}
        </div>
      )}

      {!project.figmaUrl && open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="max-w-5xl mx-auto p-4" onClick={(e) => e.stopPropagation()}>
            <img 
              src={project.images[index].src} 
              alt={project.images[index].label} 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="mt-4 flex justify-between items-center">
              <button 
                onClick={() => setIndex((index - 1 + project.images.length) % project.images.length)}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white backdrop-blur-sm transition"
              >
                Previous
              </button>
              <span className="text-white/90 text-sm">
                {project.images[index].label}
              </span>
              <button 
                onClick={() => setIndex((index + 1) % project.images.length)}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white backdrop-blur-sm transition"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  )
}
