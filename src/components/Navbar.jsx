import React, { useState, useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const { setShowSearch, getCartCount } = useContext(ShopContext)

  return (
    <div className="relative z-[50] flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <h1 className="text-2xl">E-Commerce</h1>
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="Search"
        />

        <div className="group relative">
          <Link to="./login">
            <img className="w-5 cursor-pointer" src={assets.profile_icon} alt="Profile" />
          </Link>
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 text-white aspect-square rounded-full text-[8px] bg-black">
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu"
        />
      </div>

      {/* Sidebar Menu for small screens */}
      <div
        className={`fixed inset-0 bg-white transition-transform duration-300 z-[60] ${
          visible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <button
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back" />
            <p>Back</p>
          </button>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">
            HOME
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/collection">
            COLLECTION
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/about">
            ABOUT
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/contact">
            CONTACT
          </NavLink>
        </div>
      </div>

      {/* Overlay */}
      {visible && (
        <div
          onClick={() => setVisible(false)}
          className="fixed inset-0 bg-black opacity-50 z-[55]"
        ></div>
      )}
    </div>
  )
}

export default Navbar
