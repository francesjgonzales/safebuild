import { Slider } from "@/components";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <Slider />
      <section className="one-col">
        <p className="header">Our Services</p>
        <p className="header__paragraph">
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
          <button className="slider__button text-[#D21448]">Learn More</button>
        </p>
      </section>

      <section className="one-col bg-[#F7D7E0]">
        <p className="header">Our Projects</p>

        <div className="three-col">
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
          <div className="place-items-baseline col-span-2">
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
              <button className="slider__button text-[#D21448]">
                Learn More
              </button>
            </p>
          </div>
        </div>
      </section>

      <section className="one-col">
        <p className="header">News and Events</p>
        <div className="two-col">
          <div>
            <Image
              src="/assets/newsletter-1.jpg"
              width={512}
              height={748}
              alt="Residential image"
            />
          </div>
          <div>
            <p>2023</p>
            <p>
              Construction Firm Secures $1 Billion Project Deal for One-Year
              Duration
            </p>
            <p>21 January 2023</p>
            <p>
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
            <p className="text-sm pt-10">
              <button className="slider__button text-[#D21448]">
                Read More
              </button>
            </p>
          </div>
        </div>
      </section>
      <section className="one-col bg-[rgb(204,204,204)]">
        <div className="two-col">
          <div className="flex">
            <div className="flex-1">
              {" "}
              <Image
                src="/mail-outline.svg"
                width={50}
                height={50}
                alt="Mail icon"
              />
            </div>
            <div className="flex-1 w-500">
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
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
            </div>
          </div>

          <div>
            <p>Locate Us</p>
          </div>
        </div>
      </section>
    </>
  );
}
