function ProductCard({ nome, preco, imagem }) {
  return (
    <div style={styles.card}>
      <div style={styles.imagePlaceholder}>{imagem}</div>
      <h3 style={styles.title}>{nome}</h3>
      {/* O toFixed(2) garante que o preço sempre tenha duas casas decimais */}
      <p style={styles.price}>R$ {preco.toFixed(2)}</p>
      <button style={styles.button}>Adicionar ao Carrinho</button>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '1.5rem',
    textAlign: 'center',
    width: '220px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    backgroundColor: 'white'
  },
  imagePlaceholder: {
    fontSize: '4rem',
    marginBottom: '1rem'
  },
  title: {
    fontSize: '1.1rem',
    color: '#333',
    marginBottom: '0.5rem',
    minHeight: '40px' // Mantém os cards alinhados mesmo com nomes grandes
  },
  price: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#C84C31',
    marginBottom: '1rem'
  },
  button: {
    backgroundColor: '#C84C31',
    color: 'white',
    border: 'none',
    padding: '0.7rem',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    width: '100%',
    transition: 'background 0.2s'
  }
};

export default ProductCard;