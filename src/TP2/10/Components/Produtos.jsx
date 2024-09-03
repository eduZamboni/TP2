import './Produtos.css';

export default function Produtos() {
    return (
      <section id="produtos" className="sectionProdutos">
        <h2>Produtos</h2>
        <div className="product-grid">
          <img src="https://via.placeholder.com/400" alt="Produto 1" />
          <img src="https://via.placeholder.com/400" alt="Produto 2" />
          <img src="https://via.placeholder.com/400" alt="Produto 3" />
          <img src="https://via.placeholder.com/400" alt="Produto 4" />
          <img src="https://via.placeholder.com/400" alt="Produto 5" />
          <img src="https://via.placeholder.com/400" alt="Produto 6" />
        </div>
      </section>
    );
  }