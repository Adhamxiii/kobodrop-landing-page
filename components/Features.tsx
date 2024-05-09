import BigCard from "./BigCard";
import SmallCard from "./SmallCard";

const Features = () => {
  return (
    <section
      id="features"
      className="flex flex-col gap-10 px-8 pt-10 lg:px-12 xl:m-auto xl:pt-20"
    >
      <article className="m-auto w-[30ch] text-center text-gray-500 md:m-0 md:w-full">
        <h2 className="mb-4 text-4xl font-semibold text-gray-800">
          Make every penny count
        </h2>
        <p>
          Spend smarter, lower your bills, get cashback on everything you buy,
          <br />
          and unlock credit to grow your business.
        </p>
      </article>
      <article className="flex w-full flex-col gap-8 overflow-hidden xl:h-96 xl:flex-row">
        <BigCard
          bgColor="bg-sky-100"
          text="Pay with Kobodrop, quick, simple and easy"
          subtext="Paying your bills on Kobodrop has never been easier. Whether you are paying for electricity or internet, Kobodrop gets it done within seconds."
          image="/assets/app_frame.png"
        />

        <SmallCard
          bgColor="bg-indigo-100"
          bgColorIcon="bg-indigo-200"
          image="/assets/icons/check.png"
          text="Bank level security"
          subtext="Your money is 100% safe and secure on Kobodrop. No hassles, no glitches, get access to your money anytime."
        />
      </article>

      <article className="flex w-full flex-col gap-8 xl:h-96 xl:flex-row">
        <SmallCard
          bgColor="bg-orange-100"
          bgColorIcon="bg-orange-200"
          image="/assets/icons/coins.png"
          text="Cost reduction"
          subtext="Kobodrop reduced payments maintenance and processing fees. No hidden fees."
        />

        <BigCard
          bgColor="bg-sky-100"
          text="Send, receive and Exchange money"
          subtext="Transfers, payments all work on Kobodrop. Get your alert message immediately after a completed transaction."
          image="/assets/frames.png"
        />
      </article>
    </section>
  );
};

export default Features;
