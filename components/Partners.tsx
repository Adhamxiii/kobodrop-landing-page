import Image from "next/image";
import React from "react";
import LogoWall from "./LogoWall";

const logosWall = [
  {
    row: 1,
    logos: {
      1: "klarna",
      2: "stripe",
      3: "paypal",
    },
  },
  {
    row: 2,
    logos: {
      1: "bedc",
      2: "mastercard",
      3: "mtn",
    },
  },
  {
    row: 3,
    logos: {
      1: "airtel",
      2: "payoneer",
      3: "visa",
    },
  },
  {
    row: 4,
    logos: {
      1: "mobile",
      2: "ikeja",
      3: "dstv",
    },
  },
];

const Partners = () => {
  return (
    <section id="partners" className="mt-20 flex flex-col bg-gray-50 py-20">
      <article className="mb-10 w-full px-8 text-center lg:px-12">
        <h2 className="mb-4 text-4xl font-semibold text-gray-800">
          Transact seamlessly with...
        </h2>
        <p>
          Connect your other accounts to Kobodrop seamlessly. Kobodrop supports
          200+
          <br />
          integrations with other payment platforms like stripe, paypal,
          payoneer and others
        </p>
      </article>

      <div className=" xl:flex-wrap xl:flex xl:justify-center">
        {logosWall.map((logo) => (
          <LogoWall key={logo.row} logos={logo.logos} />
        ))}
      </div>
    </section>
  );
};

export default Partners;
