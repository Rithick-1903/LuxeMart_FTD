import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      const { data } = await axios.post(

        "https://luxemart-bkd.onrender.com/api/auth/register",
        {
          name,
          email,
          phone,
          password,
        }

      );

      alert(data.message);

      navigate("/login");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Registration Failed"
        
      );
console.log(error)
    }

  };

  return (
    <div>
<Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md">

        <h1 className="text-4xl font-bold text-center mb-8">

          Register

        </h1>

        <form
          onSubmit={handleRegister}
          className="flex flex-col gap-5"
        >

          {/* NAME */}
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="border p-4 rounded-xl outline-none"
            required
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="border p-4 rounded-xl outline-none"
            required
          />

          {/* PHONE */}
          <input
            type="text"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
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

            Register

          </button>

        </form>

        {/* LOGIN */}
        <p className="text-center mt-6">

          Already Have Account?

          <Link
            to="/login"
            className="text-indigo-600 font-bold ml-2"
          >

            Login

          </Link>

        </p>

      </div>

    </div>
    <Footer/>
    </div>

  );

}

export default Register;
