import React, { useContext, useEffect, useState } from 'react';
import styles from './MyProductsPage.module.css';
import productsAPI from '../../api/productsAPI';
import AuthContext from '../../contexts/authContext';
import Product from '../catalog/productItem/Product';

const MyProductsPage = () => {
  const { userId } = useContext(AuthContext);
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const allProducts = await productsAPI.getAll();
        const userProducts = allProducts.filter(product => product._ownerId === userId);
        setMyProducts(userProducts);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [userId]);

  return (
    <div className={styles.myProducts}>
      <h1>My Products</h1>
      {myProducts.length > 0 ? (
        <div className={styles.productsGrid}>
          {myProducts.map(product => (
            <Product key={product._id} {...product} />
          ))}
        </div>
      ) : (
        <p>You haven't created any products yet!</p>
      )}
    </div>
  );
};

export default MyProductsPage;
