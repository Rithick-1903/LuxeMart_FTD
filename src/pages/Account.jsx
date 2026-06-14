import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
function Account() {

    const user =
        JSON.parse(localStorage.getItem("user"));

    const address =
        JSON.parse(localStorage.getItem("address"));

    const handleLogout = () => {

        localStorage.removeItem("user");

        localStorage.removeItem("token");

        localStorage.removeItem("address");

        alert("Logout Successful");

        navigate("/login");

    };
    const navigate = useNavigate();

    return (


        <div className="cursor-pointer">

            <Navbar />
            <div className="grid lg:grid-cols-3 bg-gray-100">

                <div className="p-5 ">


                    <h1 className=" text-xl mb-3 ">Hello,</h1>
                    <p className="text-4xl font-serif font-bold text-indigo-800">{user?.name}</p>
                    <div className="mt-6 ">
                        <p className="font-bold text-2xl text-indigo-800 mb-5">My Orders</p>
                        <p className="font-bold text-2xl text-indigo-800 mb-5">Account settings</p>
                        <p className=" text-xl  mb-5">Profile Information</p>
                        <p className=" text-xl  mb-5">PAN card information</p>
                        <p className=" text-xl mb-5">Payments</p>
                        <p className="font-bold text-2xl text-indigo-800 mb-5">Gift cards</p>
                        <p className=" text-xl  mb-5">Saved UPI</p>
                        <p className=" text-xl  mb-5">Saved cards</p>
                        <button
                            onClick={handleLogout}
                            className=" text-white text-l mb-5 bg-black px-3 py-1 rounded-xl"
                        >
                            Logout
                        </button>
                        <p className="font-bold text-2xl text-indigo-800 mb-5">Want to sell on LuxeMart ?</p>
                    </div>
                </div>

                <div className="p-5 justify-center">
                    <h1 className="text-3xl font-bold mb-10 text-indigo-800">
                        Personal Information

                    </h1>

                    <div className="space-y-4 text-lg">

                        <p>

                            <span className="font-bold">
                                Name:
                            </span>{" "}

                            {user?.name}

                        </p>

                        <p>

                            <span className="font-bold">
                                Email:
                            </span>{" "}

                            {user?.email}

                        </p>

                        <p>

                            <span className="font-bold">
                                Phone:
                            </span>{" "}

                            {user?.phone}

                        </p>



                    </div>

                    {/* ADDRESS */}

                    <div>

                        <h2 className="text-3xl font-bold mb-10 mt-5 text-indigo-800">

                            Delivery Address

                        </h2>

                        <div className="space-y-4 text-lg">

                            <p>

                                <span className="font-bold">
                                    Full Name:
                                </span>{" "}

                                {address?.fullName}

                            </p>

                            <p>

                                <span className="font-bold">
                                    Door No:
                                </span>{" "}

                                {address?.doorNo}

                            </p>

                            <p>

                                <span className="font-bold">
                                    Street:
                                </span>{" "}

                                {address?.street}

                            </p>

                            <p>

                                <span className="font-bold">
                                    State:
                                </span>{" "}

                                {address?.state}

                            </p>

                            <p>

                                <span className="font-bold">
                                    Pincode:
                                </span>{" "}

                                {address?.pincode}

                            </p>

                            <p>

                                <span className="font-bold">
                                    Phone:
                                </span>{" "}

                                {address?.phone}

                            </p>

                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );

}

export default Account;