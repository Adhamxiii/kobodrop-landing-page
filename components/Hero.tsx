import Image from "next/image";
import Link from "next/link";
import React from "react";
import StoreLink from "./StoreLink";

const Hero = () => {
  return (
    <section className="relative mt-4 flex h-fit flex-col items-center justify-center gap-10 px-8 sm:gap-16 md:my-0 md:h-[85vh] md:flex-row md:gap-0 lg:px-12 xl:m-auto xl:gap-0 xl:overflow-hidden">
      <div className="sm:w-full md:w-3/6">
        <h1 className="mx-auto mb-8 w-[12ch] text-center text-4xl font-semibold text-gray-800 sm:text-5xl md:mx-0 md:text-left">
          Start spending the smart way
        </h1>
        <p className="m-auto w-[34ch] text-center text-gray-500 md:m-0 md:text-left">
          Take Control of Your Finances Anytime, Anywhere with Kobodrop.
          Discover the Smart Way to Use Your Money!
        </p>
        <div className="mt-10 hidden justify-center space-x-2 sm:flex md:justify-normal">
          <StoreLink />
        </div>
      </div>
      <div className="md:w-3/6 xl:mb-12 xl:overflow-hidden">
        <Image
          src="/assets/mockup.svg"
          alt="Kobodrop app frame"
          width={500}
          height={500}
          className="right-0 m-auto w-72 xl:absolute xl:left-6 xl:right-0 xl:mt-32 xl:w-80"
        />
        <Image
          src="/assets/hero.png"
          alt="A woman happily"
          width={500}
          height={500}
          className="hidden rounded-2xl xl:flex"
        />
      </div>
    </section>
  );
};

export default Hero;
