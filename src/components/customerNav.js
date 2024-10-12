import { Link, NavLink } from "react-router-dom";

export default function CustomerNav() {
    return (
        <>
            <nav className="flex justify-between fixed w-full top-0 left-0 z-50 items-center p-4 border-b border-b-gray-600 bg-orange-400">
                <div className="flex items-center gap-2">
                    <img src="/coc-logo.png" className="w-8 h-9" />
                    <p className="text-lg font-poppins font-bold">
                        Crafts of Ceylon
                    </p>
                </div>
                <ul className="flex gap-7 font-poppins">
                    <li>
                        <NavLink
                            to="/products"
                            className={({ isActive }) => (isActive ? 'bg-orange-500 px-2 py-1 rounded' : 'hover:underline px-2 py-1 rounded')}
                        >
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/customerDashboard"
                            className={({ isActive }) => (isActive ? 'bg-orange-500 px-2 py-1 rounded' : 'hover:underline px-2 py-1 rounded')}
                        >
                            My Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/customerLogIn"
                            className={({ isActive }) => (isActive ? 'bg-orange-500 px-2 py-1 rounded' : 'hover:underline px-2 py-1 rounded')}
                        >
                            Log Out
                        </NavLink>
                    </li>
                    <li>
                        <p>
                            Username
                        </p>
                    </li>
                </ul>
            </nav>
        </>
    )
};
