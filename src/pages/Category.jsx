import { useParams } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import styles from "./Category.module.css";

const allProducts = [
  { id: 1, name: "Red Tee", price: 999, category: "Tees" },
  { id: 2, name: "Black Jacket", price: 2499, category: "Jackets" },
  { id: 3, name: "Cap F1 Edition", price: 799, category: "Caps" },
  { id: 4, name: "Racing Gloves", price: 1199, category: "Accessories" },
  { id: 5, name: "Streetwear Pants", price: 1799, category: "Limited" },
  { id: 6, name: "Accessories Pack", price: 599, category: "Accessories" },
];

export default function Category() {
  const { type } = useParams(); // e.g., Tees
  const { addToCart } = useCart();
  const [search, setSearch] = useState("");

  // Step 1: Filter by category
  const productsInCategory =
  type === "All"
    ? allProducts
    : allProducts.filter((p) => p.category === type);

  

  // Step 2: Then apply search
  const filtered = productsInCategory.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.categoryPage}>
      <h2>{type === "All" ? "All Products" : `${type} Collection`}</h2>


      <input
        type="text"
        placeholder="Search this category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.search}
      />

      {filtered.length === 0 ? (
        <p>No products match your search.</p>
      ) : (
        <div className={styles.products}>
          {filtered.map((p) => (
            <div key={p.id} className={styles.productCard}>
              <p>{p.name}</p>
              <p>₹{p.price}</p>
              <button onClick={() => addToCart(p)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
