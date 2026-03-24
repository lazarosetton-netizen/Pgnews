import React from 'react'
import ReactDOM from 'react-dom/client'

// Interface simples e funcional para o monitor geopolítico
const App = () => {
  return (
    <div style={{ 
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', 
      backgroundColor: '#050505', 
      color: '#e0e0e0', 
      minHeight: '100vh',
      padding: '20px',
      lineHeight: '1.6'
    }}>
      <header style={{ 
        borderBottom: '3px solid #d32f2f', 
        marginBottom: '25px',
        paddingBottom: '10px' 
      }}>
        <h1 style={{ color: '#d32f2f', margin: 0, letterSpacing: '2px', fontSize: '28px' }}>PGNEWS</h1>
        <p style={{ fontSize: '11px', color: '#888', fontWeight: 'bold', textTransform: 'uppercase' }}>
          Sistema de Inteligência e Monitoramento Geopolítico
        </p>
      </header>

      <main>
        <div style={{ 
          backgroundColor: '#121212', 
          padding: '20px', 
          borderRadius: '10px', 
          marginBottom: '20px',
          borderLeft: '4px solid #d32f2f'
        }}>
          <h2 style={{ fontSize: '18px', color: '#fff', marginTop: 0 }}>Relatório de Situação: Global</h2>
          <p style={{ fontSize: '14px' }}>
            O sistema está operando em modo de segurança. As transmissões de dados criptografados 
            estão sendo sincronizadas com o banco de dados central.
          </p>
          <span style={{ fontSize: '12px', color: '#4caf50' }}>● Sistema Online</span>
        </div>

        <div style={{ 
          backgroundColor: '#121212', 
          padding: '20px', 
          borderRadius: '10px',
          opacity: '0.8'
        }}>
          <h2 style={{ fontSize: '18px', color: '#fff', marginTop: 0 }}>Alertas Militares</h2>
          <p style={{ fontSize: '14px' }}>Aguardando análise de novos vetores de inteligência em tempo real.</p>
        </div>
      </main>

      <footer style={{ 
        marginTop: '40px', 
        textAlign: 'center', 
        fontSize: '10px', 
        color: '#444',
        borderTop: '1px solid #222',
        paddingTop: '15px'
      }}>
        ESTE APLICATIVO É UMA FERRAMENTA DE MONITORAMENTO E ANÁLISE ESTRATÉGICA.
        <br />
        &copy; 2026 PGNEWS - UNIDADE DE DEFESA DIGITAL
      </footer>
    </div>
  )
}

// Inicialização segura do React no elemento 'root' definido no index.html
const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
