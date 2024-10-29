"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import "@/allStyleFile/navbar.css"

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href={"/"} className="navbar-logo">
          TAHA
        </Link>
        <div className="mobile-menu">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="menu-button"
            >
              <Bars3Icon className="icon" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="menu-button"
            >
              <XMarkIcon className="icon" />
            </button>
          )}
        </div>
        <div className="menu" id="navbar">
          <ul className="menu-list">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
