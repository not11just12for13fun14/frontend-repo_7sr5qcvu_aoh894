import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] flex items-end">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/70">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Institutional-grade automation
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight text-white">
            Ultra-premium algorithmic execution for modern capital
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/70">
            Crafted for discerning investors who value time, discretion and precision. A streamlined, daily process with sophisticated automation.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link to="/payment" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 px-6 py-3 font-medium text-black shadow-[0_10px_40px_rgba(245,197,24,0.35)]">
              Acquire Access
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-white/80 hover:text-white">
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
