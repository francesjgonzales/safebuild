import React from "react";
import Image from "next/image";

export const Location = () => {
  return (
    <div>
      <section className="one-col bg-[rgb(204,204,204)]">
        <div className="two-col flex items-start">
          <div className="flex">
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

          <div className="flex">
            <div>
              <Image
                src="/location.svg"
                width={50}
                height={50}
                alt="Location icon"
              />
            </div>
            <div className="flex-1 w-96">
              <p className="text-2xl">Location</p>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                14 Kung Chong Road #08-01 Lum Chang Building Singapore 159150
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3 pb-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8070570349346!2d103.8112565!3d1.2900376000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1a2d46aeeed3%3A0xb71f90076c9830b7!2s14%20Kung%20Chong%20Rd%2C%20Singapore%20159150!5e0!3m2!1sen!2sca!4v1703828476719!5m2!1sen!2sca"
                    width="350"
                    height="250"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
