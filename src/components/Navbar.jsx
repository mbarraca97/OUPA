import { useEffect, useState } from 'react'
import logo from '../assets/images/E4I5wl7NhgPq40S2QazLLdYzZA.svg'
import logoBlack from '../assets/images/oupa/logo-black.png'
import './Navbar.css'

const LINKS = [
  { href: '#products', label: 'Produtos' },
  { href: '#about', label: 'Sobre Nós' },
  { href: '#how', label: 'Parcerias' },
  { href: '#reviews', label: 'Reviews' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header className="sticky top-0 z-30 px-4 pt-4 md:px-6">
      <div className="nb-navbar mx-auto max-w-6xl px-4 py-3 md:px-6 md:py-4">
        <div className="flex items-center justify-between gap-4">
  
          <img
            src={logoBlack}
            alt="Oupa"
            className="w-32"
            onClick={() => setOpen(false)}
          />

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nb-navbar__link" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="nb-navbar__contact hidden px-5 py-2 md:inline-block"
              onClick={() => setOpen(false)}
            >
              Oupa, contacta-nos
            </a>

            <button
              type="button"
              className="nb-navbar__iconBtn inline-flex h-11 w-11 items-center justify-center md:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                aria-hidden="true"
                focusable="false"
              >
                {open ? (
                  <path
                    d="M18 6 6 18M6 6l12 12"
                    stroke="rgb(33, 21, 9)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="rgb(33, 21, 9)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="nb-navbar__panel mt-3 pt-3 md:hidden">
            <nav className="grid gap-3" aria-label="Mobile">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="nb-navbar__link rounded-2xl bg-white/40 px-4 py-3"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}

              <a
                href="#contact"
                className="nb-navbar__contact mt-1 inline-flex items-center justify-center px-5 py-3 text-lg"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

