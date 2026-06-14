import { Link } from "react-router-dom";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import books from "../assets/books.jpg"
import electronics from "../assets/electronics.jpg"
import home from "../assets/home.jpg"
import TV from "../assets/TV.jpg"
import womens from "../assets/womens.jpg"
import mens from "../assets/mens.jpg"
import Footwear from "../assets/Footwear.jpg"
import kids from "../assets/kids.jpg"
import sports from "../assets/sports.jpg"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Product() {

  // SEARCH STATE
  const [search, setSearch] = useState("");

  // CATEGORY DATA
  const categories = [

    {
      id: 1,
      name: "Electronics",
      slug: "Electronics",
      price: "Starting ₹45,000",
      image: electronics
    },

    {
      id: 2,
      name: "Mens Wear",
      slug: "Mens Wear",
      price: "Starting ₹799",
      image: mens
    },

    {
      id: 3,
      name: "Womens Wear",
      slug: "Womens Wear",
      price: "Starting ₹1,200",
      image:womens
    },

    {
      id: 4,
      name: "Sports",
      slug: "Sports",
      price: "Starting ₹2,000",
      image: sports
    },

    {
      id: 5,
      name: "TV and Applainces",
      slug: "TV and Applainces",
      price: "Starting ₹2,500",
      image: TV
    },
     {
      id: 6,
      name: "Books and more",
      slug: "Books and more",
      price: "Starting ₹2,500",
      image: books
    },
     {
      id: 7,
      name: "Kids wear",
      slug: "Kids wear",
      price: "Starting ₹2,500",
      image: kids
    },
     {
      id: 8,
      name: "Footwear",
      slug: "Footwear",
      price: "Starting ₹2,500",
      image: Footwear
     },
     {
      id: 9,
      name: "Home and Furniture",
      slug: "Home and Furniture",
      price: "Starting ₹2,500",
      image: home
    }

  ];

  // FILTER
  const filteredCategories = categories.filter((item) => {

    return item.name
      .toLowerCase()
      .includes(search.toLowerCase());

  });

  return (
    <div>
<Navbar/>
    <div className="min-h-screen bg-gray-100 px-5 py-10">

      {/* TITLE */}
      <h1 className="text-5xl font-bold text-center mb-10">

        Explore Anything

      </h1>

      {/* SEARCH */}
      <div className="flex justify-center mb-12">

        <div className="relative w-full md:w-[600px]">

          {/* SEARCH ICON */}
          <FaSearch
            className="absolute top-1/2 left-5 -translate-y-1/2 text-gray-400"
          />

          {/* INPUT */}
          <input
            type="text"
            placeholder="Search electronics, clothing, sports and more..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-2xl shadow-lg pl-14 pr-5 py-4 text-lg outline-none focus:ring-4 focus:ring-indigo-300"
          />

        </div>

      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filteredCategories.length > 0 ? (

          filteredCategories.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-60 object-cover"
              />

              {/* CONTENT */}
              <div className="p-5">

                {/* NAME */}
                <h2 className="text-2xl font-bold mb-3">

                  {item.name}

                </h2>

                {/* PRICE */}
                <p className="text-indigo-600 text-xl font-semibold mb-5">

                  {item.price}

                </p>

                {/* BUTTON */}
                <Link to={`/product/${item.slug}`}>

                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition duration-300">

                    View Products

                  </button>

                </Link>

              </div>

            </div>

          ))

        ) : (

          // NO RESULTS
          <div className="col-span-full flex justify-center">

            <div className="bg-white p-10 rounded-3xl shadow-lg text-center">

              <h2 className="text-3xl font-bold text-gray-500 mb-3">

                No Categories Found

              </h2>

              <p className="text-gray-400">

                Try searching for electronics, clothing, and more....

              </p>

            </div>

          </div>

        )}

      </div>

    </div>
    <Footer/>
</div>
  );

}

export default Product;