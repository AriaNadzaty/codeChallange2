"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { CloseIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className=" my-5">
      <nav className="w-full relative top-0 left-0 right-0 z-10">
        <div className="justify-between px-4  mx-auto max-w-[1440px] lg:max-w-8xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center mx-auto justify-between py-3 md:py-5 md:block px-3 lg:">
              {/* LOGO */}
              <Link href="/">
              <Image
            src="/hololive-production-seeklogo.svg"
            alt="logo"
            width={130}
            height={35} 
          />
              </Link>
              {/* Navbar for mobile  */}
              <div className="md:hidden">

              </div>
            </div>
          </div>
          <div>
            <div
             
            >
              <ul className="md:h-auto gap-12 md:flex lg:flex sm: px-12">
                <li className=" text-xl text-blue-500 py-2 px-6 text-center inline-block md:border-b-0    md:hover hover:font-semibold ">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className=" text-xl text-blue-500 py-2 px-6 text-center  inline-block md:border-b-0    md:hover hover:font-semibold  ">
                  <Link href="/About" onClick={() => setNavbar(!navbar)}>
                    About Us
                  </Link>
                </li>
                <li className=" text-xl text-blue-500 py-2 px-6 text-center  inline-block md:border-b-0    md:hover hover:font-semibold">
                  <Link href="/Services" onClick={() => setNavbar(!navbar)}>
                    Services
                  </Link>
                </li>
                <li className=" text-xl text-blue-500 py-2 px-6 text-center  inline-block md:border-b-0    md:hover hover:font-semibold ">
                  <Link href="/Teams" onClick={() => setNavbar(!navbar)}>
                    Teams
                  </Link>
                </li>
              </ul>
        {/* <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      /> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
