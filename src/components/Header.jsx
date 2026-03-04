function Header() {
  return (
    <header style={styles.header}>
      <div>
        {/* Mais pra frente colocaremos a imagem da sua logo aqui */}
        <h2>🦕 Geoprodutos</h2>
      </div>
      
      <nav>
        <ul style={styles.navList}>
          <li>Início</li>
          <li>Catálogo</li>
          <li>Carrinho (0)</li>
        </ul>
      </nav>
    </header>
  );
}

// Estilos básicos para começar
const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 3rem',
    backgroundColor: '#C84C31', // Tom terracota/ferrugem da logo
    color: 'white',
    fontFamily: 'sans-serif'
  },
  navList: {
    display: 'flex',
    listStyleType: 'none',
    gap: '30px',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
};

export default Header;