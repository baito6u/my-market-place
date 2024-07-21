import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./DetailsPage.module.css";

import productsAPI from "../../api/productsAPI";
import commentAPI from "../../api/commentAPI";

function DetailsPage() {
  const [product, setProduct] = useState({});
  const [comments, setComments] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    (async () => {
      const result = await productsAPI.getOne(productId);
      setProduct(result);
      const commentsResult = await productsAPI.getComments(productId); // Assuming this method exists
      setComments(commentsResult);
    })();
  });

  const addCommentHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newComment = await commentAPI.create(
      productId,
      formData.get("username"),
      formData.get("comment")
    );

    console.log(newComment);
  };

  return (
    <div className={styles.details}>
      <h2>Title: {product.title}</h2>
      <h6>Category: {product.category}</h6>
      <p>Price: ${product.price}</p>
      <img src={product.imageUrl} />
      <p>Description: {product.description}</p>

      <div className={styles.comments}>
        <h3>Comments</h3>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className={styles.comment}>
              <p>
                <strong>{comment.user}</strong>: {comment.text}
              </p>
            </div>
          ))
        ) : (
          <p>There are no comments added yet!</p>
        )}
        <form className={styles.commentForm} onSubmit={addCommentHandler}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your name..."
          />

          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            name="comment"
            placeholder="Enter your comment..."
          />

          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default DetailsPage;
