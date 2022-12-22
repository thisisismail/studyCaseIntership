import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import homeBanner from "../public/homeBanner.svg";

export default function Home() {
  const imageAsset = (
    <Image
      // placeholder="blur"
      rel="svg"
      src={homeBanner}
      alt="banner"
      layout="fill"
    ></Image>
  );

  return (
    <div className="">
      <div className="w-full aspect-video rounded-xl border-0 relative flex flex-col gap-8 items-center lg:flex-row">
        <div className="relative h-full w-full border-0">{imageAsset}</div>
        <div style={{ maxWidth: 504 }} className="w-full border-0 flex flex-col gap-2">
          <div className="hidden md:block">
            <Typography
              className="border-0"
              variant="h1"
              color="blue"
              textGradient
            >
              SELAMAT DATANG DI{" "}
              <div className="text-indigo-900">
                UMKM<span className="text-red-600">.ID</span>
              </div>
            </Typography>
          </div>
          <div className="block md:hidden">
            <Typography
              className="border-0"
              variant="h4"
              color="blue"
              textGradient
            >
              SELAMAT DATANG DI{" "}
              <div className="text-indigo-900">
                UMKM<span className="text-red-600">.ID</span>
              </div>
            </Typography>
          </div>
          <div className="text-justify text-sm md:text-base">
            Mari sukseskan program pemerintah dalam Gerakan Ayo UMKM Jualan
            Online sebagai bentuk upaya pemerintah untuk menjalankan peran
            sebagai enabler dan fasilitator membangun pemahaman dan kapasitas
            pelaku UMKM.
          </div>
        </div>
      </div>
    </div>
  );
}
