import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import HP from "../assets/HP.jpg";
import pro from "../assets/pro.jpg";
import samsung from "../assets/samsung.jpg";
import dell from "../assets/dell.jpg";
import headphone from "../assets/headphone.jpg";
import polo from "../assets/polo.jpg";
import mac from "../assets/mac.jpg";
import pshirt from "../assets/pshirt.jpg";
import jean from "../assets/jean.jpg";
import hoddie from "../assets/hoddie.jpg";
import track from "../assets/track.jpg";
import formal from "../assets/formal.jpg";
import whoddie from "../assets/whoddie.jpg";
import wjean from "../assets/wjean.jpg";
import otshirt from "../assets/otshirt.jpg";
import kurti from "../assets/kurti.jpg";
import hbag from "../assets/hbag.jpg";
import pdress from "../assets/pdress.jpg";

import dad from "../assets/dad.jpeg";
import atomic from "../assets/atomic.jpeg";
import money from "../assets/money.jpeg";
import monk from "../assets/monk.jpeg";
import shit from "../assets/shit.jpeg";

import bookshelf from "../assets/bookshelf.jpg";
import clk from "../assets/clk.jpg";
import bed from "../assets/bed.jpg";
import ofcchair from "../assets/ofcchair.jpg";
import dinning from "../assets/dinning.jpg";

import sofa from "../assets/sofa.jpg";
import kjacket from "../assets/kjacket.jpg";
import kshoe from "../assets/kshoe.jpg";
import kparty from "../assets/kparty.jpg";
import kjean from "../assets/kjean.jpg";
import khoodie from "../assets/khoodie.jpg";
import kdress from "../assets/kdress.jpg";
import ikagi from "../assets/ikagi.jpeg";
import use from "../assets/use.jpg";
import tvv from "../assets/tvv.jpg";

import fridge from "../assets/fridge.jpg";
import washing from "../assets/washing.jpg";
import samsungtv from "../assets/samsungtv.jpg";
import yoga from "../assets/yoga.jpg";
import sportsshoe from "../assets/sportsshoe.jpg";
import gym from "../assets/gym.jpg";
import shettle from "../assets/shettle.jpg";
import fball from "../assets/fball.jpg";
import crck from "../assets/crck.jpg";
import grinder from "../assets/grinder.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


import {
  FaHeart,
  FaRegHeart,
  FaShoppingCart,
  FaStar
} from "react-icons/fa";


function CategoryProducts() {

  const { category } = useParams();

  // CART
  const [cartItems, setCartItems] = useState([]);

  // FAVORITES
  const [wishlist, setWishlist] = useState([]);

  // SORT
  const [sortOrder, setSortOrder] = useState("");

  // PRODUCTS
  const products = [

    {
      id: 1,
      category: "Electronics",
      name: "HP Victus Gaming Laptop",
      rating: 4.5,
      price: 55000,
      image: HP
    },

    {
      id: 2,
      category: "Electronics",
      name: "Dell Inspiron",
      rating: 4.2,
      price: 65000,
      image: dell
    },

    {
      id: 3,
      category: "Electronics",
      name: "iPhone 16 Pro White 128GB",
      rating: 4.9,
      price: 85000,
      image: pro
    },

    {
      id: 4,
      category: "Electronics",
      name: "Samsung S24 Ultra",
      rating: 4.7,
      price: 78000,
      image: samsung
    },

    {
      id: 5,
      category: "Electronics",
      name: "MacBook Air M3",
      rating: 4.8,
      price: 115000,
      image: mac
    },

    {
      id: 6,
      category: "Electronics",
      name: "Apple Airpodes Max",
      rating: 4.6,
      price: 95000,
      image: headphone
    },

    {
      id: 7,
      category: "Mens Wear",
      name: "Men Printed Round Neck T-Shirt",
      rating: 4.3,
      price: 1500,
      image: pshirt
    },
    {
      id: 8,
      category: "Mens Wear",
      name: "Men Graphic Print Hooded",
      rating: 4.3,
      price: 1500,
      image: hoddie
    },

    {
      id: 9,
      category: "Mens Wear",
      name: "Men Solid Polo ",
      rating: 4.3,
      price: 1500,
      image: polo
    },

    {
      id: 10,
      category: "Mens Wear",
      name: "Men Loose Fit Mid Rise Blue Jeans",
      rating: 4.3,
      price: 1500,
      image: jean
    },

    {
      id: 11,
      category: "Mens Wear",
      name: "Men Solid Grey Track Pants",
      rating: 4.3,
      price: 1500,
      image: track
    },

    {
      id: 12,
      category: "Mens Wear",
      name: "Men Slim Fit Solid Formal Shirt",
      rating: 4.3,
      price: 1500,
      image: formal

    },

    {
      id: 14,
      category: "Womens Wear",
      name: "Women Floral Printed Dress",
      rating: 4.5,
      price: 2499,
      image: pdress
    },

    {
      id: 15,
      category: "Womens Wear",
      name: "Women Oversized T-Shirt",
      rating: 4.2,
      price: 1299,
      image: otshirt
    },

    {
      id: 16,
      category: "Womens Wear",
      name: "Women Slim Fit Jeans",
      rating: 4.4,
      price: 1999,
      image: wjean
    },

    {
      id: 17,
      category: "Womens Wear",
      name: "Women Casual Hoodie",
      rating: 4.3,
      price: 1799,
      image: whoddie
    },

    {
      id: 18,
      category: "Womens Wear",
      name: "Women Cotton Kurti",
      rating: 4.6,
      price: 1599,
      image: kurti
    },

    {
      id: 19,
      category: "Womens Wear",
      name: "Women Black Handbag",
      rating: 4.7,
      price: 2999,
      image: hbag
    },


    // SPORTS
    {
      id: 20,
      category: "Sports",
      name: "Cricket Bat",
      rating: 4.8,
      price: 3499,
      image: crck
    },

    {
      id: 21,
      category: "Sports",
      name: "Football",
      rating: 4.5,
      price: 999,
      image: fball
    },

    {
      id: 22,
      category: "Sports",
      name: "Badminton Racket",
      rating: 4.3,
      price: 1499,
      image: shettle
    },

    {
      id: 23,
      category: "Sports",
      name: "Gym Dumbbells",
      rating: 4.6,
      price: 3999,
      image: gym
    },

    {
      id: 24,
      category: "Sports",
      name: "Running Shoes",
      rating: 4.7,
      price: 2599,
      image: sportsshoe
    },

    {
      id: 25,
      category: "Sports",
      name: "Yoga Mat",
      rating: 4.4,
      price: 799,
      image: yoga
    },


    // TV & APPLIANCES
    {
      id: 26,
      category: "TV and Applainces",
      name: "Samsung Smart TV",
      rating: 4.8,
      price: 45000,
      image: samsungtv
    },

    {
      id: 27,
      category: "TV and Applainces",
      name: "LG Washing Machine",
      rating: 4.5,
      price: 32000,
      image: washing
    },

    {
      id: 28,
      category: "TV and Applainces",
      name: "Whirlpool Refrigerator",
      rating: 4.6,
      price: 38000,
      image: fridge
    },

    {
      id: 29,
      category: "TV and Applainces",
      name: "Sony LED TV",
      rating: 4.7,
      price: 52000,
      image: tvv
    },

    {
      id: 30,
      category: "TV and Applainces",
      name: "Philips Air Fryer",
      rating: 4.4,
      price: 8999,
      image: use
    },
    {
      id: 31,
      category: "TV and Applainces",
      name: "Mixer Grinder",
      rating: 4.2,
      price: 3499,
      image: grinder
    },


    // BOOKS
    {
      id: 32,
      category: "Books and more",
      name: "Rich Dad Poor Dad",
      rating: 4.9,
      price: 499,
      image: dad
    },

    {
      id: 33,
      category: "Books and more",
      name: "Atomic Habits",
      rating: 4.8,
      price: 699,
      image: atomic
    },

    {
      id: 34,
      category: "Books and more",
      name: "The Psychology Of Money",
      rating: 4.7,
      price: 599,
      image: money
    },

    {
      id: 35,
      category: "Books and more",
      name: "Think Like A Monk",
      rating: 4.6,
      price: 799,
      image: monk
    },

    {
      id: 36,
      category: "Books and more",
      name: "Do Epic Shit",
      rating: 4.5,
      price: 399,
      image: shit
    },

    {
      id: 37,
      category: "Books and more",
      name: "Ikigai",
      rating: 4.8,
      price: 499,
      image: ikagi
    },


    // KIDS WEAR
    {
      id: 38,
      category: "Kids wear",
      name: "Kids Cartoon T-Shirt",
      rating: 4.4,
      price: 799,
      image: kdress
    },

    {
      id: 39,
      category: "Kids wear",
      name: "Kids Denim Jeans",
      rating: 4.5,
      price: 999,
      image: kjean
    },

    {
      id: 40,
      category: "Kids wear",
      name: "Kids Hoodie",
      rating: 4.6,
      price: 1299,
      image: khoodie
    },

    {
      id: 41,
      category: "Kids wear",
      name: "Kids Party Wear Dress",
      rating: 4.7,
      price: 1799,
      image: kparty
    },

    {
      id: 42,
      category: "Kids wear",
      name: "Kids Sports Shoes",
      rating: 4.3,
      price: 1499,
      image: kshoe
    },

    {
      id: 43,
      category: "Kids wear",
      name: "Kids Winter Jacket",
      rating: 4.5,
      price: 2199,
      image: kjacket

    },
    // HOME & FURNITURE
    {
      id: 44,
      category: "Home and Furniture",
      name: "Wooden Sofa",
      rating: 4.7,
      price: 25999,
      image: sofa
    },

    {
      id: 45,
      category: "Home and Furniture",
      name: "Dining Table Set",
      rating: 4.6,
      price: 18999,
      image: dinning
    },

    {
      id: 46,
      category: "Home and Furniture",
      name: "Office Chair",
      rating: 4.5,
      price: 6999,
      image: ofcchair
    },

    {
      id: 47,
      category: "Home and Furniture",
      name: "Modern Bed",
      rating: 4.8,
      price: 32999,
      image: bed
    },

    {
      id: 48,
      category: "Home and Furniture",
      name: "Wall Clock",
      rating: 4.3,
      price: 1299,
      image: clk
    },

    {
      id: 49,
      category: "Home and Furniture",
      name: "Bookshelf",
      rating: 4.4,
      price: 5499,
      image: bookshelf
    },

  ];

  // FILTER CATEGORY
  let filteredProducts = products.filter(
    (item) => item.category === category
  );

  // SORTING
  if (sortOrder === "low") {

    filteredProducts.sort((a, b) => a.price - b.price);

  }

  if (sortOrder === "high") {

    filteredProducts.sort((a, b) => b.price - a.price);

  }

  const handleCart = (product) => {

    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const exists = existingCart.find(
      (item) => item.id === product.id
    );

    if (!exists) {

      const updatedCart = [
        ...existingCart,
        {
          ...product,
          quantity: 1
        }
      ];

      localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart)
      );

      setCartItems(updatedCart);

    }

  };

  // FAVORITE
  const handleWishlist = (id) => {

    if (wishlist.includes(id)) {

      setWishlist(
        wishlist.filter((item) => item !== id)
      );

    } else {

      setWishlist([...wishlist, id]);

    }

  };

  // FAVORITE PRODUCTS
  const favoriteProducts = products.filter(
    (item) => wishlist.includes(item.id)
  );

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-5 sticky top-2 ">
        <div className="grid lg:grid-cols-4 gap-8">

          {/* FAVORITES SIDEBAR */}
          <div className="bg-white rounded-3xl shadow-lg p-5 h-fit  ">

            {/* TITLE */}
            <div className="flex items-center justify-between mb-6">

              <h2 className="text-3xl font-bold flex items-center gap-3">

                ❤️ Favorites

              </h2>

              <span className="bg-red-500 text-white px-3 py-1 rounded-full">

                {favoriteProducts.length}

              </span>

            </div>

            {/* FAVORITE PRODUCTS */}
            <div className="flex flex-col gap-5">

              {favoriteProducts.length > 0 ? (

                favoriteProducts.map((item) => (

                  <div
                    key={item.id}
                    className="flex gap-4 items-center border-b pb-4"
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-xl"
                    />

                    <div>

                      <h3 className="font-bold text-lg">

                        {item.name}

                      </h3>

                      <p className="text-indigo-600 font-semibold">

                        ₹{item.price}

                      </p>

                    </div>

                  </div>

                ))

              ) : (

                <p className="text-gray-500">

                  No favorites added

                </p>

              )}

            </div>

          </div>

          {/* PRODUCTS SECTION */}
          <div className="lg:col-span-3">

            {/* TOP BAR */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5 mb-10">

              <h1 className="text-5xl font-bold capitalize">

                Search for {category}

              </h1>

              {/* SORT */}
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="bg-white border border-gray-300 rounded-xl px-5 py-3 shadow-md outline-none"
              >

                <option value="">

                  Sort By Price

                </option>

                <option value="low">

                  Price Low to High

                </option>

                <option value="high">

                  Price High to Low

                </option>

              </select>

            </div>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

              {filteredProducts.map((item) => {

                const added = cartItems.find(
                  (cart) => cart.id === item.id
                );

                const favorite = wishlist.includes(item.id);

                return (

                  <div
                    key={item.id}
                    className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
                  >

                    <div className="relative bg-gray-100 flex items-center justify-center h-72 p-5">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-h-full object-contain transition duration-300 hover:scale-105"
                      />

                      <button
                        onClick={() => handleWishlist(item.id)}
                        className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg"
                      >

                        {favorite ? (

                          <FaHeart className="text-red-500 text-xl" />

                        ) : (

                          <FaRegHeart className="text-gray-600 text-xl" />

                        )}

                      </button>

                    </div>

                    {/* CONTENT */}
                    <div className="p-5">

                      {/* PRODUCT NAME */}
                      <h2 className="text-2xl font-bold mb-3">

                        {item.name}

                      </h2>

                      {/* RATING */}
                      <div className="flex items-center gap-2 mb-4">

                        <div className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-semibold flex items-center gap-1">

                          <FaStar className="text-xs" />

                          {item.rating}

                        </div>

                        <span className="text-gray-500 text-sm">

                          Best Seller

                        </span>

                      </div>

                      {/* PRICE */}
                      <p className="text-indigo-600 text-2xl font-bold mb-6">

                        ₹{item.price}

                      </p>

                      {/* BUTTONS */}
                      <div className="flex gap-3">

                        {/* ADD TO CART */}
                        <button
                          onClick={() => handleCart(item)}
                          className={`flex-1 py-3 rounded-xl text-white font-semibold transition duration-300 ${added
                            ? "bg-green-600"
                            : "bg-indigo-600 hover:bg-indigo-700"
                            }`}
                        >

                          {added ? "Added" : "Add To Cart"}

                        </button>

                        {/* VIEW CART */}
                        {added && (

                          <Link to="/cart">

                            <button className="bg-black text-white px-4 py-3 rounded-xl hover:bg-gray-800 transition duration-300">

                              <FaShoppingCart />

                            </button>

                          </Link>

                        )}

                      </div>

                    </div>

                  </div>

                );

              })}

            </div>

          </div>

        </div>
   <Footer />
      </div>
   
    </div>

  );

}

export default CategoryProducts;