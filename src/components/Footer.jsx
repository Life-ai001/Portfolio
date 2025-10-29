import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-slate-100">
      <div className="max-w-5xl mx-auto px-6 py-6 text-sm text-slate-600">
        © {new Date().getFullYear()} MyPortfolio — Built with React + Tailwind
      </div>
    </footer>
  )
}
