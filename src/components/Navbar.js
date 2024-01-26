// Navbar.js
"use client"; // for nextjs 13.4 users
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-blue-300  sm:px-8 px-4 py-2 z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <Link to="/" className="text-gray-800 text-3xl font-bold">
            Logo
          </Link>
          <ul className="text-gray-900 hover:scale-105 duration-500  font-bold font-sans flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            <li>
              <Link
                to="/"
                className="hover:scale-105 duration-500 hover:text-gray-700 hover:scale-105 duration-500 hover:text-gray-700  font-montserrat leading-normal text-lg text-slate-gray"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Diet"
                className="hover:scale-105 duration-500 hover:text-gray-700  font-montserrat leading-normal text-lg text-slate-gray"
              >
                Diet
              </Link>
            </li>
            <li>
              <Link
                to="Posture"
                className="hover:scale-105 duration-500 hover:text-gray-700  font-montserrat leading-normal text-lg text-slate-gray"
              >
                Posture
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="hover:scale-105 duration-500 hover:text-gray-700  font-montserrat leading-normal text-lg text-slate-gray"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="font-serif flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
            <Link to="/signin">Sign in</Link>
            <span>/</span>
            <Link to="/signup">Sign Up</Link>
          </div>
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <RxHamburgerMenu className="text-4xl" />
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div>
          <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100  ">
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <MdClose className="text-4xl" />
            </div>
            <ul className="text-blue-800  font-bold font-sans lg:hidden flex flex-col items-center justify-center h-full ">
              <li>
                <Link
                  to="/"
                  className="hover:scale-105 duration-500 hover:text-gray-700  font-montserrat leading-normal text-lg text-slate-gray"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Diet"
                  className="hover:scale-105 duration-500 hover:text-gray-700  font-montserrat leading-normal text-lg text-slate-gray"
                >
                  Diet
                </Link>
              </li>
              <li>
                <Link
                  to="/Posture"
                  className="hover:scale-105 duration-500 hover:text-gray-700  font-montserrat leading-normal text-lg text-slate-gray"
                >
                  Posture
                </Link>
              </li>
              <li>
                <Link
                  to="/Contact"
                  className="hover:scale-105 duration-500 hover:text-gray-700  font-montserrat leading-normal text-lg text-slate-gray"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
export default Navbar;
