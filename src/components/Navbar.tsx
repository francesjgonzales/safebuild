"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav>
      <div className="">
        {/* Desktop Menu */}
        {/* LOGO */}
        <div className="navbar__desktop text-left">
          <div className="text-left">
            <Link href="/">
              <h2>LOGO</h2>
            </Link>

            {/* Hamburg button */}
            <div className="text-right md:hidden">
              <button
                className="focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image src="/close.svg" width={30} height={30} alt="close" />
                ) : (
                  <Image
                    src="/hamburger-md.svg"
                    width={30}
                    height={30}
                    alt="logo"
                  />
                )}
              </button>
            </div>
          </div>

          <div
            className={`pb-3 mt-8 md:inline-flex gap-12 md:pb-0 md:mt-0 ${
              navbar ? "p-12 md:p-0 block" : "hidden"
            }`}
          >
            <div className="text-right">
              <Link href="/about/" onClick={() => setNavbar(!navbar)}>
                About Us
              </Link>
            </div>
            <div className="text-right">
              <Link
                href="/offered-services/"
                onClick={() => setNavbar(!navbar)}
              >
                Services
              </Link>
            </div>
            <div className="text-right">
              <Link href="/projects/" onClick={() => setNavbar(!navbar)}>
                Projects
              </Link>
            </div>
            <div className="text-right">
              <Link href="/news/" onClick={() => setNavbar(!navbar)}>
                News & Events
              </Link>
            </div>
            <div className="text-right">
              <Link href="/contact/" onClick={() => setNavbar(!navbar)}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
