import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav>
      <div className="container">
        {/* Desktop Menu */}
        <div className="navbar__desktop">
          {/* LOGO */}
          <div>
            <Link href="/">
              <h2>LOGO</h2>
            </Link>
          </div>
          <div>
            <a href="/html/">HTML</a>
          </div>
          <div>
            <a href="/css/">CSS</a>
          </div>
          <div>
            <a href="/js/">JavaScript</a>
          </div>
          <div>
            <a href="/python/">Python</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
