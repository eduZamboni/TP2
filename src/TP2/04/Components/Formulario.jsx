import './styles.css';

export default function FormularioCadastro() {
  return (
    <div className="form-container">
      <h2>Cadastro de Produtos</h2>
      
      <form>
        <div className="form-group">
          <label htmlFor="nomeProduto">Nome do Produto</label>
          <input
            type="text"
            id="nomeProduto"
            placeholder="Informe o nome do produto"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="precoVenda">Preço de venda</label>
            <input
              type="number"
              id="precoVenda"
              placeholder="Informe o preço de venda"
              step="0.01"
            />
          </div>

          <div className="form-group">
            <label htmlFor="precoCusto">Preço de custo</label>
            <input
              type="number"
              id="precoCusto"
              placeholder="Informe o preço de custo"
              step="0.01"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="categoria">Categoria</label>
            <select id="categoria">
              <option value="">Selecione uma categoria</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="fabricante">Fabricante</label>
            <select id="fabricante">
              <option value="">Selecione um fabricante</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="descricaoProduto">Descrição do Produto</label>
          <textarea
            id="descricaoProduto"
            placeholder="Informe a descrição do produto"
          />
        </div>

        <div className="form-actions">
          <button type="button">Salvar</button>
        </div>
      </form>
    </div>
  );
}