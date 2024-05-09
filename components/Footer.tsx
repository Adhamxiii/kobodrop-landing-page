import Image from "next/image";
import Link from "next/link";
import React from "react";
import StoreLink, { BtnTypes } from "./StoreLink";

const footerLinks = [
  {
    title: "Products",
    links: [
      { text: "Overview", link: "/" },
      { text: "Features", link: "/" },
      { text: "Solutions", link: "/" },
      { text: "Contact", link: "/" },
      { text: "Releases", link: "/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "Blog", link: "/" },
      { text: "Newsletter", link: "/" },
      { text: "Events", link: "/" },
      { text: "Help Centre", link: "/" },
      { text: "Support", link: "/" },
    ],
  },
];

const socialLinks = [
  {
    href: "https://www.facebook.com",
    icon: "/assets/logos/icons8-facebook.svg",
    alt: "Facebook logo",
  },
  {
    href: "https://www.twitter.com",
    icon: "/assets/logos/icons8-twitterx.svg",
    alt: "Twitter logo",
  },
  {
    href: "https://www.linkedin.com",
    icon: "/assets/logos/icons8-linkedin.svg",
    alt: "Linkedin logo",
  },
];

const Footer = () => {
  return (
    <section className="bg-gray-800">
      <div className="flex flex-col px-8 py-12 text-gray-300 lg:px-12 xl:m-auto">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:gap-0">
          <div>
            <Image
              src="/assets/logos/kobodrop_logo_bright.png"
              alt="Light version of Kobodrop logo"
              width={500}
              height={500}
              className="mb-4 w-36"
            />
            <p>Start spending the smart way</p>
          </div>
          <div className="flex gap-10">
            {footerLinks.map((linkGroup) => (
              <div key={linkGroup.title} className="flex flex-col gap-2">
                <p className="text-gray-400">{linkGroup.title}</p>
                {linkGroup.links.map((linkItem) => (
                  <Link key={linkItem.text} href={linkItem.link}>
                    {linkItem.text}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="w-fit">
            <h2>Get the app</h2>

            <div className="flex flex-col gap-2 mt-4 md:flex-row">
              <StoreLink type={BtnTypes.Variant} />
            </div>
          </div>
        </div>
        <div className="mt-14 flex justify-between border-t-2 border-t-gray-700 pt-10">
          <p className="w-[16ch] text-gray-400 md:w-full">
            &copy; 2024 Kobodrop. All rights reserved.
          </p>
          <div className="flex gap-6">
            {socialLinks.map((socialLink) => (
              <Link key={socialLink.href} href={socialLink.href}>
                <Image
                  src={socialLink.icon}
                  alt={socialLink.alt}
                  width={200}
                  height={50}
                  className="size-10"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
