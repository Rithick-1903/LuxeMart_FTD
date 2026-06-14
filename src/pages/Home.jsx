import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 flex flex-col justify-center items-center text-white px-6">

      <h1 className="text-6xl md:text-7xl font-bold text-center mb-6 text-white" >

        Welcome To LuxeMart

      </h1>

      <p className="text-xl md:text-2xl text-center max-w-2xl leading-10 mb-10 font-serif text-white font-semibold">

        Discover Electronics, Sports, Clothing and more with
        premium shopping experience.

      </p>

      {/* SHOP NOW */}
      <button
        onClick={() => navigate("/product")}
        className="bg-white text-black px-10 py-4 rounded-2xl text-xl font-bold hover:scale-105 transition duration-300 shadow-2xl"
      >

        Shop Now

      </button>

    </div>
  );
}

export default Home;