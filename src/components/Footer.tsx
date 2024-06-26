import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-10 p-10">
        <div>
          <Image
            src="/assets/safebuild-logo.png"
            width={120}
            height={512}
            alt="logo image"
            className="pb-5"
          />
          <p className="text-xs">
            Copyright 2020 Safebuild Pte Ltd. All Rights Reserve
          </p>
        </div>

        <div>
          Contact Us <br />
          14 Address Road Singapore 159150 <br />
          Tel: (65) 6222 2222 <br />
          Fax: (65) 6222 2222 <br />
          <br />
          General Enquiries <br />
          <a href="mailto:hege@example.com">hege@example.com</a>
        </div>
      </div>
    </footer>
  );
};
