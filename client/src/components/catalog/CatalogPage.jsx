import { useEffect, useState } from "react";

import styles from "./CatalogPage.module.css";

import * as productsAPI from "../../api/productsAPI";

function CatalogPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productsAPI
      .GetAll()
      .then((result) => setProducts(result))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.catalog}>
      <h2>Catalog</h2>
      <div className={styles.productList}>
        <div className={styles.productItem}>
          <h3>Product 1</h3>
          <p>Description of product 1</p>
        </div>
        <div className={styles.productItem}>
          <h3>Product 2</h3>
          <p>Description of product 2</p>
        </div>
      </div>
    </div>
  );
}

export default CatalogPage;
