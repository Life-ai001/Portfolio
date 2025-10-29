import React from 'react'

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-white mb-3">Projects</h2>
      <p className="text-lg text-slate-300 mb-12">
        Selected work — click to interact with the prototype.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8">
          <h3 className="text-2xl font-semibold mb-3 text-white">Consultancy Website</h3>
          <p className="text-slate-300 mb-6">
            A modern consultancy website with interactive elements and smooth transitions. 
            Built with attention to user experience and visual design.
          </p>
          <div className="aspect-[16/9] w-full rounded-lg overflow-hidden bg-gray-900">
            <iframe 
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FFt75CPzcTmSehMMRncDbZx%2FConsultancy-website%3Fnode-id%3D1-2%26starting-point-node-id%3D1%253A2%26t%3D5PZ6AblFL9erxCog-1"
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
          <div className="mt-4 flex justify-end">
            <a 
              href="https://www.figma.com/proto/Ft75CPzcTmSehMMRncDbZx/Consultancy-website?node-id=1-2&starting-point-node-id=1%3A2&t=5PZ6AblFL9erxCog-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.5 6h-7A3.5 3.5 0 0 0 5 9.5v5A3.5 3.5 0 0 0 8.5 18H11v-2.5A3.5 3.5 0 0 1 14.5 12h1a3.5 3.5 0 0 1 3.5 3.5V18a3 3 0 0 1-3 3h-7A6 6 0 0 1 3 15V9a6 6 0 0 1 6-6h7a3 3 0 0 1 3 3v2.5a3.5 3.5 0 0 1-3.5 3.5h-1a3.5 3.5 0 0 1-3.5-3.5V6"/>
              </svg>
              Open in Figma
            </a>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8">
          <h3 className="text-2xl font-semibold mb-3 text-white">Mobile Store App</h3>
          <p className="text-slate-300 mb-6">
            A sleek mobile store application design with modern UI elements and intuitive navigation.
            Focused on user experience and seamless shopping journey.
          </p>
          <div className="aspect-[16/9] w-full rounded-lg overflow-hidden bg-gray-900">
            <iframe 
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FwdkYyDp1cXpiyTBCfz0R2O%2FStore-phone-page%3Fnode-id%3D3-709%26starting-point-node-id%3D3%253A709%26t%3DiH2hVc4nveNwwc92-1"
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
          <div className="mt-4 flex justify-end">
            <a 
              href="https://www.figma.com/proto/wdkYyDp1cXpiyTBCfz0R2O/Store-phone-page?node-id=3-709&starting-point-node-id=3%3A709&t=iH2hVc4nveNwwc92-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.5 6h-7A3.5 3.5 0 0 0 5 9.5v5A3.5 3.5 0 0 0 8.5 18H11v-2.5A3.5 3.5 0 0 1 14.5 12h1a3.5 3.5 0 0 1 3.5 3.5V18a3 3 0 0 1-3 3h-7A6 6 0 0 1 3 15V9a6 6 0 0 1 6-6h7a3 3 0 0 1 3 3v2.5a3.5 3.5 0 0 1-3.5 3.5h-1a3.5 3.5 0 0 1-3.5-3.5V6"/>
              </svg>
              Open in Figma
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
