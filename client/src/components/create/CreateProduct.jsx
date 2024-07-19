import React from "react";
import styles from "./CreateProduct.module.css";

const CreateProduct = () => {
  return (
    <section id="create-page" className={styles.auth}>
      <form id="create">
        <div className={styles.container}>
          <h1>Create Product</h1>

          <label htmlFor="title">Legendary title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter Product title..."
          />

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Enter Product category..."
          />

          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            min="1"
            placeholder="1"
          />

          <label htmlFor="imageUrl">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Upload a photo..."
          />

          <label htmlFor="description">Description:</label>
          <textarea name="description" id="description"></textarea>

          <input
            className={`${styles.btn} ${styles.submit}`}
            type="submit"
            value="Create Product"
          />
        </div>
      </form>
    </section>
  );
};

export default CreateProduct;
