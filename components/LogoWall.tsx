import Image from "next/image";
import React from "react";

interface LogoWallProps {
  1: string;
  2: string;
  3: string;
}

const LogoWall = ({ logos }: { logos: LogoWallProps }) => {
  return (
    <article className="mb-8 flex justify-center gap-8 text-center">
      {Object.values(logos).map((logo) => (
        <Image
          key={logo}
          src={`/assets/logo-wall/${logo}.png`}
          alt={`${logo.toUpperCase()} logo`}
          width={200}
          height={50}
          className="w-20 md:w-36"
        />
      ))}
    </article>
  );
};

export default LogoWall;
