import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <div className="border border-black h-44 bg-orange-500 flex flex-col justify-center items-center gap-6">
                <div className="flex items-center gap-2">
                    <img src="/coc-logo.png" className="w-5 h-6" />
                    <p className="text-sm font-poppins font-bold">
                        Crafts of Ceylon
                    </p>
                </div>
                <div className="flex items-center gap-7">
                    <Link to="/" className="text-sm font-inter font-bold hover:underline">
                        Home
                    </Link>
                    <p>|</p>
                    <Link to="/about" className="text-sm font-inter font-bold hover:underline">
                        About Us
                    </Link>
                    <p>|</p>
                    <Link to="/contact" className="text-sm font-inter font-bold hover:underline">
                        Contact Us
                    </Link>
                </div>
            </div>
        </>
    )
};
