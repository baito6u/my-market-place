import { useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import styles from "./DetailsPage.module.css";

import productsAPI from "../../api/productsAPI";
import commentAPI from "../../api/commentAPI";
import AuthContext from "../../contexts/authContext";
import CartContext from "../../contexts/cartContext";
import useForm from "../../hooks/useForm";

function DetailsPage() {
  const { username, userId, isAuthenticated } = useContext(AuthContext);
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState({});
  const [comments, setComments] = useState([]);
  const [message, setMessage] = useState("");
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const result = await productsAPI.getOne(productId);
        setProduct(result);
        const commentsResult = await commentAPI.getAllComments(productId);
        setComments(commentsResult);
      } catch (error) {
        console.log(error);    
      }
    })();
  }, [productId]);

  const addCommentHandler = async (values) => {
    try {
      const newComment = await commentAPI.create(productId, values.comment);
  
      setComments((state) => [...state, { ...newComment, owner: { username } }]);

      onChange({ target: { name: 'comment', value: '' } });
    } catch (error){
      console.log(error);
    }
  };

  const deleteButtonClickHandler = async () => {
    const hasConfirmed = confirm(
      `Are you sure you want to delete ${product.title}`
    );

    if (hasConfirmed) {
      await productsAPI.remove(productId);
      navigate("/catalog");
    }
  };

  const { values, onChange, onSubmit } = useForm(addCommentHandler, {
    comment: "",
  });

  const isOwner = userId === product._ownerId;

  const addToCartHandler = () => {
    addToCart(product);
    setMessage("Product added to cart successfully!");
  };

  return (
    <div className={styles.details}>
      <div className={styles.card}>
        <h2 className={styles.title}>Title: {product.title}</h2>
        <img
          className={styles.image}
          src={product.imageUrl}
          alt={product.title}
        />
        <h6 className={styles.category}>Category: {product.category}</h6>
        <p className={styles.price}>Price: ${product.price}</p>
        <p className={styles.description}>Description: {product.description}</p>

        {isAuthenticated && !isOwner && (
          <>
            <button onClick={addToCartHandler} className={styles.btn}>
              Add to Cart
            </button>
            {message && <p className={styles.successMessage}>{message}</p>}
          </>
        )}

        <div className={styles.comments}>
          <h3>Comments</h3>
          <ul className={styles.commentList}>
            {comments.map(({ _id, comment, owner: { username } }) => (
              <li key={_id} className={styles.comment}>
                <p>
                  <strong>{username}</strong>: {comment}
                </p>
              </li>
            ))}
          </ul>

          {comments.length === 0 && (
            <p className={styles.noComment}>There are no comments added yet!</p>
          )}
        </div>

        {isAuthenticated && (
          <form className={styles.commentForm} onSubmit={onSubmit}>
            <label htmlFor="comment" className={styles.label}>
              Add Comment:
            </label>
            <textarea
              id="comment"
              name="comment"
              value={values.comment}
              onChange={onChange}
              placeholder="Enter your comment..."
              className={styles.textarea}
            />
            <button type="submit" className={styles.btn}>
              Submit Comment
            </button>

            {isOwner && (
              <div className={styles.buttons}>
                <Link
                  to={`/catalog/${productId}/edit`}
                  className={styles.button}
                >
                  Edit Product
                </Link>
                <button
                  className={`${styles.button} ${styles.delete}`}
                  onClick={deleteButtonClickHandler}
                >
                  Delete Product
                </button>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

export default DetailsPage;
