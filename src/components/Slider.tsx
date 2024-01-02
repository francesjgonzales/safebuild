"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

export const Slider = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="slider bg-top bg-cover bg-[url('/assets/hero-img.jpg')]">
      <p className="text-3xl pt-5">
        SafeBuild offers comprehensive services within the construction industry
        and is recognized as one of the leading companies in the field.
      </p>
      <p className="text-sm pb-6">
        <button className="button__outline hover:bg-white hover:text-[#D21448]">
          <Link href="/about/" onClick={() => setNavbar(!navbar)}>
            Learn More
          </Link>
        </button>
      </p>
    </div>
  );
};
