const plans = [
  {
    name: 'Iniciante',
    price: '129',
    desc: 'Para quem está dando o primeiro passo nas artes marciais.',
    features: ['1 modalidade à escolha', 'Acesso à academia', 'Avaliação física', 'Suporte do instrutor'],
    highlight: false,
  },
  {
    name: 'Lutador',
    price: '219',
    desc: 'O plano mais popular para quem leva o treino a sério.',
    features: ['2 modalidades à escolha', 'Acesso ilimitado', 'Avaliação física mensal', 'Treino funcional incluso', 'Acompanhamento nutricional'],
    highlight: true,
  },
  {
    name: 'Elite',
    price: '349',
    desc: 'Treinamento completo para competidores e atletas dedicados.',
    features: ['Todas as modalidades', 'Acesso ilimitado', 'Personal training 4x/mês', 'Preparação para competições', 'Acesso ao app exclusivo', 'Desconto em equipamentos'],
    highlight: false,
  },
]

export default function Plans() {
  return (
    <section id="planos" style={{ background: 'var(--black-2)' }}>
      <div className="container">
        <p className="section-label">Investimento</p>
        <h2 className="section-title">Planos</h2>
        <p className="section-subtitle" style={{ marginBottom: 64 }}>
          Escolha o plano ideal para o seu nível e objetivo. Sem fidelidade no primeiro mês.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
          alignItems: 'start',
        }}>
          {plans.map(p => (
            <div key={p.name} style={{
              background: p.highlight ? 'var(--red-dark)' : 'var(--black-3)',
              border: p.highlight ? '1px solid var(--red)' : '1px solid var(--gray-dark)',
              padding: '40px 32px',
              position: 'relative',
              transition: 'transform 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {p.highlight && (
                <div style={{
                  position: 'absolute', top: -1, left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--red)',
                  padding: '4px 20px',
                  fontFamily: 'var(--font-condensed)',
                  fontSize: 11, letterSpacing: '0.15em',
                  textTransform: 'uppercase', color: 'var(--white)',
                }}>Mais popular</div>
              )}

              <p style={{ fontFamily: 'var(--font-condensed)', fontSize: 13, letterSpacing: '0.15em', textTransform: 'uppercase', color: p.highlight ? '#ff6b6b' : 'var(--gray-light)', marginBottom: 8 }}>{p.name}</p>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 12 }}>
                <span style={{ fontFamily: 'var(--font-condensed)', fontSize: 14, color: 'var(--gray-light)' }}>R$</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 64, lineHeight: 1, color: 'var(--white)' }}>{p.price}</span>
                <span style={{ fontFamily: 'var(--font-condensed)', fontSize: 13, color: 'var(--gray-light)' }}>/mês</span>
              </div>

              <p style={{ fontSize: 14, color: 'var(--gray-light)', lineHeight: 1.6, marginBottom: 28 }}>{p.desc}</p>

              <div style={{ borderTop: `1px solid ${p.highlight ? '#ff000033' : 'var(--gray-dark)'}`, paddingTop: 28, marginBottom: 32 }}>
                {p.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <span style={{ width: 6, height: 6, background: 'var(--red)', flexShrink: 0, transform: 'rotate(45deg)' }} />
                    <span style={{ fontFamily: 'var(--font-condensed)', fontSize: 15, color: 'var(--white)' }}>{f}</span>
                  </div>
                ))}
              </div>

              <a href="#contato" className={p.highlight ? 'btn-primary' : 'btn-outline'} style={{ display: 'block', textAlign: 'center' }}>
                Quero este plano
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}