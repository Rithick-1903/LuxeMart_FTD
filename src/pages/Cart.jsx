import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Cart() {

const [cartItems, setCartItems] = useState(
  JSON.parse(localStorage.getItem("cart")) || []
);

const removeItem = (id) => {

  const updatedCart = cartItems.filter(
    item => item.id !== id
  );

  setCartItems(updatedCart);

  localStorage.setItem(
    "cart",
    JSON.stringify(updatedCart)
  );

};
const increaseQty = (id) => {

  const updatedCart = cartItems.map(item =>
    item.id === id
      ? {
          ...item,
          quantity: item.quantity + 1
        }
      : item
  );

  setCartItems(updatedCart);

  localStorage.setItem(
    "cart",
    JSON.stringify(updatedCart)
  );

};

const decreaseQty = (id) => {

  const updatedCart = cartItems.map(item =>
    item.id === id && item.quantity > 1
      ? {
          ...item,
          quantity: item.quantity - 1
        }
      : item
  );

  setCartItems(updatedCart);

  localStorage.setItem(
    "cart",
    JSON.stringify(updatedCart)
  );

};

  // TOTAL
  const total = cartItems.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Navbar/>
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-5xl font-bold mb-10">

        Shopping Cart

      </h1>

      <div className="grid lg:grid-cols-3 gap-10">

        {/* PRODUCTS */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-3xl shadow-lg p-5 flex flex-col md:flex-row gap-6"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-40 h-40 object-cover rounded-2xl"
              />

              <div className="flex-1">

                <h2 className="text-3xl font-bold mb-3">

                  {item.name}

                </h2>

                <p className="text-indigo-600 text-2xl font-semibold mb-5">

                  ₹{item.price}

                </p>

                {/* QUANTITY */}
                <div className="flex items-center gap-4 mb-6">

                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="w-10 h-10 bg-gray-200 rounded-full text-xl"
                  >
                    -
                  </button>

                  <span className="text-2xl font-semibold">

                    {item.quantity}

                  </span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="w-10 h-10 bg-gray-200 rounded-full text-xl"
                  >
                    +
                  </button>

                </div>

                {/* BUTTONS */}
                <div className="flex gap-4">

                  {/* REMOVE */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="bg-red-500 text-white px-6 py-3 rounded-xl"
                  >

                    Remove

                  </button>

                  {/* BACK TO CATEGORY */}
                  <Link to={`/product/${item.category}`}>

                    <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-xl">

                      Back To Collection

                    </button>

                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* SUMMARY */}
        <div className="bg-white rounded-3xl shadow-lg p-8 h-fit">

          <h2 className="text-4xl font-bold mb-8">

            Order Summary

          </h2>

          <div className="flex justify-between mb-5 text-xl">

            <span>Purchase Items</span>

            <span>{cartItems.length}</span>

          </div>

          <div className="border-t pt-5 flex justify-between text-3xl font-bold">

            <span>Price</span>

            <span>₹{total}</span>

          </div>

          <Link to="/checkout">

            <button className="w-full mt-10 bg-indigo-600 text-white py-4 rounded-2xl text-xl">

              Buy Now

            </button>

          </Link>

        </div>

      </div>

    </div>
    <Footer/>
    </div>
  );
}

export default Cart;