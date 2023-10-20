"use client";

import { navigations } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import mindfireFossLogo from "../../../public/images/mindfire_foss_logo.png";
import ExternalRedirectIcon from "../shared/icons/ExternalRedirectIcon";
import { usePathname } from "next/navigation";
import { cn } from "@/app/utils";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="px-6 py-2 flex justify-between md:items-center sticky z-50 top-0 bg-white">
      <Link href="/">
        <Image src={mindfireFossLogo} width="140" alt="logo" />
      </Link>
      <div className="flex flex-col gap-2 md:flex-row md:gap-20 items-center">
        <div>
          <ul className="flex gap-9">
            {navigations.map((navigation, index) => (
              <li key={index} className="group">
                <Link
                  href={navigation.path}
                  className={cn(
                    "group-hover:text-mf-red flex items-center gap-1 align-middle",
                    {
                      "text-mf-red": pathname === navigation.path,
                    }
                  )}
                  {...(navigation.target ? { target: navigation.target } : {})}
                >
                  <span>{navigation.name}</span>
                  {navigation.icon && navigation.iconAlt ? (
                    <ExternalRedirectIcon
                      height="1.2em"
                      width="1.2em"
                      className="group-hover:stroke-mf-red -pt-2 inline-block"
                    />
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="/join-us"
          type="button"
          className="text-white bg-mf-red font-medium text-base rounded-full px-5 py-2 text-center tracking-wide"
        >
          Join Us!
        </Link>
      </div>
    </header>
  );
};

export default Header;
