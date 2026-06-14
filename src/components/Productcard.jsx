import { Link } from "react-router-dom";

function Productcard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p>₹{product.price}</p>

      <Link to={`/product/${product._id}`}>
        <button>View</button>
      </Link>
    </div>
  );
}

export default Productcard;