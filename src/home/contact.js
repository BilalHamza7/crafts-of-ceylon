import { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Contact() {

    const [selectedInquiry, setSelectedInquiry] = useState('Suggestion');
    const [selectedUser, setSelectedUser] = useState('Customer');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="from-orange-400 from-40% to-orange-600 bg-gradient-to-br flex flex-col items-center min-h-screen">
                <Navbar />
                <div className="relative w-full h-64 mt-16">
                    <img src="/aboutBackground.png" alt="About Background" className="w-full h-full" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10 ">
                        <p className=" text-white text-4xl font-bold font-inter">
                            Contact Us
                        </p>
                        <p className=" text-white text-xl font-poppins ">
                            Please let us know about your concerns or your valuable suggestions.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-3 bg-gradient-to-tl from-white to-orange-300 p-5 rounded-lg my-12">
                    <p className="text-xl font-inter font-bold">Leave us a Message</p>
                    <p className="font-poppins text-sm">How can we help? We are always ready to assist you, please send us a message using the form below.</p>
                    <hr className="bg-gradient-to-r from-orange-600 to-orange-400 h-1 rounded-xl my-2" />
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex justify-around">
                            <label className="flex flex-col gap-2 text-lg font-fredoka">
                                Name:
                                <input type="text" placeholder="John" className="w-72 p-2 font-inter border border-gray-400 rounded-md outline-none focus:border-black" />
                            </label>
                            <div className="flex flex-col gap-5 w-72">
                                <label className="text-lg font-fredoka">user Type:</label>
                                <div className="flex items-center gap-10">
                                    <label className="font-poppins flex gap-3">
                                        <input type="radio" name="user" checked={selectedUser === 'Customer'} onChange={(e) => setSelectedUser(e.target.value)} value="Customer" className="" />
                                        Customer
                                    </label>
                                    <label className="font-poppins flex gap-3">
                                        <input type="radio" name="user" checked={selectedUser === 'Seller'} onChange={(e) => setSelectedUser(e.target.value)} value="Seller" className="" />
                                        Seller
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-around">
                            <label className="flex flex-col gap-2 text-lg font-fredoka">
                                Email:
                                <input type="email" placeholder="johndoe@gmail.com" className="w-72 p-2 font-inter border border-gray-400 rounded-md outline-none focus:border-black" />
                            </label>
                            <label className="flex flex-col gap-2 text-lg font-fredoka">
                                Mobile Number:
                                <input type="number" placeholder="011 234 5678" className="w-72 p-2 font-inter border border-gray-400 rounded-md outline-none focus:border-black" />
                            </label>
                        </div>
                        <div className="flex justify-around">
                            <div className="flex flex-col gap-5 w-72">
                                <label className="text-lg font-fredoka">Inquiry Type:</label>
                                <label className="font-poppins flex gap-3">
                                    <input type="radio" name="inquiry" checked={selectedInquiry === 'Suggestion'} onChange={(e) => setSelectedInquiry(e.target.value)} value="Suggestion" className="" />
                                    Suggestion
                                </label>
                                <label className="font-poppins flex gap-3">
                                    <input type="radio" name="inquiry" checked={selectedInquiry === 'Support'} onChange={(e) => setSelectedInquiry(e.target.value)} value="Support" className="" />
                                    Support
                                </label>
                                <label className="font-poppins flex gap-3">
                                    <input type="radio" name="inquiry" checked={selectedInquiry === 'Complaint'} onChange={(e) => setSelectedInquiry(e.target.value)} value="Complaint" className="" />
                                    Complaint
                                </label>
                            </div>
                            <div className="flex justify-around">
                                <label className="flex flex-col gap-2 text-lg font-fredoka">
                                    Your Message:
                                    <textarea placeholder="Enter your message..." rows="4" className="w-72 p-2 text-base resize-none font-inter border border-gray-400 rounded-md outline-none focus:border-black" />
                                </label>
                            </div>
                        </div>
                        <div className="flex justify-around my-4">
                            <button type="submit" className="bg-orange-400 rounded-lg w-72 h-8 text-lg font-fredoka hover:bg-orange-500 transition duration-300">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>


            <Footer />
        </>
    )
};
