function Cart({ items, onRemove }) {
    const total = items.reduce((sum, item) => sum + item.price, 0);
  
    return (
      <div className="cart">
        <h2>Корзина ({items.length})</h2>
        {items.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.name} - {item.price} руб.
                <button onClick={() => onRemove(item.id)}>Удалить</button>
              </li>
            ))}
          </ul>
        )}
        <div className="total">Итого: {total} руб.</div>
      </div>
    );
  }
  
  export default Cart;