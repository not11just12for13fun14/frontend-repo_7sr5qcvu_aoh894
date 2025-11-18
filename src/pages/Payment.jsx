export default function Payment() {
  return (
    <main className="bg-black text-white">
      <section className="mx-auto max-w-5xl px-6 pt-36 pb-20">
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Acquire Access</h1>
            <p className="mt-4 text-white/70 max-w-xl">
              Access to the automation framework is offered as a one-time license for discerning clients. Pricing reflects exclusivity and ongoing enhancement.
            </p>

            <div className="mt-8 rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-400/5 via-amber-300/5 to-amber-500/5 p-6">
              <div className="text-white/80">License</div>
              <div className="mt-2 text-5xl font-semibold tracking-tight text-amber-300">1 Bitcoin</div>
              <div className="mt-3 text-white/60 text-sm">Includes private onboarding and configuration guidance.</div>
              <button className="mt-6 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 px-6 py-3 font-medium text-black shadow-[0_10px_40px_rgba(245,197,24,0.35)]">
                Proceed to Request
              </button>
            </div>
          </div>

          <div className="w-full md:max-w-sm rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-white font-medium">What’s included</div>
            <ul className="mt-4 space-y-3 text-white/70 text-sm">
              <li>— Private session for setup and workflow</li>
              <li>— Access to secured client portal</li>
              <li>— Ongoing improvements and refinements</li>
              <li>— Priority support</li>
            </ul>
            <div className="mt-6 text-xs text-white/50">
              This page presents non-investment, informational material. No performance, profit, or outcome is promised. Engage at your discretion.
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
