import Header from './components/Header';
import ProductCard from './components/ProductCard';

function App() {
  // Uma lista simulada (Mock) simulando o que virá do seu banco de dados no futuro
  const produtos = [
    { id: 1, nome: 'Camiseta Geoparque', preco: 59.90, imagem: '👕' },
    { id: 2, nome: 'Miniatura T-Rex (Impressão 3D)', preco: 35.00, imagem: '🦖' },
    { id: 3, nome: 'Caneca Fósseis', preco: 42.50, imagem: '☕' },
    { id: 4, nome: 'Artesanato Local Uberaba', preco: 85.00, imagem: '🏺' }
  ];

  return (
    <div style={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Header />
      
      <main style={{ padding: '3rem', fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
        <h2>Nossa Loja</h2>
        <p style={{ marginTop: '0.5rem', color: '#555', marginBottom: '2rem' }}>
          Leve um pedaço da história de Uberaba com você.
        </p>

        {/* Grade onde os produtos vão aparecer */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {produtos.map((produto) => (
            <ProductCard 
              key={produto.id} 
              nome={produto.nome} 
              preco={produto.preco} 
              imagem={produto.imagem} 
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
