import { useEffect, useState } from "react";

import styles from "./CatalogPage.module.css";

import Product from "./productItem/Product";
import productsAPI from "../../api/productsAPI";

function CatalogPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productsAPI
      .getAll()
      .then((result) => {
        // Assuming each product has a '_createdOn' field
        const sortedProducts = result.sort((a, b) => new Date(b._createdOn) - new Date(a._createdOn));
        setProducts(sortedProducts);
      })
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
