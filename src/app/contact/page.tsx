import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="slider__medium bg-top bg-cover bg-[url('/assets/proj-hero-img.jpg')]">
        <p className="text-3xl ">Contact Us</p>
      </div>
      <div className="p-10 m-10">
        <div className="two-col flex items-start">
          <div className="flex pt-10">
            <div>
              <Image
                src="/mail-outline.svg"
                width={50}
                height={50}
                alt="Mail icon"
              />
            </div>
            <div className="flex-1 w-96">
              <p className="text-2xl">Newsletter</p>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Subscribe for updates & promotions
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="full-name"
                      id="full-name"
                      autoComplete="given-name"
                      className="block rounded-md border-0 py-1.5 w-96 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block rounded-md border-0 py-1.5 w-96 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-start gap-x-6">
                <p className="text-sm pt-2">
                  <button className="button__outline-sm text-[#D21448]">
                    Submit
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="flex pt-10">
            <div>
              <Image
                src="/mail-outline.svg"
                width={50}
                height={50}
                alt="Mail icon"
              />
            </div>
            <div className="flex-1 w-96">
              <p className="text-2xl">General Enquiries</p>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                We will reply in 1-2 business days.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="full-name"
                      id="full-name"
                      autoComplete="given-name"
                      className="block rounded-md border-0 py-1.5 w-96 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block rounded-md border-0 py-1.5 w-96 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-start gap-x-6">
                <p className="text-sm pt-2">
                  <button className="button__outline-sm text-[#D21448]">
                    Submit
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
