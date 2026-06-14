import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Checkout() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    doorNo: "",
    street: "",
    state: "",
    pincode: "",
    phone: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleOrder = (e) => {

    e.preventDefault();

    // CHECK LOGIN
    const token = localStorage.getItem("token");
      if (
    !formData.fullName ||
    !formData.doorNo ||
    !formData.street ||
    !formData.state ||
    !formData.pincode ||
    !formData.phone
  ) {

    alert("Please Fill All Required Fields");

    return;

  }


    if (!token) {

      alert("Please Login To complete Your Shopping");

      navigate("/login");

      return;
      

    }
    

    // SAVE ADDRESS
    localStorage.setItem(
      "address",
      JSON.stringify(formData)
    );

    alert("Order Placed Successfully");

    navigate("/product");

  };

  return (

    <div>

      <Navbar />

      <div className="min-h-screen flex justify-center items-center bg-gray-100 p-5">

        <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-lg">

          <h2 className="text-4xl font-bold mb-8">

            Checkout

          </h2>

          <form
            onSubmit={handleOrder}
            className="space-y-5"
          >

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full p-4 border rounded-xl"
            />

            <input
              type="text"
              name="doorNo"
              placeholder="Door Number"
              onChange={handleChange}
              className="w-full p-4 border rounded-xl"
            />

            <input
              type="text"
              name="street"
              placeholder="Street / Landmark"
              onChange={handleChange}
              className="w-full p-4 border rounded-xl"
            />

            <input
              type="text"
              name="state"
              placeholder="District / State"
              onChange={handleChange}
              className="w-full p-4 border rounded-xl"
            />

            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              onChange={handleChange}
              className="w-full p-4 border rounded-xl"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="w-full p-4 border rounded-xl"
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-xl text-xl font-semibold"
            >

              Place Order

            </button>

          </form>

        </div>

      </div>

    </div>

  );

}

export default Checkout;