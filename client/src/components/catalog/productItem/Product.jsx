import { Link } from "react-router-dom";

import styles from "./Product.module.css";

function Product({ _id, title, category, price, imageUrl }) {
  return (
    <div className={styles.allProducts}>
      <div className={styles.allProductsInfo}>
        <img src={imageUrl} />
        <h2>Title: {title}</h2>
        <h6>category: {category}</h6>
        <h6>price: $ {price}</h6>
        <Link to={`/catalog/${_id}/details`} className="details-button">
          Details
        </Link>
      </div>
    </div>
  );
}

export default Product;
