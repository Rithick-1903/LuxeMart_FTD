import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const { data } = await axios.post(

        "https://luxemart-bkd.onrender.com/",

        {
          email,
          password
        }

      );

      // SAVE TOKEN
      localStorage.setItem(
        "token",
        data.token
      );

      // SAVE USER
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      alert("Login Successful");
    

      navigate("/product")

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );

    }

  };

  return (
    <div>
<Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md">

        <h1 className="text-4xl font-bold text-center mb-8">

          Login

        </h1>

        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-5"
        >

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Enter Email or Mobile"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="border p-4 rounded-xl outline-none"
            required
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="border p-4 rounded-xl outline-none"
            required
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="bg-indigo-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition"
          >

            Login

          </button>
          <span className="text-gray-500 cursor-pointer">Forget Password</span>

        </form>

        {/* REGISTER */}
        <p className="text-center mt-6">

          No Account?

          <Link
            to="/register"
            className="text-indigo-600 font-bold ml-2"
          >

            Register

          </Link>

        </p>

      </div>

    </div>
    <Footer/>
    </div>

  );

}

export default Login;