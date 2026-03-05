import Header from './components/Header';

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#C84C31', color: '#fff' }}>
      <Header />
      
      <main style={{ padding: '3rem', fontFamily: 'sans-serif' }}>
        <h1>Bem-vindo ao Geoprodutos</h1>
        <p style={{ marginTop: '1rem', color: 'rgba(255, 255, 255, 0.9)' }}>
          A loja oficial do Geoparque Uberaba está ganhando forma!
        </p>
      </main>
    </div>
  );
}

export default App;
