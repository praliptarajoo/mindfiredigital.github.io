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
    <header className='px-6 py-2 flex justify-between md:items-center sticky z-50 top-0 bg-white'>
      <Link href='/'>
        <Image src={mindfireFossLogo} width='140' alt='logo' />
      </Link>
      <div className='flex flex-col gap-2 md:flex-row md:gap-20 items-center'>
        <div>
          <ul className='flex gap-9'>
            {navigations.map((navigation, index) => (
              <li key={index} className='group'>
                {navigation.name === "Projects" ? (
                  <div className='relative header-projects'>
                    <Link
                      href={navigation.path[0]}
                      type='button'
                      className={cn("group-hover:text-mf-red", {
                        "text-mf-red": navigation.path.includes(pathname),
                      })}
                      id='menu-button'
                      aria-expanded='true'
                      aria-haspopup='true'>
                      <span>Projects</span>
                    </Link>
                    <div
                      className='projects-dropdown transition-all invisible absolute py-2 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                      role='menu'
                      aria-orientation='vertical'
                      aria-labelledby='menu-button'>
                      <Link
                        className='block px-4 py-2 hover:bg-mindfire-text-red hover:text-white'
                        href={`${navigation.path[1]}#current-projects`}>
                        Current Projects
                      </Link>
                      <Link
                        className='block px-4 py-2 hover:bg-mindfire-text-red hover:text-white'
                        href={`${navigation.path[2]}#upcoming-projects`}>
                        Upcoming Projects
                      </Link>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={navigation.path[0]}
                    className={cn(
                      "group-hover:text-mf-red flex items-center gap-1 align-middle",
                      {
                        "text-mf-red": navigation.path.includes(pathname),
                      }
                    )}
                    {...(navigation.target
                      ? { target: navigation.target }
                      : {})}>
                    <span>{navigation.name}</span>
                    {navigation.icon && navigation.iconAlt ? (
                      <ExternalRedirectIcon
                        height='1.2em'
                        width='1.2em'
                        className='group-hover:stroke-mf-red -pt-2 inline-block'
                      />
                    ) : null}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <Link
          href='/join-us'
          type='button'
          className='text-white bg-mf-red font-medium text-base rounded-full px-5 py-2 text-center tracking-wide'>
          Join Us!
        </Link>
      </div>
    </header>
  );
};

export default Header;
