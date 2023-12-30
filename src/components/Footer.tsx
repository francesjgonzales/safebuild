import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="two-col">
        <p>
          <Image
            src="/assets/safebuild-logo.png"
            width={120}
            height={512}
            alt="logo image"
            className="pb-5"
          />
          Contact Us <br />
          14 Address Road Singapore 159150 <br />
          Tel: (65) 6222 2222 | Fax: (65) 6222 2222 <br />
          <br />
        </p>
        <p>
          General Enquiries <br />
          <a href="mailto:hege@example.com">hege@example.com</a>
        </p>
        <p className="pt-5 text-xs">
          Copyright 2020 Safebuild Pte Ltd. All Rights Reserve
        </p>
      </div>
    </footer>
  );
};
