import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "./home/footer";

export default function Layout() {
  return (
    <>
      <div className="flex flex-col">
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
                className='hover:bg-orange-500 p-1 rounded border border-transparent hover:border-gray-600 transition duration-300'
              >
                Be a Seller!
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'bg-orange-500 p-1 rounded' : 'hover:underline p-1 rounded')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'bg-orange-500 p-1 rounded' : 'hover:underline p-1 rounded')}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'bg-orange-500 p-1 rounded' : 'hover:underline p-1 rounded')}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>

        <Outlet />

        <Footer />
      </div >
    </>
  )
};
