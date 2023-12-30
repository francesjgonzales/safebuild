import React from "react";

const page = () => {
  return (
    <div>
      <div className="slider__medium bg-top bg-cover bg-[url('/assets/proj-hero-img.jpg')]">
        <p className="text-3xl">Our Projects</p>
      </div>

      {/* Button tabs */}
      <section className="four-col py-5">
        <button className="button__outline text-[#D21448] hover:text-[#D21448] hover:bg-[#F7D7E0]">
          Singapore
        </button>
        <button className="button__outline text-[#D21448] hover:text-[#D21448] hover:bg-[#F7D7E0]">
          Malaysia
        </button>
        <button className="button__outline text-[#D21448] hover:text-[#D21448] hover:bg-[#F7D7E0]">
          United Kingdom
        </button>
        <button className="button__outline text-[#D21448] hover:text-[#D21448] hover:bg-[#F7D7E0]">
          China
        </button>
      </section>

      <section className="bg-[#F2F2F2] py-10">
        <p className="header">Singapore</p>
        <div className="six-col px-20">
          <button className="button__outline-sm text-[#D21448] hover:text-[#D21448] hover:bg-[#F7D7E0]">
            Institution
          </button>
          <button className="button__outline-sm text-[#D21448] hover:text-[#D21448] hover:bg-[#F7D7E0]">
            Civil & Infrastructure
          </button>
          <button className="button__outline-sm text-[#D21448] hover:text-[#D21448] hover:bg-[#F7D7E0]">
            Hotel & Leisure
          </button>
          <button className="button__outline-sm text-[#D21448] hover:text-[#D21448] hover:bg-[#F7D7E0]">
            Commercial
          </button>
          <button className="button__outline-sm text-[#D21448] hover:text-[#D21448] hover:bg-[#F7D7E0]">
            Residential
          </button>
          <button className="button__outline-sm text-[#D21448] hover:text-[#D21448] hover:bg-[#F7D7E0]">
            Industrial
          </button>
        </div>
      </section>
    </div>
  );
};

export default page;
