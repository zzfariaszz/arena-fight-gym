import { useState, useEffect } from 'react'

const links = [
  { label: 'Modalidades', href: '#modalidades' },
  { label: 'Horários', href: '#horarios' },
  { label: 'Planos', href: '#planos' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(10,10,10,0.97)' : 'transparent',
      borderBottom: scrolled ? '1px solid #222' : '1px solid transparent',
      transition: 'background 0.3s, border-color 0.3s',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        <a href="#" style={{ fontFamily: 'var(--font-display)', fontSize: 26, letterSpacing: '0.08em', color: 'var(--white)' }}>
          ARENA<span style={{ color: 'var(--red)' }}>FIGHT</span>
        </a>

        <nav style={{ display: 'flex', gap: 36 }}>
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontFamily: 'var(--font-condensed)', fontSize: 14, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--gray-light)',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--red)'}
              onMouseLeave={e => e.target.style.color = 'var(--gray-light)'}
            >{l.label}</a>
          ))}
        </nav>

        <a href="#planos" className="btn-primary" style={{ fontSize: 13 }}>Matricule-se</a>
      </div>
    </header>
  )
}