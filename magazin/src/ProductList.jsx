function ProductList({ products, onAddToCart }) {
    return (
      <div className="product-list">
        <h2>Товары</h2>
        <div className="products">
          {products.map(product => (
            <div key={product.id} className="product">
              <img src={`/images/${product.image}`} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Цена: {product.price} руб.</p>
              <button onClick={() => onAddToCart(product)}>
                Добавить в корзину
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default ProductList;