import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./DetailsPage.module.css";

import productsAPI from "../../api/productsAPI";

function DetailsPage() {
  const [product, setProduct] = useState({});
  const {productId} = useParams();

  useEffect(() => {
    (async () => {
      const result = await productsAPI.getOne(productId);
      setProduct(result);
    })();
  });

  return (
    <div className={styles.details}>
      <h2>Title: {product.title}</h2>
      <h6>Category: {product.category}</h6>
      <p>Price: ${product.price}</p>
      <img src={product.imageUrl} />
      <p>Description: {product.description}</p>

      <div className={styles.comments}>
        <h3>Comments</h3>
        <form className={styles.commentForm}>
          <label htmlFor="user">User:</label>
          <input type="text" id="user" name="user" placeholder="Enter your name..." />

          <label htmlFor="comment">Comment:</label>
          <textarea id="comment" name="comment" placeholder="Enter your comment..." />

          <button type="submit" className={styles.btn}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default DetailsPage;
