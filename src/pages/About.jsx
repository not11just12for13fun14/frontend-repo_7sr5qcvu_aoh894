export default function About() {
  return (
    <main className="bg-black text-white">
      <section className="mx-auto max-w-5xl px-6 pt-36 pb-20">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">About</h1>
        <p className="mt-6 text-white/70 text-lg leading-relaxed">
          We believe in clarity, time-efficiency and elegant process design. Our approach focuses on automation and structure to reduce decision friction and streamline operations. No jargon. No clutter. Just a refined system built for consistency.
        </p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-white font-medium mb-2">Philosophy</div>
            <div className="text-white/70">Reliability through process. We favor rules that compound over time and systems that prioritize repeatability over prediction.</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-white font-medium mb-2">Discretion</div>
            <div className="text-white/70">A concise routine designed to respect your schedule and protect your attention.</div>
          </div>
        </div>
      </section>
    </main>
  )
}
