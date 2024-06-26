"use client";

import { Slider, Location } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <Slider />
      <section className="one-col md:p-10 m-10">
        <p className="header">Our Services</p>
        <p className="header__paragraph px-10 mx-10">
          SafeBuild has been rated by the Construction Authority as a Grade A1
          contractor in the Contractors Registry System, and also as a Class 1
          General Builder under the Licensing of Builders.
        </p>

        <div className="four-col">
          <div className="place-items-baseline">
            <Image
              src="/assets/buildOnly.png"
              width={100}
              height={100}
              alt="Build Icon"
            />
            <div className="pt-5">
              <p className="text-center">Build only</p>
            </div>
          </div>
          <div className="place-items-baseline">
            <Image
              src="/assets/construction.png"
              width={100}
              height={100}
              alt="Construction Icon"
            />
            <div className="pt-5">
              <p className="text-center">
                Construction <br />
                Management
              </p>
            </div>
          </div>
          <div className="place-items-baseline">
            <Image
              src="/assets/designBuild.png"
              width={100}
              height={100}
              alt="Design & Build Icon"
            />
            <div className="pt-5">
              <p className="text-center">Design & Build</p>
            </div>
          </div>
          <div className="place-items-baseline">
            <Image
              src="/assets/restore.png"
              width={100}
              height={100}
              alt="Restore Icon"
            />
            <div className="pt-5">
              <p className="text-center">
                Restoration <br /> of Properties <br /> for Conservation
              </p>
            </div>
          </div>
          <div className="place-items-baseline">
            <Image
              src="/assets/infras.png"
              width={100}
              height={100}
              alt="Infrastructure Icon"
            />
            <div className="pt-5">
              <p className="text-center">
                Infrastructure <br /> Development
              </p>
            </div>
          </div>
          <div className="place-items-baseline">
            <Image
              src="/assets/major.png"
              width={100}
              height={100}
              alt="Major upgrade Icon"
            />
            <div className="pt-5">
              <p className="text-center">Major Upgrading</p>
            </div>
          </div>
          <div className="place-items-baseline">
            <Image
              src="/assets/projMngmnt.png"
              width={100}
              height={100}
              alt="Project Management Icon"
            />
            <div className="pt-5">
              <p className="text-center">
                Project <br /> Management
              </p>
            </div>
          </div>
        </div>
        <p className="text-sm">
          <button className="button__outline text-[#D21448] hover:bg-[#f7d7e0] hover:text-[#D21448]">
            <Link href="/offered-services/" onClick={() => setNavbar(!navbar)}>
              Learn More
            </Link>
          </button>
        </p>
      </section>

      <section className="bg-[#F7D7E0] one-col">
        <p className="header">Our Projects</p>

        <div className="p-10 m-10 three-col">
          <div className="place-items-baseline">
            <Image
              src="/assets/institution-1.jpg"
              width={512}
              height={512}
              alt="Institution image"
            />
            <div className="pt-5">
              <p className="text-center">INSTITUTION</p>
            </div>
          </div>
          <div className="place-items-baseline">
            <Image
              src="/assets/infra-1.jpg"
              width={512}
              height={512}
              alt="Infrastructure image"
            />
            <div className="pt-5">
              <p className="text-center">INFRASTRUCTURE</p>
            </div>
          </div>
          <div className="place-items-baseline">
            <Image
              src="/assets/hotel-1.jpg"
              width={512}
              height={512}
              alt="Hotel Image"
            />
            <div className="pt-5">
              <p className="text-center">HOTEL & LEISURE</p>
            </div>
          </div>
          <div className="place-items-baseline">
            <Image
              src="/assets/commercial-1.jpg"
              width={512}
              height={512}
              alt="Commercial image"
            />
            <div className="pt-5">
              <p className="text-center">COMMERCIAL</p>
            </div>
          </div>
          <div className="place-items-baseline">
            <Image
              src="/assets/residential-1.jpg"
              width={512}
              height={512}
              alt="Residential image"
            />
            <div className="pt-5">
              <p className="text-center">RESIDENTIAL</p>
            </div>
          </div>
          <div className="place-items-baseline">
            <Image
              src="/assets/institution-1.jpg"
              width={512}
              height={512}
              alt="Residential"
            />
            <div className="pt-5">
              <p className="text-center">INDUSTRIAL</p>
            </div>
          </div>
        </div>

        <div className="p-10 m-10 two-col">
          <div className="place-items-baseline ">
            <Image
              src="/assets/intl-prop-1.jpg"
              width={1024}
              height={512}
              alt="International Properties"
            />
          </div>
          <div className="pt-5 text-left">
            <p className="">INTERNATIONAL PROPERTIES</p>
            <p>
              We are thrilled to announce that SafeBuild has won a prestigious
              award overseas. This is a testament to the hard work, dedication,
              and expertise of our entire team.
            </p>
            <p className="text-sm pt-10">
              <button className="button__outline text-[#D21448] hover:bg-[#f7d7e0] hover:text-[#D21448]">
                <Link href="/projects/" onClick={() => setNavbar(!navbar)}>
                  Learn More
                </Link>
              </button>
            </p>
          </div>
        </div>
      </section>

      <section className="one-col">
        <p className="header">News and Events</p>
        <div className="two-col p-10 m-10">
          <div>
            <Image
              src="/assets/newsletter-1.jpg"
              width={512}
              height={748}
              alt="Residential image"
            />
          </div>
          <div>
            <p className="text-lg">2023</p>
            <p className="header__paragraph my-5">
              Construction Firm Secures $1 Billion Project Deal for One-Year
              Duration
            </p>
            <p className="my-5">21 January 2023</p>
            <p className="pt-10">
              We are excited to announce that our construction firm has
              successfully closed a project deal worth 1 billion dollars, which
              will run for one year. This is a significant milestone for our
              company, and we are proud to have secured such a substantial
              project. We are committed to delivering excellence in every
              project we undertake, and this project is no exception. Our team
              of experts is already working diligently to ensure that we meet
              the client’s expectations and deliver a world-class construction
              project. The size of this project is a testament to our
              capabilities and expertise in the construction industry. We are
              confident that we have the necessary resources, skills, and
              experience to complete this project on time and within budget.
              This project deal will not only benefit our company but also the
              local community. We will create job opportunities, purchase
              materials and services locally, and contribute to the economic
              growth of the region. We are proud to partner with our clients on
              this project and look forward to a successful collaboration. Our
              team is dedicated to providing exceptional service, and we will
              work closely with the client to ensure that we meet their needs
              and exceed their expectations. In conclusion, we are thrilled to
              have closed this project deal worth 1 billion dollars, and we are
              committed to delivering a successful and world-class construction
              project. We believe that this project will be a significant
              milestone for our company, our partners, and the local community,
              and we look forward to the opportunities it will bring.
            </p>
            <p className="text-sm pt-10  ">
              <Link
                href="/news/"
                className="text-[#D21448] hover:text-gray-500 active:text-[#D21448]"
                onClick={() => setNavbar(!navbar)}
              >
                Read More
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Location />
    </>
  );
}
