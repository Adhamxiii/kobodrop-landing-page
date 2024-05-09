import Image from "next/image";

interface SmallCardProps {
  bgColor: string;
  bgColorIcon:string;
  image: string;
  text: string;
  subtext: string;
}

const SmallCard = ({ bgColor,bgColorIcon, image, text, subtext }: SmallCardProps) => {
  return (
    <div
      className={`flex flex-col justify-center gap-4 rounded-2xl ${bgColor} p-10 xl:w-1/3`}
    >
      <div className={`w-fit rounded-full ${bgColorIcon} p-2`}>
        <Image src={image} alt="" width={50} height={50} className="size-10" />
      </div>
      <h2 className="text-3xl font-semibold text-gray-800">{text}</h2>
      <p className="text-gray-500">{subtext}</p>
    </div>
  );
};

export default SmallCard;
