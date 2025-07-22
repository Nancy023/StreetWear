 
 
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useCart } from "../context/CartContext";

export default function Header() {

  const user = localStorage.getItem("loggedInUser");
  const { cart } = useCart();
  const itemCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "/";
  };

  return (
    <div className={styles.header}>
      <Link to="/" className={styles.logo}>🏁 F1 Streetwear</Link>

      <div className={styles.nav}>
        <Link to="/category">Category</Link>
        <Link to="/cart">Cart</Link>
        {!user && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/forgot-password">Forgot?</Link> {/* 👈 This is the new line */}
            <Link to="/cart">Cart ({cart.length})</Link>
            <Link to="/cart">Cart ({itemCount})</Link>
            
          </>
        )}
      </div>

      {user && (
        <div>
          <span className={styles.welcome}>Welcome, {user}!</span>
          <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
        </div>
      )}
    </div>
  );
}
