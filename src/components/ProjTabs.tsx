"use client";
import React from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";

export const ProjTabs = () => {
  return (
    <Tab.Group manual>
      <Tab.List className="four-col bg-white">
        <Tab className="button__outline text-[#D21448] hover:text-[#D21448] hover:bg-[#F7D7E0] active:bg-[#D21448] active:text-white focus:bg-[#F7D7E0]">
          Singapore
        </Tab>
        <Tab className="button__outline text-[#D21448] hover:text-[#D21448] hover:bg-[#F7D7E0] active:bg-[#D21448] active:text-white focus:bg-[#F7D7E0]">
          Malaysia
        </Tab>
        <Tab className="button__outline text-[#D21448] hover:text-[#D21448] hover:bg-[#F7D7E0] active:bg-[#D21448] active:text-white focus:bg-[#F7D7E0]">
          United Kingdom
        </Tab>
        <Tab className="button__outline text-[#D21448] hover:text-[#D21448] hover:bg-[#F7D7E0] active:bg-[#D21448] active:text-white focus:bg-[#F7D7E0]">
          China
        </Tab>
      </Tab.List>
      <Tab.Panels className="bg-[#F2F2F2] py-10">
        <Tab.Panel>
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
        </Tab.Panel>
        <Tab.Panel>
          <p className="header">Malaysia</p>
          <div className="six-col px-20"></div>
          <div className="one-col text-center">Projects coming soon</div>
        </Tab.Panel>
        <Tab.Panel>
          {" "}
          <p className="header">United Kingdom</p>
          <div className="six-col px-20"></div>
          <div className="one-col text-center">Projects coming soon</div>
        </Tab.Panel>
        <Tab.Panel>
          {" "}
          <p className="header">China</p>
          <div className="six-col px-20"></div>
          <div className="one-col text-center">Projects coming soon</div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
