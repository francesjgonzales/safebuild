import React from "react";
import Image from "next/image";
import { Location } from "@/components";

const page = () => {
  return (
    <div>
      <div className="slider__medium bg-top bg-cover bg-[url('/assets/proj-hero-img.jpg')]">
        <p className="text-3xl">Our Projects</p>
      </div>

      {/* Button tabs */}
      <section className="four-col bg-white">
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
        <div className="three-col">
          <div className="place-items-baseline">
            <Image
              src="/assets/institution.jpg"
              width={518}
              height={417}
              alt="Institution SG Image"
            />
            <div className="pt-5">
              <p className="text-center">Institution</p>
            </div>
          </div>
          <div className="place-items-baseline">
            <Image
              src="/assets/institution-1copy.jpg"
              width={518}
              height={417}
              alt="Civil & Infrastructure SG Image"
            />
            <div className="pt-5">
              <p className="text-center">Civil & Infrastructure</p>
            </div>
          </div>
          <div className="place-items-baseline">
            <Image
              src="/assets/institution-2.jpg"
              width={518}
              height={417}
              alt="Hotel & Leisure SG Image"
            />
            <div className="pt-5">
              <p className="text-center">Hotel & Leisure</p>
            </div>
          </div>
          <div className="place-items-baseline">
            <Image
              src="/assets/commercial.jpg"
              width={518}
              height={417}
              alt="Commercial SG Image"
            />
            <div className="pt-5">
              <p className="text-center">Commercial</p>
            </div>
          </div>
          <div className="place-items-baseline">
            <Image
              src="/assets/residential.jpg"
              width={518}
              height={417}
              alt="Residential SG Image"
            />
            <div className="pt-5">
              <p className="text-center">Residential</p>
            </div>
          </div>
          <div className="place-items-baseline">
            <Image
              src="/assets/commercial-2.jpg"
              width={518}
              height={417}
              alt="Industrial SG Image"
            />
            <div className="pt-5">
              <p className="text-center">Industrial</p>
            </div>
          </div>
        </div>
      </section>

      <Location />
    </div>
  );
};

export default page;
