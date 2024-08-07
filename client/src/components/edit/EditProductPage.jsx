import { useNavigate, useParams } from "react-router-dom";
import styles from "./EditProductPage.module.css";
import { useEffect, useState } from "react";
import productsAPI from "../../api/productsAPI";

function EditProductPage() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState({
    title: "",
    category: "",
    price: "",
    imageUrl: "",
    description: "",
  });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    productsAPI.getOne(productId)
      .then(result => {
        setProduct(result);
      });
  }, [productId]);

  const editProductHandler = async (e) => {
    e.preventDefault();

    const values = Object.fromEntries(new FormData(e.currentTarget));

    // Validate form values
    const errors = validateForm(values);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      await productsAPI.edit(productId, values);
      navigate(`/catalog/${productId}/details`);
    } catch (error) {
      // TODO: Error notification
      console.log(error);
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.title.trim()) {
      errors.title = "Title is required and cannot be just whitespace";
    }
    if (!values.category.trim()) {
      errors.category = "Category is required and cannot be just whitespace";
    }
    if (!values.price) {
      errors.price = "Price is required";
    } else if (isNaN(values.price) || values.price <= 0) {
      errors.price = "Price must be a positive number";
    }
    if (!values.imageUrl.trim()) {
      errors.imageUrl = "Image URL is required and cannot be just whitespace";
    }
    if (!values.description.trim()) {
      errors.description = "Description is required and cannot be just whitespace";
    }

    return errors;
  };

  const onChange = (e) => {
    setProduct(state => ({
        ...state,
        [e.target.name]: e.target.value
    }));
    setFormErrors({ ...formErrors, [e.target.name]: "" }); // Clear error for the field being edited
  };

  return (
    <section id="edit-page" className={styles.auth}>
      <form id="edit" onSubmit={editProductHandler}>
        <div className={styles.container}>
          <h1>Edit Product</h1>

          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={product.title}
            onChange={onChange}
            placeholder="Enter Product title..."
          />
          {formErrors.title && <p className={styles.error}>{formErrors.title}</p>}

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={product.category}
            onChange={onChange}
            placeholder="Enter Product category..."
          />
          {formErrors.category && <p className={styles.error}>{formErrors.category}</p>}

          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={onChange}
            min="1"
            placeholder="1"
          />
          {formErrors.price && <p className={styles.error}>{formErrors.price}</p>}

          <label htmlFor="imageUrl">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={product.imageUrl}
            onChange={onChange}
            placeholder="Upload a photo..."
          />
          {formErrors.imageUrl && <p className={styles.error}>{formErrors.imageUrl}</p>}

          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={onChange}
            id="description"
          ></textarea>
          {formErrors.description && <p className={styles.error}>{formErrors.description}</p>}

          <input
            className={`${styles.btn} ${styles.submit}`}
            type="submit"
            value="Edit Product"
          />
        </div>
      </form>
    </section>
  );
}

export default EditProductPage;
