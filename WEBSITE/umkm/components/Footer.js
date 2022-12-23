import React from "react";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import { RiInformationFill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { useUser } from "../context/user.js";
import { useRouter } from "next/router";
import Logo from "./Logo";
// import Map from './Map';

const Footer = () => {
  const router = useRouter();
  const user = useUser();
  const { uid } = user;
  return (
    <>
      <div
        className={`${
          (uid || router.pathname === "/Login") && "hidden"
        } w-full border-0 flex justify-center py-4 bg-gradient-to-r from-blue-800 to-indigo-900`}
      >
        <Button
          size="lg"
          onClick={() => router.push("/Login")}
          className="rounded-none bg-red-600"
        >
          DAFTAR SEKARANG
        </Button>
      </div>
      <div className="mt-auto w-full bg-black flex flex-col lg:flex-row-reverse items-start justify-between lg:p-8 p-4 gap-8 h-full border-0">
        <div className="flex flex-col md:flex-row gap-8 text-sm md:text-base">
          <div className="flex gap-8 justify-start md:justify-center h-full border-0 flex-row">
            <div className="flex flex-col border-0 border-blue-500 gap-2 text-blue-500 justify-between w-full">
              <div className="text-gray-600 font-semibold flex items-center border-0 gap-2 border-b-0 border-gray-900 md:border-0">
                Tentang
                <span className="">
                  <RiInformationFill />
                </span>
              </div>
              <Link href="/AboutUs" className="">
                <a>Tentang Kami</a>
              </Link>
              <Link href="/AboutUs" className="">
                <a>Deskripsi produk</a>
              </Link>
              <Link href="/AboutUs" className="">
                <a>Kontak</a>
              </Link>
              <Link href="/AboutUs" className="">
                <a>Laporkan bug</a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col border-0 self-stretch border-blue-500 text-blue-500 gap-2">
            <div className="text-gray-600 font-semibold flex items-center gap-2 border-b-0 border-gray-900 md:border-0">
              Lokasi
              <span className="">
                <MdLocationOn />
              </span>
            </div>
            <div
              style={{ minWidth: 300 }}
              className="flex flex-col gap-2 border-0 md:w-min"
            >
              <div className="text-justify text-white border-0">
                Jl. H. R. Rasuna Said No.3-4, RT.6/RW.7, Kuningan, Karet
                Kuningan, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah
                Khusus Ibukota Jakarta 12940
                <span>
                  {" "}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://goo.gl/maps/LajjSSkpSHQ1Teqn9"
                    className="text-blue-500"
                  >
                    (Buka di Google Map)
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <div className="border-0 flex flex-col border-white gap-2 md:items-center w-full md:w-min ">
            <div
              style={{ width: 350 }}
              className="flex flex-row border-0 border-white"
            >
              <Logo />
            </div>
            <div className=" text-white text-justify text-sm md:text-base w-full">
              UMKM.ID adalah platform digital yang memfasilitasi promosi produk
              - produk Usaha Mikro Kecil Menengah (UMKM) di Indonesia sebagai
              bentuk dukungan terhadap program pemerintah: Gerakan Ayo UMKM
              Jualan Online.
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white text-center py-2 text-sm md:text-base">
        Copyright ©2022 thisisismail
      </div>
    </>
  );
};

export default Footer;
