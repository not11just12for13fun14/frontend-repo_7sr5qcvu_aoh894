import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = (e) => {
    e.preventDefault()
    setStatus('We received your request. Our team will reach out shortly.')
  }

  return (
    <main className="bg-black text-white">
      <section className="mx-auto max-w-4xl px-6 pt-36 pb-20">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-4 text-white/70">Share a few details and we’ll be in touch.</p>
        <form onSubmit={submit} className="mt-10 grid gap-4">
          <input required placeholder="Full name" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none focus:border-white/30" />
          <input type="email" required placeholder="Email address" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none focus:border-white/30" />
          <textarea required placeholder="Your message" rows={5} className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none focus:border-white/30" />
          <button className="rounded-full bg-white text-black py-3 font-medium hover:bg-white/90">Send</button>
          {status && <div className="text-emerald-400 text-sm">{status}</div>}
        </form>
      </section>
    </main>
  )
}
