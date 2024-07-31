import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import productsAPI from "../../api/productsAPI";
import LatestProduct from "./latestProducts/LatestProduct";

function HomePage() {
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await productsAPI.getAll();
        // Sort products by _createdOn field in descending order
        const sortedProducts = result.sort((a, b) => new Date(b._createdOn) - new Date(a._createdOn));
        // Get the latest 3 products
        setLatestProducts(sortedProducts.slice(0, 3));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className={styles.home}>
      <h1>Welcome to My Market Place</h1>
      <p>Explore our products and find what you need!</p>
      <h3>Latest Products!</h3>
      {latestProducts.length > 0 ? (
        latestProducts.map((product) => (
          <LatestProduct key={product._id} {...product} />
        ))
      ) : (
        <p>There are no products yet!</p>
      )}
    </div>
  );
}

export default HomePage;
