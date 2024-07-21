import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import productsAPI from "../../api/productsAPI";
import LatestProduct from "./latestProducts/LatestProduct";

function HomePage() {
  const [latestProducts, SetlatestProducts] = useState([]);

  useEffect(() => {
    (async () => {
      // TODO: modify to fetch latest 3 products
      const result = await productsAPI.getAll();

      SetlatestProducts(result.reverse().slice(0, 3));
    })();
  }, []);
  return (
    <div className={styles.home}>
      <h1>Welcome to My Market Place</h1>
      <p>Explore our products and find what you need!</p>
      <h3>Latest Products!</h3>
      {latestProducts.length > 0 
      ? latestProducts.map(product => <LatestProduct key={product._id} {...product} />)
      : <p>There no products yet!</p>
      }
    </div>

    
  );
}

export default HomePage;
