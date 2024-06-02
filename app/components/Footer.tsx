import Image from "next/image";
import Link from "next/link";

import facebook from "./icons/facebook.svg";
import twitter from "./icons/twitter.svg";
import instagram from "./icons/instagram.svg";
import copyrightSign from "./icons/copyright-sign.svg";

const Footer = () => {
  const footerLinks = [
    {
      title: "Products",
      links: [
        { name: "Shirts", link: "/Shirts" },
        { name: "mugs", link: "/Mugs" },
        // { name: "Teens", link: "/teens" },
      ],
    },
    // {
    //   title: "Help",
    //   links: [
    //     { name: "About us", link: "/" },
    //     { name: "FAQs", link: "/" },
    //     { name: "How it works", link: "/" },
    //     { name: "Privacy policy", link: "/" },
    //     { name: "Payment policy", link: "/" },
    //   ],
    // },
    {
      title: "Contact Us",
      links: [
        {
          name: "bdn@gmail.com.com",
          link: "mailto:customer@bdn.com",
        },
        { name: "09185031231", link: "tel:+92554862354" },
      ],
    },
  ];

  const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
  ];

  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        {/* First Row ============================================================================================== */}
        <div className="flex flex-col items-start">
          {/* <a href='/'>
            <img
              src={footerLogo}
              alt='logo'
              width={150}
              height={46}
              className='m-0'
            />
          </a> */}

          <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
            BDN eCommerce
          </h4>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Gear up for your next adventure at our sports emporium. Find the
            perfect fit for your journey in-store and reap exclusive rewards
            with every purchase.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                key={icon.alt}
              >
                <Image src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        {/* REST OF THE ROW ============================================================================================== */}
        <div className="flex flex-1 justify-around lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                    key={link.name}
                  >
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM ROW ============================================================================================== */}
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <Image
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
