const modalities = [
  {
    name: 'MMA',
    full: 'Mixed Martial Arts',
    desc: 'A arte marcial mista combina técnicas de striking, grappling e luta no chão. O esporte completo para quem quer dominar todas as distâncias.',
    icon: '✦',
    level: 'Todos os níveis',
  },
  {
    name: 'Muay Thai',
    full: 'Arte dos 8 Membros',
    desc: 'A arte marcial tailandesa que utiliza punhos, cotovelos, joelhos e chutes. Devastador no striking e fundamental para o MMA moderno.',
    icon: '✦',
    level: 'Iniciante ao avançado',
  },
  {
    name: 'Jiu-Jitsu',
    full: 'Arte Suave Brasileira',
    desc: 'O BJJ ensina que um lutador menor pode vencer um oponente maior usando alavancas e finalizações. Técnica acima da força.',
    icon: '✦',
    level: 'Todos os níveis',
  },
  {
    name: 'Boxe',
    full: 'A Arte Nobre',
    desc: 'O esporte mais clássico das artes marciais. Desenvolve timing, reflexos, condicionamento e o striking mais refinado do mundo.',
    icon: '✦',
    level: 'Iniciante ao avançado',
  },
]

export default function Modalities() {
  return (
    <section id="modalidades" style={{ background: 'var(--black-2)' }}>
      <div className="container">
        <p className="section-label">O que ensinamos</p>
        <h2 className="section-title">Modalidades</h2>
        <p className="section-subtitle" style={{ marginBottom: 64 }}>
          Quatro modalidades, um objetivo: formar lutadores completos e seres humanos de elite.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 2,
        }}>
          {modalities.map((m, i) => (
            <div key={m.name} style={{
              background: i % 2 === 0 ? 'var(--black-3)' : 'var(--gray-dark)',
              padding: '40px 32px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.2s',
              cursor: 'default',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0,
                width: '100%', height: 3,
                background: 'var(--red)',
                transform: 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.3s',
              }} className="hover-bar" />

              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 72, lineHeight: 1,
                color: '#ffffff08',
                position: 'absolute',
                bottom: 16, right: 20,
                userSelect: 'none',
              }}>{String(i + 1).padStart(2, '0')}</p>

              <p style={{
                fontFamily: 'var(--font-condensed)',
                fontSize: 12, letterSpacing: '0.2em',
                color: 'var(--red)', textTransform: 'uppercase',
                marginBottom: 12,
              }}>{m.level}</p>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 48, lineHeight: 1,
                color: 'var(--white)',
                marginBottom: 4,
              }}>{m.name}</h3>

              <p style={{
                fontFamily: 'var(--font-condensed)',
                fontSize: 13, color: 'var(--gray-light)',
                textTransform: 'uppercase', letterSpacing: '0.08em',
                marginBottom: 20,
              }}>{m.full}</p>

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 14, color: 'var(--gray-light)',
                lineHeight: 1.7,
              }}>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}