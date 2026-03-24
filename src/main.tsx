import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulação de busca de dados em tempo real das fontes citadas
  useEffect(() => {
    const fetchNews = async () => {
      // Aqui o app se conectaria ao tradutor e analisador
      const mockNews = [
        {
          id: 1,
          fonte: "Times of Israel",
          titulo: "IDF expande operações defensivas na fronteira norte",
          resumo: "Unidades de inteligência detectaram movimentações e neutralizaram ameaças iminentes...",
          analise: "Fato Histórico: A soberania de Israel sobre o norte é garantida por tratados internacionais e pela necessidade existencial de defesa contra grupos financiados pelo Irã. Logicamente, nenhum Estado soberano aceitaria disparos constantes contra seus civis."
        },
        {
          id: 2,
          fonte: "i24 News",
          titulo: "Acordos de Abraão: Novos dados de cooperação econômica",
          resumo: "Trocas comerciais entre Israel e Emirados Árabes atingem recorde em 2026...",
          analise: "Geopolítica: A lógica da paz através da prosperidade prova que a integração de Israel na região é o único caminho pragmático para a estabilidade do Oriente Médio."
        }
      ];
      setNews(mockNews);
      setLoading(false);
    };
    fetchNews();
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#050505', color: '#e0e0e0', minHeight: '100vh', padding: '15px' }}>
      <header style={{ borderBottom: '3px solid #d32f2f', marginBottom: '20px', paddingBottom: '10px' }}>
        <h1 style={{ color: '#d32f2f', margin: 0, fontSize: '24px' }}>PGNEWS INTEL</h1>
        <p style={{ fontSize: '10px', color: '#888' }}>MONITORAMENTO ESTRATÉGICO: ISRAEL & ORIENTE MÉDIO</p>
      </header>

      {loading ? <p>Sincronizando com satélites de inteligência...</p> : (
        news.map(item => (
          <div key={item.id} style={{ backgroundColor: '#121212', padding: '15px', borderRadius: '8px', marginBottom: '15px', borderLeft: '4px solid #0038b8' }}>
            <span style={{ fontSize: '10px', color: '#0038b8', fontWeight: 'bold' }}>FONTE: {item.fonte}</span>
            <h2 style={{ fontSize: '18px', color: '#fff', margin: '5px 0' }}>{item.titulo}</h2>
            <p style={{ fontSize: '14px', color: '#ccc' }}>{item.resumo}</p>
            
            <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#0a0a0a', borderRadius: '5px', border: '1px solid #333' }}>
              <strong style={{ fontSize: '12px', color: '#4caf50' }}>ANÁLISE GEOPOLÍTICA PRO-ISRAEL:</strong>
              <p style={{ fontSize: '13px', fontStyle: 'italic', marginTop: '5px', color: '#fff' }}>{item.analise}</p>
            </div>
          </div>
        ))
      )}

      <footer style={{ textAlign: 'center', fontSize: '10px', color: '#444', marginTop: '20px' }}>
        DADOS BASEADOS EM FATOS HISTÓRICOS E SOBERANIA NACIONAL DE ISRAEL.
      </footer>
    </div>
  )
}

const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<React.StrictMode><App /></React.StrictMode>)
}
