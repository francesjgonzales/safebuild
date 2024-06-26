import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      {/* slider */}
      <div className="slider__medium bg-top bg-cover bg-[url('/assets/proj-hero-img.jpg')]">
        <p className="text-3xl ">About Us</p>
      </div>
      <section className="px-10 md:px-40 m-10">
        {/* SafeBuild - Elevating Construction Excellence */}
        <div className="two-col">
          <div>
            <Image
              src="/assets/mainImg.jpg"
              width={1024}
              height={575}
              alt="Building Image"
            />
          </div>
          <div>
            <p className="header__paragraph mb-5 place-content-baseline">
              SafeBuild - Elevating Construction Excellence
            </p>
            <p>
              At SafeBuild, we stand at the forefront of the construction
              industry, delivering unparalleled services that epitomize
              excellence. As a distinguished player in the field, we have
              garnered recognition for our unwavering commitment to quality and
              safety.
            </p>
          </div>
        </div>

        {/* Leading Industry Reputation */}
        <div>
          <div className="py-10 md:py-20">
            <p className="header__paragraph mb-5">
              Leading Industry Reputation
            </p>
            <p>
              SafeBuild proudly holds the esteemed title of a Grade A1
              contractor in the Contractors Registry System, a testament to our
              prowess in managing and executing construction projects with the
              highest standards. Additionally, we have achieved the
              distinguished status of a Class 1 General Builder under the
              Licensing of Builders, reinforcing our position as a trusted and
              capable entity in the construction domain.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F7D7E0] ">
        {/* Comprehensive Services */}
        <div className="one-col px-10 md:px-40 m-10 ">
          <p className="header__paragraph">Comprehensive Services</p>
          <p className="text-xl">
            Our comprehensive suite of services reflects our versatility and
            proficiency in addressing diverse construction needs:
          </p>

          <div className="two-col flex items-start">
            <ul className="list-disc">
              <li className="pt-5">
                <p className="font-bold">Build Only</p>We specialize in bringing
                architectural visions to life, focusing on the physical
                construction aspects to turn plans into reality.
              </li>
              <li className="pt-5">
                <p className="font-bold">Construction Management</p>SafeBuild
                excels in providing end-to-end construction management
                solutions, ensuring seamless project execution from conception
                to completion.
              </li>
              <li className="pt-5">
                <p className="font-bold">Design & Build</p>Our integrated
                approach seamlessly blends design creativity with construction
                expertise, streamlining the entire process for optimal
                efficiency.
              </li>
              <li className="pt-5">
                <p className="font-bold">
                  Restoration of Properties for Conservation
                </p>
                We take pride in preserving the heritage and history embedded in
                structures, contributing to the conservation of architectural
                legacies.
              </li>
            </ul>
            <ul className="list-disc">
              <li className="pt-5">
                <p className="font-bold">Infrastructure Development</p>SafeBuild
                plays a pivotal role in shaping modern infrastructure,
                contributing to the growth and development of communities.
              </li>
              <li className="pt-5">
                <p className="font-bold">Major Upgrading</p>We undertake
                substantial upgrading projects, breathing new life into existing
                structures and enhancing their functionality.
              </li>
              <li className="pt-5">
                <p className="font-bold">Project Management</p>Our adept project
                management ensures timelines are met, resources are optimized,
                and objectives are achieved with precision.
              </li>
            </ul>
          </div>

          <br />
        </div>
      </section>

      <section className="two-col px-10 md:px-40 m-10 gap-4 items-start">
        {/* Commitment to Excellence */}
        <div>
          <p className="header__paragraph mb-10">Commitment to Excellence</p>
          <p>
            At SafeBuild, excellence is not just a goal; it is our standard. We
            approach every project with dedication, leveraging our expertise and
            innovative solutions to deliver outcomes that exceed expectations.
            Safety, quality, and client satisfaction are at the core of
            everything we do.
          </p>
        </div>
        {/* Forward Momentum */}
        <div>
          <p className="header__paragraph mb-10">Forward Momentum</p>
          <p>
            As we stride confidently into the future, SafeBuild remains
            committed to pushing the boundaries of construction excellence. Our
            dynamic team, cutting-edge technology, and a client-centric approach
            position us as leaders in the ever-evolving construction landscape.
            Choose SafeBuild for a construction experience that transcends
            expectations — where safety, quality, and innovation converge to
            build a better tomorrow.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
