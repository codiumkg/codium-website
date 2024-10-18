import Image from "next/image";

import Logo from "@/assets/codium_logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="md:p-4 md:px-6 w-screen h-32 flex fixed backdrop-blur-md z-10">
      <div className="flex flex-row items-center p-10 md:p-0 h-full w-full justify-between md:justify-around">
        <Link href="/#hero">
          <Image
            src={Logo}
            alt="logo"
            objectFit="cover"
            className="mb-2 w-44 md:w-80"
          />
        </Link>
      </div>
    </header>
  );
}
