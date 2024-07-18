import React from 'react';
import styles from './EditProductPage.module.css';

function EditProductPage() {
  return (
    <section id="edit-page" className={styles.auth}>
      <form id="edit">
        <div className={styles.container}>
          <h1>Edit Product</h1>

          <label htmlFor="title">Legendary title:</label>
          <input type="text" id="title" name="title" defaultValue="" />

          <label htmlFor="category">Category:</label>
          <input type="text" id="category" name="category" defaultValue="" />

          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" min="1" defaultValue="" />

          <label htmlFor="imageUrl">Image:</label>
          <input type="text" id="imageUrl" name="imageUrl" defaultValue="" />

          <label htmlFor="summary">Summary:</label>
          <textarea name="summary" id="summary"></textarea>

          <input className={`${styles.btn} ${styles.submit}`} type="submit" value="Edit Product" />
        </div>
      </form>
    </section>
  );
}

export default EditGamePage;
