import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, addToCart, decreaseFromCart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div style={{ color: "white", padding: "2rem" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item, idx) => (
              <li key={idx} style={{ marginBottom: "1.5rem" }}>
                <strong>{item.name}</strong> – ₹{item.price} × {item.quantity} = ₹
                {item.price * item.quantity}
                <br />
                <div style={{ marginTop: "0.5rem" }}>
                  <button
                    onClick={() => decreaseFromCart(item.id)}
                    style={{
                      background: "#444",
                      color: "#fff",
                      padding: "4px 10px",
                      border: "none",
                      borderRadius: "4px",
                      marginRight: "0.5rem",
                      cursor: "pointer"
                    }}
                  >
                    ➖
                  </button>

                  <button
                    onClick={() => addToCart(item)}
                    style={{
                      background: "#28a745",
                      color: "#fff",
                      padding: "4px 10px",
                      border: "none",
                      borderRadius: "4px",
                      marginRight: "0.5rem",
                      cursor: "pointer"
                    }}
                  >
                    ➕
                  </button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      background: "#dc3545",
                      color: "#fff",
                      padding: "4px 10px",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer"
                    }}
                  >
                    ❌ Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <h3>Total: ₹{total}</h3>
          <button
            onClick={clearCart}
            style={{
              marginTop: "1rem",
              background: "#6c757d",
              color: "white",
              padding: "0.6rem 1.2rem",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            🗑 Clear Cart
          </button>
        </>
      )}
    </div>
  );
}
