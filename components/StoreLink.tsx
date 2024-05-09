import Image from "next/image";
import Link from "next/link";
import React from "react";

const storeLinks = [
  {
    href: "https://www.apple.com/app-store",
    icon: "/assets/logos/app_store.svg",
    text: "App Store",
    subtext: "Download on the",
  },
  {
    href: "https://play.google.com",
    icon: "/assets/logos/google_play.svg",
    text: "Google Play",
    subtext: "Get it on",
  },
];

interface StoreLinksProps {
  type: BtnTypes;
}

export enum BtnTypes {
  Standard,
  Variant,
}

const StoreLink = ({ type = BtnTypes.Standard }: StoreLinksProps) => {
  if (type === BtnTypes.Standard) {
    return (
      <>
        {storeLinks.map((storeLink) => (
          <Link
            key={storeLink.href}
            href={storeLink.href}
            className="flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-800"
            target="_blank"
          >
            <Image
              src={storeLink.icon}
              alt={storeLink.text}
              width={200}
              height={50}
              className="w-5"
            />
            <div className="flex flex-col">
              <p className="text-xs">{storeLink.subtext}</p>
              <p>{storeLink.text}</p>
            </div>
          </Link>
        ))}
      </>
    );
  }

  if (type === BtnTypes.Variant) {
    return (
      <>
        {storeLinks.map((storeLink) => (
          <Link
            key={storeLink.href}
            href={storeLink.href}
            className="my-4 flex gap-3 rounded-lg border bg-transparent px-2 py-1 text-white hover:bg-zinc-950 active:bg-zinc-800"
            target="_blank"
          >
            <Image
              src={storeLink.icon}
              alt={storeLink.text}
              width={200}
              height={50}
              className="w-5"
            />
            <div className="flex flex-col">
              <p className="text-xs">{storeLink.subtext}</p>
              <p>{storeLink.text}</p>
            </div>
          </Link>
        ))}
      </>
    );
  }
};

export default StoreLink;
