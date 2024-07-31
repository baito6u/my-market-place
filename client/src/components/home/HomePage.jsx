import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import productsAPI from "../../api/productsAPI";
import LatestProduct from "./latestProducts/LatestProduct";

function HomePage({ _id, accessToken, email }) {
  const [latestProducts, SetLatestProducts] = useState([]);

  useEffect(() => {
    productsAPI.getLatest().then((result) => SetLatestProducts(result));
  }, []);

  return (
    <div className={styles.home}>
      <h1>Welcome to My Market Place</h1>
      <p>Explore our products and find what you need!</p>
      <h3>Latest Products!</h3>
      {latestProducts.map((product) => (
        <LatestProduct key={product._id} {...product} />
      ))}
      {!latestProducts.length && (
        <p className={styles.noArticles}>There no products yet!</p>
      )}

      <p>{email}</p>
    </div>
  );
}

export default HomePage;
