import { Link } from "react-router-dom";
import styles from "../../styles/Products.module.css";

const Products = (title, products = []) => {
  return (
    <section>
      <div className={styles.list}>
        {title && <h2>{title}</h2>}
        {products.map(
          ({ id, images, title, category: { name: cat }, price }) => (
            <Link to={`/products/${id}`} key={id} className={styles.product}>
              <div
                className={styles.image}
                style={{ backgroundImage: `url(${images[0]})` }}
              />
            </Link>
          )
        )}
      </div>
    </section>
  );
};

export default Products;
