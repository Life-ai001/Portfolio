import React from 'react'

export default function About() {
  return (
    <section className="bg-[#0a192f] min-h-screen w-full flex items-center">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-8 lg:px-12 gap-16 items-start">
        <div className="md:w-[400px] flex-shrink-0">
          <div className="bg-sky-400 rounded-3xl p-6 w-full aspect-square">
            <div className="w-full h-full rounded-2xl bg-white/20 flex items-center justify-center text-white text-lg">
              Profile
            </div>
          </div>
        </div>
      
      <div className="flex-grow">
        <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
                I'm a passionate UI/UX and Graphic Designer focused on creating clean, modern, 
                and user-centered designs. I specialize in branding, logo design, and digital 
                product design, helping brands tell their story through impactful visuals and 
                intuitive interfaces.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
                Skilled in Figma, Adobe Illustrator, and Photoshop, I bring ideas to life from 
                concept to final design. I'm detail-oriented, open to feedback, and always excited 
                to collaborate on creative projects.
              </p>
            </div>

            <ul className="space-y-4 text-slate-300">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              React / JavaScript / HTML & CSS
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              Figma 
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              Tailwind CSS / Responsive Design
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              UI/UX Design
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              Attention to Detail
            </li>
          </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
