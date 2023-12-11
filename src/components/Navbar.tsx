import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav>
      <div className="container">
        {/* Desktop Menu */}
        <div className="navbar__desktop">
          {/* LOGO */}
          <div className="text-left">
            <Link href="/">
              <h2>LOGO</h2>
            </Link>
          </div>
          <div>
            <Link href="/html/">HTML</Link>
          </div>
          <div>
            <Link href="/css/">CSS</Link>
          </div>
          <div>
            <Link href="/js/">JavaScript</Link>
          </div>
          <div>
            <Link href="/python/">Python</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
