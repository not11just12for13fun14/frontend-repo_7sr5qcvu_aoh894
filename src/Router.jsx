import { Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Payment from './pages/Payment'

export default function Router() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="payment" element={<Payment />} />
      </Route>
    </Routes>
  )
}
