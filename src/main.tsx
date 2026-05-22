import { StrictMode } from 'react'
import { ThemeProvider } from './hooks/use-theme.tsx'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider> {/* ← WRAP ROOT */}
      <App />
    </ThemeProvider>
  </StrictMode>,
)
