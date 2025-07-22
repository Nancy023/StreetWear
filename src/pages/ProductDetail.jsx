import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import styles from "./ProductDetail.module.css";

const allProducts = [
  { id: 1, name: "Red Tee", price: 999, description: "Premium cotton F1 Tee" },
  { id: 2, name: "Black Jacket", price: 2499, description: "Waterproof racing jacket" },
  { id: 3, name: "Cap F1 Edition", price: 799, description: "Stylish cap with F1 logo" },
  { id: 4, name: "Racing Gloves", price: 1199, description: "Comfortable grip gloves" },
  { id: 5, name: "Streetwear Pants", price: 1799, description: "Sporty and casual" },
  { id: 6, name: "Accessories Pack", price: 599, description: "Includes keychain, badge & more" },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) return <p>Product not found</p>;

  return (
    <div className={styles.detail}>
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
