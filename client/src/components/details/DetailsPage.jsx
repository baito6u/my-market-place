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
    </div>
  );
}

export default DetailsPage;
