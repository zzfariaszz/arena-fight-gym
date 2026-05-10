export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      background: 'var(--black)',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 68,
    }}>
      {/* Diagonal red accent */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '45%', height: '100%',
        background: 'linear-gradient(135deg, transparent 0%, #8b000022 40%, #c8102e18 100%)',
        pointerEvents: 'none',
      }} />

      {/* Grid lines decoration */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(#ffffff04 1px, transparent 1px), linear-gradient(90deg, #ffffff04 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      {/* Red vertical bar */}
      <div style={{
        position: 'absolute', left: 0, top: '15%',
        width: 4, height: '55%',
        background: 'var(--red)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 720, animation: 'fadeUp 0.8s ease both' }}>
          <p className="section-label" style={{ marginBottom: 20 }}>— Bem-vindo à arena</p>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(64px, 12vw, 140px)',
            lineHeight: 0.9,
            color: 'var(--white)',
            marginBottom: 8,
          }}>
            FORJE
          </h1>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(64px, 12vw, 140px)',
            lineHeight: 0.9,
            color: 'transparent',
            WebkitTextStroke: '2px var(--red)',
            marginBottom: 32,
          }}>
            GUERREIROS
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 18,
            color: 'var(--gray-light)', lineHeight: 1.7,
            maxWidth: 480, marginBottom: 48,
            animation: 'fadeUp 0.8s 0.15s ease both',
          }}>
            Treinamento de elite em MMA, Muay Thai, Jiu-Jitsu e Boxe.
            Professores campeões. Resultados reais.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', animation: 'fadeUp 0.8s 0.3s ease both' }}>
            <a href="#planos" className="btn-primary">Comece agora</a>
            <a href="#modalidades" className="btn-outline">Ver modalidades</a>
          </div>

          <div style={{
            display: 'flex', gap: 48, marginTop: 72,
            animation: 'fadeUp 0.8s 0.45s ease both',
          }}>
            {[['1200+', 'Alunos ativos'], ['8', 'Campeões formados'], ['15', 'Anos de história']].map(([num, label]) => (
              <div key={label}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 42, color: 'var(--red)', lineHeight: 1 }}>{num}</p>
                <p style={{ fontFamily: 'var(--font-condensed)', fontSize: 13, letterSpacing: '0.1em', color: 'var(--gray-light)', textTransform: 'uppercase', marginTop: 4 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}