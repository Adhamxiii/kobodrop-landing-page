import Image from "next/image";

interface BigCardProps {
  bgColor: string;
  text: string;
  subtext: string;
  image: string;
}

const BigCard = ({ bgColor, text, subtext, image }: BigCardProps) => {
  return (
    <div
      className={`flex flex-col rounded-2xl ${bgColor} px-4 sm:px-0 md:flex-row md:gap-8 xl:w-2/3`}
    >
      <div className="mt-10 flex flex-col justify-center gap-4 text-center sm:mx-10 md:mx-0 md:ml-10 md:w-1/2 md:text-left">
        <h2 className="m-auto text-center text-3xl font-semibold text-gray-800 sm:w-[18ch] md:m-0 md:text-left">
          {text}
        </h2>
        <p className="m-auto text-center text-gray-500 sm:w-[34ch] md:m-0 md:text-left">
          {subtext}
        </p>
      </div>
      <div className="m-auto mt-10 max-w-72 md:mx-10 md:w-1/2 lg:mx-0">
        <Image
          src={image}
          alt=""
          width={500}
          height={500}
          className="m-auto h-full w-72 rounded-2xl sm:w-96"
        />
      </div>
    </div>
  );
};

export default BigCard;
