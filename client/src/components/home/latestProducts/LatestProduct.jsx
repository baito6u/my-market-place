import { Link } from "react-router-dom";


function LatestProduct({ _id, title, price, imageUrl }) {
  return (
    <div >
      <div>
        <img src={imageUrl} />
        <h2>Title: {title}</h2>
        <h6>price: $ {price}</h6>
        <Link to={`/catalog/${_id}/details`} className="details-button">
          Details
        </Link>
      </div>
    </div>
  );
}

export default LatestProduct;