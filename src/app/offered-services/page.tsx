import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
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
      </section>
    </div>
  );
};

export default page;
