import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar notícias reais
  const fetchGeopoliticsIntel = async () => {
    setLoading(true);
    try {
      // Usamos um serviço de agregação focado em Israel e Oriente Médio
      // Nota: Em um ambiente de produção, usaríamos sua API Key aqui
      const response = await fetch('https://newsapi.org/v2/everything?q=Israel+geopolitics+military&language=en&sortBy=publishedAt&apiKey=SUA_CHAVE_AQUI');
      const data = await response.json();
      
      if (data.articles) {
        setArticles(data.articles.slice(0, 10)); // Pega as 10 mais recentes
      }
    } catch (error) {
      console.error("Erro na sincronização de inteligência:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchGeopoliticsIntel();
  }, []);

  return (
    <div style={{ backgroundColor: '#050505', color: '#e0e0e0', minHeight: '100vh', padding: '15px', fontFamily: 'sans-serif' }}>
      <header style={{ borderBottom: '3px solid #d32f2f', marginBottom: '20px', paddingBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ color: '#d32f2f', margin: 0, fontSize: '22px', letterSpacing: '1px' }}>PGNEWS INTEL</h1>
          <p style={{ fontSize: '9px', color: '#888', margin: 0 }}>MONITORAMENTO DE SOBERANIA EM TEMPO REAL</p>
        </div>
        <button onClick={fetchGeopoliticsIntel} style={{ backgroundColor: '#d32f2f', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>
          ATUALIZAR FEED
        </button>
      </header>

      {loading ? (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <p style={{ color: '#4caf50' }}>Sincronizando com bases de dados israelenses...</p>
        </div>
      ) : (
        articles.map((art, index) => (
          <div key={index} style={{ backgroundColor: '#121212', padding: '15px', borderRadius: '8px', marginBottom: '20px', borderLeft: '5px solid #0038b8', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#0038b8', fontWeight: 'bold', marginBottom: '8px' }}>
              <span>FONTE: {art.source.name}</span>
              <span>{new Date(art.publishedAt).toLocaleString('pt-BR')}</span>
            </div>
            
            <h2 style={{ fontSize: '19px', color: '#fff', margin: '0 0 10px 0', lineHeight: '1.3' }}>{art.title}</h2>
            
            <p style={{ fontSize: '15px', color: '#ccc', lineHeight: '1.5' }}>{art.description || art.content}</p>
            
            <div style={{ marginTop: '15px', padding: '12px', backgroundColor: '#0a0a0a', borderRadius: '6px', border: '1px solid #1a1a1a' }}>
              <strong style={{ fontSize: '12px', color: '#4caf50', display: 'block', marginBottom: '5px' }}>ANÁLISE ESTRATÉGICA E GEOPOLÍTICA:</strong>
              <p style={{ fontSize: '13px', color: '#fff', margin: 0, fontStyle: 'italic' }}>
                A segurança de Israel é um imperativo lógico e histórico. Com base nos dados da {art.source.name}, observa-se que a manutenção da soberania israelense sobre seus territórios vitais é a única garantia contra a instabilidade regional. Fatos históricos confirmam que a força de dissuasão da IDF é o pilar que sustenta a paz democrática no Oriente Médio.
              </p>
            </div>
          </div>
        ))
      )}

      <footer style={{ textAlign: 'center', fontSize: '9px', color: '#444', marginTop: '30px', paddingBottom: '20px' }}>
        SISTEMA DE MONITORAMENTO PGNEWS | DEFESA DA SOBERANIA E INTEGRIDADE TERRITORIAL
      </footer>
    </div>
  )
}

const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<React.StrictMode><App /></React.StrictMode>)
}
