import React, { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  return (
    <section className="max-w-4xl mx-auto px-6 w-full">
      <div className="hero-container">
        <h2 className="text-2xl font-bold text-white">Get in touch</h2>
        <p className="mt-2 text-slate-400">Have a project or question? Send a message and I'll get back to you.</p>

        <div className="mt-6 max-w-2xl">
          <div className="bg-slate-900 rounded-xl shadow-lg border border-slate-800 p-6">
            <form
              className="grid gap-4"
              action="https://formspree.io/f/{your-id}"
              method="POST"
              onSubmit={() => setStatus('sending')}
            >
              <input type="text" name="_gotcha" style={{display: 'none'}} />

              <label className="flex flex-col">
                <span className="text-sm text-slate-300">Name</span>
                <input name="name" required className="mt-1 px-3 py-3 border border-slate-700 rounded-md bg-slate-800 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </label>

              <label className="flex flex-col">
                <span className="text-sm text-slate-300">Email</span>
                <input name="email" type="email" required className="mt-1 px-3 py-3 border border-slate-700 rounded-md bg-slate-800 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </label>

              <label className="flex flex-col">
                <span className="text-sm text-slate-300">Message</span>
                <textarea name="message" rows="6" required className="mt-1 px-3 py-3 border border-slate-700 rounded-md bg-slate-800 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical" />
              </label>

              <div className="flex items-center gap-4">
                <button type="submit" className="bg-sky-600 text-white px-5 py-2 rounded-md shadow">Send</button>
                {status === 'sending' && <span className="text-sm text-slate-600">Sending…</span>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
