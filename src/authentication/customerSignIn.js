import { Link } from "react-router-dom";
import Footer from "../components/footer";

export default function CustomerSignIn() {
    return (
        <>
            <div className="from-orange-400 from-40% to-orange-600 flex flex-col bg-gradient-to-br min-h-screen">

                <Link to="/" className="flex items-center gap-2 pl-4 pt-4">
                    <img src="/coc-logo.png" className="w-8 h-9" />
                    <p className="text-lg font-poppins font-bold">
                        Crafts of Ceylon
                    </p>
                </Link>

                <div className="flex flex-1 justify-center items-center">
                    <form className="bg-gradient-to-br from-orange-200 to-orange-300 w-fit flex flex-col gap-6 rounded-lg p-8">
                        <div className="flex flex-col gap-2">
                            <p className="text-xl font-inter font-bold">Sign In</p>
                            <p className="font-poppins text-sm">Provide us your details and get right into exploring the best of handmade crafts.</p>
                            <hr className="bg-gradient-to-r from-orange-600 to-orange-400 h-1 rounded-xl" />
                        </div>
                        <div className="flex gap-6">
                            <label className="flex flex-col gap-2 font-fredoka">
                                Name:
                                <input type="text" placeholder="John Doe" className="w-72 p-2 text-sm font-inter border border-transparent rounded-md outline-none focus:border-black" />
                            </label>
                            <label className="flex flex-col gap-2 font-fredoka">
                                Username:
                                <input type="text" placeholder="John123" className="w-72 p-2 text-sm font-inter border border-transparent rounded-md outline-none focus:border-black" />
                            </label>
                        </div>
                        <div className="flex gap-6">
                            <label className="flex flex-col gap-2 font-fredoka">
                                E-mail:
                                <input type="email" placeholder="johndoe@gmail.com" className="w-72 p-2  text-sm font-inter border border-transparent rounded-md outline-none focus:border-black" />
                            </label>
                            <label className="flex flex-col gap-2 font-fredoka">
                                Password:
                                <input type="text" className=" w-72 p-2 text-sm font-inter border border-transparent rounded-md outline-none focus:border-black" />
                            </label>
                        </div>
                        <div className="flex gap-6">
                            <label className="flex flex-col gap-2 font-fredoka">
                                Mobile Number:
                                <input type="number" placeholder="012 345 6789" className="w-72 p-2 text-sm font-inter border border-transparent rounded-md outline-none focus:border-black" />
                            </label>
                            <label className="flex flex-col gap-2 font-fredoka">
                                Re-enter Password:
                                <input type="text" className="w-72 p-2 text-sm font-inter border border-transparent rounded-md outline-none focus:border-black" />
                            </label>
                        </div>
                        <div className="flex gap-6">
                            <label className="flex flex-col gap-2 font-fredoka">
                                Address:
                                <input type="text" placeholder="Your address here" className="w-72 p-2 text-sm font-inter border border-transparent rounded-md outline-none focus:border-black" />
                            </label>
                            <label className="flex flex-col gap-2 font-fredoka">
                                Business Name:
                                <input type="text" className="w-72 p-2 text-sm font-inter border border-transparent rounded-md outline-none focus:border-black" />
                            </label>
                        </div>
                        <div className="flex gap-6 items-center">
                            <button className="bg-orange-400 rounded-lg w-72 h-8 text-lg font-fredoka hover:bg-orange-500 transition duration-300">
                                Continue
                            </button>
                            <label className="text-xs font-inter">Already have an account?<Link className="text-blue-600" to="/customerLogIn"> Log In</Link></label>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
};
