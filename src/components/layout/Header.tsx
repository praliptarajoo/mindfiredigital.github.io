import { navigations } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import mindfireFossLogo from "../../../public/images/mindfire_foss_logo.png";

const Header = () => {
  return (
    <header className="px-6 py-2 flex justify-between md:items-center sticky z-50 top-0 bg-white">
      <Link href="/">
        <Image src={mindfireFossLogo} width="140" alt="logo" />
      </Link>
      <div className="flex flex-col gap-2 md:flex-row md:gap-20 items-center">
        <div>
          <ul className="flex gap-9">
            {navigations.map((navigation, index) => (
              <li key={index}>
                <Link
                  href={navigation.path}
                  className="hover:text-mf-light-grey flex items-center gap-2"
                  {...(navigation.target ? { target: navigation.target } : {})}
                >
                  <span>{navigation.name}</span>
                  {navigation.icon && navigation.iconAlt ? (
                    <Image
                      src={navigation.icon}
                      height={14}
                      width={14}
                      alt={navigation.iconAlt}
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
