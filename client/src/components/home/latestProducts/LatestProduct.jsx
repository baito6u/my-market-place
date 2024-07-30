import { Link } from "react-router-dom";
import styles from "./LatestProducts.module.css";

function LatestProduct({ _id, title, price, imageUrl }) {
  return (
    <div className={styles.product}>
      <div className={styles.imageWrap}>
        <img src={imageUrl} />
      </div>
        <h2>Title: {title}</h2>
        <h6>price: $ {price}</h6>
        <div className={styles.btn}>
          <Link to={`/catalog/${_id}/details`} className="details-button">
            Details
          </Link>
        </div>
    </div>
  );
}

export default LatestProduct;