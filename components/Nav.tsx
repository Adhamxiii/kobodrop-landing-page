"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const links = [
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Partners",
    href: "#partners",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
];

const Nav = () => {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto flex h-[15vh] max-w-7xl items-center justify-between px-0">
            <div className="flex ">
              <Link href="/">
                <Image
                  src="/assets/logos/kobodrop_logo.svg"
                  alt="logo"
                  width={200}
                  height={50}
                  className="h-12 cursor-pointer transition-all duration-500 ease-in-out hover:scale-105"
                />
              </Link>
              <div className="ml-4 hidden items-center space-x-4 sm:ml-6 sm:flex lg:ml-8 lg:space-x-8">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-gray-500 hover:text-gray-900 active:text-gray-400"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="https://play.google.com"
              className="hidden rounded-xl bg-gray-800 px-5 py-3 text-white hover:bg-gray-900 active:bg-gray-600 sm:block "
              target="_blank"
            >
              Install Kobodrop
            </Link>
            <DisclosureButton className="rounded-md p-2 text-gray-500 hover:bg-gray-700 hover:text-white sm:hidden">
              {open ? (
                <XMarkIcon className="block size-6" />
              ) : (
                <Bars3Icon className="block size-6" />
              )}
            </DisclosureButton>
          </div>
          <DisclosurePanel className="space-y-1 px-4 sm:hidden">
            {links.map((link) => (
              <DisclosureButton
                as="a"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white"
                href={link.href}
              >
                {link.label}
              </DisclosureButton>
            ))}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Nav;
