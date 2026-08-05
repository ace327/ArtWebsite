import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "@fontsource/bitcount-prop-single";
import "@fontsource/libertinus-math";
import "@fontsource/edu-vic-wa-nt-hand";
import "@fontsource/oswald";
import "@fontsource/playfair-display";
import "@fontsource/archivo-black";
import "@fontsource/ubuntu";
import "@fontsource/black-ops-one";
import "@fontsource/germania-one";
import "@fontsource/griffy";
import "@fontsource/lobster-two";
import "@fontsource/dancing-script";
import "@fontsource/anton";
import "@fontsource/josefin-sans";
import "@fontsource/orbitron";
import "@fontsource/caveat";
import "@fontsource/pacifico";
import "@fontsource/lobster";
import "@fontsource/teko";
import "@fontsource/gravitas-one";
import "@fontsource/bree-serif";
import "@fontsource/stalinist-one";
import "@fontsource/lobster-two/400.css"; // Regular
import "@fontsource/lobster-two/700.css"; // Bold

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
  <StrictMode>
    
    <App />
  </StrictMode>,
    </BrowserRouter>
)
