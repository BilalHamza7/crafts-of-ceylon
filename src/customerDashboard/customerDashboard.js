import { Link, Outlet } from "react-router-dom";
import CustomerNav from "../components/customerNav";
import Footer from "../components/footer";

export default function CustomerDashboard() {
    return (
        <>
            <div className="flex flex-col">

                <CustomerNav />
                <div className="relative w-full h-64 mt-16">
                    <img src="/aboutBackground.png" alt="About Background" className="w-full h-full" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 z-10 ">
                        <p className=" text-white text-6xl font-medium font-inter">
                            Welcome (name)!
                        </p>
                        <p className=" text-white text-lg font-poppins ">
                            Your dashboard is ready with the latest updates. Manage your profile and review your recent activities.
                        </p>
                    </div>
                </div>
                <div className="flex " >
                    <div className="bg-gradient-to-tl from-white to-orange-300 rounded-lg w-96 h-screen m-3 px-5 py-7 flex flex-col gap-3">
                        <p className="text-3xl font-poppins">Dashboard</p>
                        <hr className="bg-gradient-to-r from-orange-600 to-orange-400 w-full h-1 rounded" />
                        <div className="my-4 flex flex-col gap-5">
                            <Link to="/customerDashboard/customerProfile">
                                <p className="text-2xl font-fredoka rounded-xl bg-orange-400 py-2 px-4 hover:bg-orange-500 transition duration-500">Profile</p>
                            </Link>
                            <Link to="/customerDashboard/customerOrders" >
                                <p className="text-2xl font-fredoka rounded-xl bg-orange-400 py-2 px-4 hover:bg-orange-500 transition duration-500">My Orders</p>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-1">
                        <div className="flex flex-1 m-3 rounded-lg overflow-y-auto">
                            <Outlet />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
};
