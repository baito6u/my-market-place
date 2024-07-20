import { useEffect, useState } from "react";

import styles from "./CatalogPage.module.css";

import * as productsAPI from "../../api/productsAPI";
import Product from "./productItem/Product";

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

      {products.length > 0 ? (
        products.map((product) => <Product key={product._id} {...product} />)
      ) : (
        <h3 className="no-products">There is no products in data base yet!</h3>
      )}
    </div>
  );
}

export default CatalogPage;
