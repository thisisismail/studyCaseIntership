import React from "react";
import Image from "next/image";
import { Card, CardBody, Button } from "@material-tailwind/react";
import { BiLike } from "react-icons/bi";

const ProductCard = (props) => {
  const { alt_description, urls, likes, user } = props.data;
  return (
    <>
      <Card
        // style={{ width: 300, height: 400 }}
        className="rounded-none mx-auto border-0 w-44 h-64 md:w-72 md:h-96 duration-500 hover:scale-105 md:hover:scale-110 hover:drop-shadow-2xl"
      >
        <CardBody className="border-0 md:pb-4 flex flex-col p-0">
          <div className="absolute z-20 w-full bg-gray-50 opacity-10 h-8 md:h-14 "></div>
          <div className="truncate text-black absolute z-30 p-2 md:p-4 text-sm md:text-base w-full">
            By: {user.name}
          </div>
          <div className="relative aspect-square">
            <Image
              // blurDataURL={props.blurData}
              // placeholder="blur"
              alt={alt_description}
              src={urls.regular}
              objectFit="cover"
              rel="jpeg"
              layout="fill"
              // className="object-contain"
            />
          </div>
          <div className="px-2 flex flex-col gap-2">
            <div className="truncate font-semibold">{`${
              alt_description ? alt_description : "Unknown"
            }`}</div>
            <div className="flex justify-between border-0">
              <div className="md:hidden block">
                <Button
                  size="sm"
                  className="rounded-none from-cyan-300 to-blue-500"
                >
                  Beli
                </Button>
              </div>
              <div className="hidden md:block">
                <Button
                  size="lg"
                  className="rounded-none from-cyan-300 to-blue-500"
                >
                  Beli
                </Button>
              </div>
              <div className="flex items-center gap-1 border-0 justify-end">
                {likes}
                <BiLike size={20} />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default ProductCard;
