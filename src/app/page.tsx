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

      <section className="articles">News and Events</section>
      <section className="articles">Contact us and Sign up Newsletter</section>
    </>
  );
}
