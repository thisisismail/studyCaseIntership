import { Card, CardBody } from "@material-tailwind/react";
import React from "react";

const ProductCard = () => {
  return (
    <>
      <Card className="rounded-none mx-auto border-0 w-full">
        <CardBody className="border-0 px-4 flex flex-col gap-2">
          Product
        </CardBody>
      </Card>
    </>
  );
};

export default ProductCard;
