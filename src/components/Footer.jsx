export default function Footer() {
  return (
    <footer style={{ background: 'var(--black-2)', borderTop: '1px solid var(--gray-dark)', padding: '40px 0' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
        <a href="#" style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: '0.08em', color: 'var(--white)' }}>
          ARENA<span style={{ color: 'var(--red)' }}>FIGHT</span>
        </a>

        <p style={{ fontFamily: 'var(--font-condensed)', fontSize: 13, color: 'var(--gray-light)', letterSpacing: '0.05em' }}>
          © {new Date().getFullYear()} Arena Fight Gym. Todos os direitos reservados.
        </p>

        <div style={{ display: 'flex', gap: 24 }}>
          {['Instagram', 'YouTube', 'WhatsApp'].map(s => (
            <a key={s} href="#" style={{
              fontFamily: 'var(--font-condensed)', fontSize: 13,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--gray-light)', transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--red)'}
              onMouseLeave={e => e.target.style.color = 'var(--gray-light)'}
            >{s}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}