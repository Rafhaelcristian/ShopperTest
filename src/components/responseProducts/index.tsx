import { useProductContext } from "../../context/index";

function ResponseProducts() {
  const { products } = useProductContext();

  return (
    <div>
      <h1>Lista de produtos do arquivo:</h1>
      <ul>
        {products?.map((product) => (
          <li key={product.product_code}>
            {!product.hasError ? (
              <>
                <h4>Produto: {product.name}</h4>
                <h4>Codigo: {product.product_code}</h4>
                <h4>Preço atual: {product.sales_price}</h4>
                <h4>Novo preço: {product.new_price}</h4>
              </>
            ) : (
              <>
                {product.name && <h4>Produto: {product.name}</h4>}
                <h4>Codigo: {product.product_code}</h4>
                {product.errorMessages?.map((error) => (
                  <p>Erro ou Erros: {error}</p>
                ))}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResponseProducts;
