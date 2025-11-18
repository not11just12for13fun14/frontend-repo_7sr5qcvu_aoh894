import { Shield, Sparkles, Clock, Wallet } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: <Shield className="h-5 w-5" />, title: 'Discipline by Design',
      desc: 'Rules-based automation minimizes hesitation and streamlines execution.'
    },
    {
      icon: <Clock className="h-5 w-5" />, title: 'Minutes, Not Hours',
      desc: 'A concise, daily routine designed for efficiency and focus.'
    },
    {
      icon: <Sparkles className="h-5 w-5" />, title: 'Signal Clarity',
      desc: 'A clean framework to support decision-making with consistency.'
    },
    {
      icon: <Wallet className="h-5 w-5" />, title: 'Capital Alignment',
      desc: 'Tailored process structure to fit diverse portfolio objectives.'
    },
  ]

  return (
    <section className="relative bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                {item.icon}
              </div>
              <div className="text-white font-medium">{item.title}</div>
              <div className="mt-2 text-sm text-white/70">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
