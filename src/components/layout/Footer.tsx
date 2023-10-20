import Image from "next/image";
import Link from "next/link";
import facebook from "../../../public/images/social-media/facebook.png";
import instagram from "../../../public/images/social-media/instagram.png";
import linkedIn from "../../../public/images/social-media/linkedin.png";
import twitter from "../../../public/images/social-media/twitter.png";

const Footer = () => {
  return (
    <footer className="flex flex-col-reverse lg:flex-row gap-4 lg:justify-between items-center px-6 py-5 text-sm">
      <div className="tracking-wider">
        <span>@ 2023 </span>
        <Link href="https://www.mindfiredigitalllp.com/" target="_blank">
          <span className="text-mf-red hover:underline">
            Mindfire Digital LLP
          </span>
        </Link>
        <span>. All Right Reserved</span>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:gap-10">
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/cookie-policy">Cookie Policy</Link>
        <Link href="/terms-of-use">Terms of Use</Link>
      </div>
      <div className="h-[0.2px] bg-mf-light-grey w-full my-4 lg:hidden"></div>
      <div className="flex flex-wrap gap-4">
        <Link href="https://www.facebook.com/MindfireSolutions" target="_blank">
          <Image src={facebook} height={24} width={24} alt="facebook_img" />
        </Link>
        <Link
          href="https://www.instagram.com/mindfiresolutions/"
          target="_blank"
        >
          <Image src={instagram} height={24} width={24} alt="instagram_img" />
        </Link>
        <Link href="https://twitter.com/mindfires" target="_blank">
          <Image src={twitter} height={24} width={24} alt="twitter_img" />
        </Link>
        <Link
          href="https://www.linkedin.com/company/mindfire-solutions/"
          target="_blank"
        >
          <Image src={linkedIn} height={24} width={24} alt="linkedIn_img" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
