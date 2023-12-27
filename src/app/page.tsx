import { Slider } from "@/components";

export default async function Home() {
  return (
    <main>
      <Slider />
      <section className="articles">
        Services
        <p>
          SafeBuild has been rated by the Construction Authority as a Grade A1
          contractor in the Contractors Registry System, and also as a Class 1
          General Builder under the Licensing of Builders.
        </p>
      </section>
      <section className="articles">Projects</section>
      <section className="articles">News and Events</section>
      <section className="articles">Contact us and Sign up Newsletter</section>
    </main>
  );
}
