"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const Navbar = () => {
  const [isNotOpen, setNavbarIsOpen] = useState(false);
  return (
    <nav className="p-10 flex justify-between content-start">
      {/* LOGO */}
      <div className="text-right">
        <Link href="/">
          <Image
            src="/assets/safebuild-logo.png"
            width={100}
            height={30}
            alt="safebuild logo"
          />
        </Link>
      </div>

      {/* Hamburg button */}
      <button
        className="focus:border-gray-400 md:hidden text-right content-start"
        onClick={() => setNavbarIsOpen(!isNotOpen)}
      >
        {isNotOpen ? (
          <Image src="/close.svg" width={30} height={30} alt="close" />
        ) : (
          <Image src="/hamburger-md.svg" width={30} height={30} alt="logo" />
        )}
      </button>

      {/* menu menu */}
      <div
        className={`pb-3 mt-8 md:inline-flex gap-12 md:pb-0 md:mt-0 ${
          isNotOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-right flex gap-4 flex-col md:flex-row">
          <Link href="/about/" onClick={() => setNavbarIsOpen(!isNotOpen)}>
            About Us
          </Link>
          <Link
            href="/offered-services/"
            onClick={() => setNavbarIsOpen(!isNotOpen)}
          >
            Services
          </Link>
          <Link href="/projects/" onClick={() => setNavbarIsOpen(!isNotOpen)}>
            Projects
          </Link>
          <Link href="/news/" onClick={() => setNavbarIsOpen(!isNotOpen)}>
            News & Events
          </Link>
          <Link href="/contact/" onClick={() => setNavbarIsOpen(!isNotOpen)}>
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};
