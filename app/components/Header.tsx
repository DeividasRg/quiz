"use client";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { useState } from "react";
import Back from "@/public/Back.svg";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const pathName = usePathname();
  const routeNumber = parseInt(pathName.slice(1)) || 0;

  if (pathName === "/") {
    return (
      <header className="w-full flex justify-center mb-8">
        <Logo />
      </header>
    );
  }

  return (
    <header className="w-full flex justify-between mb-8">
      <Link href="/">
        <Image src={Back} alt="Arrow pointing left" />
      </Link>
      <Logo />
      <div>pages</div>
    </header>
  );
}

export default Header;
