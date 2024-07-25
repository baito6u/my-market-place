import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./DetailsPage.module.css";

import productsAPI from "../../api/productsAPI";
import commentAPI from "../../api/commentAPI";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

function DetailsPage() {
  const { username, userId } = useContext(AuthContext);
  const [product, setProduct] = useState({});
  const [comments, setComments] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    (async () => {
      const result = await productsAPI.getOne(productId);
      setProduct(result);
      const commentsResult = await commentAPI.getAllComments(productId);
      setComments(commentsResult);
    })();
  }, [productId]);

  const addCommentHandler = async (values) => {

    const newComment = await commentAPI.create(
      productId,
      values.comment,
    );

    setComments(state => [
      ...state,
      { ...newComment, owner: { username } },
    ]);
  };

  const {values, onChange, onSubmit} = useForm(addCommentHandler, {
    comment: "",
  });

  const isOwner = userId === product._ownerId;

  return (
    <div className={styles.details}>
      <h2>Title: {product.title}</h2>
      <h6>Category: {product.category}</h6>
      <p>Price: ${product.price}</p>
      <img src={product.imageUrl} />
      <p>Description: {product.description}</p>

      <div className={styles.comments}>
        <h3>Comments</h3>
        <ul>
          {comments.map(({ _id, comment, owner: { username } }) => (
            <li key={_id} className={styles.comment}>
              <p>
                <strong>{username}</strong>: {comment}
              </p>
            </li>
          ))}
        </ul>

        {comments.length === 0 && (
          <p className="no-comment">Ther are no comments added yet!</p>
        )}
      </div>
        {/* Only for creator of the product */}
      {isOwner && (
      <div className="buttons">
        <a href="#" className="button">Edit</a>
        <a href="#" className="button">Delete</a>
      </div>
      )}

      <form className={styles.commentForm} onSubmit={onSubmit}>
        <label htmlFor="comment">Add Comment:</label>
        <textarea
          id="comment"
          name="comment"
          value={values.comment}
          onChange={onChange}
          placeholder="Enter your comment..."
        />

        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default DetailsPage;
