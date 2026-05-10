export default function Contact() {
  return (
    <section id="contato" style={{ background: 'var(--black)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <p className="section-label">Fale conosco</p>
            <h2 className="section-title">Comece hoje</h2>
            <p className="section-subtitle" style={{ marginBottom: 40 }}>
              Venha conhecer a academia ou fale com um dos nossos instrutores. A primeira aula é gratuita.
            </p>

            {[
              ['Endereço', 'Rua dos Campeões, 420 — Centro'],
              ['Telefone', '(11) 99999-0000'],
              ['E-mail', 'contato@arenafight.com.br'],
              ['Horário', 'Seg–Sex 06h–22h / Sáb 08h–14h'],
            ].map(([label, value]) => (
              <div key={label} style={{ marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid var(--gray-dark)' }}>
                <p style={{ fontFamily: 'var(--font-condensed)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: 6 }}>{label}</p>
                <p style={{ fontFamily: 'var(--font-condensed)', fontSize: 17, color: 'var(--white)' }}>{value}</p>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--black-3)', border: '1px solid var(--gray-dark)', padding: '40px 36px' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--white)', marginBottom: 28 }}>Aula experimental grátis</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[['Nome completo', 'text', 'Seu nome'], ['Telefone', 'tel', '(11) 00000-0000'], ['E-mail', 'email', 'seu@email.com']].map(([label, type, placeholder]) => (
                <div key={label}>
                  <label style={{ fontFamily: 'var(--font-condensed)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray-light)', display: 'block', marginBottom: 8 }}>{label}</label>
                  <input type={type} placeholder={placeholder} style={{
                    width: '100%', background: 'var(--black-2)',
                    border: '1px solid var(--gray-dark)',
                    padding: '12px 16px', color: 'var(--white)',
                    fontFamily: 'var(--font-body)', fontSize: 15,
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                    onFocus={e => e.target.style.borderColor = 'var(--red)'}
                    onBlur={e => e.target.style.borderColor = 'var(--gray-dark)'}
                  />
                </div>
              ))}

              <div>
                <label style={{ fontFamily: 'var(--font-condensed)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray-light)', display: 'block', marginBottom: 8 }}>Modalidade de interesse</label>
                <select style={{
                  width: '100%', background: 'var(--black-2)',
                  border: '1px solid var(--gray-dark)',
                  padding: '12px 16px', color: 'var(--white)',
                  fontFamily: 'var(--font-body)', fontSize: 15,
                  outline: 'none',
                }}>
                  <option value="">Selecione...</option>
                  <option>MMA</option>
                  <option>Muay Thai</option>
                  <option>Jiu-Jitsu</option>
                  <option>Boxe</option>
                </select>
              </div>

              <button className="btn-primary" style={{ marginTop: 8, width: '100%', textAlign: 'center' }}>
                Agendar aula gratuita
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}