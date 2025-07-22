import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  const categories = ["Tees", "Jackets", "Caps", "Accessories", "Limited"];

  return (
    <div className={styles.home}>
      <h2 className={styles.title}>Welcome to F1 Streetwear</h2>
      <div className={styles.categories}>
        {categories.map((cat, idx) => (
          <Link key={idx} to={`/category/${cat}`} className={styles.category}>
            {cat}
            <Link to="/category/All" className="btn">View All</Link>
          </Link>
        ))}
      </div>
    </div>
  );
}
