import Image from "next/image";
import homeBanner from "../public/homeBanner.svg";

export default function Home() {
  const imageAsset = (
    <Image
      // placeholder="blur"
      rel="svg"
      src={homeBanner}
      alt="banner"
      layout="fill"
      className=""
    ></Image>
  );

  return (
    <div className="">
      <div className="w-full aspect-video rounded-xl border-0 relative">
        {imageAsset}
      </div>
    </div>
  );
}
