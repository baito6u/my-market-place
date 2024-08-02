import { Link } from "react-router-dom";

import styles from "./Product.module.css";

function Product({ _id, title, category, price, imageUrl }) {
  return (
    <div className={styles.productItem}>
    <img src={imageUrl} alt={title} className={styles.productImage} />
    <div className={styles.productDetails}>
      <h3 className={styles.productTitle}>{title}</h3>
      <p className={styles.productCategory}>Category: {category}</p>
      <p className={styles.productPrice}>${price}</p>
        <Link to={`/catalog/${_id}/details`} className={styles.button}>
          Details
        </Link>
      </div>
    </div>
  );
}

export default Product;
