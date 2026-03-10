// Adicionamos o useEffect na importação
import { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';

function App() {
  const [cartCount, setCartCount] = useState(0);
  // Nova variável de estado para guardar os produtos que virão da API
  const [produtos, setProdutos] = useState([]);

  // O useEffect vai na API buscar os dados assim que o site carregar
  useEffect(() => {
    fetch('http://localhost:3000/api/produtos')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setProdutos(dados); // Salva os dados recebidos do backend no estado do React
      })
      .catch((erro) => console.error('Erro ao buscar produtos:', erro));
  }, []); // Essa lista vazia [] significa "rode apenas uma vez quando abrir a página"

  const handleAddToCart = () => {
    setCartCount((current) => current + 1);
  };

  return (
    <div style={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Header cartCount={cartCount} />
      
      <main style={{ padding: '3rem', fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
        <h2>Nossa Loja</h2>
        <p style={{ marginTop: '0.5rem', color: '#555', marginBottom: '2rem' }}>
          Leve um pedaço da história de Uberaba com você.
        </p>

        {/* Verificamos se já chegaram produtos da API. Se não, mostramos "Carregando..." */}
        {produtos.length === 0 ? (
          <p>Carregando produtos do servidor...</p>
        ) : (
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {produtos.map((produto) => (
              <ProductCard 
                key={produto.id} 
                nome={produto.nome} 
                preco={produto.preco} 
                imagem={produto.imagem} 
                onAdd={handleAddToCart} 
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;