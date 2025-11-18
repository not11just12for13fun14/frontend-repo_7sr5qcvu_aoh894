export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <div>© {new Date().getFullYear()} Aureus Quant. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
