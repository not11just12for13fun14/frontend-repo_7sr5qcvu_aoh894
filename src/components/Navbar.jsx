import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-full transition-colors ${
      isActive ? 'bg-white/10 text-white' : 'text-white/80 hover:text-white'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-900/70 backdrop-blur-xl px-4 py-3">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 shadow-[0_0_40px_rgba(255,191,0,0.35)]" />
            <div className="font-semibold tracking-tight text-white">Aureus Quant</div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            <NavLink to="/payment" className={({ isActive }) => `${navLinkClass({ isActive })} bg-amber-500/20 text-amber-200 hover:text-amber-100`}>Payment</NavLink>
          </nav>

          <button className="md:hidden text-white/80" onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-3 rounded-2xl border border-white/10 bg-zinc-900/80 backdrop-blur-xl p-2">
            <div className="flex flex-col">
              <NavLink onClick={() => setOpen(false)} to="/" className="px-4 py-3 rounded-xl text-white/80 hover:bg-white/10">Home</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/about" className="px-4 py-3 rounded-xl text-white/80 hover:bg-white/10">About</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/contact" className="px-4 py-3 rounded-xl text-white/80 hover:bg-white/10">Contact</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/payment" className="px-4 py-3 rounded-xl text-amber-200 hover:bg-amber-500/10">Payment</NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
