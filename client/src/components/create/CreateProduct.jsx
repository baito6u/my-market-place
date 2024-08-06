import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./CreateProduct.module.css";
import productsAPI from "../../api/productsAPI";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState({
    title: "",
    category: "",
    price: "",
    imageUrl: "",
    description: "",
  });

  const createProductHandler = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error

    // Validate form values
    const errors = validateForm(formValues);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      await productsAPI.create(formValues);
      navigate("/catalog");
    } catch (error) {
      setError(error.message || "Failed to create product");
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = "Title is required";
    }
    if (!values.category) {
      errors.category = "Category is required";
    }
    if (!values.price) {
      errors.price = "Price is required";
    } else if (isNaN(values.price) || values.price <= 0) {
      errors.price = "Price must be a positive number";
    }
    if (!values.imageUrl) {
      errors.imageUrl = "Image URL is required";
    }
    if (!values.description) {
      errors.description = "Description is required";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" }); // Clear error for the field being edited
  };

  return (
    <section id="create-page" className={styles.auth}>
      <form id="create" onSubmit={createProductHandler}>
        <div className={styles.container}>
          <h1>Create Product</h1>
          {error && <p className={styles.error}>{error}</p>}

          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter Product title..."
            value={formValues.title}
            onChange={handleChange}
          />
          {formErrors.title && <p className={styles.error}>{formErrors.title}</p>}

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Enter Product category..."
            value={formValues.category}
            onChange={handleChange}
          />
          {formErrors.category && <p className={styles.error}>{formErrors.category}</p>}

          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            min="1"
            placeholder="1"
            value={formValues.price}
            onChange={handleChange}
          />
          {formErrors.price && <p className={styles.error}>{formErrors.price}</p>}

          <label htmlFor="imageUrl">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Upload a photo..."
            value={formValues.imageUrl}
            onChange={handleChange}
          />
          {formErrors.imageUrl && <p className={styles.error}>{formErrors.imageUrl}</p>}

          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            value={formValues.description}
            onChange={handleChange}
          ></textarea>
          {formErrors.description && <p className={styles.error}>{formErrors.description}</p>}

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
