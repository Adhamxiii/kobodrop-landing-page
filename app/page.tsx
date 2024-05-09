import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Reviews from "@/components/Reviews";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Partners />
      <Reviews />
    </>
  );
}
