import Image from "next/image";
import Link from "next/link";
import React, { Children } from "react";

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="header">
      <Link href="/" className="md: flex-1">
        <div className="flex items-center space-x-1">
          <Image
            src="/assets/icons/logo-icon.svg"
            alt="Logo with name"
            width={36}
            height={30}
            className="hidden md:block"
          />
          <h1 className="hidden md:block font-extrabold text-2xl font-mono ">
            HyperDocs
          </h1>
        </div>

        <Image
          src="/assets/icons/logo-icon.svg"
          alt="Logo"
          width={32}
          height={32}
          className="mr-2 md:hidden"
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
