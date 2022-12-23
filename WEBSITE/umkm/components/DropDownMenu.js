import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { MdLogout, MdAccountCircle, MdMenu } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";
import { useUser } from "../context/user.js";
import { signOut } from "../services/firebase/utilsFirebase.js";
import { navLinks } from "../services/data/data.js";

const DropDownMenu = () => {
  const [blink, setBlink] = React.useState("");

  const router = useRouter();

  const user = useUser();
  const { uid, displayName } = user;

  React.useEffect(() => {
    setBlink("animate-pulse");
    setTimeout(() => {
      setBlink("");
    }, 4000);
  }, [uid]);

  const linkStyle = "font-sans font-semibold";

  const menu = navLinks.map((item, index) => {
    if (item.name === "Masuk" && uid) {
      return null;
    }

    return (
      <MenuItem key={index} href={item.path}>
        <Link href={item.path} className="block w-ful">
          <a
            href={item.path}
            className={`${linkStyle} ${
              router.pathname === item.path ? "text-indigo-900" : "text-white"
            } block w-full`}
          >
            {item.name}
          </a>
        </Link>
      </MenuItem>
    );
  });

  return (
    <Menu
      placement="bottom-end"
      animate={{
        mount: { y: 0 },
        unmount: { y: -50 },
      }}
    >
      <MenuHandler>
        <Button variant="text" className="border-0 h-14 p-0">
          <MdMenu
            size={40}
            className={`${uid ? "text-indigo-900" : "text-white"} ${blink}`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="bg-gradient-to-r from-cyan-300 md:to-blue-600 to-blue-500 lg:hidden border-0 -mt-2 rounded-none w-full drop-shadow-xl relative z-40">
        {menu}
        <Menu
          placement="bottom-end"
          animate={{
            mount: { y: 0 },
            unmount: { y: -10 },
          }}
        >
          <MenuHandler className={`${!uid && "hidden"} mb-2`}>
            <MenuItem className={`flex flex-row items-start`}>
              <div className={`${linkStyle} text-white`}>{displayName}</div>
              <MdAccountCircle
                size="30"
                color="white"
                className="absolute -mt-6 right-4"
              />
            </MenuItem>
          </MenuHandler>
          <MenuList className="lg:hidden bg-gradient-to-r from-cyan-300 md:to-blue-600 to-blue-500 border-0 rounded-none  drop-shadow-xl relative z-40 w-full">
            <MenuItem className="lg:hidden">
              <Button
                className="flex w-full flex-row justify-center items-center gap-2"
                color="red"
                onClick={() => signOut()}
              >
                <MdLogout size={24} className="" />
                Keluar
              </Button>
            </MenuItem>
          </MenuList>
        </Menu>
      </MenuList>
    </Menu>
  );
};

export default DropDownMenu;
