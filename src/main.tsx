import React from 'react'
import ReactDOM from 'react-dom/client'

// Componente Principal do PGNEWS
const App = () => {
  return (
    <div style={{ 
      fontFamily: 'sans-serif', 
      backgroundColor: '#000', 
      color: '#fff', 
      minHeight: '100vh',
      padding: '20px' 
    }}>
      <header style={{ borderBottom: '2px solid #ff0000', marginBottom: '20px' }}>
        <h1 style={{ color: '#ff0000', margin: 0 }}>PGNEWS</h1>
        <p style={{ fontSize: '12px', color: '#aaa' }}>GEOPOLÍTICA E INTELIGÊNCIA MILITAR</p>
      </header>

      <main>
        <section style={{ backgroundColor: '#1a1a1a', padding: '15px', borderRadius: '8px', marginBottom: '15px' }}>
          <h2 style={{ fontSize: '18px' }}>Monitoramento em Tempo Real</h2>
          <p style={{ color: '#ccc' }}>O sistema de feed está sendo integrado ao banco de dados global.</p>
        </section>

        <section style={{ backgroundColor: '#1a1a1a', padding: '15px', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '18px' }}>Análise de Segurança</h2>
          <p style={{ color: '#ccc' }}>Aguardando sincronização com o servidor de inteligência...</p>
        </section>
      </main>

      <footer style={{ marginTop: '30px', textAlign: 'center', fontSize: '10px', color: '#555' }}>
        &copy; 2026 PGNEWS - Unidade de Monitoramento Digital
      </footer>
    </div>
  )
}

// Inicialização do React
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
