import { useProductContext } from "../../context/index";
import { Container } from "./style";

function ResponseProducts() {
  const { products, validated, editProducts } = useProductContext();

  return (
    <Container>
      {!validated && (
        <p className="alert">
          Há um ou mais produtos com erros, corrija-os para que possam ser
          atualizados.
        </p>
      )}
      <h1>Lista de produtos do arquivo:</h1>
      <ul>
        {products?.map((product) => (
          <li key={product.lineNumber}>
            {!product.hasError ? (
              <div>
                <h4>Produto: {product.name}</h4>
                <h4>Codigo: {product.product_code}</h4>
                <h4>Preço atual: {product.sales_price}</h4>
                <h4>Novo preço: {product.new_price}</h4>
              </div>
            ) : (
              <div className="error_message">
                {product.name && <h4>Produto: {product.name}</h4>}
                <h4>Codigo: {product.product_code}</h4>
                {product.errorMessages?.map((error) => (
                  <p>Erro ou Erros: {error}</p>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
      {validated && (
        <button onClick={() => editProducts(products!)}>Atualizar</button>
      )}
    </Container>
  );
}

export default ResponseProducts;
