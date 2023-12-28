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

        <div className="grid grid-cols-4 gap-4 place-items-center pt-10">
          <div>
            <Image
              src="/assets/buildOnly.png"
              width={100}
              height={80}
              alt="Build Icon"
            />
            <p>Build Only</p>
          </div>
          <div>col 2</div>
          <div>col 3</div>
          <div>col 4</div>
        </div>
      </section>
      <section className="articles">Projects</section>
      <section className="articles">News and Events</section>
      <section className="articles">Contact us and Sign up Newsletter</section>
    </>
  );
}
