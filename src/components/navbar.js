import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="flex justify-between fixed w-full top-0 left-0 z-50 items-center p-4 border-b border-b-gray-600 bg-orange-400">
                <Link to="/" className="flex items-center gap-2">
                    <img src="/coc-logo.png" className="w-8 h-9" />
                    <p className="text-lg font-poppins font-bold">
                        Crafts of Ceylon
                    </p>
                </Link>
                <ul className="flex gap-7 font-poppins">
                    <li>
                        <NavLink
                            to="/loginForm"
                            className='font-semibold hover:bg-orange-500 px-2 py-1 rounded border border-transparent transition duration-300'
                        >
                            Be a Seller!
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'bg-orange-500 px-2 py-1 rounded' : 'hover:underline px-2 py-1 rounded')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? 'bg-orange-500 px-2 py-1 rounded' : 'hover:underline px-2 py-1 rounded')}
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => (isActive ? 'bg-orange-500 px-2 py-1 rounded' : 'hover:underline px-2 py-1 rounded')}
                        >
                            Contact Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/customerLogIn"
                            className='font-semibold bg-orange-600 px-2 py-1 rounded border border-transparent hover:bg-orange-500 transition duration-300'
                        >
                            Log In
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
};
