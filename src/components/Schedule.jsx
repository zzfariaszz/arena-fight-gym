const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

const schedule = {
  MMA:        ['07:00 / 19:00', '—',           '07:00 / 19:00', '—',           '07:00 / 19:00', '09:00'],
  'Muay Thai':['—',            '06:30 / 18:30','—',            '06:30 / 18:30','—',            '10:00'],
  'Jiu-Jitsu':['08:00 / 20:00','—',           '08:00 / 20:00', '—',           '08:00 / 20:00', '09:00'],
  Boxe:       ['—',            '07:00 / 19:30','—',            '07:00 / 19:30','—',            '11:00'],
}

export default function Schedule() {
  return (
    <section id="horarios" style={{ background: 'var(--black)' }}>
      <div className="container">
        <p className="section-label">Quando treinar</p>
        <h2 className="section-title">Horários</h2>
        <p className="section-subtitle" style={{ marginBottom: 56 }}>
          Grade semanal com turmas pela manhã e à noite para se encaixar na sua rotina.
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table style={{
            width: '100%', borderCollapse: 'collapse',
            fontFamily: 'var(--font-condensed)',
          }}>
            <thead>
              <tr>
                <th style={{ padding: '14px 20px', textAlign: 'left', color: 'var(--red)', fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', borderBottom: '1px solid var(--gray-dark)', width: 140 }}>Modalidade</th>
                {days.map(d => (
                  <th key={d} style={{ padding: '14px 16px', textAlign: 'center', color: 'var(--gray-light)', fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: '1px solid var(--gray-dark)' }}>{d}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(schedule).map(([mod, times], ri) => (
                <tr key={mod} style={{ background: ri % 2 === 0 ? 'var(--black-3)' : 'transparent' }}>
                  <td style={{ padding: '16px 20px', fontWeight: 700, fontSize: 16, color: 'var(--white)', borderBottom: '1px solid #1a1a1a' }}>{mod}</td>
                  {times.map((t, ci) => (
                    <td key={ci} style={{
                      padding: '16px 16px', textAlign: 'center',
                      fontSize: 13, color: t === '—' ? 'var(--gray-dark)' : 'var(--gray-light)',
                      borderBottom: '1px solid #1a1a1a',
                      fontWeight: t !== '—' ? 600 : 400,
                    }}>{t}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}