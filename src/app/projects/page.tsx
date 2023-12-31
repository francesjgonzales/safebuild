import React from "react";
import Image from "next/image";
import { Article, Location, ProjTabs } from "@/components";

const page = () => {
  return (
    <div>
      <div className="slider__medium bg-top bg-cover bg-[url('/assets/proj-hero-img.jpg')]">
        <p className="text-3xl">Our Projects</p>
      </div>

      <section>
        {/* Project tabs */}
        <ProjTabs />
      </section>

      <section>
        <Article />
      </section>

      <Location />
    </div>
  );
};

export default page;
