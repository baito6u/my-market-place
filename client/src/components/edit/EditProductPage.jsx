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
    details: "",
  });

  useEffect(() => {
    productsAPI.getOne(productId)
      .then(result => {
        setProduct(result);
      });
  }, [productId]);

  const editProductHandler = async (e) => {
    e.preventDefault();

    const values = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await productsAPI.edit(productId, values);
      navigate("/catalog");
    } catch (error) {
      // TODO: Error notification
      console.log(error);
    }
  };

  const onChange = (e) => {
    setProduct(state => ({
        ...state,
        [e.target.name]: e.target.value
    }));
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

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={product.category}
            onChange={onChange}
            placeholder="Enter Product category..."
          />

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

          <label htmlFor="imageUrl">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={product.imageUrl}
            onChange={onChange}
            placeholder="Upload a photo..."
          />

          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={onChange}
            id="description"
          ></textarea>

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
