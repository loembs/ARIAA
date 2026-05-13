import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Index } from './routes/index'
import { Prestations } from './routes/prestations'
import { Reservation } from './routes/reservation'
import { Confirmation } from './routes/confirmation'
import { Legal } from './routes/legal'
import './styles.css'

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/prestations" element={<Prestations />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
