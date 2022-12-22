import React from "react";
import { useRouter } from "next/router";
import { useUser } from "../../context/user.js";

const withProtected = (Pages) => {
  return (props) => {
    const router = useRouter();
    const user = useUser();

    const { uid } = user;

    if (!uid) {
      console.log("Access denied");
      if (typeof window === "undefined") return null;
      router.replace("/Login");
      render: return <></>;
    } else {
      render: return <Pages {...props} />;
    }
  };
};

export default withProtected;
